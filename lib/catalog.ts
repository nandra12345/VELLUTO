export interface ActionLink {
  label: string;
  href: string;
}

export type RenderPalette = [string, string];
export type TileTheme = "light" | "dark";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  href: string;
  renderPalette: RenderPalette;
  priceLabel: string;
  primaryAction: ActionLink;
}

export interface ProductShowcaseTile {
  id: string;
  theme: TileTheme;
  eyebrow: string;
  title: string;
  description: string;
  priceLabel: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
  renderPalette: RenderPalette;
}

export interface StoreProduct extends Product {
  slug: string;
  tagline: string;
  theme: TileTheme;
  buyHref: string;
  priceFrom: number;
}

export interface StorageOption {
  id: "38mm" | "40mm" | "42mm";
  label: string;
  priceDelta: number;
}

export interface ColorOption {
  id: "midnight-onyx" | "champagne-gold" | "rose-gold" | "brushed-steel";
  name: string;
  hex: string;
  renderPalette: RenderPalette;
}

export interface ConfigurableProduct {
  slug: string;
  name: string;
  tagline: string;
  priceFrom: number;
  overview: string;
  highlights: readonly string[];
  storageOptions: readonly StorageOption[];
  colorOptions: readonly ColorOption[];
  heroPalette: RenderPalette;
}

export interface AccessoryProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  href: string;
  renderPalette: RenderPalette;
}

export interface CartLineItem {
  id: string;
  name: string;
  details: string;
  quantity: number;
  unitPrice: number;
}

export const catalog: Product[] = [
  {
    id: "velluto-signature-38",
    name: "Velluto Signature 38",
    category: "Dress Watches",
    price: 6800,
    href: "/buy/velluto-signature",
    renderPalette: ["#B89765", "#1C1A19"],
    priceLabel: "From $6,800",
    primaryAction: {
      label: "View Details",
      href: "/buy/velluto-signature",
    },
  },
  {
    id: "velluto-abisso-42",
    name: "Velluto Abisso Diver",
    category: "Professional",
    price: 9200,
    href: "/buy/velluto-abisso-42",
    renderPalette: ["#1C1A19", "#B89765"],
    priceLabel: "From $9,200",
    primaryAction: {
      label: "Explore",
      href: "/buy/velluto-abisso-42",
    },
  },
];

export const homeShowcaseTiles: readonly ProductShowcaseTile[] = [
  {
    id: "velluto-signature-hero",
    theme: "light",
    eyebrow: "New Arrival",
    title: "Velluto Signature",
    description: "A formal watch for collectors who appreciate restraint over noise.",
    priceLabel: "From $6,800",
    primaryAction: {
      label: "Buy",
      href: "/buy/velluto-signature",
    },
    secondaryAction: {
      label: "Learn more",
      href: "/heritage",
    },
    renderPalette: ["#FBF9F6", "#B89765"],
  },
];

export const storeProducts: readonly StoreProduct[] = [
  {
    id: "velluto-signature",
    slug: "velluto-signature",
    name: "Velluto Signature",
    category: "Dress Watches",
    price: 6800,
    priceFrom: 6800,
    href: "/buy/velluto-signature",
    renderPalette: ["#B89765", "#FBF9F6"],
    priceLabel: "From $6,800",
    primaryAction: {
      label: "Buy",
      href: "/buy/velluto-signature",
    },
    tagline: "The essence of cozy luxury.",
    theme: "light",
    buyHref: "/buy/velluto-signature",
  },
];

export const accessoryProducts: readonly AccessoryProduct[] = [
  {
    id: "velluto-leather-strap",
    name: "Italian Leather Strap",
    category: "Accessories",
    price: 450,
    href: "/store",
    renderPalette: ["#1C1A19", "#B89765"],
  },
];

export const vellutoSignature: ConfigurableProduct = {
  slug: "velluto-signature",
  name: "Velluto Signature",
  tagline: "A formal watch for collectors who appreciate restraint over noise.",
  priceFrom: 6800,
  overview: "The Signature is assembled around a manually finished movement, a lacquered dial, and a case profile designed to disappear elegantly beneath a cuff.",
  highlights: [
    "Swiss automatic caliber regulated for daily precision",
    "Sapphire crystal with anti-reflective interior treatment",
    "Hand-finished case flanks and faceted lugs",
    "Small-batch assembly with numbered certificate of origin",
  ],
  storageOptions: [
    { id: "38mm", label: "38mm", priceDelta: 0 },
    { id: "40mm", label: "40mm", priceDelta: 400 },
    { id: "42mm", label: "42mm", priceDelta: 800 },
  ],
  colorOptions: [
    {
      id: "champagne-gold",
      name: "Champagne Gold",
      hex: "#B89765",
      renderPalette: ["#FBF9F6", "#B89765"],
    },
    {
      id: "midnight-onyx",
      name: "Midnight Onyx",
      hex: "#1C1A19",
      renderPalette: ["#1C1A19", "#B89765"],
    },
  ],
  heroPalette: ["#FBF9F6", "#B89765"],
};

export const configurableProductsBySlug: Readonly<Record<string, ConfigurableProduct>> = {
  "velluto-signature": vellutoSignature,
};

export function getConfigurableProductBySlug(slug: string): ConfigurableProduct | null {
  return configurableProductsBySlug[slug] ?? null;
}

export const defaultCartItems: readonly CartLineItem[] = [];
