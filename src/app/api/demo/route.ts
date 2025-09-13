// Simple JSON API for /demo page (no external keys).
// Adds a tiny per-IP rate limit to be safe for previews.

import { NextRequest } from "next/server";

export const runtime = "nodejs"; // use Node runtime for simple in-memory store

const RL_LIMIT = 5; // max requests per window per IP
const RL_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const bucket = new Map<string, { count: number; reset: number }>();

function getIP(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  // fallback
  return req.headers.get("x-real-ip") ?? "anon";
}

export async function POST(req: NextRequest) {
  const ip = getIP(req);
  const now = Date.now();
  let entry = bucket.get(ip) ?? { count: 0, reset: now + RL_WINDOW_MS };

  // reset window if expired
  if (now > entry.reset) {
    entry = { count: 0, reset: now + RL_WINDOW_MS };
  }

  entry.count += 1;
  bucket.set(ip, entry);

  if (entry.count > RL_LIMIT) {
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit-Limit": String(RL_LIMIT),
          "X-RateLimit-Remaining": String(Math.max(0, RL_LIMIT - entry.count)),
          "X-RateLimit-Reset": String(entry.reset),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const q =
    body && typeof (body as any).q === "string"
      ? ((body as any).q as string).trim()
      : "";

  if (!q) {
    return new Response(JSON.stringify({ error: "Missing 'q' field." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const snippet = q.length > 140 ? q.slice(0, 140) + "…" : q;

  const answer =
    `Demo response: I received your question — “${snippet}”.\n\n` +
    `In the live version, this endpoint would call a model with guardrails, ` +
    `RAG (if enabled), and logging (latency, cost).`;

  return new Response(JSON.stringify({ answer }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
