import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import StructuredData from "../components/StructuredData";
import ContactForm from "../components/ContactForm";
import styles from "./page.module.css";

const title = "Vortex AI Operations | Asistente empresarial · Próximamente";
const description = "Próximamente: tu asistente empresarial privado conectado con Business Central, Microsoft 365 y CRM. Información, menos tareas administrativas y automatización supervisada.";
const url = "https://www.vortexdynamics.es/vortex-ai-operations";
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "es_ES", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vortex Dynamics · Vortex AI Operations" }] },
};

const useCases = [
  { no: "01", mode: "Consulta", title: "Tu ERP, en una conversación", text: "Consultar facturas, clientes y pedidos en Business Central mediante lenguaje natural, dentro de los permisos del usuario.", product: "Business Central" },
  { no: "02", mode: "Prepara", title: "Del contexto al primer borrador", text: "Preparar propuestas y correos comerciales con información del negocio, para que tu equipo los revise antes de enviarlos.", product: "CRM · Microsoft 365" },
  { no: "03", mode: "Encuentra", title: "La documentación que necesitas", text: "Consultar SharePoint y documentación interna para localizar procedimientos e información útil sin recorrer carpetas.", product: "SharePoint" },
  { no: "04", mode: "Analiza", title: "Una visión de ventas y proyectos", text: "Generar informes de ventas y proyectos a partir de las fuentes conectadas y de los indicadores definidos por tu empresa.", product: "ERP · CRM · Proyectos" },
  { no: "05", mode: "Detecta", title: "Incidencias con un responsable", text: "Detectar situaciones que requieran atención y avisar al responsable, según las reglas y los criterios acordados.", product: "Alertas · Seguimiento" },
  { no: "06", mode: "Actúa", title: "Operaciones bajo tu control", text: "Ejecutar operaciones autorizadas en ERP y CRM, con validación humana en los pasos que tu organización defina.", product: "ERP · CRM · Aprobaciones" },
];
const faqs = [
  ["¿Ya se puede contratar Vortex AI Operations?", "Todavía no. Estamos presentando la propuesta y recogiendo necesidades de empresas interesadas. Puedes solicitar información para conocer su evolución; no hay una fecha pública de lanzamiento confirmada."],
  ["¿Para qué empresas se está planteando?", "Para empresas de servicios, distribución o industria con 10–100 empleados que ya trabajen con Business Central, Microsoft 365 o un CRM y quieran reducir tareas administrativas y conectar mejor su información."],
  ["¿Qué significa que sea un asistente empresarial privado?", "El enfoque es trabajar con las fuentes de información y los accesos que autorice cada empresa. El modelo de despliegue, el tratamiento de datos y las condiciones de seguridad se concretarán antes de contratar o conectar sistemas."],
  ["¿Podrá modificar datos o enviar comunicaciones por su cuenta?", "La propuesta contempla operaciones autorizadas con supervisión. Cada empresa definirá qué acciones se permiten y cuáles necesitan aprobación. Los borradores comerciales se plantean para revisión antes de su envío."],
  ["¿Estarán disponibles todas las conexiones desde el primer día?", "Los casos mostrados describen capacidades previstas. Las conexiones y funciones disponibles se confirmarán durante el desarrollo y dependerán de los sistemas, permisos, licencias y alcance de cada implantación."],
];

export default function VortexAiOperationsPage() {
  return <div className={styles.page}>
    <SiteHeader contactHref="#informacion" />
    <main id="contenido">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Vortex AI Operations · Próximamente", description, url, publisher: { "@id": "https://www.vortexdynamics.es/#organization" }, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.vortexdynamics.es/" }, { "@type": "ListItem", position: 2, name: "Vortex AI Operations", item: url }] } }} />
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div><p className={styles.badge}><span aria-hidden="true" /> Próximamente</p><p className={styles.eyebrow}>LA PRÓXIMA CONEXIÓN DE TU EMPRESA</p><h1>Vortex AI<br /><span>Operations</span></h1><p className={styles.tagline}>Tu asistente empresarial privado,<br />conectado con tu negocio.</p><p className={styles.intro}>Menos trabajo administrativo. Información accesible mediante lenguaje natural. Procesos automatizados con supervisión.</p><div className={styles.actions}><a href="#informacion" className={styles.primary}>Quiero recibir información <span aria-hidden="true">↗</span></a><a href="#casos-de-uso" className={styles.secondary}>Explorar lo que podría hacer ↓</a></div><p className={styles.status}>Una propuesta en desarrollo. Solicita información sobre su evolución.</p></div>
          <div className={styles.workspace} aria-label="Ejemplo ilustrativo de una operación supervisada">
            <div className={styles.workspaceTop}><span className={styles.mark} aria-hidden="true">VX</span><span>AI OPERATIONS<small>CONTEXTO + ACCIÓN + SUPERVISIÓN</small></span><span className={styles.concept}>Concepto</span></div>
            <div className={styles.sources}><span>Business Central</span><span>Microsoft 365</span><span>CRM</span></div>
            <div className={styles.question}><span className={styles.miniLabel}>TU EQUIPO PREGUNTA</span><p>¿Qué pedidos necesitan atención? Prepara un resumen para el responsable.</p></div>
            <div className={styles.response}><span className={styles.miniLabel}>EL FLUJO PREVISTO</span><ol><li><span aria-hidden="true">01</span><div><strong>Consultar el contexto</strong><p>Pedidos y documentación autorizada.</p></div></li><li><span aria-hidden="true">02</span><div><strong>Preparar la información</strong><p>Resumen de incidencias y próximos pasos.</p></div></li><li><span aria-hidden="true">03</span><div><strong>Pedir tu validación</strong><p>El responsable revisa antes de actuar.</p></div></li></ol></div>
            <div className={styles.approval}><span aria-hidden="true">◇</span><div><strong>Tu equipo conserva el control</strong><p>Acciones sujetas a permisos y aprobación.</p></div></div>
            <p className={styles.disclaimer}>Ejemplo ilustrativo. Esta vista no está conectada a datos reales.</p>
          </div>
        </div>
        <div className={styles.heroBottom}><span>UN ASISTENTE. EL CONTEXTO DE TU NEGOCIO.</span><div>Business Central <b aria-hidden="true">+</b> Microsoft 365 <b aria-hidden="true">+</b> CRM</div></div>
      </section>
      <section className={styles.section} aria-labelledby="encaje"><div className={styles.fit}><div><p className={styles.kicker}>PENSADO PARA TU OPERATIVA</p><h2 id="encaje">Tu empresa ya tiene herramientas.<br />El siguiente paso es conectarlas.</h2></div><div><p>Para empresas de <strong>servicios, distribución e industria</strong> con <strong>10–100 empleados</strong> que ya utilicen Business Central, Microsoft 365 o un CRM.</p><p>Una propuesta para equipos que dedican demasiado tiempo a buscar información, preparar documentos y trasladar datos entre sistemas.</p><div className={styles.pills}><span>Servicios</span><span>Distribución</span><span>Industria</span></div></div></div></section>
      <section className={styles.useSection} id="casos-de-uso"><div className={styles.sectionInner}><p className={styles.kicker}>DE LA PREGUNTA AL SIGUIENTE PASO</p><div className={styles.sectionHeading}><h2>Lo que podría hacer<br />por tu equipo.</h2><p>Casos de uso previstos para conectar la información con el trabajo diario. Las funciones y conexiones se confirmarán durante el desarrollo.</p></div><div className={styles.cards}>{useCases.map(item=><article className={styles.card} key={item.no}><div className={styles.cardTop}><span>{item.no}</span><span>{item.mode}</span></div><h3>{item.title}</h3><p>{item.text}</p><span className={styles.product}>{item.product}</span></article>)}</div></div></section>
      <section className={styles.control}><div className={styles.sectionInner}><p className={styles.eyebrow}>AUTOMATIZACIÓN CON CRITERIO</p><div className={styles.sectionHeading}><h2>Más capacidad.<br /><span>El control sigue siendo tuyo.</span></h2><p>El enfoque de Vortex AI Operations: conectar las tareas con el contexto del negocio y situar a las personas en las decisiones que lo necesitan.</p></div><div className={styles.principles}>{[["Fuentes autorizadas", "Trabajar con los sistemas y la documentación que tu empresa decida conectar."],["Permisos definidos", "Delimitar qué información se puede consultar y qué operaciones se pueden solicitar."],["Supervisión humana", "Revisar propuestas y aprobar las acciones que requieran validación antes de ejecutarse."]].map(([label,text],i)=><article key={label}><span>0{i+1}</span><h3>{label}</h3><p>{text}</p></article>)}</div><p className={styles.scope}>El despliegue, las condiciones de privacidad y seguridad y el alcance de las integraciones se definirán antes de cualquier contratación o conexión a sistemas.</p></div></section>
      <section className={styles.section} aria-labelledby="preguntas"><div className={styles.faqGrid}><div><p className={styles.kicker}>ANTES DE EMPEZAR</p><h2 id="preguntas">Resolvemos las<br />primeras preguntas.</h2><Link href="/servicios" className={styles.inlineLink}>Conoce los servicios actuales de Vortex ↗</Link></div><div className={styles.faqs}>{faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className={styles.contactSection} id="informacion"><div className={styles.contactGrid}><div><p className={styles.kicker}>PRÓXIMAMENTE · VORTEX AI OPERATIONS</p><h2>Cuéntanos dónde<br />te ayudaría más.</h2><p className={styles.contactIntro}>¿Qué tarea administrativa te gustaría simplificar? ¿Qué información necesitas tener más a mano?</p><p>Solicita información y comparte las necesidades de tu empresa. Nos ayudará a entender el encaje y a contarte cómo evoluciona la propuesta.</p><p className={styles.contactNote}>Esta solicitud no es una contratación, una reserva de acceso ni una confirmación de disponibilidad.</p></div><ContactForm source="/vortex-ai-operations" interest="Vortex AI Operations · Próximamente" variant="launch" /></div></section>
    </main><SiteFooter />
  </div>;
}
