import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1F2328",
          padding: 24,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#B08D57",
          }}
        >
          <div
            style={{
              width: 78,
              height: 94,
              display: "flex",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", left: 3, top: 0, width: 17, height: 94, background: "#1F2328" }} />
            <div style={{ position: "absolute", right: 3, top: 0, width: 17, height: 94, background: "#1F2328" }} />
            <div style={{ position: "absolute", left: 31, top: -5, width: 17, height: 104, background: "#1F2328", transform: "rotate(-37deg)" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
