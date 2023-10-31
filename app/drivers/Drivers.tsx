"use client";
import { useRouter } from "next/navigation";

export default function Drivers(props: { drivers: any }) {
  const router = useRouter();

  const handleDelete = async (driverId: number) => {
    await fetch("/api/delete-driver", {
      method: "DELETE",
      body: JSON.stringify({ driverId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <ul>
      {props.drivers.map((driver: any) => (
        <li key={driver.id}>
          {driver.name}{" "}
          {driver.groups.map((g: any) => (
            <span key={g.id}>{g.name}</span>
          ))}
          <button onClick={() => handleDelete(driver.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}
