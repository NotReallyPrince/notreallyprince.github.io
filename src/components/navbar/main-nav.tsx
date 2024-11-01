"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
];

const MainNav = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-x-8">
      {navLinks.map(({ title, href }, i) => (
        <li key={i}>
          <Link
            href={href}
            className={cn(
              "hidden text-foreground/80 underline-offset-4 duration-300 hover:text-foreground hover:underline md:block",
              pathname === href && "font-medium text-foreground underline"
            )}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
