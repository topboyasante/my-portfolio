"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";

function BackButton() {
  const router = useRouter();
  return (
    <div className="my-5">
      <button
        className="btn bg-transparent text-black border rounded-full"
        onClick={() => router.back()}
      >
        <BiChevronLeft />
      </button>
    </div>
  );
}

export default BackButton;
