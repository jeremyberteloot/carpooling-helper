import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    await prisma.driver.create({
      data: {
        name: "Claire",
        group: "clermont",
      },
    });

    const drivers = await prisma.driver.findMany();
    return NextResponse.json({ drivers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
