import { OSS_CONTRIBUTIONS } from "@/db/projects";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

function OSSContributions() {
  return (
    <div className="mb-16">
      <div className="flex flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <CiStar />
          <h5>OSS Contributions</h5>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {OSS_CONTRIBUTIONS.map((item) => {
          return (
            <div key={item.id}>
              <h6>{item.name}</h6>
              <p className="text-neutral-500 mt-2">{item.about}</p>
              <Link href={`${item.href}`} className="mt-2" target="_blank">
                <div className="flex items-center gap-1 underline text-neutral-500 text-sm hover:text-black ease-in-out duration-200">
                  <span>
                    <IoIosLink />
                  </span>
                  <p>{item.href_text}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OSSContributions;
