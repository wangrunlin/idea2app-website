import { siteName } from "@/config";
import Link from "next/link";

export const links = [
  { name: "首页", href: "/" },
  { name: "近期项目", href: "/projects" },
  { name: "菁英团队", href: "/team" },
  { name: "开源项目", href: "/opensource" },
  { name: "关于", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center text-gray-500 dark:text-gray-400 py-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            className="hover:text-gray-900 dark:hover:text-gray-100"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p className="mt-4 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} {siteName}
      </p>
    </footer>
  );
}
