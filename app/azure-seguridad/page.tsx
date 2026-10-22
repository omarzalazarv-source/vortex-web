import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../components/ServicePage";

const title = "Consultoría Azure y seguridad Microsoft | Vortex Dynamics";
const description = "Consultoría cloud y seguridad Microsoft: Azure, Entra, Defender, Intune y Purview. Organiza identidades, dispositivos y protección de la información.";
export const metadata: Metadata = { title, description, alternates: { canonical: "https://www.vortexdynamics.es/azure-seguridad" }, openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vortex Dynamics · Consultoría Microsoft" }], title, description, url: "https://www.vortexdynamics.es/azure-seguridad", type: "website", locale: "es_ES" } };

const content: ServiceContent = {
  "label": "Microsoft Azure · Entra · Defender · Intune · Purview",
  "title": "Consultoría Azure y seguridad del ecosistema Microsoft.",
  "intro": "Analizamos el entorno tecnológico y planificamos los servicios cloud, las identidades y la protección de la información. Definimos un alcance adaptado a tus aplicaciones, dispositivos y equipos dentro del ecosistema Microsoft.",
  "interest": "Azure y seguridad Microsoft",
  "problems": [
    "No tienes una visión clara de los accesos a las aplicaciones.",
    "Necesitas ordenar la gestión de dispositivos y usuarios.",
    "Quieres preparar el entorno cloud y el tratamiento de la información para nuevas integraciones."
  ],
  "capabilities": [
    {
      "title": "Arquitectura y servicios Azure",
      "text": "Revisamos las necesidades de las aplicaciones y las integraciones para definir una arquitectura cloud, sus componentes y responsabilidades."
    },
    {
      "title": "Identidades con Microsoft Entra",
      "text": "Analizamos usuarios, grupos y accesos para plantear la configuración de identidades y autenticación acorde con las necesidades del entorno."
    },
    {
      "title": "Dispositivos con Microsoft Intune",
      "text": "Estudiamos la gestión de equipos y aplicaciones y definimos las políticas de configuración y cumplimiento que requiere la organización."
    },
    {
      "title": "Protección con Microsoft Defender",
      "text": "Revisamos las capacidades de protección disponibles y su configuración según las cargas, dispositivos y licencias del proyecto."
    },
    {
      "title": "Información con Microsoft Purview",
      "text": "Definimos necesidades de clasificación, tratamiento y gobierno de la información para estudiar las capacidades adecuadas de Purview."
    },
    {
      "title": "Documentación y acompañamiento",
      "text": "Acordamos responsables, procedimientos y criterios de revisión. Documentamos la configuración y las tareas de seguimiento incluidas."
    }
  ],
  "examples": [
    {
      "title": "Incorporación de un equipo",
      "text": "Un proceso organiza la identidad, los grupos y los accesos que necesita cada perfil, junto con las políticas de los dispositivos."
    },
    {
      "title": "Documentos con acceso definido",
      "text": "La organización establece criterios de clasificación y tratamiento para compartir documentación según su contenido y destinatarios."
    }
  ],
  "faqs": [
    {
      "question": "¿Es necesario migrarlo todo a Azure?",
      "answer": "No. Analizamos el entorno actual y las dependencias para definir qué servicios deben mantenerse, conectarse o migrarse."
    },
    {
      "question": "¿Incluye vigilancia permanente o respuesta 24/7?",
      "answer": "No se presupone un servicio de vigilancia permanente. El soporte, los horarios y las responsabilidades se definen expresamente en la propuesta."
    },
    {
      "question": "¿Una implantación garantiza que no habrá incidentes?",
      "answer": "Ninguna configuración elimina todos los riesgos. Acordamos controles y responsabilidades y revisamos su funcionamiento dentro del alcance contratado."
    }
  ],
  "related": [
    {
      "title": "Microsoft 365",
      "href": "/microsoft-365"
    },
    {
      "title": "Copilot e IA",
      "href": "/copilot-inteligencia-artificial"
    },
    {
      "title": "Todos los servicios",
      "href": "/servicios"
    }
  ],
  "slug": "azure-seguridad"
};
export default function Page() { return <ServicePage content={content} />; }
