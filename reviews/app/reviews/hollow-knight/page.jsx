import React from "react";
import Heading from "@/component/Heading";

export default function HollowKnightPage() {
  return (
    <>
      <Heading>Hollow Knight</Heading>
      <img
        src="/images/hollow-knight.jpg"
        alt="game image"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>Fantastic and challenging game!</p>
    </>
  );
}
