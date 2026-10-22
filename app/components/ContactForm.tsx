"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackContactEvent } from "./analytics-events";

const fieldClass = "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-600/15";

export default function ContactForm({ interest = "", source = "/" }: { interest?: string; source?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submitting = useRef(false);

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus("sending");
    const form = event.currentTarget;
    const params = new URLSearchParams(window.location.search);
    // Capture only campaign fields and paths; never copy arbitrary query strings.
    const values: Record<string, string> = { source_page: window.location.pathname };
    for (const key of ["utm_source", "utm_medium", "utm_campaign"]) values[key] = (params.get(key) || "").slice(0, 120);
    try { values.referrer_domain = document.referrer ? new URL(document.referrer).hostname : ""; } catch { values.referrer_domain = ""; }
    for (const [name, value] of Object.entries(values)) {
      const input = form.elements.namedItem(name);
      if (input instanceof HTMLInputElement) input.value = value;
    }
    trackContactEvent("form_submit_attempt", "form");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("Contact not confirmed");
      trackContactEvent("generate_lead", "form");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form action="https://formspree.io/f/xdabgonv" method="POST" onSubmit={submitContact} className="rounded-3xl border border-slate-100 bg-white p-6 text-slate-950 shadow-xl md:p-8">
      <input type="hidden" name="source_page" value={source} readOnly />
      {["utm_source", "utm_medium", "utm_campaign", "referrer_domain"].map((name) => <input key={name} type="hidden" name={name} defaultValue="" />)}
      <div className="grid gap-4">
        <label className="text-sm font-medium">Nombre y empresa<input autoComplete="organization" type="text" name="name" required className={`mt-2 ${fieldClass}`} /></label>
        <label className="text-sm font-medium">Email profesional<input autoComplete="email" type="email" name="email" required className={`mt-2 ${fieldClass}`} /></label>
        <label className="text-sm font-medium">Teléfono (opcional)<input autoComplete="tel" type="tel" name="phone" className={`mt-2 ${fieldClass}`} /></label>
        <label className="text-sm font-medium">¿Qué necesitas?
          <select name="interest" defaultValue={interest} required className={`mt-2 ${fieldClass}`}>
            <option value="" disabled>Selecciona un servicio</option>
            {["Implantar Business Central", "Implantar Dynamics 365 CRM", "Integrar CRM y Business Central", "Migrar desde otro ERP", "Automatización, Power Platform e IA", "Mejorar procesos y reporting", "Microsoft 365 y SharePoint", "Power Platform y automatización", "Power BI y Microsoft Fabric", "Microsoft Copilot e IA", "Azure y seguridad Microsoft", "Soporte o evolución"].map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium">¿Qué te gustaría mejorar?<textarea name="message" required rows={4} placeholder="Qué sistema utilizas y qué proceso te gustaría resolver" className={`mt-2 ${fieldClass}`} /></label>
        <button type="submit" disabled={status === "sending" || status === "success"} className="disabled:cursor-not-allowed disabled:opacity-60 rounded-2xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">{status === "sending" ? "Enviando…" : status === "success" ? "Solicitud enviada" : "Solicitar diagnóstico gratuito"}</button>
        <div aria-live="polite" role="status">{status === "success" ? <p className="text-sm font-medium text-teal-800">Gracias. Hemos recibido tu solicitud y te contactaremos para acordar el diagnóstico.</p> : status === "error" ? <p className="text-sm text-red-700">No hemos podido confirmar el envío. Comprueba tu conexión e inténtalo de nuevo. También puedes escribir a <a className="underline" href="mailto:direccion-proyectos@vortexdynamics.es">direccion-proyectos@vortexdynamics.es</a> o llamar al <a className="underline" href="tel:+34951547626">951 547 626</a>.</p> : null}</div>
        <p className="text-sm leading-6 text-slate-600">Sin compromiso. Te contactaremos para acordar una llamada de 30 minutos. Respuesta en menos de 24 horas laborables.</p>
      </div>
    </form>
  );
}
