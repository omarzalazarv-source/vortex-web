import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/business-central", "/crm", "/noticias"].map((path) => ({ url: `https://www.vortexdynamics.es${path}` }));
}
