import Link from "next/link";
import { accessoryProducts } from "@/lib/catalog";
import { ProductRender } from "@/components/ProductRender";
import { GlobalNav } from "@/components/GlobalNav";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-velluto-ivory text-velluto-espresso">
      {/* 1. Global Nav Component */}
      <GlobalNav />

      {/* 2. Frosted Sub-Nav - Responsive */}
      <div className="sticky top-12 z-40 bg-velluto-ivory/80 backdrop-blur-md border-b border-velluto-espresso/5 w-full">
        <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-6 md:px-12">
          <span className="text-xs md:text-sm font-semibold tracking-tight truncate mr-4">Velluto Signature</span>
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar">
            <Link href="/heritage" className="hidden sm:block whitespace-nowrap text-[11px] font-medium text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Overview</Link>
            <Link href="/store" className="hidden sm:block whitespace-nowrap text-[11px] font-medium text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Specs</Link>
            <Link 
              href="/buy/velluto-signature" 
              className="shrink-0 bg-velluto-gold px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold text-white hover:opacity-90 transition-opacity"
            >
              Buy
            </Link>
          </div>
        </div>
      </div>

      <main className="w-full">
        {/* 3. Hero 1 (Light Tile) */}
        <section className="bg-[#F5F2EB] w-full">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="relative overflow-hidden min-h-[500px] md:min-h-[700px] lg:min-h-[800px] flex flex-col items-center justify-center text-center px-6 md:px-12 py-16 md:py-24">
              <div className="z-10 space-y-4 md:space-y-6 max-w-3xl">
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold">New Arrival</p>
                <h1 className="velluto-headline text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">Velluto Signature</h1>
                <p className="velluto-body text-velluto-espresso/80 text-base md:text-lg lg:text-xl max-w-xl mx-auto">
                  A formal watch for collectors who appreciate restraint over noise.
                </p>
                <div className="flex items-center justify-center gap-6 pt-4">
                  <Link href="/buy/velluto-signature" className="text-velluto-gold text-sm md:text-base font-medium hover:underline">Buy</Link>
                  <Link href="/heritage" className="text-velluto-gold text-sm md:text-base font-medium hover:underline">Learn more &gt;</Link>
                </div>
              </div>
              <div className="absolute inset-0 z-0 flex items-end justify-center pb-8 md:pb-16 opacity-40 md:opacity-50">
                <div className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]">
                  <ProductRender palette={["#FBF9F6", "#B89765"]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Hero 2 (Dark Tile) */}
        <section className="bg-velluto-espresso text-white w-full">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="relative overflow-hidden min-h-[500px] md:min-h-[700px] lg:min-h-[800px] flex flex-col items-center justify-center text-center px-6 md:px-12 py-16 md:py-24">
              <div className="z-10 space-y-4 md:space-y-6 max-w-3xl">
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold">The Diver</p>
                <h2 className="velluto-headline text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">Velluto Abisso</h2>
                <p className="velluto-body text-white/70 text-base md:text-lg lg:text-xl max-w-xl mx-auto">
                  Built for deep water, finished for black-tie confidence.
                </p>
                <div className="flex items-center justify-center gap-6 pt-4">
                  <Link href="/buy/velluto-abisso-42" className="text-white text-sm md:text-base font-medium hover:underline">Buy</Link>
                  <Link href="/store" className="text-white text-sm md:text-base font-medium hover:underline">Explore &gt;</Link>
                </div>
              </div>
              <div className="absolute inset-0 z-0 flex items-end justify-center pb-8 md:pb-16 opacity-30 md:opacity-40">
                <div className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]">
                  <ProductRender palette={["#1C1A19", "#B89765"]} dark />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Accessories Grid */}
        <section className="bg-velluto-ivory py-16 md:py-24 lg:py-32 w-full">
          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
            <div className="mb-12 md:mb-20 space-y-2 text-center md:text-left">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold">Enhancements</p>
              <h2 className="velluto-headline text-3xl md:text-4xl lg:text-5xl">Complete your collection.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
              {accessoryProducts.map((item) => (
                <div key={item.id} className="flex flex-col group cursor-pointer">
                  <div className="aspect-square bg-white rounded-[24px] mb-6 flex items-center justify-center p-8 md:p-12 transition-transform duration-500 group-hover:scale-[1.02] shadow-sm">
                    <div className="w-full h-full max-w-[200px]">
                       <ProductRender palette={item.renderPalette} />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-velluto-espresso/60 mb-3">{item.category}</p>
                  <p className="text-sm font-medium">${item.price.toLocaleString()}</p>
                  <Link href={item.href} className="mt-4 text-sm text-velluto-gold font-semibold lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">Add to cart</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer - Responsive */}
      <footer className="bg-velluto-ivory px-6 md:px-12 pt-24 pb-12 border-t border-velluto-espresso/5 w-full">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12">
            <div className="col-span-2 lg:col-span-1">
               <Link href="/" className="font-display text-lg md:text-xl tracking-[0.2em]">VELLUTO</Link>
            </div>
            <div>
              <h4 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest mb-6 text-velluto-gold">Collections</h4>
              <ul className="space-y-1">
                <li><Link href="/store" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Signature Series</Link></li>
                <li><Link href="/store" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Abisso Diver</Link></li>
                <li><Link href="/store" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Limited Editions</Link></li>
                <li><Link href="/store" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Heritage Archive</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest mb-6 text-velluto-gold">Experience</h4>
              <ul className="space-y-1">
                <li><Link href="/bespoke" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Bespoke Design</Link></li>
                <li><Link href="/heritage" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Our Story</Link></li>
                <li><Link href="/boutiques" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Boutiques</Link></li>
                <li><Link href="/concierge" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Concierge</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest mb-6 text-velluto-gold">Support</h4>
              <ul className="space-y-1">
                <li><Link href="/care" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Care & Service</Link></li>
                <li><Link href="/warranty" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Warranty</Link></li>
                <li><Link href="/shipping" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Shipping</Link></li>
                <li><Link href="/contact" className="text-[12px] leading-[2.4] text-velluto-espresso/60 hover:text-velluto-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-velluto-espresso/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <p className="text-[11px] text-velluto-espresso/40">
                Copyright © 2026 Velluto Luxury Group. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-[11px] text-velluto-espresso/40 hover:text-velluto-espresso">Privacy Policy</Link>
                <Link href="/terms" className="text-[11px] text-velluto-espresso/40 hover:text-velluto-espresso">Terms of Use</Link>
                <Link href="/legal" className="text-[11px] text-velluto-espresso/40 hover:text-velluto-espresso">Legal</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
