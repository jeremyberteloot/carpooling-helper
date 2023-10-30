"use client";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StarterKit from "@tiptap/starter-kit";

export default function Note(props: {
  group: string;
  turnId: number;
  content: string;
}) {
  const router = useRouter();
  const [note, setNote] = useState(props.content);
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none bg-slate-100 text-slate-500 w-full rounded-lg p-4 font-italic",
      },
    },
    content: note,
    onUpdate: ({ editor }) => {
      setNote(editor.getHTML());
    },
  });
  return (
    <div className="h-full flex flex-col gap-8 p-4">
      <div className="grow">
        <EditorContent editor={editor} />
      </div>

      <div className="flex gap-4">
        <Link
          className={`grow flex items-center justify-center font-semibold text-sm text-slate-500 rounded-lg p-4`}
          href={`/location/${props.group}`}
        >
          Annuler
        </Link>
        <button
          className={`grow flex items-center justify-center font-semibold bg-blue-500 text-sm text-white rounded-lg p-4`}
          onClick={() =>
            fetch("/api/update-note", {
              method: "PUT",
              body: JSON.stringify({ turn: props.turnId, note }),
              headers: {
                "Content-Type": "application/json",
              },
            })
          }
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
