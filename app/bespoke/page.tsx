import { SiteFrame } from "@/components/SiteFrame";
import { subNavLinks } from "@/lib/navigation";
import Link from "next/link";

export default function BespokePage() {
  return (
    <SiteFrame subNavLinks={subNavLinks}>
      <main className="min-h-screen bg-velluto-espresso text-velluto-ivory overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-24 md:px-12 lg:px-24 md:py-32">
          <div className="mx-auto max-w-[1440px] text-center">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold mb-6">The Atelier</p>
            <h1 className="velluto-headline text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-8">
              Craft Your Legacy.
            </h1>
            <p className="velluto-body text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Every Velluto Bespoke timepiece is a masterpiece born from your vision. Our master craftsmen work exclusively with you to create a watch that transcends time.
            </p>
          </div>
        </section>

        {/* Step 1: Consultation */}
        <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-velluto-ivory text-velluto-espresso">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:gap-24 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold">Phase One</p>
                <h2 className="velluto-headline text-3xl md:text-4xl lg:text-5xl leading-tight">The Consultation</h2>
                <div className="space-y-4 velluto-body text-velluto-espresso/70 text-base md:text-lg lg:text-xl">
                  <p>
                    Begin your journey in our atelier, where our master watchmakers listen to your vision. We discuss your lifestyle, preferences, and the story you want your timepiece to tell.
                  </p>
                  <p>
                    This intimate conversation ensures every detail—from dial design to movement selection—reflects your unique personality and aspirations.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/5] md:aspect-square bg-white rounded-[32px] flex items-center justify-center overflow-hidden">
                <div className="w-1/2 h-1/2 bg-velluto-gold/10 rounded-full blur-3xl" />
                <span className="absolute text-velluto-espresso/20 font-display italic text-2xl">Atelier Vision</span>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Blueprint */}
        <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-velluto-espresso text-white">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:gap-24 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 aspect-[4/5] md:aspect-square bg-white/5 rounded-[32px] flex items-center justify-center overflow-hidden">
                <div className="w-1/2 h-1/2 bg-velluto-gold/5 rounded-full blur-3xl" />
                <span className="absolute text-white/20 font-display italic text-2xl">Precision Mapping</span>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold">Phase Two</p>
                <h2 className="velluto-headline text-3xl md:text-4xl lg:text-5xl leading-tight">The Blueprint</h2>
                <div className="space-y-4 velluto-body text-white/70 text-base md:text-lg lg:text-xl">
                  <p>
                    Our designers create detailed blueprints of your vision. Every specification is documented—from case dimensions to engraving details—ensuring perfect execution.
                  </p>
                  <p>
                    You review and approve each element, with the freedom to refine until every detail meets your exacting standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Masterpiece */}
        <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-velluto-ivory text-velluto-espresso">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:gap-24 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-velluto-gold">Phase Three</p>
                <h2 className="velluto-headline text-3xl md:text-4xl lg:text-5xl leading-tight">The Masterpiece</h2>
                <div className="space-y-4 velluto-body text-velluto-espresso/70 text-base md:text-lg lg:text-xl">
                  <p>
                    Over 18-24 months, our craftsmen bring your vision to life. Each component is hand-finished, assembled, and regulated to perfection in our Swiss workshops.
                  </p>
                  <p>
                    Your bespoke Velluto receives its own certificate of authenticity and joins the exclusive collection of one-of-a-kind timepieces.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/5] md:aspect-square bg-white rounded-[32px] flex items-center justify-center overflow-hidden">
                <div className="w-1/2 h-1/2 bg-velluto-gold/10 rounded-full blur-3xl" />
                <span className="absolute text-velluto-espresso/20 font-display italic text-2xl">Final Craft</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 md:py-48 px-6 bg-velluto-espresso text-center">
          <div className="mx-auto max-w-2xl space-y-8">
            <h2 className="velluto-headline text-4xl md:text-5xl lg:text-6xl leading-tight text-white">Begin Your Bespoke Journey</h2>
            <p className="velluto-body text-white/60 text-lg md:text-xl">
              Contact our atelier to schedule your consultation. The creation of a bespoke Velluto is a privilege reserved for discerning collectors.
            </p>
            <div className="pt-6">
              <Link 
                href="/contact"
                className="inline-block rounded-full bg-velluto-gold px-12 py-4 text-sm font-bold text-white uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
