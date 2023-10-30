import Link from "next/link";

export default function GroupSelect() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <Link href="/tour/clermont">Clermont</Link>
      <Link href="/tour/lamalou">Lamalou</Link>
    </div>
  );
}
