'use client'
import { useState } from 'react'
import LeadWizard from './LeadWizard'

export default function UrgencyModal() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="btn btn-danger" onClick={() => setOpen(true)}>J ai une urgence</button>
      {open && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <button className="close" onClick={() => setOpen(false)} aria-label="Fermer">×</button>
            <LeadWizard mode="urgence" />
          </div>
        </div>
      )}
    </>
  )
}
