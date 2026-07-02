import type { Metadata } from 'next'
import LeadWizard from '@/components/LeadWizard'
import { CTASection } from '@/components/LayoutParts'
import { PHONE, PHONE_HREF } from '@/lib/site'

export const metadata: Metadata = { title: 'Urgence plomberie Ile-de-France | MANELOBAT', description: 'Urgence plomberie a Aubervilliers et en Ile-de-France : fuite d eau, degat des eaux, WC bouche, canalisation bouchee, chauffe-eau en panne.' }

export default function Page(){return <main><section className="page-hero"><div className="container grid-2"><div><p className="breadcrumbs">Accueil / Urgence plomberie</p><h1>Urgence plomberie : envoyez les bonnes infos maintenant.</h1><p className="lead">Fuite active, degat des eaux, canalisation bouchee ou chauffe-eau en panne : MANELOBAT priorise les demandes urgentes pour rappeler rapidement.</p><div className="cta-row"><a className="btn btn-primary" href={PHONE_HREF}>Appeler {PHONE}</a></div></div><LeadWizard mode="urgence" /></div></section><section><div className="container grid-3"><div className="card"><h3>1. Securiser</h3><p className="muted">Coupez l eau si possible, evitez les appareils electriques proches de la fuite et prenez une photo.</p></div><div className="card"><h3>2. Qualifier</h3><p className="muted">Le formulaire identifie le type de probleme, la ville, le niveau d urgence et votre disponibilite.</p></div><div className="card"><h3>3. Intervenir</h3><p className="muted">MANELOBAT dispose des informations utiles pour organiser le rappel ou l intervention.</p></div></div></section><CTASection /></main>}
