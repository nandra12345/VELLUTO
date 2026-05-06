import { ProductCard } from "@/components/ProductCard";
import { SiteFrame } from "@/components/SiteFrame";
import { storeProducts } from "@/lib/catalog";
import { subNavLinks } from "@/lib/navigation";

export default function StorePage() {
  return (
    <SiteFrame subNavLinks={subNavLinks}>
      <main className="bg-apple-parchment py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <header className="mb-10 space-y-3">
            <p className="apple-kicker text-apple-textMuted">Store</p>
            <h1 className="apple-headline text-apple-text">Shop the latest products.</h1>
            <p className="apple-body max-w-[62ch] text-apple-textMuted">
              Select from our curated lineup of flagship hardware and premium accessories.
            </p>
          </header>

          <section className="grid gap-5 md:grid-cols-2">
            {storeProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </section>
        </div>
      </main>
    </SiteFrame>
  );
}
