import Link from "next/link";

import { ProductRender } from "@/components/ProductRender";
import type { AccessoryProduct } from "@/lib/catalog";
import { formatUsd } from "@/lib/format";

interface AccessoryCardProps {
  item: AccessoryProduct;
}

export function AccessoryCard({ item }: AccessoryCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[32px] bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_100%)] p-6 ring-1 ring-inset ring-[#e5e5ea] transition-transform duration-200 hover:-translate-y-1 hover:ring-[#c7c7cc] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="apple-kicker text-apple-textMuted">{item.category}</p>
          <h3 className="mt-2 max-w-[18ch] text-[1.35rem] font-semibold leading-[1.12] tracking-apple-headline text-apple-text">
            {item.name}
          </h3>
        </div>
        <p className="rounded-full bg-apple-parchment px-3 py-1 text-sm font-semibold text-apple-text">
          {formatUsd(item.price)}
        </p>
      </div>

      <ProductRender palette={item.renderPalette} className="mt-6 h-40 sm:h-44" />

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#ececf0] pt-4">
        <p className="text-sm text-apple-textMuted">Premium accessory</p>
        <Link
          href={item.href}
          className="inline-flex items-center text-sm font-semibold text-apple-action transition-colors duration-150 group-hover:text-apple-focus"
        >
          Buy
        </Link>
      </div>
    </article>
  );
}
