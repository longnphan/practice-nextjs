import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center gap-10 text-xl">
      <Link href="/" className="">
        Home
      </Link>

      <Link href="/performance">Performance</Link>

      <Link href="/reliability">Reliability</Link>

      <Link href="/scale">Scale</Link>
    </div>
  );
}
