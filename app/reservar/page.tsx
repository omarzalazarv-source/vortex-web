import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";

const title = "Reserva tu diagnóstico gratuito | Vortex Dynamics";
const description = "Reserva una videollamada gratuita de 30 minutos para revisar tus procesos y valorar soluciones Microsoft con Vortex Dynamics.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "https://www.vortexdynamics.es/reservar" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vortex Dynamics · Consultoría Microsoft" }], title, description, url: "https://www.vortexdynamics.es/reservar", type: "website", locale: "es_ES" },
};

export default function ReservarPage() {
  return <div className="min-h-screen bg-white text-slate-950">
    <SiteHeader />
    <main id="contenido">
      <section className="bg-[#091622] px-6 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-teal-300">El primer paso, en tu agenda</p><h1 className="mt-5 text-4xl font-medium leading-tight tracking-tight md:text-6xl">30 minutos para<br /><span className="text-teal-300">entender tu próximo paso.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Cuéntanos qué proceso quieres mejorar y qué herramientas utilizas. Te orientamos sobre las soluciones Microsoft que podrían encajar y cómo empezar por lo que más necesita tu empresa.</p><p className="mt-6 text-sm text-teal-200">Diagnóstico inicial gratuito · Sin compromiso</p></div>
          <aside aria-labelledby="reserva-titulo" className="rounded-3xl border border-white/15 bg-white p-8 text-slate-950 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Reserva directa</p><h2 id="reserva-titulo" className="mt-4 text-2xl font-semibold">Elige el momento para hablar</h2>
            <dl className="mt-7 space-y-4 text-sm"><div className="flex justify-between gap-4 border-b border-slate-200 pb-4"><dt className="text-slate-600">Duración</dt><dd className="font-semibold">30 minutos</dd></div><div className="flex justify-between gap-4 border-b border-slate-200 pb-4"><dt className="text-slate-600">Formato</dt><dd className="font-semibold">Google Meet</dd></div><div className="flex justify-between gap-4"><dt className="text-slate-600">Horario habitual</dt><dd className="text-right font-semibold">Lunes a viernes<br />10:00–13:00 · Madrid</dd></div></dl>
            <a href="https://calendar.app.google/3Eoja5Ur5Paewsb8A" target="_blank" rel="noopener noreferrer" className="mt-8 flex justify-center rounded-xl bg-teal-700 px-5 py-4 text-center font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">Elegir día y hora ↗<span className="sr-only"> (se abre en otra pestaña)</span></a>
            <p className="mt-4 text-xs leading-6 text-slate-600">La reserva se realiza en Google Calendar, donde verás la disponibilidad actual. Al confirmarla recibirás la invitación con el enlace de Google Meet.</p>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20"><p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Una conversación con un objetivo</p><h2 className="mt-4 text-3xl font-medium tracking-tight">Qué revisaremos contigo</h2><ol className="mt-10 grid gap-6 md:grid-cols-3">{[
        ["Tu punto de partida", "Qué herramientas utilizas, cómo trabaja tu equipo y dónde aparecen tareas repetidas o información desconectada."],
        ["La prioridad del negocio", "Qué proceso conviene abordar primero: gestión ERP, ventas y CRM, automatización, datos o colaboración."],
        ["Los siguientes pasos", "Qué soluciones podrían encajar y qué información necesitamos para definir después un alcance y una propuesta."],
      ].map(([label,text],i)=><li key={label} className="rounded-2xl border border-slate-200 p-7"><span className="text-sm font-semibold text-teal-700">0{i+1}</span><h3 className="mt-4 text-xl font-semibold">{label}</h3><p className="mt-4 leading-8 text-slate-600">{text}</p></li>)}</ol><p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600">Esta llamada es una primera orientación. El análisis detallado, la configuración de herramientas y la ejecución de cambios se concretan en una fase posterior según el alcance acordado.</p></section>
      <section className="bg-teal-50 px-6 py-12"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6"><div><h2 className="text-2xl font-semibold">¿Prefieres contárnoslo por escrito?</h2><p className="mt-3 leading-7 text-slate-600">Déjanos tu consulta y coordinaremos contigo el siguiente paso.</p></div><Link href="/#contacto" className="rounded-xl border border-teal-700 px-6 py-3 font-semibold text-teal-800 hover:bg-teal-100">Enviar una consulta →</Link></div></section>
    </main><SiteFooter />
  </div>;
}
