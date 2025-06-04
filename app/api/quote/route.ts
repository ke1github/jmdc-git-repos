import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "sales@jmdcenergy.com",
      pass: process.env.SMTP_PASS,
    },
  });

  // Optional: JSON for model quantities can be added to `data.models`
  // Example: data.models = [{ model: "JMDC-3KW", qty: 2 }, { model: "JMDC-5KW", qty: 1 }]

  const productRows =
    data.models
      ?.map(
        (item: { model: string; qty: number }) =>
          `<tr>
        <td style="border:1px solid #ccc;padding:8px">${item.model}</td>
        <td style="border:1px solid #ccc;padding:8px;text-align:center">${item.qty}</td>
      </tr>`
      )
      .join("") || "";

  const htmlBody = `
    <h2 style="color:#d35400">New Quote Request</h2>
    <table style="border-collapse:collapse;border:1px solid #ccc;width:100%;margin-bottom:20px">
      <tr><th style="border:1px solid #ccc;padding:8px;background:#f2f2f2">Field</th><th style="border:1px solid #ccc;padding:8px;background:#f2f2f2">Value</th></tr>
      <tr><td style="border:1px solid #ccc;padding:8px">Name</td><td style="border:1px solid #ccc;padding:8px">${data.name}</td></tr>
      <tr><td style="border:1px solid #ccc;padding:8px">Email</td><td style="border:1px solid #ccc;padding:8px">${data.email}</td></tr>
      <tr><td style="border:1px solid #ccc;padding:8px">Contact</td><td style="border:1px solid #ccc;padding:8px">${data.contact}</td></tr>
      <tr><td style="border:1px solid #ccc;padding:8px">Organization</td><td style="border:1px solid #ccc;padding:8px">${data.organization || "-"}</td></tr>
      <tr><td style="border:1px solid #ccc;padding:8px">PIN Code</td><td style="border:1px solid #ccc;padding:8px">${data.pincode || "-"}</td></tr>
      <tr><td style="border:1px solid #ccc;padding:8px">Message</td><td style="border:1px solid #ccc;padding:8px">${data.message || "-"}</td></tr>
    </table>

    ${
      productRows
        ? `
      <h3>Requested Product Models</h3>
      <table style="border-collapse:collapse;border:1px solid #ccc;width:100%">
        <tr><th style="border:1px solid #ccc;padding:8px;background:#f9f9f9">Model</th><th style="border:1px solid #ccc;padding:8px;background:#f9f9f9">Quantity</th></tr>
        ${productRows}
      </table>
    `
        : ""
    }
  `;

  await transporter.sendMail({
    from: '"JMDC Energy Website" <sales@jmdcenergy.com>',
    to: "sales@jmdcenergy.com",
    subject: "🔔 New Quotation Request Received",
    html: htmlBody,
  });

  return NextResponse.json({ success: true });
}
