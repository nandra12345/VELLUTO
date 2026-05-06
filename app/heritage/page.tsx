import { SiteFrame } from "@/components/SiteFrame";
import { subNavLinks } from "@/lib/navigation";
import Link from "next/link";

export default function HeritagePage() {
  return (
    <SiteFrame subNavLinks={subNavLinks}>
      <main className="min-h-screen bg-velluto-ivory text-velluto-espresso overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-24 md:px-12 lg:px-24 md:py-32">
          <div className="mx-auto max-w-[1440px] text-center">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold mb-6">Our Legacy</p>
            <h1 className="velluto-headline text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-8">
              A Century of Precision.
            </h1>
            <p className="velluto-body text-velluto-espresso/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Since 1924, Velluto has been crafting timepieces that blend Swiss horological excellence with Italian design sensibility. Our heritage is built on uncompromising quality and timeless elegance.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 border-t border-velluto-espresso/5">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 sticky top-32 h-fit">
                <h2 className="velluto-headline text-3xl md:text-4xl lg:text-5xl">The Foundation</h2>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <div className="space-y-6 velluto-body text-velluto-espresso/70 text-lg md:text-xl lg:text-2xl leading-relaxed">
                  <p>
                    Founded in the heart of Milan in 1924, Velluto began as a small atelier specializing in bespoke pocket watches for Italy&apos;s aristocracy. Our founder, Giovanni Velluto, was a master watchmaker who believed that timepieces should be both technically perfect and aesthetically sublime.
                  </p>
                  <p>
                    The company&apos;s early years were marked by innovation in complications and case design, earning recognition at the prestigious Basel Fair and establishing Velluto as a name synonymous with luxury watchmaking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-velluto-espresso text-white">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 sticky top-32 h-fit">
                <h2 className="velluto-headline text-3xl md:text-4xl lg:text-5xl">The Swiss Connection</h2>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <div className="space-y-6 velluto-body text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed">
                  <p>
                    In 1952, Velluto opened its first Swiss workshop in La Chaux-de-Fonds, the birthplace of modern watchmaking. This strategic move allowed us to work directly with the finest movement manufacturers and develop our own calibers.
                  </p>
                  <p>
                    Our Swiss heritage is evident in every Velluto timepiece, from the precision of our movements to the meticulous finishing of our cases. We remain committed to the Swiss tradition of excellence while embracing contemporary design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 sticky top-32 h-fit">
                <h2 className="velluto-headline text-3xl md:text-4xl lg:text-5xl">Mastery & Mastery</h2>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <div className="space-y-6 velluto-body text-velluto-espresso/70 text-lg md:text-xl lg:text-2xl leading-relaxed">
                  <p>
                    Today, Velluto continues the tradition of artisanal watchmaking. Each timepiece is assembled by hand in our ateliers, with movements regulated to within seconds per day. Our craftsmen undergo years of training, mastering techniques passed down through generations.
                  </p>
                  <p>
                    From the initial design sketches to the final quality control, every Velluto watch represents hundreds of hours of skilled craftsmanship. This dedication to perfection ensures that each piece will be cherished for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 md:py-48 px-6 bg-velluto-gold text-center text-white">
          <div className="mx-auto max-w-2xl space-y-8">
            <h2 className="velluto-headline text-4xl md:text-5xl lg:text-6xl leading-tight">Join the Legend.</h2>
            <p className="velluto-body text-white/90 text-lg md:text-xl">
              Discover timepieces that embody our century of craftsmanship, from vintage-inspired designs to modern interpretations of classic forms.
            </p>
            <div className="pt-6">
              <Link 
                href="/store"
                className="inline-block rounded-full bg-velluto-espresso px-12 py-4 text-sm font-bold text-white uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
              >
                View Collection
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
