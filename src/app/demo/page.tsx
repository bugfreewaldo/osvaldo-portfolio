"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function DemoPage() {
  const [q, setQ] = useState("");
  const [a, setA] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErr(null);
    setA("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ q }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body?.error || `Request failed (${res.status})`);
      }

      const body = (await res.json()) as { answer: string };
      setA(body.answer);
      setStatus("ok");
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Demo</h1>
      <p className="text-slate-600 mt-2">
        Try a safe, rate-limited endpoint. This version does <em>not</em> call external AI yet.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Your question</span>
          <textarea
            className="mt-1 w-full rounded-xl ring-1 ring-slate-300 px-3 py-2"
            rows={4}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask something…"
            required
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending" || !q.trim()}
          className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 disabled:opacity-60
                     dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          {status === "sending" ? "Thinking…" : "Ask"}
        </button>

        {err && <p className="text-sm text-red-600">{err}</p>}
      </form>

      {/* Answer box */}
      {a && (
        <div className="mt-6 p-4 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-white/60 dark:bg-slate-900/40">
          <div className="text-sm text-slate-500">Answer</div>
          <div className="mt-1 whitespace-pre-wrap">{a}</div>
        </div>
      )}

      <p className="text-xs text-slate-500 mt-6">
        Next steps: add server route with rate-limit → hCaptcha → model call (env vars).
      </p>
    </main>
  );
}
