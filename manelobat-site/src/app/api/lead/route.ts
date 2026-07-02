import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const payload = await req.json()
    const lead = { ...payload, receivedAt: new Date().toISOString() }

    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      })
    } else {
      console.log('Nouveau lead MANELOBAT', lead)
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }
}
