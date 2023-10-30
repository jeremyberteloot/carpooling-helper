import { NextResponse } from "next/server";
import { prisma } from "../../prisma";

export async function GET(request: Request) {
  try {
    const drivers = await prisma.driver.findMany();
    return NextResponse.json({ drivers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
