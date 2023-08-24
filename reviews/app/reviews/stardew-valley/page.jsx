import Heading from "@/component/Heading";

export default function StardewValleyPage() {
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
      <p>Review for the game.</p>
    </>
  );
}
