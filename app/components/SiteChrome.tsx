import Image from "next/image";
import Link from "next/link";
import styles from "./SiteChrome.module.css";

const links = [["Servicios", "/servicios"], ["Business Central", "/business-central"], ["CRM", "/crm"], ["Noticias", "/noticias"]] as const;
export function SiteHeader({ contactHref = "/#contacto" }: { contactHref?: string }) {
  return <header className={styles.header}>
    <a className={styles.skip} href="#contenido">Saltar al contenido</a>
    <div className={styles.bar}>
      <Link href="/" className={styles.brand} aria-label="Vortex Dynamics, inicio"><Image src="/icon.png" alt="" width={48} height={48} /><span>VORTEX DYNAMICS<small>IT CONSULTING</small></span></Link>
      <nav className={styles.desktop} aria-label="Navegación principal">{links.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav>
      <a className={styles.cta} href={contactHref}>Hablemos de tu proyecto <span aria-hidden="true">↗</span></a>
      <details className={styles.mobile}><summary>Menú</summary><nav aria-label="Navegación móvil">{links.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}<a href={contactHref}>Contacto</a></nav></details>
    </div>
  </header>;
}
export function SiteFooter() {
  return <footer className={styles.footer}><div className={styles.footerGrid}>
    <div><Link href="/" className={styles.brand}><Image src="/icon.png" alt="" width={48} height={48} /><span>VORTEX DYNAMICS<small>IT CONSULTING</small></span></Link><p>Conectamos tecnología, procesos y personas para que tu negocio avance.</p></div>
    <nav aria-label="Servicios y soluciones"><strong>Explora Vortex</strong>{links.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav>
    <div className={styles.contact}><strong>Empecemos a conectar</strong><a href="mailto:direccion-proyectos@vortexdynamics.es">direccion-proyectos@vortexdynamics.es</a><a href="tel:+34951547626">951 547 626</a><a href="https://wa.me/34951547626">Hablar por WhatsApp ↗</a></div>
    </div><div className={styles.bottom}>© 2026 Vortex Dynamics IT Consulting <span>Microsoft · ERP · CRM · Cloud · IA</span></div></footer>;
}
