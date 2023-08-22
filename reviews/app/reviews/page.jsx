import Link from "next/link";
import React from "react";
import Heading from "@/component/Heading";

function ReviewPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul>
        <li>
          <Link href="/reviews/hollow-knight">Hollow Knight</Link>
        </li>
        <li>
          <Link href="/reviews/stardew-valley">Stardew Valley</Link>
        </li>
      </ul>
    </>
  );
}

export default ReviewPage;
