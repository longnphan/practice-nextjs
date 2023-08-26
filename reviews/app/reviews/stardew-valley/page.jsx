import { readFile } from "node:fs/promises";
import { marked } from "marked";
import Heading from "@/component/Heading";

export default async function StardewValleyPage() {
  const text = await readFile("./content/reviews/stardew-valley.md", "utf8");
  const html = marked(text);

  return (
    <>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt="game image"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>{html}</p>
    </>
  );
}
