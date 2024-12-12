"use client";

import { useState } from "react";
import Image from "next/image";
import { links } from "./Footer";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex justify-between items-center w-full">
          <div className="text-lg font-bold">
            <Image
              src="https://github.com/idea2app.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10"
            />
          </div>
          <div className="md:hidden flex items-center">
            {isOpen ? (
              <svg
                onClick={() => setIsOpen(!isOpen)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setIsOpen(!isOpen)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </div>
        </div>

        <nav
          className={`md:flex w-full ${
            isOpen ? "block" : "hidden"
          } justify-end p-4`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            {links.map(({ name, href }) => (
              <li
                key={href}
                className={`transition-transform transform hover:scale-105 ${
                  href === "/" ? "text-blue-500" : ""
                } ${isOpen ? "py-2" : ""}`}
              >
                <a
                  href={href}
                  className="hover:text-blue-500 dark:hover:text-blue-400 font-semibold"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
