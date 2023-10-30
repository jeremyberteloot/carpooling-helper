"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Driver {
  id: number;
  name: string;
  group: string;
  createdAt: Date;
}

type DriverOrNull = Driver[] | [];

export default function DriverSelect(props: {
  drivers: Driver[];
  group: string;
}) {
  const router = useRouter();
  const [selectedDrivers, setSelectedDrivers] = useState<DriverOrNull>([]);
  const driverIsSelected = (d: Driver) => {
    return selectedDrivers.findIndex((s) => s.id === d.id) > -1;
  };
  return (
    <div className="flex flex-col gap-8 p-4 justify-between">
      <ul className="flex flex-col gap-4">
        {props.drivers.map((driver: any) => (
          <li
            key={driver.id}
            onClick={() => {
              setSelectedDrivers(
                driverIsSelected(driver)
                  ? selectedDrivers.filter((s) => s.id !== driver.id)
                  : [
                      ...selectedDrivers.filter((s) => s.id !== driver.id),
                      driver,
                    ]
              );
            }}
            className={`w-full p-4 bg-slate-50 border-2 rounded-lg text-slate-300 flex items-center justify-center font-semibold ${
              driverIsSelected(driver) &&
              "border-slate-500 border-2 rounded-lg bg-slate-200 text-slate-500"
            }`}
          >
            {driver.name}
          </li>
        ))}
        <li
          className={`w-full p-4 bg-blue-50 border-2 border-blue-300 border-dashed rounded-lg text-blue-300 font-semibold`}
        >
          <Link
            href="/new-driver"
            className="w-full h-full flex items-center justify-center"
          >
            Ajouter un(e) conducteur(trice)
          </Link>
        </li>
      </ul>

      <button
        className={`flex items-center justify-center font-semibold bg-blue-500 text-white text-sm rounded-lg p-4 ${
          selectedDrivers.length === 0 && "opacity-50 cursor-not-allowed"
        }}`}
        disabled={selectedDrivers.length === 0}
        onClick={() => {
          let driverset = selectedDrivers
            .map((d) => d.id)
            .sort((a, b) => a - b)
            .join("-");
          console.log(driverset);
          router.push(`/location/${props.group}/${driverset}/turn/`);
        }}
      >
        Voir le tour
      </button>
    </div>
  );
}
