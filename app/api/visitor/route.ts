import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.countapi.xyz/hit/jmdcenergy.com/visits"
    );
    const data = await res.json();
    return NextResponse.json({ count: data?.value ?? 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
