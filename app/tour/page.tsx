import Image from "next/image";
import GroupSelect from "./GroupSelect";

export default function Tour() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center p-16 bg-slate-50">
      <GroupSelect />
    </main>
  );
}
