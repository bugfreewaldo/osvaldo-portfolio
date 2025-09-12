/* Generates the social card for your home page */
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function OgImage() {
  const title = "Osvaldo Restrepo — AI Engineer";
  const subtitle = "LLMs • RAG • Agents • Voice • Automation";

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
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          {subtitle}
        </div>

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
