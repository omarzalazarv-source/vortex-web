import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Vortex Dynamics · Consultoría Microsoft, Business Central y CRM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "app/icon.png"));
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#091622", color: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}><img src={`data:image/png;base64,${logo.toString("base64")}`} width={80} height={80} alt="" /><div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 30 }}>VORTEX DYNAMICS</span><span style={{ fontSize: 16, color: "#aabdc8", marginTop: 8, letterSpacing: 4 }}>IT CONSULTING</span></div></div>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}><span style={{ fontSize: 58 }}>Consultoría Microsoft.</span><span style={{ fontSize: 58, color: "#5ee9d8" }}>Tu empresa, conectada.</span></div>
    <div style={{ display: "flex", flexDirection: "column", fontSize: 22, color: "#c3d4dc", gap: 16 }}><span>Business Central · Dynamics 365 CRM · Power Platform</span><span style={{ color: "#5ee9d8" }}>vortexdynamics.es</span></div>
  </div>, size);
}
