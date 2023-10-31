import { NextResponse } from "next/server";
import { prisma } from "../../prisma";

export async function DELETE(request: Request) {
  try {
    const data = await request.json();
    await prisma.driver.delete({
      where: {
        id: data.driverId,
      },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
