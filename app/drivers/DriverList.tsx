"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DriverList(props: { drivers: any }) {
  const router = useRouter();

  const handleDelete = async (driverId: number) => {
    await fetch("/api/delete-driver", {
      method: "DELETE",
      body: JSON.stringify({ driverId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.refresh();
  };

  if (props.drivers.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <span className="text-sm text-slate-400 italic">
          Aucun conducteur(trice) pour le moment
        </span>

        <Link
          href="/new-driver"
          className="text-sm text-slate-600 font-semibold"
        >
          Ajouter un(e) conducteur(trice)
        </Link>
      </div>
    );
  }

  return (
    <ul className="w-full grow p-4 flex flex-col gap-2">
      {props.drivers.map((driver: any) => (
        <li
          key={driver.id}
          className="w-full p-4 flex justify-between bg-slate-100 rounded-lg"
        >
          <div className="flex items-center gap-4 grow">
            <span className="font-semibold">{driver.name}</span>
            <div className="flex items-center gap-2">
              {driver.groups.map((g: any) => (
                <span
                  key={g.id}
                  className="p-2 text-xs bg-blue-100 text-blue-500 rounded-lg"
                >
                  {g.name}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleDelete(driver.id)}
            className="text-red-500 font-semibold text-xs"
          >
            supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}
