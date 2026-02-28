import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const COUNT_KEY = "manassetu:visitors";
const SEEN_KEY = "manassetu:seen";

async function getIpHash(headerStore: Headers): Promise<string> {
  const raw =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerStore.get("x-real-ip") ??
    "unknown";
  const encoded = new TextEncoder().encode(raw);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function GET() {
  try {
    const count = (await redis.get<number>(COUNT_KEY)) ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST() {
  try {
    const headerStore = await headers();
    const hash = await getIpHash(headerStore);
    const alreadySeen = await redis.sismember(SEEN_KEY, hash);

    if (alreadySeen) {
      const count = (await redis.get<number>(COUNT_KEY)) ?? 0;
      return NextResponse.json({ count });
    }

    await redis.sadd(SEEN_KEY, hash);
    const count = await redis.incr(COUNT_KEY);
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}



