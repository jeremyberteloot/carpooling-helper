"use client";
import { useState } from "react";

interface Driver {
  id: number;
  name: string;
  group: string;
  createdAt: Date;
}

type DriverOrNull = Driver[] | [];

export default function DriverSelect(props: { drivers: Driver[] }) {
  const [selectedDrivers, setSelectedDrivers] = useState<DriverOrNull>([]);
  const driverIsSelected = (d: Driver) =>
    selectedDrivers.findIndex((s) => s.id === d.id) > -1;
  return (
    <>
      {selectedDrivers.map((s) => s.name)}
      <ul>
        {props.drivers.map((driver: any) => (
          <li
            key={driver.id} 
            onClick={() => {
              setSelectedDrivers(
                driverIsSelected(driver.id)
                  ? selectedDrivers.filter((s) => s.id !== driver.id)
                  : [
                      ...selectedDrivers.filter((s) => s.id !== driver.id),
                      driver,
                    ]
              );
            }}
            className={`w-full p-4 bg-slate-200 text-slate-500 flex items-center justify-center font-semibold ${
              driverIsSelected(driver.id) && "bg-emerald-200 text-emerald-500"
            }`}
          >
            {driver.name}
          </li>
        ))}
      </ul>
    </>
  );
}
