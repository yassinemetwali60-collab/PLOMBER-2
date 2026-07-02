'use client'

import { useMemo, useState } from 'react'

type Mode = 'urgence' | 'devis'
type Props = { mode?: Mode; onDone?: () => void }

type Step = { key: string; question: string; options?: string[]; placeholder?: string; type?: 'textarea' | 'tel' | 'text' | 'file' }

const urgenceSteps: Step[] = [
  { key: 'problem', question: 'Quel est le probleme ?', options: ['Fuite d eau', 'Canalisation bouchee', 'Chauffe-eau en panne', 'WC bouche', 'Autre urgence'] },
  { key: 'severity', question: 'Niveau d urgence ?', options: ['Tres urgent maintenant', 'Aujourd hui', 'Sous 24/48h'] },
  { key: 'damage', question: 'Y a-t-il une fuite active ou un degat des eaux ?', options: ['Oui fuite active', 'Oui degat visible', 'Non / pas sur'] },
  { key: 'postcode', question: 'Adresse ou code postal', placeholder: 'Ex : 93300 Aubervilliers', type: 'text' },
  { key: 'availability', question: 'Disponibilite', options: ['Maintenant', 'Ce matin', 'Cet apres-midi', 'Ce soir'] },
  { key: 'photo', question: 'Photo du probleme (optionnel)', type: 'file' },
  { key: 'phone', question: 'Numero de telephone', placeholder: 'Votre numero mobile', type: 'tel' }
]

const devisSteps: Step[] = [
  { key: 'worktype', question: 'Type de travaux', options: ['Installation sanitaire', 'Renovation salle de bain', 'Chauffe-eau', 'Robinetterie', 'Recherche de fuite', 'Autre'] },
  { key: 'location', question: 'Localisation', placeholder: 'Ville ou code postal', type: 'text' },
  { key: 'description', question: 'Description du besoin', placeholder: 'Expliquez rapidement votre projet', type: 'textarea' },
  { key: 'budget', question: 'Budget estime (optionnel)', options: ['Moins de 500 €', '500 - 1 500 €', '1 500 - 5 000 €', 'Plus de 5 000 €', 'Je ne sais pas'] },
  { key: 'deadline', question: 'Delai souhaite', options: ['Rapidement', 'Cette semaine', 'Ce mois-ci', 'Pas encore defini'] },
  { key: 'photo', question: 'Photo du chantier (optionnel)', type: 'file' },
  { key: 'phone', question: 'Numero de telephone', placeholder: 'Votre numero mobile', type: 'tel' }
]

export default function LeadWizard({ mode = 'urgence', onDone }: Props) {
  const steps = mode === 'urgence' ? urgenceSteps : devisSteps
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({ leadType: mode })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const step = steps[index]
  const progress = useMemo(() => ((index + 1) / steps.length) * 100, [index, steps.length])

  const setAnswer = (value: string) => setAnswers((prev) => ({ ...prev, [step.key]: value }))

  async function submit() {
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...answers, source: typeof window !== 'undefined' ? window.location.pathname : 'site' })
      })
      if (!res.ok) throw new Error('Lead failed')
      setStatus('success')
      onDone?.()
    } catch {
      setStatus('error')
    }
  }

  const canNext = !!answers[step.key] || step.type === 'file'

  return (
    <div className="wizard">
      <div className="wizard-progress"><span style={{ width: `${progress}%` }} /></div>
      <p className="eyebrow">{mode === 'urgence' ? 'Qualification urgence en moins de 60 sec' : 'Demande de devis guidee'}</p>
      <h3>{step.question}</h3>

      {step.options ? (
        <div className="options">
          {step.options.map((opt) => (
            <button key={opt} type="button" className={`option ${answers[step.key] === opt ? 'active' : ''}`} onClick={() => setAnswer(opt)}>{opt}</button>
          ))}
        </div>
      ) : step.type === 'textarea' ? (
        <textarea className="textarea" placeholder={step.placeholder} value={answers[step.key] || ''} onChange={(e) => setAnswer(e.target.value)} />
      ) : step.type === 'file' ? (
        <div>
          <input className="input" type="file" accept="image/*" onChange={(e) => setAnswer(e.target.files?.[0]?.name || 'Photo jointe')} />
          <p className="hidden-file">La photo sert a accelerer le diagnostic. L envoi fichier reel peut etre branche a votre CRM via le webhook.</p>
        </div>
      ) : (
        <input className="input" type={step.type || 'text'} placeholder={step.placeholder} value={answers[step.key] || ''} onChange={(e) => setAnswer(e.target.value)} />
      )}

      {status === 'success' && <p className="success">Demande envoyee. MANELOBAT peut rappeler le prospect rapidement.</p>}
      {status === 'error' && <p className="error">Erreur d envoi. Appelez directement ou reessayez.</p>}

      <div className="wizard-actions">
        <button className="btn btn-soft" type="button" disabled={index === 0} onClick={() => setIndex((i) => Math.max(0, i - 1))}>Retour</button>
        {index < steps.length - 1 ? (
          <button className="btn btn-primary" type="button" disabled={!canNext} onClick={() => setIndex((i) => i + 1)}>Continuer</button>
        ) : (
          <button className="btn btn-danger" type="button" disabled={status === 'loading' || !canNext} onClick={submit}>{status === 'loading' ? 'Envoi...' : mode === 'urgence' ? 'Envoyer l urgence' : 'Envoyer ma demande'}</button>
        )}
      </div>
    </div>
  )
}
