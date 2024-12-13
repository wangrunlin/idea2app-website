import { description, siteName, title } from "@/config";
import Link from "next/link";
import Image from "next/image";

export const links = [
  { name: "首页", href: "/" },
  { name: "近期项目", href: "/projects" },
  { name: "菁英团队", href: "/team" },
  { name: "开源项目", href: "/opensource" },
  { name: "关于", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center text-gray-500 dark:text-gray-400 py-6 shadow-lg rounded-lg">
      <div className="my-4 flex flex-col justify-center items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://github.com/idea2app.png"
            alt={`${siteName} Logo`}
            width={100}
            height={100}
            className="w-12 h-12 rounded-full shadow-md transition-transform transform hover:scale-110"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {siteName}
          </span>
        </Link>
        <p className="text-base">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 ease-in-out mx-2 hover:scale-105 hover:underline text-left"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
