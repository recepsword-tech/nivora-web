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
            width: 20,
            height: 22,
            display: "flex",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", left: 1, top: 0, width: 4, height: 22, background: "#1F2328" }} />
          <div style={{ position: "absolute", right: 1, top: 0, width: 4, height: 22, background: "#1F2328" }} />
          <div style={{ position: "absolute", left: 8, top: -1, width: 4, height: 24, background: "#1F2328", transform: "rotate(-37deg)" }} />
        </div>
      </div>
    ),
    size,
  );
}
