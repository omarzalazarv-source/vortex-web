import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vortex Dynamics | Consultoría Microsoft, Business Central y CRM",
  description: "Conecta tu negocio con Business Central, Dynamics 365 CRM, Microsoft 365, Power Platform, Power BI, Copilot y Azure. Consultoría, integración y soporte.",
  alternates: { canonical: "https://www.vortexdynamics.es/" },
  openGraph: { title: "Vortex Dynamics · Toda tu empresa conectada", description: "Consultoría Microsoft para conectar tus procesos, tus equipos y tus datos.", url: "https://www.vortexdynamics.es/", type: "website", locale: "es_ES" },
};

const ecosystem = [
  {name:"Business Central",label:"ERP Y OPERACIONES",href:"/business-central",mark:"BC",color:"#28d1bb",x:50,y:9},
  {name:"Dynamics 365 CRM",label:"VENTAS Y CLIENTES",href:"/crm",mark:"CX",color:"#aa99ff",x:17,y:28},
  {name:"Microsoft 365",label:"PRODUCTIVIDAD",href:"/microsoft-365",mark:"365",color:"#74bfff",x:83,y:28},
  {name:"Power Platform",label:"AUTOMATIZACIÓN",href:"/power-platform",mark:"PP",color:"#a3dba2",x:15,y:65},
  {name:"Power BI & Fabric",label:"DATOS Y ANÁLISIS",href:"/power-bi-fabric",mark:"BI",color:"#f0cd67",x:85,y:65},
  {name:"Microsoft Copilot",label:"INTELIGENCIA ARTIFICIAL",href:"/copilot-inteligencia-artificial",mark:"AI",color:"#deabff",x:32,y:91},
  {name:"Azure & Seguridad",label:"NUBE Y PROTECCIÓN",href:"/azure-seguridad",mark:"AZ",color:"#70baff",x:69,y:91},
];
const needs = [
  {no:"01",title:"Quiero mejorar mi gestión",text:"Conecta finanzas, compras, ventas y operaciones con información compartida.",label:"Explorar Business Central",href:"/business-central"},
  {no:"02",title:"Quiero vender y atender mejor",text:"Organiza tus oportunidades y acompaña cada etapa de la relación con tus clientes.",label:"Descubrir Dynamics 365 CRM",href:"/crm"},
  {no:"03",title:"Quiero automatizar y conectar",text:"Reduce tareas manuales y une aplicaciones, equipos y datos del negocio.",label:"Conocer nuestras soluciones",href:"/servicios"},
];
const services = [
  ["01","Gestión que conecta","Business Central","Finanzas, inventario y operaciones en una misma dirección.","/business-central"],
  ["02","Relaciones que crecen","Dynamics 365 CRM","Ventas, atención al cliente, servicios de campo y marketing.","/crm"],
  ["03","Equipos que colaboran","Microsoft 365","Teams, Outlook y SharePoint conectados con tu forma de trabajar.","/microsoft-365"],
  ["04","Procesos que avanzan","Power Platform","Aplicaciones, automatizaciones, agentes y portales a medida.","/power-platform"],
  ["05","Datos que orientan","Power BI y Fabric","Información conectada para entender lo que ocurre y decidir.","/power-bi-fabric"],
  ["06","Inteligencia que ayuda","Microsoft Copilot","Asistentes y procesos inteligentes con un propósito concreto.","/copilot-inteligencia-artificial"],
  ["07","Un entorno preparado","Azure y seguridad","Nube, identidades, dispositivos y protección de la información.","/azure-seguridad"],
];

export default function Home() {
  return <div className={styles.home}>
    <SiteHeader />
    <main id="contenido">
      <section className={styles.hero} id="inicio">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> CONECTAMOS EL ECOSISTEMA MICROSOFT</p>
            <h1>Toda tu empresa<br />conectada.<br /><em>Todo tu potencial<br />en marcha.</em></h1>
            <p className={styles.intro}>Unimos tus procesos, tus equipos y tus datos con soluciones Microsoft. De la gestión diaria a tu próximo paso.</p>
            <div className={styles.actions}><a className={styles.primary} href="#contacto">Hablemos de tu proyecto <span aria-hidden="true">↗</span></a><Link className={styles.textLink} href="/servicios">Explorar soluciones <span aria-hidden="true">→</span></Link></div>
            <p className={styles.heroNote}>Diagnóstico gratuito de 30 minutos <span>·</span> Sin compromiso</p>
          </div>
          <div className={styles.mapWrap}>
            <div className={styles.map} aria-label="Explora las soluciones del ecosistema Microsoft">
              <svg className={styles.connections} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><circle cx="50" cy="50" r="31" />{ecosystem.map(item=><line key={item.mark} x1="50" y1="50" x2={item.x} y2={item.y} />)}</svg>
              <div className={styles.core}><Image src="/icon.png" alt="Símbolo oficial de Vortex Dynamics" width={95} height={95} priority /><strong>VORTEX</strong><small>EL PUNTO DE CONEXIÓN</small></div>
              {ecosystem.map((item)=><Link key={item.mark} href={item.href} className={styles.mapNode} style={{"--x":`${item.x}%`,"--y":`${item.y}%`,"--accent":item.color} as CSSProperties}><span className={styles.nodeMark}>{item.mark}</span><span><small>{item.label}</small><strong>{item.name}</strong></span><span className={styles.nodeArrow} aria-hidden="true">↗</span></Link>)}
            </div>
            <p className={styles.mapCaption}>SIETE ÁREAS. UN NEGOCIO CONECTADO.</p>
          </div>
        </div>
        <div className={styles.trustBar}><div><Image src="/microsoft-partner.jpg" alt="Microsoft Partner" width={155} height={62} className={styles.partner}/><span className={styles.trustDivider}/><p>Consultoría · Implantación · Integración · Formación y soporte</p><Link href="/sobre-vortex">Conoce Vortex <span aria-hidden="true">↗</span></Link></div></div>
      </section>
      <section className={styles.section} id="necesidades">
        <div className={styles.sectionHeading}><div><p className={styles.kicker}>EMPEZAMOS POR TU NEGOCIO</p><h2>¿Qué quieres<br />hacer mejor?</h2></div><p>La tecnología empieza a aportar valor cuando resuelve lo que de verdad necesitas.</p></div>
        <div className={styles.needs}>{needs.map(item=><Link className={styles.needCard} key={item.no} href={item.href}><span className={styles.number}>{item.no} <span aria-hidden="true">↗</span></span><h3>{item.title}</h3><p>{item.text}</p><strong>{item.label} <span aria-hidden="true">→</span></strong></Link>)}</div>
      </section>
      <section className={styles.solutionsSection} id="servicios"><div className={styles.section}>
        <div className={styles.sectionHeading}><div><p className={styles.kicker}>SOLUCIONES QUE TRABAJAN JUNTAS</p><h2>Un ecosistema.<br />Muchas posibilidades.</h2></div><Link className={styles.outlineLink} href="/servicios">Todos los servicios <span aria-hidden="true">↗</span></Link></div>
        <div className={styles.serviceGrid}>{services.map(([no,title,product,text,href])=><Link href={href} key={no} id={no === "01" ? "business-central" : no === "02" ? "crm" : undefined} className={styles.serviceCard}><div><span className={styles.number}>{no}</span><span aria-hidden="true">↗</span></div><p className={styles.product}>{product}</p><h3>{title}</h3><p>{text}</p></Link>)}<div className={styles.connectCard}><span aria-hidden="true">↗</span><h3>El valor está<br />en conectarlo.</h3><p>Diseñamos las integraciones que dan continuidad a tus procesos.</p><a href="#contacto">Cuéntanos tu idea →</a></div></div>
      </div></section>
      <section className={styles.journeys} id="integraciones"><div className={styles.section}><p className={styles.eyebrow}>DEL PROCESO A LA SOLUCIÓN</p><h2>Que la información avance.<br /><em>Y tu negocio también.</em></h2><div className={styles.journeyGrid}>
        {[["Del contacto a la factura","CRM → Business Central","Da continuidad a la oportunidad comercial y su gestión administrativa."],["Del pedido al almacén","Ventas → Operaciones","Conecta el pedido con compras, inventario y preparación de la entrega."],["Del dato a la decisión","Business Central → Power BI","Transforma la información operativa en indicadores para tu equipo."]].map(([title,path,text])=><article key={title}><p>{path}</p><h3>{title}</h3><span>{text}</span></article>)}
      </div><p className={styles.journeyNote}>El alcance, las licencias y las integraciones se definen según las necesidades de cada proyecto.</p></div></section>
      <section className={styles.section} id="metodo"><div className={styles.sectionHeading}><div><p className={styles.kicker}>CONTIGO EN CADA PASO</p><h2>Un método claro.<br />Un equipo a tu lado.</h2></div><p>De entender el problema a poner la solución en marcha, con prioridades y entregables acordados.</p></div><ol className={styles.steps}>{[["Escuchamos","Requisitos priorizados y mapa de tus procesos."],["Diseñamos","Propuesta funcional, alcance y fases definidas."],["Conectamos","Configuración, migración e integraciones probadas."],["Acompañamos","Formación, arranque y evolución de la solución."]].map(([title,text],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
      <section className={styles.press} id="noticias"><div><p className={styles.kicker}>VORTEX EN LOS MEDIOS</p><h2>Una forma de entender<br />la transformación digital.</h2><p>El Diario de Andalucía presenta nuestro enfoque de consultoría e implantación de Business Central.</p><Link href="/noticias">Leer la publicación <span aria-hidden="true">↗</span></Link></div><aside><span>EL DIARIO</span><strong>DE ANDALUCÍA</strong><small>PUBLICACIÓN · 22 JUL 2026</small></aside></section>
      <section className={styles.contactSection} id="contacto"><div className={styles.contactInner}><div><p className={styles.kicker}>EL SIGUIENTE PASO ES UNA CONVERSACIÓN</p><h2>Cuéntanos qué<br />frena tu negocio.</h2><p>En 30 minutos revisamos tu situación y te orientamos sobre las soluciones que podrían encajar. Después acordamos cómo avanzar.</p><ul><li>Diagnóstico inicial gratuito.</li><li>Sin compromiso.</li><li>Respuesta en menos de 24 horas laborables.</li></ul><a className={styles.whatsapp} href="https://wa.me/34951547626">¿Prefieres WhatsApp? Hablemos ↗</a></div><ContactForm /></div></section>
    </main>
    <SiteFooter />
  </div>;
}
