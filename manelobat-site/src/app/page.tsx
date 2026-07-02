import Link from 'next/link'
import LeadWizard from '@/components/LeadWizard'
import { CTASection } from '@/components/LayoutParts'
import { PHONE, PHONE_HREF, services, zones } from '@/lib/site'

export default function Home(){
  return <main>
    <section className="hero"><div className="container hero-grid">
      <div>
        <span className="eyebrow">Plombier Aubervilliers + Ile-de-France</span>
        <h1>Une urgence plomberie ne doit pas attendre.</h1>
        <p className="lead">MANELOBAT intervient pour fuite d eau, debouchage, chauffe-eau, installation sanitaire et renovation. Objectif : comprendre vite, prioriser les urgences et vous rappeler rapidement.</p>
        <div className="hero-actions"><a className="btn btn-primary" href={PHONE_HREF}>Appeler maintenant {PHONE}</a><Link className="btn btn-danger" href="/urgence-plomberie">J ai une urgence</Link><Link className="btn btn-soft" href="/devis-contact">Demander un devis</Link></div>
        <div className="trust-row"><div className="trust-card"><strong>Reponse rapide</strong><span>Parcours urgence en moins de 60 secondes</span></div><div className="trust-card"><strong>Devis clair</strong><span>Demande guidee pour eviter les oublis</span></div><div className="trust-card"><strong>IDF proche</strong><span>Aubervilliers, 93 et Paris Nord-Est</span></div></div>
      </div>
      <div className="phone-card"><div className="status"><span className="pulse"/>Disponible pour qualifier votre demande</div><div className="big-phone">{PHONE}</div><p className="muted">Pour les urgences : indiquez le probleme, la ville, la gravite et votre numero. Une photo peut aider a preparer l intervention.</p><div className="mini-form"><LeadWizard mode="urgence" /></div></div>
    </div></section>
    <section><div className="container"><div className="section-head"><h2>Deux parcours. Une prise de contact rapide.</h2><p className="lead">Le site separe les vrais depannages urgents des projets planifiables pour envoyer les bonnes informations des le depart.</p></div><div className="grid-2"><div className="card"><h3>Urgence plomberie</h3><p className="muted">Fuite active, degat des eaux, WC inutilisable, canalisation bouchee, chauffe-eau en panne. Le formulaire priorise le rappel.</p><Link className="btn btn-danger" href="/urgence-plomberie">Demarrer urgence</Link></div><div className="card"><h3>Devis / projet</h3><p className="muted">Salle de bain, robinetterie, installation sanitaire ou remplacement prevu. Le formulaire prepare le rendez-vous.</p><Link className="btn btn-primary" href="/devis-contact">Demander un devis</Link></div></div></div></section>
    <section><div className="container"><div className="section-head"><h2>Services plomberie</h2><p className="muted">Pages pensees pour convertir les recherches locales a forte intention.</p></div><div className="grid-3">{services.map((s,i)=><Link href={s.href} className="card service-card" key={s.href}><span className="icon">{['💧','🚿','🔥','🔧','🛁'][i]}</span><h3>{s.title}</h3><p>{s.desc}</p><strong>Voir le service →</strong></Link>)}</div></div></section>
    <section><div className="container grid-2"><div><h2>Pourquoi appeler MANELOBAT ?</h2><ul className="list"><li>Qualification immediate des urgences plomberie</li><li>Demande claire avant de se deplacer</li><li>Intervention sur Aubervilliers et villes voisines</li><li>Photos possibles pour accelerer le diagnostic</li><li>Contact rapide par appel, WhatsApp ou formulaire</li></ul></div><div className="mapbox"><div><h3>Zone principale</h3><p>Aubervilliers, Saint-Denis, La Courneuve, Pantin, Bobigny, Drancy, Paris 18 et Paris 19.</p><div className="local-list">{zones.map(z=><Link className="pill" href={z.href} key={z.href}>{z.title}</Link>)}</div></div></div></div></section>
    <CTASection />
  </main>
}
