import { ImageResponse } from "next/og";
import { contact } from "@/config/contact";

// Rendered once at build time into a static PNG used for link previews (WhatsApp, Facebook, X, LinkedIn).
export const dynamic = "force-static";
export const alt = `${contact.firmName}, ${contact.tagline}, Delhi`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#17130F",
          color: "#F7F3EC",
        }}
      >
        <div style={{ width: 96, height: 6, background: "#AB7A2B", borderRadius: 3, marginBottom: 40 }} />
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -1 }}>{contact.firmName}</div>
        <div style={{ fontSize: 40, color: "#D9C6A3", marginTop: 16 }}>{contact.tagline}</div>
        <div style={{ fontSize: 30, color: "#B8AFA3", marginTop: 12 }}>
          Supreme Court · Delhi High Court · District Courts
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 36, fontWeight: 700 }}>
          <div style={{ background: "#AB7A2B", color: "#17130F", padding: "14px 30px", borderRadius: 999 }}>
            {`Call / WhatsApp ${contact.phoneDisplay}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
