import Link from "next/link";
import React from "react";
import Heading from "@/component/Heading";

function ReviewPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt="game image"
              width="320"
              height="180"
              className="mb-2 rounded-t"
            />
            <h2 className="py-1 text-center">Hollow Knight</h2>
          </Link>
        </li>
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt="game image"
              width="320"
              height="180"
              className="mb-2 rounded-t"
            />
            <h2 className="py-1 text-center">Stardew Valley</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default ReviewPage;
