"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

interface NavItem {
  href: string;
  label: string;
}

const navItems: readonly NavItem[] = [
  { href: "/store", label: "Timepieces" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/heritage", label: "Heritage" },
  { href: "/store#accessories", label: "Accessories" },
  { href: "/boutiques", label: "Boutiques" },
];

export function GlobalNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black text-white w-full">
      <div className="mx-auto flex h-12 w-full max-w-[1440px] items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="font-display text-lg md:text-xl tracking-[0.2em] text-white shrink-0 mr-8"
        >
          VELLUTO
        </Link>

        <nav aria-label="Global" className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "whitespace-nowrap text-[10px] md:text-[12px] font-medium uppercase tracking-widest transition-colors",
                  isActive ? "text-white" : "text-white/60 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
