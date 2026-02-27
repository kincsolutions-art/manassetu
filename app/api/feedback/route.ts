import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

function keys(toolId: string) {
  const safe = toolId.replace(/[^a-zA-Z0-9_-]/g, "_");
  return {
    yes: `manassetu:feedback:${safe}:yes`,
    no: `manassetu:feedback:${safe}:no`,
  };
}

async function getCounts(k: { yes: string; no: string }) {
  const [yes, no] = await Promise.all([
    redis.get<number>(k.yes),
    redis.get<number>(k.no),
  ]);
  return { yes: Math.max(yes ?? 0, 0), no: Math.max(no ?? 0, 0) };
}

export async function GET(req: NextRequest) {
  const toolId = req.nextUrl.searchParams.get("tool");
  if (!toolId) return NextResponse.json({ yes: 0, no: 0 });

  try {
    return NextResponse.json(await getCounts(keys(toolId)));
  } catch {
    return NextResponse.json({ yes: 0, no: 0 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { tool, vote, undo } = await req.json();
    if (!tool || (vote !== "yes" && vote !== "no")) {
      return NextResponse.json({ error: "Invalid" }, { status: 400 });
    }

    const k = keys(tool);
    const key = vote === "yes" ? k.yes : k.no;

    if (undo) {
      await redis.decr(key);
    } else {
      await redis.incr(key);
    }

    return NextResponse.json(await getCounts(k));
  } catch {
    return NextResponse.json({ yes: 0, no: 0 });
  }
}
