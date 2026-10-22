import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../components/ServicePage";

const title = "Migración NAV a Business Central | Vortex Dynamics";
const description = "Planifica la migración de Dynamics NAV a Business Central: revisión de datos, desarrollos, integraciones, pruebas y formación con Vortex Dynamics.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "https://www.vortexdynamics.es/migracion-nav-business-central" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vortex Dynamics · Consultoría Microsoft" }], title, description, url: "https://www.vortexdynamics.es/migracion-nav-business-central", type: "website", locale: "es_ES" },
};
const content: ServiceContent = {
  slug: "migracion-nav-business-central", label: "Migración de Dynamics NAV a Business Central",
  title: "Migra de Dynamics NAV a Business Central con un plan para tus procesos y datos.",
  intro: "Revisamos tu versión de NAV, los desarrollos, la información y las integraciones antes de definir la transición a Business Central. Acordamos qué necesita mantener tu empresa y qué conviene simplificar con la funcionalidad estándar.",
  interest: "Migrar desde otro ERP",
  problems: ["Dependes de personalizaciones antiguas cuyo uso ya no está documentado.", "Quieres evolucionar a Business Central sin perder el control de saldos, inventario y procesos.", "Necesitas coordinar la migración con el cierre contable, la actividad diaria y las integraciones."],
  capabilities: [
    { title: "Diagnóstico del entorno NAV", text: "Inventariamos versión, empresas, usuarios, módulos, desarrollos e integraciones. Identificamos dependencias y requisitos para elegir una ruta de migración compatible." },
    { title: "Datos e histórico", text: "Acordamos qué maestros, saldos, documentos e información histórica se necesitan en el nuevo entorno. Revisamos duplicados y calidad, y definimos cómo consultar la información que se conserve aparte." },
    { title: "Personalizaciones y extensiones", text: "Clasificamos los desarrollos por uso y valor para el negocio. Estudiamos qué puede resolverse con estándar, qué requiere adaptación y qué debe convertirse o sustituirse para funcionar en el destino." },
    { title: "Integraciones y permisos", text: "Revisamos conexiones con CRM, comercio electrónico, bancos y otras aplicaciones. Documentamos flujos de datos, permisos y responsables para probar cada dependencia." },
    { title: "Pruebas y conciliación", text: "Preparamos un entorno de prueba y escenarios de finanzas, compras, ventas e inventario. Contrastamos saldos y documentos con tu equipo antes de aceptar la migración." },
    { title: "Arranque y formación", text: "Definimos tareas de corte, responsables, validaciones y contingencia. Formamos a los usuarios en sus circuitos de trabajo y acompañamos las incidencias del arranque según el alcance acordado." },
  ],
  examples: [
    { title: "Una empresa con NAV muy personalizado", text: "Primero se documentan los desarrollos y su uso real. Después se compara la operativa con Business Central para decidir qué mantener, rediseñar o retirar antes de estimar el proyecto." },
    { title: "Varias sociedades con un cierre mensual", text: "Se acuerdan criterios de conciliación, lotes de datos y ventanas de cambio. Las pruebas incluyen saldos, cobros, pagos e inventario para que cada sociedad pueda validar su información." },
  ],
  faqs: [
    { question: "¿Se puede pasar directamente de cualquier NAV a Business Central online?", answer: "La ruta depende de la versión de origen y de las personalizaciones. Puede requerir actualizaciones intermedias y adaptación de desarrollos antes de llegar a online. Revisamos los requisitos vigentes de Microsoft para tu entorno antes de comprometer una ruta." },
    { question: "¿Migramos todo el histórico o solo los datos necesarios?", answer: "Se decide durante el análisis. Una migración completa y una reimplantación con datos esenciales tienen alcances diferentes. Acordamos qué información debe estar operativa, cuál se conserva para consulta y cómo validar los saldos." },
    { question: "¿Cuánto cuesta una migración de NAV a Business Central?", answer: "La estimación depende de versión, empresas, volumen y calidad de datos, desarrollos, integraciones y pruebas. La propuesta separa licencias y servicios y concreta entregables y responsabilidades." },
    { question: "¿Cuánto tiempo estará parada la empresa?", answer: "La ventana de corte se calcula después de ensayar las cargas y las validaciones. Planificamos las tareas con tu equipo y acordamos contingencia; no prometemos una duración sin conocer el sistema." },
    { question: "¿Qué información conviene preparar para la primera llamada?", answer: "La versión de NAV, el número de sociedades y usuarios, los módulos utilizados, las integraciones principales y una lista de desarrollos conocidos. Con ello podemos orientar el análisis inicial y los siguientes pasos." },
  ],
  related: [{ title: "Implantación de Business Central", href: "/business-central" }, { title: "Dynamics 365 CRM", href: "/crm" }, { title: "Power BI y Microsoft Fabric", href: "/power-bi-fabric" }],
};
export default function MigracionNavPage() { return <ServicePage content={content} />; }
