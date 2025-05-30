// app/api/submitTicket/route.ts

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  // handle the support ticket logic here
  console.log('Support Ticket Received:', body)

  return NextResponse.json({ success: true, message: 'Ticket submitted successfully.' })
}
