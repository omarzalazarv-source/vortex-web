import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noticias y prensa | Vortex Dynamics IT Consulting",
  description: "Noticias de Vortex Dynamics: nuestra consultoría de Microsoft Dynamics 365 Business Central en El Diario de Andalucía.",
  alternates: { canonical: "https://vortexdynamics.es/noticias" },
  openGraph: {
    title: "Noticias y prensa | Vortex Dynamics",
    description: "Vortex Dynamics en los medios: consultoría e implantación de Business Central para la digitalización empresarial.",
    url: "https://vortexdynamics.es/noticias",
    type: "website",
    locale: "es_ES",
  },
};

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Ruta de navegación" className="mb-10 text-sm text-slate-600">
          <Link href="/" className="font-medium text-teal-700 hover:underline">Vortex Dynamics</Link>
          <span aria-hidden="true"> / </span><span>Noticias</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Noticias y medios</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Actualidad de Vortex Dynamics</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">Publicaciones sobre nuestra consultoría tecnológica y la transformación digital de las empresas con soluciones Microsoft.</p>
        <article className="mt-10 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm md:p-10">
          <p className="text-sm font-medium text-teal-700">El Diario de Andalucía · <time dateTime="2026-07-22">22 de julio de 2026</time></p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">Vortex Dynamics y la gestión empresarial con Business Central</h2>
          <p className="mt-5 leading-8 text-slate-600">El Diario de Andalucía dedica una publicación a Vortex Dynamics IT Consulting y a su enfoque para digitalizar la gestión empresarial. El artículo describe cómo una implantación de Microsoft Dynamics 365 Business Central puede conectar las áreas de finanzas, compras, ventas, almacén y operaciones.</p>
          <p className="mt-4 leading-8 text-slate-600">La publicación destaca el análisis previo de los procesos, la adaptación de la solución a cada organización y una implantación por fases. También aborda las integraciones con Microsoft 365 y Power BI, junto con la formación y el soporte que acompañan a los equipos tras el arranque.</p>
          <a href="https://eldiariodeandalucia.com/vortex-dynamics-it-consulting/" className="mt-6 inline-flex rounded-2xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">Leer el artículo completo en El Diario de Andalucía</a>
        </article>
        <aside className="mt-10 rounded-3xl bg-slate-950 p-7 text-white md:p-10">
          <h2 className="text-2xl font-semibold">Conoce nuestras soluciones ERP y CRM</h2>
          <p className="mt-4 leading-8 text-slate-300">Descubre los servicios de Vortex Dynamics y cuéntanos qué procesos necesitas mejorar en tu empresa.</p>
          <div className="mt-6 flex flex-wrap gap-6 font-semibold text-cyan-300">
            <Link href="/#business-central" className="hover:underline">Business Central</Link>
            <Link href="/#crm" className="hover:underline">Dynamics 365 CRM</Link>
            <Link href="/#contacto" className="hover:underline">Solicitar diagnóstico</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
