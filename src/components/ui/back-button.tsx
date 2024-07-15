"use client";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

function BackButton() {
  const router = useRouter();
  return (
    <div className="my-5">
      <button
        className="flex gap-2 text-sm bg-transparent text-black items-center p-0 hover:underline"
        onClick={() => router.back()}
      >
        <BsArrowLeft /> Go Back
      </button>
    </div>
  );
}

export default BackButton;
