import LocationSelect from "./LocationSelect";
import Link from "next/link";

export default function Tour() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center p-16 gap-8 bg-slate-50">
      <LocationSelect />
      <Link href="/drivers" className="text-sm text-slate-500">
        Gérer les conducteur(trices)
      </Link>
    </main>
  );
}
