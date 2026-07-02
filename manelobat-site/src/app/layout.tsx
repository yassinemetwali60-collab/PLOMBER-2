import type { Metadata } from 'next'
import './globals.css'
import { Header, StickyCTA, Footer } from '@/components/LayoutParts'

export const metadata: Metadata = {
  title: 'MANELOBAT | Plombier Aubervilliers et Ile-de-France',
  description: 'Plombier a Aubervilliers et en Ile-de-France pour urgence fuite d eau, debouchage, chauffe-eau, installation sanitaire et renovation salle de bain.',
  metadataBase: new URL('https://manelobat.fr'),
  openGraph: { title: 'MANELOBAT - Plomberie Ile-de-France', description: 'Intervention rapide et devis clair pour vos besoins de plomberie.', locale: 'fr_FR', type: 'website' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body><Header />{children}<Footer /><StickyCTA /></body></html>
}
