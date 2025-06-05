import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    // ✅ Don't increment if running locally
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ count: 0 });
    }

    const count = await redis.incr("jmdc:visitor:count");
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Redis error:", error);
    return NextResponse.json({ count: 0 });
  }
}
