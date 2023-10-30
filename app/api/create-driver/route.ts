import { NextResponse } from "next/server";
import { prisma } from "../../prisma";

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const driver = await prisma.driver.create({
      data: {
        name: data.name,
        groups: {
          connect: data.groups.map((group: string) => ({ id: group })),
        },
      },
    });

    return NextResponse.json({ driver }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
