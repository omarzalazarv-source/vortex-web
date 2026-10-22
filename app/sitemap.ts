import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/servicios", "/business-central", "/crm", "/noticias", "/microsoft-365", "/power-platform", "/power-bi-fabric", "/copilot-inteligencia-artificial", "/azure-seguridad"].map((path) => ({ url: `https://www.vortexdynamics.es${path}` }));
}
