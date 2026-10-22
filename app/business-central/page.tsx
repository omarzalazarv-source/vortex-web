import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../components/ServicePage";

const title = "Consultoría e implantación Business Central | Vortex Dynamics";
const description = "Implantamos Microsoft Dynamics 365 Business Central y migramos desde NAV. Conecta finanzas, compras, ventas y almacén. Solicita tu diagnóstico gratuito.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "https://www.vortexdynamics.es/business-central" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vortex Dynamics · Consultoría Microsoft" }], title, description, url: "https://www.vortexdynamics.es/business-central", type: "website", locale: "es_ES" },
};
const content: ServiceContent = {
  slug: "business-central", label: "Microsoft Dynamics 365 Business Central",
  title: "Consultoría e implantación de Business Central para tu empresa.",
  intro: "Te ayudamos a implantar Business Central, migrar desde Dynamics NAV y conectar tus herramientas de trabajo. Partimos de tus procesos para ordenar la información y reducir las tareas manuales.",
  interest: "Implantar Business Central",
  problems: ["Dependes de Excel para reunir información de varios departamentos.", "Tu ERP actual limita las integraciones y la evolución del negocio.", "Ventas, compras y almacén trabajan con datos que no coinciden."],
  capabilities: [
    { title: "Implantación de Business Central", text: "Analizamos los procesos, configuramos la solución y acompañamos la puesta en marcha. Definimos el alcance y las prioridades antes de iniciar la implantación." },
    { title: "Migración desde Dynamics NAV", text: "Revisamos datos, desarrollos y procesos del sistema actual para preparar la transición. Acordamos qué conservar, qué adaptar y qué sustituir por funcionalidad estándar." },
    { title: "Finanzas, compras y ventas", text: "Conectamos los circuitos administrativos y financieros para facilitar el seguimiento de documentos, cobros, pagos y operaciones de la empresa." },
    { title: "Almacén, producción y servicios", text: "Estudiamos la operativa de inventario, fabricación, ensamblado o servicios y definimos la configuración e integraciones que necesita cada circuito." },
    { title: "CRM, Shopify y sistemas externos", text: "Diseñamos la conexión con Dynamics 365 CRM, Shopify y otras aplicaciones. Definimos datos, sentido de sincronización y controles para evitar duplicidades." },
    { title: "Reporting, formación y soporte", text: "Preparamos información para el análisis con Power BI y Excel, formamos a cada perfil de usuario y acompañamos la evolución funcional tras el arranque." },
  ],
  related: [{ title: "Migración de NAV a Business Central", href: "/migracion-nav-business-central" }, { title: "Dynamics 365 CRM", href: "/crm" }, { title: "Power BI y Fabric", href: "/power-bi-fabric" }],
  faqs: [
    { question: "¿Podemos implantar Business Central por fases?", answer: "Sí. Definimos una primera fase con los procesos prioritarios y planificamos las siguientes según dependencias, capacidad del equipo y necesidades del negocio." },
    { question: "¿Cuánto cuesta y cuánto tarda la implantación?", answer: "Depende de las empresas y usuarios implicados, los procesos, los datos y las integraciones. Tras revisar estas necesidades, preparamos una propuesta que diferencia licencias, servicios y posibles desarrollos." },
    { question: "¿Podemos conservar información de NAV o del ERP actual?", answer: "Revisamos la calidad y disponibilidad de los datos y acordamos qué maestros, saldos y documentos deben trasladarse. La migración se prueba antes del arranque con criterios de validación definidos." },
    { question: "¿Podéis conectar Business Central con nuestro CRM o tienda online?", answer: "Sí. Analizamos los sistemas y las opciones de integración para definir cómo compartir clientes, artículos, pedidos u otros datos según el proceso y las capacidades de cada aplicación." },
  ],
};
export default function BusinessCentralPage() { return <ServicePage content={content} />; }
