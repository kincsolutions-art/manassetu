import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "visitors.json");

async function readCount(): Promise<number> {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw).count ?? 0;
  } catch {
    return 0;
  }
}

async function writeCount(count: number) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify({ count }));
}

export async function GET() {
  const count = await readCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = (await readCount()) + 1;
  await writeCount(count);
  return NextResponse.json({ count });
}
