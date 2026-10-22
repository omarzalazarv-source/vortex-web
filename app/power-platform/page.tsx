import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../components/ServicePage";

const title = "Consultoría Power Platform y automatización | Vortex Dynamics";
const description = "Aplicaciones con Power Apps, flujos con Power Automate, agentes con Copilot Studio y portales con Power Pages. Conecta tus procesos con Vortex Dynamics.";
export const metadata: Metadata = { title, description, alternates: { canonical: "https://www.vortexdynamics.es/power-platform" }, openGraph: { title, description, url: "https://www.vortexdynamics.es/power-platform", type: "website", locale: "es_ES" } };

const content: ServiceContent = {
  "label": "Power Platform · Aplicaciones y automatización",
  "title": "Menos tareas repetidas. Más tiempo para avanzar.",
  "intro": "Diseñamos aplicaciones y automatizaciones que conectan personas, datos y herramientas. Partimos de un proceso concreto para construir una solución con Power Platform que tu equipo pueda utilizar y mantener.",
  "interest": "Power Platform y automatización",
  "problems": [
    "Las aprobaciones se pierden entre correos y mensajes.",
    "Tu equipo copia los mismos datos en varias aplicaciones.",
    "Necesitas una aplicación interna o un portal que se adapte a tus procesos."
  ],
  "capabilities": [
    {
      "title": "Power Apps y Dataverse",
      "text": "Aplicaciones para solicitudes, seguimiento de operaciones y consulta de información. Definimos los datos, los roles y las pantallas según el trabajo de cada equipo."
    },
    {
      "title": "Power Automate",
      "text": "Flujos de aprobación, avisos y sincronización entre sistemas. Acordamos las reglas de negocio, el tratamiento de errores y quién supervisa cada automatización."
    },
    {
      "title": "Copilot Studio",
      "text": "Agentes para consultas y tareas delimitadas, conectados a fuentes autorizadas. Definimos qué pueden responder, qué acciones ejecutar y cuándo derivar a una persona."
    },
    {
      "title": "Power Pages",
      "text": "Portales para clientes, proveedores o colaboradores. Diseñamos los formularios y el acceso a la información que necesita cada perfil."
    },
    {
      "title": "Integración con ERP y CRM",
      "text": "Conectamos las aplicaciones con Business Central, Dynamics 365 CRM y otros sistemas. Revisamos conectores, interfaces y necesidades de desarrollo."
    },
    {
      "title": "Gobierno y evolución",
      "text": "Definimos entornos, permisos y responsabilidades. Documentamos los flujos y formamos al equipo para gestionar el uso y las mejoras."
    }
  ],
  "examples": [
    {
      "title": "Aprobación de compras",
      "text": "Una solicitud recoge los datos necesarios, sigue una aprobación y avisa al equipo responsable para continuar la gestión."
    },
    {
      "title": "Portal de proveedores",
      "text": "Un proveedor envía documentación mediante un portal y el equipo interno revisa su estado sin intercambiar versiones por correo."
    }
  ],
  "faqs": [
    {
      "question": "¿Podemos empezar por una sola automatización?",
      "answer": "Sí. Elegimos un proceso con reglas claras y responsables identificados. Validamos su funcionamiento antes de ampliar la solución a otros equipos."
    },
    {
      "question": "¿Es necesario sustituir nuestro ERP?",
      "answer": "No necesariamente. Estudiamos cómo conectar las aplicaciones existentes y qué información debe compartir cada sistema."
    },
    {
      "question": "¿Qué licencias necesitamos?",
      "answer": "Depende de las aplicaciones, usuarios, conectores y capacidades utilizadas. Revisamos las licencias actuales y concretamos los requisitos en la propuesta."
    }
  ],
  "related": [
    {
      "title": "Business Central",
      "href": "/business-central"
    },
    {
      "title": "Dynamics 365 CRM",
      "href": "/crm"
    },
    {
      "title": "Copilot e IA",
      "href": "/copilot-inteligencia-artificial"
    }
  ],
  "slug": "power-platform"
};
export default function Page() { return <ServicePage content={content} />; }
