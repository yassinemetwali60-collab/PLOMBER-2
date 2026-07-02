import Link from 'next/link'
import UrgencyModal from './UrgencyModal'
import { PHONE, PHONE_HREF, WHATSAPP_URL, services, zones } from '@/lib/site'

export function Header(){
  return <>
    <div className="topbar"><div className="container"><span>Plombier Ile-de-France - Urgences, fuites, debouchage, chauffe-eau</span><strong>Reponse rapide : {PHONE}</strong></div></div>
    <header className="nav"><div className="container nav-inner">
      <Link href="/" className="brand"><span className="logo">M</span><span>MANELOBAT</span></Link>
      <nav className="nav-links"><Link href="/urgence-plomberie">Urgence</Link><Link href="/devis-contact">Devis</Link><Link href="/services/fuite-eau">Services</Link><Link href="/zones/aubervilliers">Zones</Link><Link href="/avis-clients">Avis</Link></nav>
      <div className="nav-cta"><a className="btn btn-soft" href={PHONE_HREF}>Appeler</a><UrgencyModal /></div>
    </div></header>
  </>
}

export function StickyCTA(){
  return <>
    <a className="whatsapp" href={WHATSAPP_URL} target="_blank" aria-label="WhatsApp">WA</a>
    <div className="sticky-mobile"><a className="btn btn-primary" href={PHONE_HREF}>Appeler</a><a className="btn btn-danger" href="/urgence-plomberie">Urgence</a></div>
  </>
}

export function Footer(){
  return <footer className="footer"><div className="container footer-grid">
    <div><div className="brand"><span className="logo">M</span><span>MANELOBAT</span></div><p>Entreprise de plomberie moderne en Ile-de-France. Intervention a Aubervilliers et villes voisines pour depannage, installation et renovation.</p><p><strong>{PHONE}</strong></p></div>
    <div><h3>Services</h3>{services.map(s=><p key={s.href}><Link href={s.href}>{s.title}</Link></p>)}</div>
    <div><h3>Zones</h3>{zones.map(z=><p key={z.href}><Link href={z.href}>{z.title}</Link></p>)}<p><Link href="/mentions-legales">Mentions legales</Link></p></div>
  </div></footer>
}

export function CTASection(){
  return <section><div className="container band"><div><h2>Besoin d un plombier fiable maintenant ?</h2><p>Appelez directement MANELOBAT ou envoyez une demande guidee. Le bon parcours depend de votre urgence.</p></div><div className="cta-row"><a className="btn btn-primary" href={PHONE_HREF}>Appeler {PHONE}</a><Link className="btn btn-danger" href="/urgence-plomberie">J ai une urgence</Link></div></div></section>
}
