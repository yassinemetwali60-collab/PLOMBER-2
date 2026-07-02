import type { Metadata } from 'next'
import { CTASection } from '@/components/LayoutParts'

export const metadata: Metadata = { title: 'Avis clients plomberie | MANELOBAT', description: 'Avis clients MANELOBAT : structure de preuves de confiance pour depannage plomberie en Ile-de-France.' }
const reviews = [
  ['Fuite sous evier reparee rapidement', 'Demande envoyee avec photo, rappel rapide et intervention propre.'],
  ['Canalisation debouchee', 'Explications claires avant intervention et solution efficace.'],
  ['Chauffe-eau remplace', 'Devis clair, rendez-vous organise et installation propre.']
]
export default function Page(){return <main><section className="page-hero"><div className="container"><p className="breadcrumbs">Accueil / Avis clients</p><h1>Avis clients MANELOBAT</h1><p className="lead">Page prete pour accueillir les vrais avis Google Business Profile. Au lancement, elle structure les preuves attendues : rapidite, clarte, proprete et fiabilite.</p></div></section><section><div className="container grid-3">{reviews.map(([t,d])=><div className="card review" key={t}><div className="stars">★★★★★</div><h3>{t}</h3><p className="muted">{d}</p><p className="small">Avis exemple a remplacer par un avis client verifie.</p></div>)}</div></section><CTASection /></main>}
