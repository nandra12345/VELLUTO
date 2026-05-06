import { CartSummary } from "@/components/CartSummary";
import { SiteFrame } from "@/components/SiteFrame";
import { defaultCartItems } from "@/lib/catalog";
import { subNavLinks } from "@/lib/navigation";

export default function CartPage() {
  return (
    <SiteFrame subNavLinks={subNavLinks}>
      <main className="bg-apple-parchment py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <header className="mb-10 space-y-3">
            <p className="apple-kicker text-apple-textMuted">Bag</p>
            <h1 className="apple-headline text-apple-text">Review your order.</h1>
            <p className="apple-body text-apple-textMuted">
              Your selected products are ready for checkout.
            </p>
          </header>

          <CartSummary items={defaultCartItems} />
        </div>
      </main>
    </SiteFrame>
  );
}
