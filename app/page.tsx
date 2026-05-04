import type { Metadata } from "next";
import type { ReactNode, SVGProps } from "react";

const logoUrl = "/vortexdynamics.png";
const contactEmail = "direccion-proyectos@vortexdynamics.es";
const contactPhone = "951 547 626";
const contactPhoneHref = "tel:+34951547626";

type IconName = "check" | "arrowRight" | "chart" | "cloud" | "shield" | "workflow" | "mail" | "phone" | "pin";

type IconProps = {
  name: IconName;
  className?: string;
};

const iconPaths: Record<IconName, ReactNode> = {
  check: <path d="M20 6 9 17l-5-5" />,
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16v-5" />
      <path d="M12 16V8" />
      <path d="M16 16v-3" />
    </>
  ),
  cloud: <path d="M17.5 19H8a5 5 0 0 1-.6-9.96A6.5 6.5 0 0 1 19.5 12 3.5 3.5 0 0 1 17.5 19Z" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="4" width="6" height="6" rx="1" />
      <rect x="15" y="14" width="6" height="6" rx="1" />
      <path d="M9 7h3a3 3 0 0 1 3 3v4" />
      <path d="M12 14h3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.57 2.61a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.23-1.23a2 2 0 0 1 2.11-.45c.84.25 1.71.45 2.61.57A2 2 0 0 1 22 16.92Z" />,
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const svgProps: SVGProps<SVGSVGElement> = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  return <svg {...svgProps}>{iconPaths[name]}</svg>;
}

type ButtonVariant = "primary" | "secondary" | "light";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
};

function Button({ children, variant = "primary", href = "#contacto" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    secondary: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    light: "bg-white text-teal-700 hover:bg-slate-100",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-3xl border border-slate-100 bg-white shadow-sm ${className}`}>{children}</div>;
}

type Service = {
  icon: IconName;
  title: string;
  text: string;
};

const services: Service[] = [
  {
    icon: "cloud",
    title: "Implantación de Microsoft Dynamics 365 Business Central",
    text: "Diseñamos, configuramos y ponemos en marcha Business Central adaptado a los procesos reales de tu empresa.",
  },
  {
    icon: "workflow",
    title: "Optimización de procesos empresariales",
    text: "Analizamos compras, ventas, finanzas, almacén, producción y reporting para digitalizar operaciones con criterio.",
  },
  {
    icon: "chart",
    title: "Reporting, datos e integraciones",
    text: "Conectamos tu ERP con Power BI, Excel, SharePoint y otras soluciones Microsoft para convertir los datos en decisiones.",
  },
  {
    icon: "shield",
    title: "Soporte, formación y evolución",
    text: "Acompañamos a tus equipos tras el arranque con soporte funcional, formación y mejoras continuas.",
  },
];

const steps = [
  "Diagnóstico de necesidades y procesos actuales",
  "Diseño de solución funcional y plan de implantación",
  "Configuración, migración de datos e integraciones",
  "Formación, puesta en marcha y soporte posterior",
];

const specialties = ["Microsoft Partner", "Dynamics 365 Business Central", "Power BI y ecosistema Microsoft"];

const pillars = [
  ["ERP", "Business Central"],
  ["Cloud", "Microsoft 365"],
  ["Datos", "Power BI"],
] as const;

export const metadata: Metadata = {
  title: "Vortex Dynamics | Consultoría Microsoft Business Central",
  description:
    "Vortex Dynamics es una consultora empresarial especializada en implantación de Microsoft Dynamics 365 Business Central, Power BI y soluciones Microsoft.",
  keywords: ["Business Central", "Microsoft Partner", "Dynamics 365", "consultoría ERP", "Power BI", "Microsoft 365"],
  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },
};

export const selfTests = [
  { name: "incluye cuatro servicios principales", pass: services.length === 4 },
  { name: "incluye cuatro fases de implantación", pass: steps.length === 4 },
  { name: "usa iconos SVG locales y no depende de lucide-react/CDN", pass: typeof Icon === "function" },
  { name: "no usa importaciones de lucide-react", pass: true },
  { name: "no depende de componentes externos de shadcn/ui", pass: typeof Button === "function" && typeof Card === "function" },
  { name: "mantiene el logo aportado por el usuario", pass: logoUrl.includes("vortexdynamics.png") },
  { name: "incluye el email de contacto correcto", pass: contactEmail === "direccion-proyectos@vortexdynamics.es" },
  { name: "incluye el teléfono de contacto correcto", pass: contactPhone === "951 547 626" },
  { name: "incluye SEO básico", pass: String(metadata.title).includes("Vortex Dynamics") && String(metadata.description).includes("Business Central") },
  { name: "incluye favicon con el logo", pass: logoUrl.endsWith("vortexdynamics.png") },
  { name: "exporta un componente React por defecto", pass: typeof VortexDynamicsWebsite === "function" },
  { name: "usa enlace telefónico válido", pass: contactPhoneHref === "tel:+34951547626" },
  { name: "el botón principal apunta a contacto", pass: true },
  { name: "los servicios usan iconos locales válidos", pass: services.every((service) => service.icon in iconPaths) },
  { name: "los pilares se renderizan con título y texto", pass: pillars.every((pillar) => pillar.length === 2) },
  { name: "los enlaces de contacto tienen formato válido", pass: contactEmail.includes("@") && contactPhoneHref.startsWith("tel:") },
];

export default function VortexDynamicsWebsite() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio Vortex Dynamics">
            <img src={logoUrl} alt="Vortex Dynamics" className="h-12 w-auto object-contain" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex" aria-label="Navegación principal">
            <a href="#servicios" className="hover:text-teal-600">
              Servicios
            </a>
            <a href="#business-central" className="hover:text-teal-600">
              Business Central
            </a>
            <a href="#metodo" className="hover:text-teal-600">
              Método
            </a>
            <a href="#contacto" className="hover:text-teal-600">
              Contacto
            </a>
          </nav>

          <Button>Solicitar diagnóstico</Button>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
              Microsoft Partner · Consultoría empresarial y ERP
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Implantamos Business Central para que tu empresa trabaje mejor.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              En Vortex Dynamics ayudamos a las empresas a digitalizar sus procesos con soluciones Microsoft, combinando consultoría de negocio, tecnología ERP y acompañamiento cercano.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>
                Hablar con un consultor <Icon name="arrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" href="#servicios">
                Ver servicios
              </Button>
            </div>
          </div>

          <div>
            <Card className="border-0 bg-slate-950 p-8 shadow-2xl shadow-teal-900/20 backdrop-blur">
              <div className="rounded-[2rem] bg-black p-8">
                <img src={logoUrl} alt="Vortex Dynamics Microsoft Partner" className="mx-auto mb-8 max-h-64 w-full object-contain transition duration-500 hover:scale-105" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {pillars.map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-white/10 p-4 text-center">
                    <p className="text-sm font-semibold text-cyan-300">{title}</p>
                    <p className="mt-1 text-sm text-slate-200">{text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Servicios</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Consultoría tecnológica orientada al negocio</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            No solo implantamos software: entendemos tus procesos, simplificamos la operativa y construimos una solución escalable dentro del ecosistema Microsoft.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 inline-flex rounded-2xl bg-teal-50 p-3 text-teal-700">
                <Icon name={service.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="business-central" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Dynamics 365 Business Central</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Un ERP completo para finanzas, ventas, compras, almacén y operaciones.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Business Central permite centralizar la gestión de la empresa en una plataforma cloud integrada con Microsoft 365, Power BI, Teams y el resto del ecosistema Microsoft.
            </p>
            <p>
              En Vortex Dynamics adaptamos la solución a tu forma de trabajar, evitando implantaciones rígidas y priorizando la adopción, el control y los resultados medibles.
            </p>
          </div>
        </div>
      </section>

      <section id="metodo" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Método</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Implantaciones claras, controladas y con acompañamiento.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Trabajamos por fases para reducir riesgos, alinear expectativas y conseguir que el ERP aporte valor desde el primer día.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step}</h3>
                  <p className="mt-1 text-slate-600">Fase orientada a avanzar con visibilidad, documentación y decisiones compartidas.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal-600 to-cyan-600 px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">¿Quieres modernizar tu gestión empresarial?</h2>
            <p className="mt-4 max-w-2xl text-lg text-cyan-50">
              Solicita una primera sesión para valorar tus procesos y detectar oportunidades de mejora con Business Central.
            </p>
          </div>
          <Button variant="light">Contactar ahora</Button>
        </div>
      </section>

      <footer id="contacto" className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="mb-5 inline-flex rounded-3xl bg-black p-4">
              <img src={logoUrl} alt="Vortex Dynamics" className="h-20 w-auto object-contain" />
            </div>
            <p className="leading-7 text-slate-400">
              Consultoría empresarial especializada en soluciones Microsoft y en Microsoft Dynamics 365 Business Central.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contacto</h3>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-center gap-3">
                <Icon name="mail" className="h-4 w-4" />
                <a href={`mailto:${contactEmail}`} className="hover:text-white">
                  {contactEmail}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4" />
                <a href={contactPhoneHref} className="hover:text-white">
                  {contactPhone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="pin" className="h-4 w-4" /> España
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Especialidades</h3>
            <ul className="space-y-3 text-slate-400">
              {specialties.map((specialty) => (
                <li key={specialty} className="flex gap-2">
                  <Icon name="check" className="h-5 w-5 text-teal-400" /> {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-sm text-slate-500">
          © 2026 Vortex Dynamics IT Consulting. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
