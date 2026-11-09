import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import ContactForm from "../components/ContactForm";
import StructuredData from "../components/StructuredData";

const title = "Vortex Payroll y Vortex Projects | Soluciones Vortex";
const description = "Descubre Vortex Payroll, nóminas en desarrollo para Business Central, y Vortex Projects, gestión económica y operativa de proyectos de servicios.";
const url = "https://www.vortexdynamics.es/soluciones-vortex";
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "es_ES", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vortex Dynamics · Soluciones propias" }] },
};

const products = [
  {
    id: "payroll", name: "Vortex Payroll", mark: "VP", category: "PERSONAS Y NÓMINAS",
    status: "En desarrollo", headline: "Acerca la nómina al corazón de tu empresa.",
    intro: "Una extensión en desarrollo para gestionar nóminas de España sobre Microsoft Dynamics 365 Business Central. El objetivo: reunir la información salarial y preparar una operativa conectada con la gestión de la empresa.",
    audience: "Para empresas que quieren conectar la administración de personal y la gestión salarial con su ERP.",
    capabilities: [
      ["Información salarial organizada", "Estructurar los datos necesarios para preparar y revisar la nómina dentro del entorno de Business Central."],
      ["Conceptos y deducciones", "Trabajar con conceptos salariales, complementos, devengos y deducciones dentro del alcance previsto del módulo."],
      ["Preparación y revisión", "Desarrollar un circuito de cálculo y revisión con trazabilidad antes de autorizar resultados."],
      ["Recibo salarial", "Preparar la presentación de devengos, deducciones y aportaciones, con documentos de trabajo para su revisión."],
    ],
    note: "Vortex Payroll está en desarrollo. La disponibilidad comercial y el alcance definitivo se confirmarán tras completar la validación funcional, fiscal y de Seguridad Social. Los documentos demostrativos actuales son borradores sin validez para pago.",
    cta: "Quiero información sobre Payroll",
  },
  {
    id: "projects", name: "Vortex Projects", mark: "VX", category: "PROYECTOS Y OPERACIONES",
    status: "Consulta disponibilidad", headline: "Conecta el proyecto con su realidad económica.",
    intro: "Una solución sobre Microsoft Dynamics 365 Business Central para especializar la gestión económica y operativa de proyectos de servicios: desde la oferta y las horas dedicadas hasta el seguimiento de costes y avance.",
    audience: "Para consultoras, ingenierías y empresas de servicios que trabajan por horas, por hitos o combinando ambos modelos.",
    capabilities: [
      ["De la oferta al proyecto", "Organizar ofertas, proyectos, tareas y estados de seguimiento dentro de una misma operativa."],
      ["Horas, costes y tarifas", "Relacionar los partes de trabajo con los costes y las tarifas del proyecto, con controles de registro."],
      ["Producción y avance mensual", "Preparar el seguimiento económico y la revisión mensual, definiendo su relación con la facturación y la contabilidad."],
      ["Projects + People", "Ampliar el alcance con calendarios, jornadas y gestión operativa de personas, según las necesidades del equipo."],
    ],
    note: "La configuración, los procesos incluidos y la disponibilidad se concretan en cada propuesta. Las mejoras de paneles, planificación visual y alertas se revisan por separado; su presentación no implica que estén incluidas o listas para cualquier implantación.",
    cta: "Quiero información sobre Projects",
  },
];

export default function SolucionesVortexPage() {
  return <div className="min-h-screen bg-white text-slate-950">
    <SiteHeader contactHref="#contacto" />
    <main id="contenido">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: title, description, url, publisher: { "@id": "https://www.vortexdynamics.es/#organization" } }} />
      <section className="bg-[#091622] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-300">SOLUCIONES PROPIAS · VORTEX DYNAMICS</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">Tu operativa, más cerca.<br /><span className="text-teal-300">Tu gestión, conectada.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Desarrollamos soluciones sobre Business Central para necesidades concretas de tu empresa. Conoce Vortex Payroll y Vortex Projects y descubre cómo pueden encajar en tu organización.</p>
          <nav aria-label="Productos Vortex" className="mt-9 flex flex-wrap gap-4">
            <a href="#payroll" className="rounded-xl bg-teal-300 px-6 py-4 font-semibold text-slate-950 hover:bg-teal-200">Descubrir Payroll ↓</a>
            <a href="#projects" className="rounded-xl border border-teal-300/50 px-6 py-4 font-semibold text-teal-200 hover:bg-teal-950">Descubrir Projects ↓</a>
          </nav>
          <div className="mt-14 grid gap-5 md:grid-cols-2">{products.map(product => <a href={`#${product.id}`} key={product.id} className="rounded-2xl border border-white/15 bg-white/5 p-7 transition hover:border-teal-300/60">
            <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-sm font-semibold text-teal-200">{product.category}</span><span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{product.status}</span></div>
            <h2 className="mt-6 text-3xl font-medium">{product.name} <span aria-hidden="true">↗</span></h2><p className="mt-3 leading-7 text-slate-300">{product.headline}</p>
          </a>)}</div>
        </div>
      </section>
      {products.map((product, index) => <section key={product.id} id={product.id} aria-labelledby={`${product.id}-titulo`} className={`scroll-mt-8 px-6 py-20 md:py-24 ${index % 2 ? "bg-slate-50" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-teal-700">{product.category}</p><h2 id={`${product.id}-titulo`} className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">{product.name}</h2><p className="mt-5 text-2xl font-medium leading-snug text-teal-800">{product.headline}</p><p className="mt-6 text-lg leading-8 text-slate-600">{product.intro}</p></div>
            <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-7 md:p-9"><span className="inline-flex rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-semibold text-teal-900">{product.status}</span><h3 className="mt-6 text-xl font-semibold">¿Para quién está pensado?</h3><p className="mt-4 leading-8 text-slate-600">{product.audience}</p><a href="#contacto" className="mt-6 inline-block font-semibold text-teal-800 underline underline-offset-4">{product.cta} ↗</a></aside>
          </div>
          <h3 className="mt-14 text-2xl font-medium">{product.id === "payroll" ? "Áreas de trabajo del producto" : "Una operativa de principio a fin"}</h3>
          <div className="mt-7 grid gap-5 md:grid-cols-2">{product.capabilities.map(([label, text], i) => <article key={label} className="rounded-2xl border border-slate-200 bg-white p-7"><p className="text-sm font-semibold text-teal-700">0{i + 1}</p><h4 className="mt-3 text-xl font-semibold">{label}</h4><p className="mt-4 leading-8 text-slate-600">{text}</p></article>)}</div>
          <p className="mt-7 border-l-2 border-teal-400 pl-5 text-sm leading-7 text-slate-600">{product.note}</p>
        </div>
      </section>)}
      <section className="bg-[#091622] px-6 py-16 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-widest text-teal-300">TAMBIÉN EN VORTEX</p><h2 className="mt-4 text-3xl font-medium">Vortex AI Operations</h2><p className="mt-4 max-w-2xl leading-8 text-slate-300">Conoce nuestro asistente empresarial y las posibilidades de conectar datos y procesos con supervisión. Las conexiones con otros módulos se definen en cada proyecto.</p></div><Link href="/vortex-ai-operations" className="shrink-0 rounded-xl border border-teal-300/50 px-6 py-4 font-semibold text-teal-200 hover:bg-teal-950">Descubrir AI Operations ↗</Link></div></section>
      <section id="contacto" className="scroll-mt-8 bg-teal-50 px-6 py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-widest text-teal-700">HABLEMOS DE TU OPERATIVA</p><h2 className="mt-4 text-4xl font-medium tracking-tight">Encuentra el encaje<br />para tu empresa.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Indica si te interesa Vortex Payroll o Vortex Projects. Te explicaremos el estado del producto, su disponibilidad y los pasos para definir una propuesta.</p><p className="mt-5 leading-7 text-slate-600">Las licencias de Microsoft, la implantación, la formación y las integraciones se concretan según el alcance acordado.</p><a href="https://wa.me/34951547626" className="mt-7 inline-block font-semibold text-teal-800 underline">Hablar por WhatsApp ↗</a></div><ContactForm source="/soluciones-vortex" /></div></section>
    </main><SiteFooter />
  </div>;
}
