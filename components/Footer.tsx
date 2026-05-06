import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: readonly FooterLink[];
}

const footerSections: readonly FooterSection[] = [
  {
    title: "Collections",
    links: [
      { href: "/store", label: "All Timepieces" },
      { href: "#", label: "Dress Collection" },
      { href: "#", label: "Sport Collection" },
      { href: "#", label: "Limited Editions" },
    ],
  },
  {
    title: "Care & Servicing",
    links: [
      { href: "#", label: "Maintenance Guide" },
      { href: "#", label: "Warranty & Service" },
      { href: "#", label: "Professional Repair" },
      { href: "#", label: "Parts & Restoration" },
    ],
  },
  {
    title: "Find a Boutique",
    links: [
      { href: "#", label: "Boutique Locations" },
      { href: "#", label: "Schedule Appointment" },
      { href: "#", label: "Concierge Service" },
      { href: "#", label: "Contact Us" },
    ],
  },
  {
    title: "Our Heritage",
    links: [
      { href: "#", label: "Brand Story" },
      { href: "#", label: "Craftsmanship" },
      { href: "#", label: "Master Artisans" },
      { href: "#", label: "Press & Media" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-slate-300 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-10 lg:gap-12 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300/70">
              Velluto Heritage
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.04] text-slate-50 sm:text-4xl">
              Crafted for those who understand time.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-400">
            Every Velluto timepiece is a masterwork of mechanical precision and timeless elegance.
            Discover why collectors around the world trust our heritage.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {footerSections.map((section) => {
            const headingId = `footer-${section.title.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <section key={section.title} aria-labelledby={headingId}>
                <h3 id={headingId} className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-100">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block text-[12px] font-normal leading-[2.4] text-slate-400 transition-colors duration-150 hover:text-slate-100"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="mt-8 border-t border-slate-700/60 pt-6 text-[11px] leading-[1.6] text-slate-500">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright (c) 2026 Velluto. All rights reserved.</p>
            <p>Privacy Policy | Terms of Use | Warranty Info | Legal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
