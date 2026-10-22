import { SiteHeader, SiteFooter } from "./SiteChrome";
import Link from "next/link";
import StructuredData from "./StructuredData";
import ContactForm from "./ContactForm";

export type ServiceContent = {
  slug: string; label: string; title: string; intro: string; interest: string;
  problems: string[]; capabilities: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  examples?: { title: string; text: string }[];
  related?: { title: string; href: string }[];
};

export default function ServicePage({ content }: { content: ServiceContent }) {
  const url = `https://www.vortexdynamics.es/${content.slug}`;
  const breadcrumbs = [
    { name: "Inicio", item: "https://www.vortexdynamics.es/" },
    { name: "Servicios Microsoft", item: "https://www.vortexdynamics.es/servicios" },
    { name: content.label, item: url },
  ];
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SiteHeader contactHref="#diagnostico" />
      <main id="contenido">
        <StructuredData data={{ "@context": "https://schema.org", "@graph": [
          { "@type": "Service", "@id": `${url}#service`, name: content.label, serviceType: content.label, description: content.intro, url, provider: { "@id": "https://www.vortexdynamics.es/#organization" } },
          { "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((item,i)=>({ "@type": "ListItem", position: i+1, ...item })) },
        ] }} />
        <nav aria-label="Ruta de navegación" className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 py-5 text-sm text-slate-600"><Link href="/" className="underline underline-offset-4">Inicio</Link><span aria-hidden="true">/</span><Link href="/servicios" className="underline underline-offset-4">Servicios Microsoft</Link><span aria-hidden="true">/</span><span aria-current="page">{content.label}</span></nav>
        <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">{content.label}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{content.title}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">{content.intro}</p>
              <Link href="/reservar" className="mt-8 inline-flex rounded-2xl bg-teal-700 px-6 py-4 font-semibold text-white hover:bg-teal-800">Reserva tu diagnóstico gratuito</Link>
              <p className="mt-4 text-sm text-slate-600">30 minutos · Sin compromiso · Consultoría adaptada a tu empresa</p>
            </div>
            <aside className="rounded-3xl border border-teal-100 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold">¿Te reconoces en estas situaciones?</h2>
              <ul className="mt-6 space-y-4 text-slate-600">{content.problems.map((problem) => <li key={problem} className="border-l-2 border-teal-500 pl-4 leading-7">{problem}</li>)}</ul>
            </aside>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="alcance">
          <h2 id="alcance" className="text-3xl font-semibold">Qué podemos hacer por tu empresa</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{content.capabilities.map((item) => <article key={item.title} className="rounded-3xl border border-slate-200 p-7"><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-4 leading-7 text-slate-600">{item.text}</p></article>)}</div>
        </section>
        {content.examples ? <section className="bg-slate-50 px-6 py-16"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Ejemplos de aplicación</p><h2 className="mt-3 text-3xl font-semibold">Cómo puede encajar en tu negocio</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600">Escenarios ilustrativos para entender la solución; el diseño y el alcance se adaptan a cada proyecto.</p><div className="mt-8 grid gap-6 md:grid-cols-2">{content.examples.map((example) => <article key={example.title} className="rounded-3xl border border-slate-200 bg-white p-7"><h3 className="text-xl font-semibold">{example.title}</h3><p className="mt-4 leading-8 text-slate-600">{example.text}</p></article>)}</div></div></section> : null}
        <section className="bg-slate-950 px-6 py-16 text-white">
          <div className="mx-auto max-w-7xl"><h2 className="text-3xl font-semibold">Un proyecto con pasos y entregables claros</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Análisis", "Requisitos priorizados y mapa de procesos para acordar qué necesita resolver el proyecto."],
                ["Diseño", "Propuesta funcional, alcance, fases y responsabilidades antes de configurar la solución."],
                ["Implantación", "Configuración, migración e integraciones validadas mediante pruebas con tu equipo."],
                ["Acompañamiento", "Formación por perfiles, apoyo al arranque y seguimiento de las mejoras pendientes."],
              ].map(([title, text], index) => <li key={title}><p className="text-sm font-semibold text-cyan-300">0{index + 1}</p><h3 className="mt-2 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></li>)}
            </ol>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-6 py-20"><h2 className="text-3xl font-semibold">Preguntas frecuentes</h2><div className="mt-8 divide-y divide-slate-200">{content.faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary><p className="mt-4 leading-8 text-slate-600">{faq.answer}</p></details>)}</div></section>
        {content.related ? <section aria-label="Soluciones relacionadas" className="mx-auto max-w-7xl px-6 pb-16"><h2 className="text-2xl font-semibold">Conecta esta solución con el resto del negocio</h2><div className="mt-6 flex flex-wrap gap-4">{content.related.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl border border-teal-200 px-5 py-3 font-semibold text-teal-800 hover:bg-teal-50">{item.title} <span aria-hidden="true">↗</span></Link>)}</div></section> : null}
        <section id="diagnostico" className="scroll-mt-8 bg-teal-50 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div><p className="text-sm font-semibold uppercase tracking-widest text-teal-700">El primer paso</p><h2 className="mt-3 text-3xl font-semibold">30 minutos para aclarar por dónde empezar</h2><p className="mt-5 text-lg leading-8 text-slate-600">Revisamos tu sistema actual, el proceso que más te preocupa y los equipos implicados. Al terminar, tendrás una orientación sobre el encaje de la solución y los siguientes pasos para definir el proyecto.</p><p className="mt-4 leading-7 text-slate-600">El diagnóstico inicial es gratuito. El análisis detallado, el presupuesto y el calendario se concretan después según el alcance.</p><a href="https://wa.me/34951547626" className="mt-6 inline-block font-semibold text-teal-800 underline">¿Prefieres hablar por WhatsApp?</a></div>
            <ContactForm source={`/${content.slug}`} interest={content.interest} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
