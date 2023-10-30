import Link from "next/link";
import NewDriverForm from "./NewDriverForm";

export default async function NewDriver({
  params,
}: {
  params: { group: string };
}): Promise<JSX.Element> {
  return (
    <div className="h-full flex flex-col gap-4 bg-slate-50">
      <Link href="/location" className="text-sm p-4 text-slate-500">
        ← retour
      </Link>
      <NewDriverForm />
    </div>
  );
}
