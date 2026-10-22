import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../components/ServicePage";

const title = "Consultoría Microsoft 365 y SharePoint | Vortex Dynamics";
const description = "Organiza colaboración y documentación con Microsoft 365, Teams, Outlook y SharePoint. Integra herramientas y procesos con Vortex Dynamics.";
export const metadata: Metadata = { title, description, alternates: { canonical: "https://www.vortexdynamics.es/microsoft-365" }, openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vortex Dynamics · Consultoría Microsoft" }], title, description, url: "https://www.vortexdynamics.es/microsoft-365", type: "website", locale: "es_ES" } };

const content: ServiceContent = {
  "label": "Microsoft 365 · Productividad y colaboración",
  "title": "Consultoría Microsoft 365, Teams y SharePoint.",
  "intro": "Ayudamos a organizar los espacios de colaboración, los documentos y las herramientas de trabajo de Microsoft 365. Definimos una forma de compartir información que encaje con los equipos y sus procesos.",
  "interest": "Microsoft 365 y SharePoint",
  "problems": [
    "Los documentos están repartidos entre carpetas, correos y equipos.",
    "Circulan varias versiones de un mismo archivo.",
    "Necesitas ordenar quién accede a cada espacio y cómo se comparte la información."
  ],
  "capabilities": [
    {
      "title": "Colaboración con Teams",
      "text": "Definimos equipos, canales y criterios de uso para organizar conversaciones y colaboración por área o proyecto."
    },
    {
      "title": "Gestión documental SharePoint",
      "text": "Estructuramos sitios, bibliotecas y metadatos para clasificar documentos y facilitar su consulta. Acordamos permisos y responsables."
    },
    {
      "title": "Outlook y trabajo diario",
      "text": "Revisamos las necesidades de comunicación, calendarios y organización del trabajo para configurar una operativa compartida."
    },
    {
      "title": "Excel, Word y PowerPoint",
      "text": "Preparamos plantillas y formas de colaboración sobre documentos para mejorar la consistencia de la información del equipo."
    },
    {
      "title": "Conexión con los procesos",
      "text": "Estudiamos la integración con ERP, CRM y Power Automate para relacionar documentos, comunicaciones y tareas del negocio."
    },
    {
      "title": "Adopción y formación",
      "text": "Acompañamos a los usuarios con formación por perfiles y pautas de trabajo. Documentamos la organización y las responsabilidades acordadas."
    }
  ],
  "examples": [
    {
      "title": "Documentación por proyecto",
      "text": "Un equipo comparte conversaciones en Teams y documentos organizados en SharePoint, con acceso según la función de cada participante."
    },
    {
      "title": "Revisión de documentos",
      "text": "Un documento sigue una revisión interna y una notificación al responsable mediante un flujo acordado con el equipo."
    }
  ],
  "faqs": [
    {
      "question": "¿Podéis aprovechar nuestras licencias actuales?",
      "answer": "Revisamos las suscripciones y las herramientas disponibles antes de proponer cambios. Las funcionalidades y licencias necesarias se concretan según el alcance."
    },
    {
      "question": "¿Podemos trasladar la documentación existente?",
      "answer": "Sí. Analizamos ubicaciones, volumen, estructura y permisos para preparar una organización de destino y una migración validada."
    },
    {
      "question": "¿Incluye formación para los usuarios?",
      "answer": "La formación se define en la propuesta y puede organizarse por equipo, perfil o proceso para facilitar la adopción."
    }
  ],
  "related": [
    {
      "title": "Power Platform",
      "href": "/power-platform"
    },
    {
      "title": "Copilot e IA",
      "href": "/copilot-inteligencia-artificial"
    },
    {
      "title": "Azure y seguridad",
      "href": "/azure-seguridad"
    }
  ],
  "slug": "microsoft-365"
};
export default function Page() { return <ServicePage content={content} />; }
