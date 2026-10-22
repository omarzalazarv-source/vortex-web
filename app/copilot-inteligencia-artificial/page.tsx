import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../components/ServicePage";

const title = "Consultoría Microsoft Copilot e IA empresarial | Vortex Dynamics";
const description = "Identifica casos de uso de Microsoft Copilot y crea agentes con Copilot Studio. Conecta información autorizada y automatiza tareas con Vortex Dynamics.";
export const metadata: Metadata = { title, description, alternates: { canonical: "https://www.vortexdynamics.es/copilot-inteligencia-artificial" }, openGraph: { title, description, url: "https://www.vortexdynamics.es/copilot-inteligencia-artificial", type: "website", locale: "es_ES" } };

const content: ServiceContent = {
  "label": "Microsoft Copilot · Copilot Studio · Inteligencia artificial",
  "title": "Inteligencia artificial con una tarea concreta que resolver.",
  "intro": "Te ayudamos a identificar dónde puede aportar valor la IA y cómo incorporarla al trabajo del equipo. Evaluamos los datos, los permisos y las herramientas antes de diseñar asistentes o procesos con Microsoft Copilot y Copilot Studio.",
  "interest": "Microsoft Copilot e IA",
  "problems": [
    "Tu equipo dedica tiempo a localizar y resumir información.",
    "Quieres incorporar asistentes sin dar acceso indiscriminado a los documentos.",
    "Necesitas distinguir los casos de uso útiles de una demostración aislada."
  ],
  "capabilities": [
    {
      "title": "Diagnóstico de casos de uso",
      "text": "Priorizamos tareas, usuarios y resultados esperados. Definimos cómo evaluar la utilidad del asistente y sus límites."
    },
    {
      "title": "Microsoft Copilot",
      "text": "Revisamos los usos de Copilot en las herramientas de trabajo disponibles y la preparación de la información para su adopción."
    },
    {
      "title": "Agentes con Copilot Studio",
      "text": "Diseñamos agentes con objetivos delimitados y fuentes de conocimiento autorizadas, con rutas de derivación a una persona."
    },
    {
      "title": "Conexión con procesos",
      "text": "Estudiamos las acciones e integraciones con Power Platform, CRM y ERP. Acordamos cuándo una acción necesita revisión humana."
    },
    {
      "title": "Permisos y validación",
      "text": "Revisamos accesos y probamos respuestas y acciones con escenarios representativos. Identificamos errores y situaciones fuera de alcance."
    },
    {
      "title": "Formación y seguimiento",
      "text": "Preparamos pautas de uso y criterios para revisar los resultados. Acompañamos la adopción y el ajuste del asistente."
    }
  ],
  "examples": [
    {
      "title": "Consulta de procedimientos",
      "text": "Un asistente ayuda a encontrar información en documentación autorizada y deriva las consultas que requieren intervención de un responsable."
    },
    {
      "title": "Preparación de información comercial",
      "text": "Un proceso ayuda a resumir información para preparar una reunión; el equipo revisa el resultado antes de utilizarlo."
    }
  ],
  "faqs": [
    {
      "question": "¿La IA sustituye la revisión de una persona?",
      "answer": "No planteamos la IA como una garantía de exactitud. Definimos qué resultados deben revisarse y qué acciones requieren aprobación humana."
    },
    {
      "question": "¿Puede consultar toda la documentación de la empresa?",
      "answer": "El alcance se define con fuentes y permisos acordados. Revisamos los accesos antes de conectar información al asistente."
    },
    {
      "question": "¿Qué necesitamos para empezar?",
      "answer": "Un caso de uso concreto, responsables y fuentes de información identificadas. Después evaluamos la preparación de los datos, las herramientas y las licencias."
    }
  ],
  "related": [
    {
      "title": "Power Platform",
      "href": "/power-platform"
    },
    {
      "title": "Microsoft 365",
      "href": "/microsoft-365"
    },
    {
      "title": "Azure y seguridad",
      "href": "/azure-seguridad"
    }
  ],
  "slug": "copilot-inteligencia-artificial"
};
export default function Page() { return <ServicePage content={content} />; }
