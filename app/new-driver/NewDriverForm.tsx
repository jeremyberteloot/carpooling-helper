"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewDriverForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [groups, setGroups] = useState<string[] | []>([]);

  const handleSubmit = async () => {
    await fetch("/api/create-driver", {
      method: "PUT",
      body: JSON.stringify({ name, groups }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/location");
  };

  return (
    <div className="flex flex-col gap-8 p-4 items-center justify-center w-full">
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="name"
          className="text-sm font-italic text-slate-500 ml-2"
        >
          Prénom
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-slate-100 p-4 rounded-lg"
          placeholder="Kate"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <span className="text-sm font-italic text-slate-500 ml-2">
          Dans quel groupe(s) ?
        </span>
        <div className="flex gap-4 w-full">
          <button
            type="button"
            onClick={() => {
              setGroups(
                groups.findIndex((g) => g === "clermont") > -1
                  ? groups.filter((s) => s !== "clermont")
                  : [...groups.filter((s) => s !== "clermont"), "clermont"]
              );
            }}
            className={`grow w-full p-4 bg-slate-50 border-2 rounded-lg text-slate-300 flex items-center justify-center font-semibold ${
              groups.findIndex((g) => g === "clermont") > -1 &&
              "border-slate-500 border-2 rounded-lg bg-slate-200 text-slate-500"
            }`}
          >
            Clermont
          </button>
          <button
            type="button"
            onClick={() => {
              setGroups(
                groups.findIndex((g) => g === "lamalou") > -1
                  ? groups.filter((s) => s !== "lamalou")
                  : [...groups.filter((s) => s !== "lamalou"), "lamalou"]
              );
            }}
            className={`grow w-full p-4 bg-slate-50 border-2 rounded-lg text-slate-300 flex items-center justify-center font-semibold ${
              groups.findIndex((g) => g === "lamalou") > -1 &&
              "border-slate-500 border-2 rounded-lg bg-slate-200 text-slate-500"
            }`}
          >
            Lamalou
          </button>
        </div>
      </div>

      <button
        className={`w-full flex items-center justify-center font-semibold bg-blue-500 text-white text-sm rounded-lg p-4 ${
          (groups.length === 0 || name.length === 0) &&
          "opacity-50 cursor-not-allowed"
        }}`}
        onClick={() => handleSubmit()}
      >
        Envoyer
      </button>
    </div>
  );
}
