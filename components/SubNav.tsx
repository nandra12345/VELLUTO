import Link from "next/link";

interface SubNavLink {
  href: string;
  label: string;
}

interface SubNavProps {
  links: readonly SubNavLink[];
}

export function SubNav({ links }: SubNavProps) {
  return (
    <div className="bg-velluto-ivory/80 backdrop-blur-md border-b border-velluto-espresso/5 sticky top-12 z-40 w-full">
      <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-6 md:px-12">
        <span className="text-xs md:text-sm font-semibold tracking-tight truncate mr-4">Velluto Signature</span>
        
        <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar py-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[10px] md:text-[11px] font-medium text-velluto-espresso/60 hover:text-velluto-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/buy/velluto-signature" 
            className="shrink-0 bg-velluto-gold px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold text-white hover:opacity-90 transition-opacity"
          >
            Buy
          </Link>
        </nav>
      </div>
    </div>
  );
}
