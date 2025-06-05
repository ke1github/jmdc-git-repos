import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.countapi.xyz/hit/jmdcenergy.com/visits",
      {
        cache: "no-store",
      }
    );

    const data = await res.json();
    return NextResponse.json({ count: data?.value ?? 0 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Visitor API error:", error.message);
    } else {
      console.error("Visitor API error:", error);
    }

    return NextResponse.json({ count: 0 });
  }
}
