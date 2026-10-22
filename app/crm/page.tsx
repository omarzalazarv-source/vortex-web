import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../components/ServicePage";

const title = "Consultoría e implantación Dynamics 365 CRM | Vortex Dynamics";
const description = "Implantamos Dynamics 365 CRM: Sales, Customer Service, Field Service y Customer Insights. Integra ventas, atención al cliente y Business Central.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "https://www.vortexdynamics.es/crm" },
  openGraph: { title, description, url: "https://www.vortexdynamics.es/crm", type: "website", locale: "es_ES" },
};
const content: ServiceContent = {
  slug: "crm", label: "Microsoft Dynamics 365 CRM",
  title: "Da seguimiento a cada oportunidad y conecta toda la relación con tus clientes.",
  intro: "Implantamos soluciones CRM de Microsoft para organizar ventas, atención al cliente, servicios de campo y marketing. Conectamos los procesos comerciales con Business Central y las herramientas de tu equipo.",
  interest: "Implantar Dynamics 365 CRM",
  problems: ["Las oportunidades se reparten entre hojas de cálculo, correos y agendas personales.", "No tienes una visión compartida de cada cliente y sus conversaciones.", "El equipo comercial repite datos al pasar una venta a administración."],
  capabilities: [
    { title: "Dynamics 365 Sales", text: "Organiza leads, cuentas, contactos y oportunidades. Definimos etapas comerciales, actividades y seguimiento para que el equipo sepa qué acciones tiene pendientes." },
    { title: "Dynamics 365 Customer Service", text: "Estructura la atención al cliente con casos, colas, acuerdos de nivel de servicio y bases de conocimiento adaptados a tu proceso de soporte." },
    { title: "Dynamics 365 Field Service", text: "Planifica recursos, órdenes de trabajo e intervenciones. Conecta la información del cliente con las tareas que realiza tu equipo de servicio de campo." },
    { title: "Customer Insights", text: "Diseñamos recorridos y comunicaciones con Journeys y estudiamos la unificación y segmentación de los datos de clientes con Data, según las necesidades del proyecto." },
    { title: "CRM integrado con tu ERP", text: "Definimos cómo compartir información comercial y operativa entre CRM y Business Central para dar continuidad al proceso desde la oportunidad hasta la gestión administrativa." },
    { title: "Power Platform, Copilot e IA", text: "Creamos aplicaciones y automatizaciones con Dataverse, Power Apps y Power Automate. Evaluamos los usos de Copilot e IA según tus datos, permisos y licencias." },
  ],
  faqs: [
    { question: "¿Necesito todas las aplicaciones de Dynamics 365?", answer: "No. Partimos de lo que necesitas resolver y elegimos las aplicaciones adecuadas. Puedes empezar por el proceso comercial e incorporar otros ámbitos cuando tenga sentido." },
    { question: "¿Se puede migrar nuestra cartera de clientes?", answer: "Sí. Revisamos las fuentes disponibles, los campos y la calidad de la información. Acordamos reglas de limpieza, duplicados y validación antes de cargar los datos en el CRM." },
    { question: "¿Se integra con Business Central y Microsoft 365?", answer: "Analizamos la integración con Business Central, Outlook, Teams y otras herramientas de Microsoft 365. Definimos qué información compartir y qué configuración, conectores o desarrollos requiere el proyecto." },
    { question: "¿Qué incluye el servicio de implantación CRM?", answer: "Según el alcance acordado, incluye análisis funcional, configuración, migración, integraciones, pruebas, formación y acompañamiento al arranque. Detallamos servicios y licencias en la propuesta." },
  ],
};
export default function CrmPage() { return <ServicePage content={content} />; }
