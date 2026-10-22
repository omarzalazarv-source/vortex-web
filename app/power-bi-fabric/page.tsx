import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../components/ServicePage";

const title = "Consultoría Power BI y Microsoft Fabric | Vortex Dynamics";
const description = "Integra datos de ERP y CRM y crea cuadros de mando con Power BI y Microsoft Fabric. Consultoría, modelos de datos e indicadores de negocio.";
export const metadata: Metadata = { title, description, alternates: { canonical: "https://www.vortexdynamics.es/power-bi-fabric" }, openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vortex Dynamics · Consultoría Microsoft" }], title, description, url: "https://www.vortexdynamics.es/power-bi-fabric", type: "website", locale: "es_ES" } };

const content: ServiceContent = {
  "label": "Power BI · Microsoft Fabric · Datos y análisis",
  "title": "Consultoría Power BI y Microsoft Fabric para tu negocio.",
  "intro": "Conectamos las fuentes de información de tu empresa y diseñamos indicadores que tu equipo entienda. Con Power BI y Microsoft Fabric planteamos una base de análisis adaptada a tus procesos y prioridades.",
  "interest": "Power BI y Microsoft Fabric",
  "problems": [
    "Preparar los informes exige reunir varios Excel cada mes.",
    "Cada departamento calcula los indicadores de forma distinta.",
    "Necesitas analizar finanzas, ventas y operaciones con información relacionada."
  ],
  "capabilities": [
    {
      "title": "Análisis de necesidades",
      "text": "Identificamos las decisiones que debe apoyar cada informe, sus usuarios y las fuentes de datos disponibles. Priorizamos los indicadores antes de diseñar gráficos."
    },
    {
      "title": "Integración de fuentes",
      "text": "Relacionamos información de Business Central, CRM, archivos y otros sistemas. Definimos los procesos de carga y transformación adecuados."
    },
    {
      "title": "Modelos de datos",
      "text": "Diseñamos relaciones, medidas y criterios de cálculo para mantener una interpretación coherente de los indicadores. Documentamos las reglas de negocio."
    },
    {
      "title": "Cuadros de mando Power BI",
      "text": "Informes financieros, comerciales y operativos con navegación y filtros adaptados a sus usuarios. Revisamos las visualizaciones con quienes tomarán las decisiones."
    },
    {
      "title": "Microsoft Fabric",
      "text": "Estudiamos la arquitectura para integrar, preparar y analizar datos con Fabric cuando el alcance lo requiere. Definimos fuentes, procesos y responsabilidades."
    },
    {
      "title": "Acceso, calidad y formación",
      "text": "Configuramos los accesos acordados, revisamos la calidad de la información y formamos al equipo para interpretar y utilizar los informes."
    }
  ],
  "examples": [
    {
      "title": "Seguimiento comercial",
      "text": "Un cuadro de mando relaciona oportunidades del CRM y ventas del ERP para analizar la actividad y su evolución."
    },
    {
      "title": "Control financiero",
      "text": "Un informe reúne los datos acordados de ingresos, costes y cobros para revisar la situación con criterios compartidos."
    }
  ],
  "faqs": [
    {
      "question": "¿Podéis trabajar con Business Central y Excel?",
      "answer": "Sí. Revisamos las fuentes, la estructura y la calidad de los datos para definir cómo integrarlos y actualizarlos."
    },
    {
      "question": "¿Necesitamos Fabric para cualquier informe?",
      "answer": "No. Elegimos la arquitectura según el volumen, las fuentes y los procesos. Un primer informe puede resolverse con un alcance más sencillo."
    },
    {
      "question": "¿Los datos estarán siempre actualizados en tiempo real?",
      "answer": "La frecuencia depende de las fuentes, los métodos de conexión y las capacidades contratadas. Acordamos la actualización necesaria y las limitaciones antes de implantar."
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
      "title": "Power Platform",
      "href": "/power-platform"
    }
  ],
  "slug": "power-bi-fabric"
};
export default function Page() { return <ServicePage content={content} />; }
