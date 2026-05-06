import { AccessoryCard } from "@/components/AccessoryCard";
import type { AccessoryProduct } from "@/lib/catalog";

interface AccessoriesGridProps {
  items: readonly AccessoryProduct[];
}

export function AccessoriesGrid({ items }: AccessoriesGridProps) {
  return (
    <section id="accessories" className="bg-apple-parchment py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <div className="mb-8 space-y-2">
          <p className="apple-kicker text-apple-textMuted">Curated Enhancements</p>
          <h2 className="apple-headline text-apple-text">Complete your collection.</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <AccessoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
