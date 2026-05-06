import { ButtonLink } from "@/components/Button";
import { ProductRender } from "@/components/ProductRender";
import type { StoreProduct } from "@/lib/catalog";
import { cn } from "@/lib/cn";
import { formatUsd } from "@/lib/format";

interface ProductCardProps {
  product: StoreProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const isDark = product.theme === "dark";

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[36px] p-7 transition-transform duration-200 hover:-translate-y-1 md:p-8",
        isDark
          ? "bg-[linear-gradient(180deg,#2c2c2e_0%,#1f1f21_100%)] text-apple-textOnDark ring-1 ring-inset ring-white/8"
          : "bg-[linear-gradient(180deg,#ffffff_0%,#fafafc_100%)] text-apple-text ring-1 ring-inset ring-[#e5e5ea]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <h2 className="apple-subheadline max-w-[12ch]">{product.name}</h2>
          <p className={cn("apple-body max-w-[34ch]", isDark ? "text-apple-textOnDark/82" : "text-apple-textMuted")}>
            {product.tagline}
          </p>
        </div>
        <p
          className={cn(
            "shrink-0 rounded-full px-3 py-1 text-sm font-semibold",
            isDark ? "bg-white/8 text-apple-textOnDark" : "bg-apple-parchment text-apple-text",
          )}
        >
          From {formatUsd(product.priceFrom)}
        </p>
      </div>

      <ProductRender palette={product.renderPalette} dark={isDark} className="mt-8 h-52 transition-transform duration-200 group-hover:scale-[1.02]" />

      <div
        className={cn(
          "mt-8 flex items-center justify-between gap-4 border-t pt-5 text-sm sm:mt-10",
          isDark ? "border-white/10" : "border-[#ececf0]",
        )}
      >
        <p className={cn(isDark ? "text-apple-textOnDark/66" : "text-apple-textMuted")}>
          Available for premium delivery
        </p>
        <ButtonLink href={product.buyHref}>Buy</ButtonLink>
      </div>
    </article>
  );
}
