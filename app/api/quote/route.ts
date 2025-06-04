import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "JMDC Energy <no-reply@jmdcenergy.com>",
      to: ["sales@jmdcenergy.com"],
      subject: "🔔 New Quote Request from Website",
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;border:1px solid #ccc;width:100%">
          <tr><td style="border:1px solid #ccc;padding:8px">Name</td><td>${data.name}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px">Email</td><td>${data.email}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px">Contact</td><td>${data.contact}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px">Organization</td><td>${data.organization}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px">PIN Code</td><td>${data.pincode}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px">Message</td><td>${data.message}</td></tr>
        </table>
      `,
    }),
  });

  return NextResponse.json({ success: true, result: await result.json() });
}
