# MANELOBAT - Site plomberie Ile-de-France

Site Next.js App Router optimise conversion et SEO local.

## Lancer en local

```bash
npm install
npm run dev
```

## Variables utiles

- `NEXT_PUBLIC_PHONE` : numero d'appel principal, ex. `+33123456789`
- `NEXT_PUBLIC_WHATSAPP` : numero WhatsApp sans +, ex. `33612345678`
- `LEAD_WEBHOOK_URL` : webhook Make/Zapier/n8n pour recevoir les leads

Sans webhook, l'API `/api/lead` retourne un succes et log les donnees cote serveur.

## Pages incluses

- Accueil
- Urgence plomberie
- Devis / contact
- Services : fuite d'eau, debouchage, chauffe-eau, installation sanitaire, renovation salle de bain
- Zones : Aubervilliers, Saint-Denis, La Courneuve, Pantin, Bobigny, Drancy, Paris 18/19
- Avis clients
- A propos
- Mentions legales
