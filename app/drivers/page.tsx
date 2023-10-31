import { prisma } from "../prisma";
import DriverList from "./DriverList";
import Link from "next/link";

export default async function Drivers() {
  const drivers = await prisma.driver.findMany({
    include: {
      groups: true,
    },
  });

  return (
    <main className="w-full h-full flex flex-col bg-slate-50">
      <Link href="/" className="text-sm p-4 text-slate-500">
        ← retour
      </Link>
      <DriverList drivers={drivers} />
    </main>
  );
}
