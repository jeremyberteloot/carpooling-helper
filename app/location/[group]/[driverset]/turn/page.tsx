import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Note from "./Note";

const prisma = new PrismaClient();

export default async function Turn({
  params,
}: {
  params: { group: string; driverset: string };
}): Promise<JSX.Element> {
  let turn = await prisma.turn.findUnique({
    where: {
      driverset: params.driverset,
    },
  });

  if (!turn) {
    const driversIds = params.driverset.split("-").map((id) => parseInt(id));
    // Create the turn
    turn = await prisma.turn.create({
      data: {
        driverset: params.driverset,
        note: "<i>Pas encore de note<i>",
        drivers: {
          connect: driversIds.map((d) => ({ id: d })),
        },
      },
    });
  }

  return (
    <div className="h-full bg-slate-50">
      <Note group={params.group} turnId={turn.id} content={turn.note} />
    </div>
  );
}
