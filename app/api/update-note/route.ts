import { NextResponse } from "next/server";
import { prisma } from "../../prisma";

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const updatedTurn = await prisma.turn.update({
      where: {
        id: data.turn,
      },
      data: {
        note: data.note,
      },
    });
    return NextResponse.json({ updatedTurn }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
