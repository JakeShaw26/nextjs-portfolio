"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "../../public/json/links.json";
import Links from "@/types/links";

export const Navbar = () => {
  const pathname = usePathname();

  const links: Links[] = data.links;

  return (
    <div className="flex">
      <nav className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white overflow-y-auto">
        {/* add about here */}
        <ul className="flex flex-col p-4">
          {links.map((link) => {
            return (
              <Link
                href={link.endpoint}
                className={
                  pathname == link.endpoint
                    ? "bg-white text-gray-800 p-6 my-1 flex flex-1/2 rounded-md"
                    : "hover:bg-white hover:text-gray-800 p-6 my-1 flex flex-1/2 rounded-md"
                }
                key={link.key}
              >
                {link.text}
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
