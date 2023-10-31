import LocationSelect from "./LocationSelect";
import Link from "next/link";

export default function Tour() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center p-16 bg-slate-50">
      <LocationSelect />
      <Link href="/drivers">Gérer les conducteur(trices)</Link>
    </main>
  );
}
