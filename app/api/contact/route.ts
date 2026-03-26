import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json()
  const resendKey = process.env.RESEND_API_KEY || ''
  if (!resendKey) return NextResponse.json({ error: 'Email not configured' }, { status: 500 })
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendKey}` },
    body: JSON.stringify({ from: 'noreply@resend.dev', to: 'matt@amplifyforlawyers.com',
      subject: `New Contact — ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>` })
  })
  if (!r.ok) return NextResponse.json({ error: 'Failed' }, { status: 500 })
  return NextResponse.json({ success: true })
}