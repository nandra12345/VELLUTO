import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { GlobalNav } from "@/components/GlobalNav";
import { SubNav } from "@/components/SubNav";

interface SiteFrameLink {
  href: string;
  label: string;
}

interface SiteFrameProps {
  children: ReactNode;
  subNavLinks: readonly SiteFrameLink[];
}

export function SiteFrame({ children, subNavLinks }: SiteFrameProps) {
  return (
    <>
      <GlobalNav />
      <SubNav links={subNavLinks} />
      {children}
      <Footer />
    </>
  );
}
