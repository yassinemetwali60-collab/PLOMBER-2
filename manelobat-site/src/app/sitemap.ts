import type { MetadataRoute } from 'next'
const routes = ['','/urgence-plomberie','/devis-contact','/services/fuite-eau','/services/debouchage','/services/chauffe-eau','/services/installation-sanitaire','/services/renovation-salle-de-bain','/zones/aubervilliers','/zones/saint-denis','/zones/la-courneuve','/zones/pantin','/zones/bobigny','/zones/drancy','/zones/paris-18-19','/avis-clients','/a-propos','/mentions-legales']
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://manelobat.fr${route}`, lastModified: new Date(), changeFrequency: route.includes('zones') || route.includes('services') ? 'weekly' : 'monthly', priority: route === '' ? 1 : 0.8 }))
}
