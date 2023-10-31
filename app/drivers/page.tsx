import { prisma } from "../prisma";
import Driver from "./Driver";

export default async function Drivers() {
  const drivers = await prisma.driver.findMany({
    include: {
      groups: true,
    },
  });

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center p-16 bg-slate-50">
      <Drivers drivers={drivers} />
    </main>
  );
}
