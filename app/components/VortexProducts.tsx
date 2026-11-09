import Link from "next/link";

export default function VortexProducts() {
  return <section id="soluciones-vortex" aria-labelledby="productos-vortex-titulo" className="bg-teal-50 px-6 py-20 text-slate-950">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-teal-700">DESARROLLO PROPIO · SOBRE BUSINESS CENTRAL</p><h2 id="productos-vortex-titulo" className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">Soluciones Vortex.<br />Pensadas para tu operativa.</h2></div><Link href="/soluciones-vortex" className="font-semibold text-teal-800 underline underline-offset-4">Conocer los productos ↗</Link></div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-teal-100 bg-white p-7 md:p-9"><span className="text-xs font-semibold uppercase tracking-widest text-teal-700">En desarrollo · Nóminas</span><h3 className="mt-4 text-3xl font-medium">Vortex Payroll</h3><p className="mt-5 leading-8 text-slate-600">Gestión salarial para España en desarrollo sobre Business Central. Una propuesta para conectar la información de nóminas con la gestión de tu empresa.</p><Link href="/soluciones-vortex#payroll" className="mt-6 inline-block font-semibold text-teal-800 underline underline-offset-4">Descubrir Vortex Payroll ↗</Link></article>
        <article className="rounded-3xl border border-teal-100 bg-white p-7 md:p-9"><span className="text-xs font-semibold uppercase tracking-widest text-teal-700">Consulta disponibilidad · Proyectos</span><h3 className="mt-4 text-3xl font-medium">Vortex Projects</h3><p className="mt-5 leading-8 text-slate-600">Gestión económica y operativa de proyectos de servicios sobre Business Central. Ofertas, horas, costes y avance con un alcance adaptado a tu empresa.</p><Link href="/soluciones-vortex#projects" className="mt-6 inline-block font-semibold text-teal-800 underline underline-offset-4">Descubrir Vortex Projects ↗</Link></article>
      </div>
    </div>
  </section>;
}
