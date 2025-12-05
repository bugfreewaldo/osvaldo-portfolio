import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Brain/neural network icon */}
          <circle cx="12" cy="12" r="3" fill="white" />
          <circle cx="4" cy="6" r="2" />
          <circle cx="20" cy="6" r="2" />
          <circle cx="4" cy="18" r="2" />
          <circle cx="20" cy="18" r="2" />
          <line x1="9.5" y1="10" x2="5.5" y2="7" />
          <line x1="14.5" y1="10" x2="18.5" y2="7" />
          <line x1="9.5" y1="14" x2="5.5" y2="17" />
          <line x1="14.5" y1="14" x2="18.5" y2="17" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
