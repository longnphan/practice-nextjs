import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(snippets => {
    return (
      <Link
        key={snippets.id}
        href={`/snippets/${snippets.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippets.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div className="mx-auto w-2/5 gap-2">
      <div className="flex justify-between my-2">
        <h1 className="text-2xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>

      <div>{renderedSnippets}</div>
    </div>
  );
}
