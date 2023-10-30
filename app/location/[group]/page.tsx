import Link from "next/link";
import DriverSelect from "./DriverSelect";
import { prisma } from "../../prisma";

export default async function DriverList({
  params,
}: {
  params: { group: string };
}): Promise<JSX.Element> {
  const drivers = await prisma.driver.findMany({
    where: {
      groups: {
        some: {
          id: {
            equals: params.group,
          },
        },
      },
    },
  });

  return (
    <div className="h-full flex flex-col gap-4 bg-slate-50">
      <Link href="/location" className="text-sm p-4 text-slate-500">
        ← retour
      </Link>
      <DriverSelect group={params.group} drivers={drivers} />
    </div>
  );
}
