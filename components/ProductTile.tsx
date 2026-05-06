import { ButtonLink } from "@/components/Button";
import { ProductRender } from "@/components/ProductRender";
import type { ProductShowcaseTile } from "@/lib/catalog";
import { cn } from "@/lib/cn";

interface ProductTileProps {
  tile: ProductShowcaseTile;
}

export function ProductTile({ tile }: ProductTileProps) {
  const isDark = tile.theme === "dark";

  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        isDark ? "bg-apple-darkTile text-apple-textOnDark" : "bg-apple-canvas text-apple-text",
      )}
    >
      <div
        className={cn(
          "mx-auto grid w-full max-w-[1120px] gap-10 rounded-[40px] px-6 py-8 md:grid-cols-2 md:items-center md:px-10 md:py-10",
          isDark
            ? "bg-[linear-gradient(180deg,#2c2c2e_0%,#1f1f21_100%)] ring-1 ring-inset ring-white/6"
            : "bg-[linear-gradient(180deg,#ffffff_0%,#fafafc_100%)] ring-1 ring-inset ring-[#e5e5ea]",
        )}
      >
        <div className="space-y-5">
          <p
            className={cn(
              "apple-kicker",
              isDark ? "text-apple-textOnDark/70" : "text-apple-textMuted",
            )}
          >
            {tile.eyebrow}
          </p>
          <h2 className="apple-headline max-w-[17ch]">{tile.title}</h2>
          <p
            className={cn(
              "apple-body max-w-[56ch]",
              isDark ? "text-apple-textOnDark/86" : "text-apple-textMuted",
            )}
          >
            {tile.description}
          </p>
          <p
            className={cn(
              "text-base font-semibold tracking-apple-body",
              isDark ? "text-apple-textOnDark" : "text-apple-text",
            )}
          >
            {tile.priceLabel}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href={tile.primaryAction.href}>{tile.primaryAction.label}</ButtonLink>
            <ButtonLink href={tile.secondaryAction.href} variant="secondary">
              {tile.secondaryAction.label}
            </ButtonLink>
          </div>
        </div>

        <ProductRender palette={tile.renderPalette} dark={isDark} />
      </div>
    </section>
  );
}
