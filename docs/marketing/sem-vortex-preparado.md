# Preparación SEM · Vortex Dynamics

Estado: preparado en el repositorio, sin importar a Google Ads y sin campañas activadas. Presupuesto no definido. No hay gasto autorizado.

## Enfoque inicial

Campaña de búsqueda para captar empresas que buscan implantación de Business Central, migración de NAV o Dynamics 365 CRM. Tres grupos separados, cada uno con su página de destino. Son propuestas de palabras clave por intención; todavía no son datos de volumen, CPC ni previsiones de resultados de Keyword Planner.

Propuesta para revisar antes de activar: idioma español, España con segmentación por presencia, solo Búsqueda de Google, sin Display ni socios de búsqueda inicialmente. El alcance geográfico y el presupuesto deben confirmarse. Con presupuesto pequeño, priorizar un solo grupo tras revisar demanda y coste estimado; no dividirlo automáticamente entre todos.

Concordancias exacta y de frase como punto de partida para controlar consultas. Exacta también incluye búsquedas de la misma intención; no es coincidencia literal. Revisar términos de búsqueda y negativas para ajustar el alcance. Puja y límite de CPC pendientes de datos de Keyword Planner y presupuesto, sin valores inventados.

## Anuncios y palabras clave

### Business Central

Destino: https://www.vortexdynamics.es/business-central

Palabras clave exactas:

- [implantación business central]
- [consultoría business central]
- [consultor business central]
- [implantar erp microsoft]

Versiones de frase disponibles en el JSON.

Titulares (máximo 30 caracteres):

- Implantación Business Central
- Consultoría Business Central
- ERP Microsoft para tu empresa
- Conecta finanzas y operaciones
- Vortex Dynamics
- Equipo 100 % sénior
- 11 años de experiencia
- Implantación por fases
- Integra ERP y CRM
- Diagnóstico gratuito

Descripciones (máximo 90 caracteres):

- Implanta Business Central según tus procesos. Reserva una llamada gratuita de 30 minutos.
- Conecta finanzas, compras, ventas y almacén. Define el alcance con un equipo sénior.
- Empieza por tus prioridades y evoluciona por fases. Consultoría e integración Microsoft.
- Analizamos tu situación para concretar servicios, licencias y siguientes pasos.

### Migración NAV

Destino: https://www.vortexdynamics.es/migracion-nav-business-central

Palabras clave exactas:

- [migrar nav a business central]
- [migración nav business central]
- [actualizar dynamics nav]
- [consultoría migración nav]

Versiones de frase disponibles en el JSON.

Titulares (máximo 30 caracteres):

- De NAV a Business Central
- Planifica la migración de NAV
- Revisa datos e integraciones
- Migra con un alcance definido
- Vortex Dynamics
- Equipo 100 % sénior
- 11 años de experiencia
- Pruebas antes del arranque
- Formación para tu equipo
- Diagnóstico gratuito

Descripciones (máximo 90 caracteres):

- Revisa datos y desarrollos de NAV antes de definir tu migración a Business Central.
- Acordamos alcance, pruebas y validaciones con tu equipo. Solicita un diagnóstico gratuito.
- Estudia qué mantener, adaptar o sustituir. Migración de NAV con prioridades claras.
- Planifica la transición y la formación. Reserva una llamada gratuita de 30 minutos.

### Dynamics 365 CRM

Destino: https://www.vortexdynamics.es/crm

Palabras clave exactas:

- [implantación dynamics 365 crm]
- [consultoría dynamics 365 crm]
- [consultor dynamics 365 sales]
- [integrar crm business central]

Versiones de frase disponibles en el JSON.

Titulares (máximo 30 caracteres):

- Implantación Dynamics 365 CRM
- Consultoría CRM Microsoft
- Conecta ventas y clientes
- Dynamics 365 Sales
- Vortex Dynamics
- Equipo 100 % sénior
- 11 años de experiencia
- Integra CRM y Business Central
- Mejora tu proceso comercial
- Diagnóstico gratuito

Descripciones (máximo 90 caracteres):

- Organiza oportunidades y seguimiento con Dynamics 365 CRM. Hablemos de tu proyecto.
- Conecta ventas, atención al cliente y ERP. Consultoría Microsoft adaptada a tu empresa.
- Empieza por las aplicaciones que necesitas y evoluciona por fases con un equipo sénior.
- Define procesos, migración e integraciones. Reserva tu diagnóstico gratuito de 30 minutos.

## Negativas iniciales

empleo, trabajo, salario, sueldo, ofertas de empleo, curso gratis, cursos gratuitos, certificación, examen, tutorial, pdf gratis, descarga gratis, crack, pirata, qué es business central, qué es un crm.

Aplicar como negativas de frase y revisar búsquedas reales. No excluir «gratis» de forma general: el diagnóstico inicial es gratuito. No bloquear «formación» de forma general porque puede ser una necesidad válida de un cliente.

## Recursos propuestos

- Reservar diagnóstico: https://www.vortexdynamics.es/reservar
- Servicios Microsoft: https://www.vortexdynamics.es/servicios
- Sobre Vortex: https://www.vortexdynamics.es/sobre-vortex
- Migración NAV: https://www.vortexdynamics.es/migracion-nav-business-central
- Textos destacados: «Equipo 100 % sénior», «Diagnóstico gratuito», «Implantación por fases», «11 años de experiencia».
- La experiencia corresponde al equipo, incluida su trayectoria anterior a Vortex. No presentar esa antigüedad como edad de la empresa.

## Medición antes de lanzar

Actualmente Vercel Analytics registra `generate_lead` solo tras respuesta confirmada del formulario y `contact_click` con canal `booking`, `phone`, `email` o `whatsapp`. Estos eventos no equivalen a conversiones configuradas en Google Ads. El clic a la agenda es una microconversión, no una reunión confirmada.

Antes de activar, identificar la cuenta de Google Ads de Vortex, definir una conversión de formulario confirmado y comprobar etiqueta y consentimiento según la configuración real. No reutilizar identificadores ni presupuesto de Manuales a Euro. No instalar etiquetas con IDs inventados. Vincular GA4 solo si existe una propiedad correcta para Vortex o se configura expresamente.

Usar etiquetado de campañas para análisis. El formulario actual recoge utm_source, utm_medium, utm_campaign y página de origen cuando están en la URL del envío. Los eventos de Vercel solo llevan ruta y canal; no recopilan nombre ni contenido del formulario. Una reserva realizada en la página externa de Google no se atribuye automáticamente como lead confirmado en Vortex.

## Revisión tras activar en el futuro

- Confirmar que se reciben contactos de empresas con necesidad y alcance reales.
- Revisar términos de búsqueda y excluir consultas irrelevantes.
- Comparar clics, formularios confirmados, contactos cualificados y coste por contacto cualificado.
- Separar informes por servicio y página de destino. Una tasa alta de clics no prueba rentabilidad.
- Ajustar anuncios y páginas según datos suficientes; no prometer clientes ni posiciones.

## Referencias oficiales

- Anuncios adaptables, límites de textos: https://support.google.com/google-ads/answer/7684791?hl=es
- Concordancias: https://support.google.com/google-ads/answer/7478529?hl=es
- Ubicación y presencia: https://support.google.com/google-ads/answer/1722038?hl=es
