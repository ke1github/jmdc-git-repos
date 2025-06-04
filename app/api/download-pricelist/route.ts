import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public/downloads/JMDC-Pricelist.pdf"
  );

  try {
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=JMDC-Pricelist.pdf",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to download price list." },
      { status: 500 }
    );
  }
}
