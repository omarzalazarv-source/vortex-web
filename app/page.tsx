import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode, SVGProps } from "react";

const logoUrl = "/vortexdynamics.png";
const contactEmail = "direccion-proyectos@vortexdynamics.es";
const contactPhone = "951 547 626";
const contactPhoneHref = "tel:+34951547626";
const whatsappHref = "https://wa.me/34951547626";
const formAction = "https://formspree.io/f/xdabgonv";

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
  const base = "group inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 hover:-translate-y-0.5";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-teal-600 text-white shadow-lg shadow-teal-600/25 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/30",
    secondary: "border border-slate-300 bg-white text-slate-900 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700",
    light: "bg-white text-teal-700 shadow-lg shadow-teal-900/10 hover:bg-slate-100 hover:shadow-xl",
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
  return <div className={`rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 ${className}`}>{children}</div>;
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
    icon: "chart",
    title: "Implantación de Microsoft Dynamics 365 CRM",
    text: "Conectamos ventas, atención al cliente, servicios de campo y marketing con Sales, Customer Service, Field Service y Customer Insights.",
  },
  {
    icon: "workflow",
    title: "Integración CRM + ERP y automatización",
    text: "Integramos Dynamics 365 CRM con Business Central, Microsoft 365 y sistemas externos mediante API, Dataverse y Power Automate.",
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

const crmSolutions: Service[] = [
  { icon: "chart", title: "Dynamics 365 Sales", text: "Gestiona leads, oportunidades, cuentas y contactos. Automatiza el seguimiento comercial, las previsiones de ventas y el trabajo de tu equipo." },
  { icon: "shield", title: "Dynamics 365 Customer Service", text: "Centraliza la atención al cliente con gestión de casos, incidencias, SLA, colas de trabajo y bases de conocimiento." },
  { icon: "workflow", title: "Dynamics 365 Field Service", text: "Organiza técnicos, recursos y órdenes de trabajo. Planifica intervenciones, materiales y servicios de campo." },
  { icon: "chart", title: "Customer Insights – Journeys", text: "Diseña recorridos de cliente y automatiza comunicaciones personalizadas para acompañar cada etapa de la relación comercial." },
  { icon: "cloud", title: "Customer Insights – Data", text: "Unifica datos de distintas fuentes para construir perfiles de cliente, crear segmentos y comprender mejor sus necesidades." },
  { icon: "workflow", title: "CRM a medida, Power Platform e IA", text: "Desarrollamos soluciones con Dataverse, Power Apps y Power Automate, e incorporamos Copilot e IA para automatizar tareas y mejorar la productividad." },
];

const steps = [
  "Diagnóstico de necesidades y procesos actuales",
  "Diseño de solución funcional y plan de implantación",
  "Configuración, migración de datos e integraciones",
  "Formación, puesta en marcha y soporte posterior",
];

const specialties = ["Microsoft Partner", "Dynamics 365 Business Central", "Dynamics 365 CRM", "Power Platform, Copilot y Power BI"];

const pillars = [
  ["ERP", "Business Central"],
  ["CRM", "Dynamics 365"],
  ["Cloud", "Microsoft 365"],
  ["Datos", "Power BI"],
] as const;

const leadBenefits = ["Diagnóstico gratuito", "Sin compromiso", "Respuesta en menos de 24 horas"];

export const metadata: Metadata = {
  title: "Vortex Dynamics | Business Central, CRM y Dynamics 365",
  description:
    "Implantación de Business Central y Dynamics 365 CRM: Sales, Customer Service, Field Service y Customer Insights. Integramos ERP, CRM, Power Platform e IA.",
  keywords: [
    "consultor business central españa",
    "implantar dynamics 365 business central",
    "partner microsoft erp",
    "consultoría business central madrid",
    "consultoría ERP",
    "consultoría Dynamics 365 CRM",
    "Dynamics 365 Sales",
    "Dynamics 365 Customer Service",
    "Dynamics 365 Field Service",
    "Customer Insights",
    "Power Platform",
    "Power BI",
    "Microsoft 365",
  ],
  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },
};

export default function VortexDynamicsWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(34px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }

        @keyframes shine {
          from { transform: translateX(-120%) rotate(15deg); }
          to { transform: translateX(220%) rotate(15deg); }
        }

        .animate-fade-up { animation: fadeInUp 0.8s ease both; }
        .animate-fade-right { animation: fadeInRight 0.85s ease both; }
        .animate-delay-1 { animation-delay: 0.12s; }
        .animate-delay-2 { animation-delay: 0.24s; }
        .animate-delay-3 { animation-delay: 0.36s; }
        .float-soft { animation: floatSoft 5s ease-in-out infinite; }
        .pulse-glow { animation: pulseGlow 5s ease-in-out infinite; }
        .shine-card::after {
          content: "";
          position: absolute;
          inset: -30%;
          width: 35%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          animation: shine 5.5s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3 transition duration-300 hover:scale-[1.03]" aria-label="Inicio Vortex Dynamics">
            <img src={logoUrl} alt="Vortex Dynamics" className="h-12 w-auto object-contain drop-shadow-sm" />
          </a>

          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex" aria-label="Navegación principal">
            <a href="#servicios" className="transition hover:text-teal-600">Servicios</a>
            <a href="#business-central" className="transition hover:text-teal-600">Business Central</a>
            <a href="#crm" className="transition hover:text-teal-600">Dynamics 365 CRM</a>
            <a href="#metodo" className="transition hover:text-teal-600">Método</a>
            <a href="#contacto" className="transition hover:text-teal-600">Contacto</a>
          </nav>

          <Button>Solicitar diagnóstico</Button>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#ecfeff,_transparent_34%),linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#ecfeff_100%)]">
        <div className="pulse-glow absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-200/50 blur-3xl" />
        <div className="pulse-glow absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute left-1/2 top-20 h-48 w-48 rounded-full bg-white/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
              Microsoft Partner · ERP, CRM y Power Platform
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Conectamos tu negocio con Business Central y Dynamics 365 CRM.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Impulsamos tu gestión y tus relaciones con clientes mediante soluciones ERP y CRM integradas. Digitalizamos finanzas, operaciones, ventas, atención al cliente y marketing con el ecosistema Microsoft.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>
                Solicitar diagnóstico gratuito <Icon name="arrowRight" className="ml-2 h-5 w-5 transition duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" href={whatsappHref}>Hablar por WhatsApp</Button>
            </div>

            <div className="mt-6 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
              {leadBenefits.map((benefit, index) => (
                <p key={benefit} className={`animate-fade-up flex items-center gap-2 animate-delay-${Math.min(index + 1, 3)}`}>
                  <Icon name="check" className="h-5 w-5 text-teal-600" /> {benefit}
                </p>
              ))}
            </div>
          </div>

          <div className="animate-fade-right">
            <Card className="shine-card float-soft relative overflow-hidden border-white/80 bg-white/75 p-7 shadow-2xl shadow-teal-900/10 backdrop-blur-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-900/15">
              <div className="relative rounded-[2rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-8 shadow-inner">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.16),_transparent_36%)]" />
                <img src={logoUrl} alt="Vortex Dynamics Microsoft Partner" className="relative mx-auto mb-6 max-h-64 w-full object-contain drop-shadow-[0_18px_28px_rgba(15,23,42,0.12)] transition duration-700 hover:scale-105" />
              </div>

              <div className="mt-6 flex justify-center rounded-2xl bg-white p-4">
                <Image src="/microsoft-partner.jpg" alt="Microsoft Partner" width={738} height={297} className="h-auto w-full max-w-[280px] object-contain" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pillars.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/70 bg-white/80 p-4 text-center shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm font-semibold text-teal-700">{title}</p>
                    <p className="mt-1 text-sm text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="animate-fade-up max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Servicios</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Consultoría tecnológica orientada al negocio</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            No solo implantamos software: entendemos tus procesos, simplificamos la operativa y construimos una solución escalable dentro del ecosistema Microsoft.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.title} className={`animate-fade-up p-7 hover:-translate-y-2 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/10 animate-delay-${Math.min(index + 1, 3)}`}>
              <div className="mb-5 inline-flex rounded-2xl bg-teal-50 p-3 text-teal-700 transition duration-300 group-hover:bg-teal-600 group-hover:text-white">
                <Icon name={service.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="business-central" className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Dynamics 365 Business Central</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Un ERP completo para finanzas, ventas, compras, almacén y operaciones.
            </h2>
          </div>

          <div className="animate-fade-up space-y-5 text-lg leading-8 text-slate-300 animate-delay-1">
            <p>
              Business Central permite centralizar la gestión de la empresa en una plataforma cloud integrada con Microsoft 365, Power BI, Teams y el resto del ecosistema Microsoft.
            </p>
            <p>
              En Vortex Dynamics adaptamos la solución a tu forma de trabajar, evitando implantaciones rígidas y priorizando la adopción, el control y los resultados medibles.
            </p>
          </div>
        </div>
      </section>

      <section id="crm" className="scroll-mt-24 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Microsoft Dynamics 365 CRM</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Una solución para cada etapa de la relación con tus clientes.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Implantamos, optimizamos e integramos las distintas soluciones de Dynamics 365 CRM para adaptar los procesos comerciales, de atención al cliente, servicios de campo y marketing a tu empresa.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {crmSolutions.map((solution) => (
              <Card key={solution.title} className="p-7 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl">
                <div className="mb-5 inline-flex rounded-2xl bg-teal-50 p-3 text-teal-700">
                  <Icon name={solution.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{solution.text}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-teal-100 bg-white p-8 md:p-10">
            <h3 className="text-2xl font-semibold">CRM + ERP: una visión completa de tu negocio</h3>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
              Conectamos Dynamics 365 CRM con Business Central para que ventas, administración, finanzas y operaciones trabajen con información compartida. Integramos también Outlook, Teams, SharePoint, Power BI, plataformas eCommerce y aplicaciones externas mediante API.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Te acompañamos en el análisis funcional, diseño, parametrización, migración de datos, integraciones, automatizaciones, formación, soporte y evolución continua de tu CRM.
            </p>
            <div className="mt-6"><Button>Hablemos de tu proyecto CRM <Icon name="arrowRight" className="ml-2 h-5 w-5" /></Button></div>
          </div>
        </div>
      </section>

      <section id="metodo" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Método</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Implantaciones claras, controladas y con acompañamiento.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Trabajamos por fases para reducir riesgos, alinear expectativas y conseguir que tu ERP y CRM aporten valor desde el primer día.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className={`animate-fade-up flex gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-x-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/10 animate-delay-${Math.min(index + 1, 3)}`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 font-semibold text-white shadow-lg shadow-teal-600/20">
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

      <section id="contacto" className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-cyan-600 px-6 py-24 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-slate-950/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start">
          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-100">Contacto</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Solicita tu diagnóstico gratuito de ERP y CRM</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-cyan-50">
              Cuéntanos tu situación actual y te ayudamos a detectar oportunidades de mejora en ventas, atención al cliente, marketing, procesos, control financiero e integración con Microsoft.
            </p>
            <div className="mt-8 space-y-4 text-cyan-50">
              <p className="flex items-center gap-3"><Icon name="mail" className="h-5 w-5" /> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
              <p className="flex items-center gap-3"><Icon name="phone" className="h-5 w-5" /> <a href={contactPhoneHref}>{contactPhone}</a></p>
            </div>
          </div>

          <form action={formAction} method="POST" className="animate-fade-right rounded-3xl bg-white/95 p-6 text-slate-950 shadow-2xl shadow-slate-950/20 backdrop-blur md:p-8">
            <div className="grid gap-4">
              <input type="text" name="name" placeholder="Nombre y empresa" required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" />
              <input type="email" name="email" placeholder="Email profesional" required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" />
              <input type="tel" name="phone" placeholder="Teléfono" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" />
              <select name="interest" defaultValue="" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10">
                <option value="" disabled>¿Qué necesitas?</option>
                <option value="Implantar Business Central">Implantar Business Central</option>
                <option value="Implantar Dynamics 365 CRM">Implantar Dynamics 365 CRM</option>
                <option value="Integrar CRM y Business Central">Integrar CRM y Business Central</option>
                <option value="Automatización, Power Platform e IA">Automatización, Power Platform e IA</option>
                <option value="Migrar desde otro ERP">Migrar desde otro ERP</option>
                <option value="Mejorar procesos y reporting">Mejorar procesos y reporting</option>
                <option value="Soporte o evolución">Soporte o evolución</option>
              </select>
              <textarea name="message" placeholder="Cuéntanos brevemente tu situación actual" required rows={5} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" />
              <button type="submit" className="rounded-2xl bg-teal-600 px-6 py-3 font-semibold text-white shadow-lg shadow-teal-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/30">
                Solicitar diagnóstico gratuito
              </button>
              <p className="text-sm text-slate-500">Te responderemos en menos de 24 horas laborables.</p>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="mb-5 inline-flex rounded-3xl border border-white/10 bg-white p-4 shadow-xl shadow-black/20">
              <img src={logoUrl} alt="Vortex Dynamics" className="h-20 w-auto object-contain" />
            </div>
            <div className="mb-5 w-fit max-w-full rounded-2xl bg-white p-3">
              <Image src="/microsoft-partner.jpg" alt="Microsoft Partner" width={738} height={297} className="h-auto w-[220px] max-w-full object-contain" />
            </div>
            <p className="leading-7 text-slate-400">
              Consultoría especializada en Microsoft Dynamics 365 Business Central, CRM, Power Platform e inteligencia artificial.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contacto</h3>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-center gap-3"><Icon name="mail" className="h-4 w-4" /> <a href={`mailto:${contactEmail}`} className="transition hover:text-white">{contactEmail}</a></p>
              <p className="flex items-center gap-3"><Icon name="phone" className="h-4 w-4" /> <a href={contactPhoneHref} className="transition hover:text-white">{contactPhone}</a></p>
              <p className="flex items-center gap-3"><Icon name="pin" className="h-4 w-4" /> España</p>
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

      <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-4 font-semibold text-white shadow-2xl shadow-green-900/25 transition duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-green-900/35">
        WhatsApp
      </a>
    </main>
  );
}
