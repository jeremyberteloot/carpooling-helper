import { PrismaClient } from "@prisma/client";
import DriverSelect from "./DriverSelect";

const prisma = new PrismaClient();

export default async function DriverList({
  params,
}: {
  params: { group: string };
}): Promise<JSX.Element> {
  const drivers = await prisma.driver.findMany({
    where: {
      group: {
        equals: params.group,
      },
    },
  });
  return (
    <div>
      <DriverSelect drivers={drivers} />
    </div>
  );
}
