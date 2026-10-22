import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { microsoftServices } from "../lib/microsoft-services";

const title = "Servicios Microsoft: ERP, CRM, Azure e IA | Vortex Dynamics";
const description = "Consultoría, implantación e integración de Business Central, Dynamics 365 CRM, Microsoft 365, Power Platform, Power BI, Fabric, Copilot y Azure.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "https://www.vortexdynamics.es/servicios" },
  openGraph: { title, description, url: "https://www.vortexdynamics.es/servicios", type: "website", locale: "es_ES" },
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-4">
        <Link href="/" aria-label="Vortex Dynamics, inicio"><Image src="/vortexdynamics.png" alt="Vortex Dynamics" width={180} height={90} className="h-12 w-auto object-contain" /></Link>
        <nav aria-label="Navegación principal" className="flex flex-wrap gap-5 text-sm font-semibold"><Link href="/servicios" aria-current="page">Servicios</Link><Link href="/business-central">Business Central</Link><Link href="/crm">CRM</Link><Link href="/noticias">Noticias</Link><a href="#diagnostico" className="text-teal-700">Solicitar diagnóstico</a></nav>
      </div></header>
      <main>
        <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-6 py-20"><div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">El ecosistema Microsoft, conectado</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Tecnología que conecta cada área de tu empresa.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">En Vortex Dynamics unimos ERP, CRM, productividad, automatización, datos, inteligencia artificial y nube. Te acompañamos desde la consultoría y la implantación hasta la integración, formación y soporte.</p>
          <a href="#diagnostico" className="mt-8 inline-flex rounded-2xl bg-teal-700 px-6 py-4 font-semibold text-white hover:bg-teal-800">Hablemos de tu proyecto</a>
          <nav aria-label="Áreas de servicio" className="mt-10 flex flex-wrap gap-3">{microsoftServices.map((service) => <a key={service.id} href={`#${service.id}`} className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-900 hover:bg-teal-50">{service.title}</a>)}</nav>
        </div></section>
        <section aria-label="Soluciones y servicios Microsoft" className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">
          {microsoftServices.map((service, index) => <article key={service.id} id={service.id} className="scroll-mt-8 rounded-3xl border border-slate-200 p-7 md:p-9">
            <p className="text-sm font-semibold text-teal-700">0{index + 1}</p><h2 className="mt-3 text-2xl font-semibold">{service.title}</h2>
            <p className="mt-3 font-medium leading-7 text-teal-800">{service.products}</p><p className="mt-4 leading-8 text-slate-600">{service.description}</p>
            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-600">{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            <Link href={service.href} className="mt-6 inline-flex font-semibold text-teal-800 underline underline-offset-4">{service.href === "#diagnostico" ? "Consultar este servicio" : "Conocer la solución"}</Link>
          </article>)}
          <aside className="rounded-3xl bg-slate-950 p-7 text-white md:p-9"><h2 className="text-2xl font-semibold">Consultoría, integración y acompañamiento</h2><p className="mt-5 leading-8 text-slate-300">Partimos de tus procesos para definir prioridades, alcance e integraciones. Preparamos la migración, las pruebas y la formación de los equipos y acompañamos el arranque y la evolución de la solución.</p><p className="mt-4 leading-8 text-slate-300">La configuración, las licencias y los servicios necesarios se concretan en la propuesta de cada proyecto.</p></aside>
        </section>
        <section id="diagnostico" className="scroll-mt-8 bg-teal-50 px-6 py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Conecta tu negocio</p><h2 className="mt-3 text-3xl font-semibold">Cuéntanos qué necesitas mejorar.</h2><p className="mt-5 text-lg leading-8 text-slate-600">En una llamada inicial gratuita de 30 minutos revisamos tu situación, los equipos implicados y las soluciones que podrían encajar. Después definimos los siguientes pasos para concretar el proyecto.</p><a href="https://wa.me/34951547626" className="mt-6 inline-flex font-semibold text-teal-800 underline">Hablar por WhatsApp</a></div><ContactForm source="/servicios" /></div></section>
      </main>
      <footer className="bg-slate-950 px-6 py-10 text-slate-300"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5"><Link href="/">Vortex Dynamics IT Consulting</Link><a href="mailto:direccion-proyectos@vortexdynamics.es">direccion-proyectos@vortexdynamics.es</a><a href="tel:+34951547626">951 547 626</a></div></footer>
    </div>
  );
}
