import { ImageResponse } from "next/og";

export const alt = "Rylkon — Programmatic SEO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#000000",
          color: "#f0f3f8",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "3px solid rgba(92,210,255,0.55)",
            boxShadow: "0 0 80px rgba(92,210,255,0.35)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -180,
            bottom: -200,
            width: 560,
            height: 560,
            borderRadius: 9999,
            border: "3px solid rgba(92,210,255,0.35)",
            boxShadow: "0 0 90px rgba(92,210,255,0.25)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 9999,
              border: "2px solid #5CD2FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 24px rgba(255,77,141,0.35)",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 9999,
                background: "#FFF0C8",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "lowercase",
            }}
          >
            rylkon
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 650,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Programmatic SEO that earns every URL.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(240,243,248,0.62)",
              maxWidth: 760,
              lineHeight: 1.35,
            }}
          >
            Templates, structured data, and indexing discipline for organic
            growth that compounds.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#5CD2FF",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          <span>[ Search Growth ]</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
