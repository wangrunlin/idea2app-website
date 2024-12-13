"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header
      className={`bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 ${
        isOpen ? "fixed top-0 left-0 right-0 bottom-0 z-50" : ""
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 h-full">
        <div className="flex justify-between items-center w-full">
          <div className="text-lg font-bold">
            <Link href="/">
              <Image
                src="https://github.com/idea2app.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-10 h-10"
              />
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <svg
              onClick={() => setIsOpen(!isOpen)}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 cursor-pointer transition-transform duration-300 ${
                isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </div>
        </div>

        <nav
          className={`md:flex md:opacity-100 md:bg-transparent w-full h-full transition-all duration-200 overflow-hidden justify-end
             ${isOpen ? "block opacity-100 p-4" : "hidden opacity-0"}`}
        >
          <ul className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-6 h-full justify-center items-center">
            {links.map(({ name, href }) => (
              <li
                key={href}
                className={`transition-transform transform hover:scale-105 ${
                  href === pathname ? "text-blue-500" : ""
                } ${isOpen ? "py-2" : ""}`}
              >
                <Link
                  href={href}
                  className="hover:text-blue-500 dark:hover:text-blue-400 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
