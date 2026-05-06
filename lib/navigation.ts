export interface NavLink {
  href: string;
  label: string;
}

export const subNavLinks: readonly NavLink[] = [
  { href: "/", label: "Overview" },
  { href: "/store", label: "Craftsmanship" },
  { href: "/buy/velluto-signature", label: "Buy" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/heritage", label: "Heritage" },
  { href: "/cart", label: "Inquire" },
];
