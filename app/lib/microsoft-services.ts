export const microsoftServices = [
  {
    id: "erp", title: "ERP y operaciones", products: "Dynamics 365 Business Central",
    description: "Centralizamos finanzas, compras, ventas, inventario y producción para conectar la gestión de tu empresa.",
    tasks: ["Consultoría e implantación adaptada a tus procesos.", "Migración de Dynamics NAV a Business Central.", "Integración con CRM, comercio electrónico y sistemas externos."],
    href: "/business-central",
  },
  {
    id: "crm", title: "CRM y clientes", products: "Dynamics 365 Sales, Customer Service, Field Service y Customer Insights",
    description: "Conectamos el seguimiento comercial, la atención al cliente, los servicios de campo y el marketing.",
    tasks: ["Definición del proceso comercial y la gestión de oportunidades.", "Configuración de atención al cliente e intervenciones.", "Conexión entre CRM, ERP y herramientas de trabajo."],
    href: "/crm",
  },
  {
    id: "microsoft-365", title: "Productividad y colaboración", products: "Microsoft 365 · Teams · Outlook · SharePoint · Excel · Word · PowerPoint",
    description: "Organizamos la colaboración, la comunicación y la documentación para que los equipos trabajen con información compartida.",
    tasks: ["Configuración de espacios de trabajo y colaboración en Teams.", "Organización documental y permisos en SharePoint.", "Integración de las herramientas de Microsoft 365 con los procesos de negocio."],
    href: "/microsoft-365",
  },
  {
    id: "power-platform", title: "Aplicaciones y automatización", products: "Power Platform · Power Apps · Power Automate · Copilot Studio · Power Pages · Dataverse",
    description: "Diseñamos aplicaciones, flujos, agentes y portales para simplificar tareas y conectar los procesos de tu organización.",
    tasks: ["Aplicaciones de negocio con Power Apps y Dataverse.", "Flujos de aprobación y automatización con Power Automate.", "Agentes con Copilot Studio y portales con Power Pages."],
    href: "/power-platform",
  },
  {
    id: "datos", title: "Datos y análisis", products: "Power BI · Microsoft Fabric",
    description: "Conectamos fuentes de información y preparamos modelos, informes y cuadros de mando para apoyar las decisiones con datos.",
    tasks: ["Indicadores financieros, comerciales y operativos con Power BI.", "Integración y preparación de datos con Microsoft Fabric.", "Definición de métricas, calidad de información y acceso a los informes."],
    href: "/power-bi-fabric",
  },
  {
    id: "copilot", title: "Inteligencia artificial", products: "Microsoft Copilot · Copilot Studio",
    description: "Identificamos e implantamos asistentes y procesos inteligentes que respondan a necesidades concretas de tu empresa.",
    tasks: ["Evaluación de casos de uso y preparación de la información.", "Configuración de asistentes conectados a fuentes autorizadas.", "Formación y acompañamiento para incorporar IA al trabajo diario."],
    href: "/copilot-inteligencia-artificial",
  },
  {
    id: "azure-seguridad", title: "Nube y seguridad", products: "Microsoft Azure · Microsoft Entra · Microsoft Defender · Microsoft Intune · Microsoft Purview",
    description: "Planificamos entornos cloud y la protección de identidades, dispositivos e información dentro del ecosistema Microsoft.",
    tasks: ["Análisis y configuración de servicios cloud en Azure.", "Gestión de identidades y accesos con Entra, y de dispositivos con Intune.", "Protección con Defender y gobierno de la información con Purview."],
    href: "/azure-seguridad",
  },
] as const;
