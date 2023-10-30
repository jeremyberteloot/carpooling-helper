import Link from "next/link";

export default function LocationSelect() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <Link
        href="/location/clermont"
        className="w-full p-4 flex items-center justify-center font-semibold bg-blue-500 text-white rounded-lg"
      >
        Clermont
      </Link>
      <Link
        href="/location/lamalou"
        className="w-full p-4 flex items-center justify-center font-semibold bg-blue-500 text-white rounded-lg"
      >
        Lamalou
      </Link>
    </div>
  );
}
