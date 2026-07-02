import type { Metadata } from 'next'
import LeadWizard from '@/components/LeadWizard'
import { CTASection } from '@/components/LayoutParts'
import { PHONE, PHONE_HREF } from '@/lib/site'

export const metadata: Metadata = { title: 'Devis plomberie Aubervilliers | Contact MANELOBAT', description: 'Demandez un devis plomberie pour installation sanitaire, renovation salle de bain, chauffe-eau, robinetterie ou debouchage en Ile-de-France.' }

export default function Page(){return <main><section className="page-hero"><div className="container grid-2"><div><p className="breadcrumbs">Accueil / Devis contact</p><h1>Demander un devis plomberie clair.</h1><p className="lead">Un formulaire progressif pour decrire votre besoin sans perdre de temps : type de travaux, localisation, delai, budget et photos.</p><div className="cta-row"><a className="btn btn-primary" href={PHONE_HREF}>Appeler {PHONE}</a></div></div><LeadWizard mode="devis" /></div></section><section><div className="container grid-2"><div><h2>Pour quels projets ?</h2><ul className="list"><li>Installation ou remplacement de robinetterie</li><li>Creation ou renovation de salle de bain</li><li>Remplacement de chauffe-eau</li><li>Installation WC, douche, lavabo</li><li>Diagnostic fuite ou canalisation lente</li></ul></div><div className="card"><h3>Conseil conversion</h3><p className="muted">Plus la demande est precise, plus le rappel est efficace. Les photos, dimensions et delais permettent de preparer une reponse serieuse.</p></div></div></section><CTASection /></main>}
