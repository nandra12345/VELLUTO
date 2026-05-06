import { ButtonLink } from "@/components/Button";
import type { CartLineItem } from "@/lib/catalog";
import { formatUsd } from "@/lib/format";

interface CartSummaryProps {
  items: readonly CartLineItem[];
}

function getSubtotal(items: readonly CartLineItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function CartSummary({ items }: CartSummaryProps) {
  const subtotal = getSubtotal(items);
  const shipping = 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_100%)] p-6 ring-1 ring-inset ring-[#e5e5ea] transition-transform duration-200 hover:-translate-y-0.5 hover:ring-[#c7c7cc] sm:p-7"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="apple-kicker text-apple-textMuted">Bag item</p>
                <h2 className="mt-2 text-xl font-semibold tracking-apple-headline text-apple-text">
                  {item.name}
                </h2>
                <p className="mt-1 apple-body text-apple-textMuted">{item.details}</p>
                <p className="mt-2 text-sm font-medium text-apple-textMuted">
                  Qty {item.quantity}
                </p>
              </div>
              <p className="rounded-full bg-apple-parchment px-3 py-1 text-sm font-semibold text-apple-text">
                {formatUsd(item.unitPrice * item.quantity)}
              </p>
            </div>
          </article>
        ))}
      </div>

      <aside className="rounded-[28px] bg-[linear-gradient(180deg,#ffffff_0%,#f6f6f8_100%)] p-6 ring-1 ring-inset ring-[#e0e0e5] sm:p-7">
        <p className="apple-kicker text-apple-textMuted">Summary</p>
        <h3 className="mt-2 text-[1.55rem] font-semibold tracking-apple-headline text-apple-text">
          Order Summary
        </h3>

        <dl className="mt-5 space-y-3">
          <div className="flex items-center justify-between apple-body text-apple-textMuted">
            <dt>Subtotal</dt>
            <dd className="text-apple-text">{formatUsd(subtotal)}</dd>
          </div>
          <div className="flex items-center justify-between apple-body text-apple-textMuted">
            <dt>Shipping</dt>
            <dd className="text-apple-text">{shipping === 0 ? "Free" : formatUsd(shipping)}</dd>
          </div>
          <div className="flex items-center justify-between apple-body text-apple-textMuted">
            <dt>Estimated tax</dt>
            <dd className="text-apple-text">{formatUsd(tax)}</dd>
          </div>
        </dl>

        <div className="my-5 h-px bg-[#d2d2d7]" />

        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-apple-text">Total</p>
          <p className="text-[2rem] font-semibold tracking-apple-headline text-apple-text">
            {formatUsd(total)}
          </p>
        </div>

        <ButtonLink href="/store" className="mt-6 w-full justify-center">
          Checkout
        </ButtonLink>

        <p className="mt-4 text-xs text-apple-textMuted">
          Taxes are estimated and may vary at checkout.
        </p>
      </aside>
    </section>
  );
}
