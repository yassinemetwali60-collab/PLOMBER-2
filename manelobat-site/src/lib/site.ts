export const PHONE = process.env.NEXT_PUBLIC_PHONE || '01 89 70 12 34'
export const PHONE_HREF = `tel:${PHONE.replace(/\s/g, '')}`
export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '33600000000'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Bonjour MANELOBAT, j ai besoin d un plombier en Ile-de-France.')}`

export const services = [
  { href: '/services/fuite-eau', title: "Fuite d'eau", desc: 'Recherche de fuite, reparation et mise en securite rapide.' },
  { href: '/services/debouchage', title: 'Debouchage', desc: 'WC, evier, douche, canalisation lente ou bouchee.' },
  { href: '/services/chauffe-eau', title: 'Chauffe-eau', desc: 'Panne, remplacement, fuite ballon et entretien.' },
  { href: '/services/installation-sanitaire', title: 'Installation sanitaire', desc: 'Robinetterie, WC, douche, lavabo et raccordements.' },
  { href: '/services/renovation-salle-de-bain', title: 'Renovation salle de bain', desc: 'Creation, modernisation et renovation complete.' }
]

export const zones = [
  { href: '/zones/aubervilliers', title: 'Aubervilliers' },
  { href: '/zones/saint-denis', title: 'Saint-Denis' },
  { href: '/zones/la-courneuve', title: 'La Courneuve' },
  { href: '/zones/pantin', title: 'Pantin' },
  { href: '/zones/bobigny', title: 'Bobigny' },
  { href: '/zones/drancy', title: 'Drancy' },
  { href: '/zones/paris-18-19', title: 'Paris 18 / 19' }
]
