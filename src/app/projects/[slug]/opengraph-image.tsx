/* Social card for each project page, e.g.
/projects/mila-neonatal-llm/opengraph-image */
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

const TITLES: Record<string, { title: string; subtitle?: string }> = {
  "mila-neonatal-llm": {
    title: "MILA — Neonatal LLM Assistant",
    subtitle: "RAG • Policy citations • Sub-second p95",
  },
  "ai-voice-agent": {
    title: "AI Voice Agent (Shining Image)",
    subtitle: "Twilio SIP • Streaming ASR/TTS • 68% containment",
  },
  "stripe-qb-reconcile": {
    title: "Stripe → QuickBooks Reconcile",
    subtitle: "1 expense / payout • 68% faster close",
  },
};

export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const meta = TITLES[params.slug] ?? {
    title: params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    subtitle: "osvaldorestrepo.dev",
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0b1220 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1,
            maxWidth: 980,
          }}
        >
          {meta.title}
        </div>
        {meta.subtitle && (
          <div
            style={{
              marginTop: 16,
              fontSize: 28,
              opacity: 0.9,
            }}
          >
            {meta.subtitle}
          </div>
        )}

        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 64,
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          osvaldorestrepo.dev
        </div>
      </div>
    ),
    size
  );
}
