import { notFound } from "next/navigation";

import { BuyConfigurator } from "@/components/BuyConfigurator";
import { SiteFrame } from "@/components/SiteFrame";
import { getConfigurableProductBySlug } from "@/lib/catalog";
import { formatUsd } from "@/lib/format";
import { subNavLinks } from "@/lib/navigation";

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return [{ slug: "velluto-signature" }];
}

interface BuyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BuyProductPage({ params }: BuyPageProps) {
  const { slug } = await params;
  const product = getConfigurableProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <SiteFrame subNavLinks={subNavLinks}>
      <main className="min-h-screen bg-velluto-ivory text-velluto-espresso overflow-x-hidden pb-24 md:pb-32">
        {/* Product Intro */}
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24 py-12 md:py-24">
          <header className="mb-12 md:mb-20 space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold">Configurator</p>
              <h1 className="velluto-headline text-4xl md:text-6xl lg:text-7xl leading-tight">{product.name}</h1>
            </div>
            <p className="velluto-body text-xl md:text-2xl text-velluto-espresso/60 italic font-display">{product.tagline}</p>
            <div className="max-w-2xl space-y-4">
               <p className="velluto-body text-base md:text-lg text-velluto-espresso/70 leading-relaxed">{product.overview}</p>
               <p className="text-xl font-semibold text-velluto-gold">
                 Starting at {formatUsd(product.priceFrom)}
               </p>
            </div>
          </header>

          {/* Configurator Component */}
          <div className="border-t border-velluto-espresso/5 pt-12 md:pt-20">
            <BuyConfigurator product={product} />
          </div>
        </div>

        {/* Bottom Sticky Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-velluto-ivory/90 backdrop-blur-xl border-t border-velluto-gold/10">
          <div className="mx-auto flex h-20 md:h-24 w-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
              <span className="text-lg md:text-2xl font-bold text-velluto-espresso">Total {formatUsd(6800)}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-velluto-espresso/40 font-bold">Free Priority Shipping</span>
            </div>
            <button className="rounded-full bg-velluto-gold px-6 md:px-12 py-3 md:py-4 text-[10px] md:text-xs font-bold text-white uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
              Add to Bag
            </button>
          </div>
        </div>
      </main>
    </SiteFrame>
  );
}
