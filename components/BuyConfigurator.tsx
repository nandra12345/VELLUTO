"use client";

import { useMemo, useState } from "react";

import { ButtonLink } from "@/components/Button";
import { ProductRender } from "@/components/ProductRender";
import type { ColorOption, ConfigurableProduct, StorageOption } from "@/lib/catalog";
import { cn } from "@/lib/cn";
import { formatUsd } from "@/lib/format";

interface BuyConfiguratorProps {
  product: ConfigurableProduct;
}

interface ConfigChipProps {
  title: string;
  subtitle: string;
  active: boolean;
  onPress: () => void;
  swatchHex?: string;
}

function findStorageOption(
  options: readonly StorageOption[],
  id: StorageOption["id"],
): StorageOption {
  return options.find((option) => option.id === id) ?? options[0];
}

function findColorOption(
  options: readonly ColorOption[],
  id: ColorOption["id"],
): ColorOption {
  return options.find((option) => option.id === id) ?? options[0];
}

function getPriceDeltaLabel(priceDelta: number): string {
  if (priceDelta === 0) {
    return "Included";
  }

  return `+${formatUsd(priceDelta)}`;
}

function getDeliveryMessage(storageId: StorageOption["id"]): string {
  if (storageId === "42mm") {
    return "Delivers in 3-5 business days.";
  }

  return "Delivers in 1-2 business days.";
}

function ConfigChip({
  title,
  subtitle,
  active,
  onPress,
  swatchHex,
}: ConfigChipProps) {
  return (
    <button
      type="button"
      onClick={onPress}
      aria-pressed={active}
      className={cn(
        "w-full rounded-3xl px-4 py-3 text-left ring-1 ring-inset transition-transform duration-150 active:scale-95",
        active
          ? "bg-[#B89765] text-[#EAE6DF] ring-[#B89765]"
          : "bg-[#FBF9F6] text-[#2A2725] ring-[#dfdfe4] hover:-translate-y-0.5 hover:ring-[#c8c8ce]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-0.5">
          <p className="text-sm font-semibold">{title}</p>
          <p className={cn("text-xs", active ? "text-[#EAE6DF]/88" : "text-[#2A2725]/60")}>
            {subtitle}
          </p>
        </div>
        {swatchHex ? (
          <span
            aria-hidden
            className={cn(
              "mt-0.5 size-4 rounded-full",
              active ? "ring-1 ring-[#EAE6DF]/70 ring-offset-1 ring-offset-[#B89765]" : "",
            )}
            style={{ backgroundColor: swatchHex }}
          />
        ) : null}
      </div>
    </button>
  );
}

export function BuyConfigurator({ product }: BuyConfiguratorProps) {
  const [selectedStorage, setSelectedStorage] = useState<StorageOption["id"]>(
    product.storageOptions[0]?.id ?? "256gb",
  );
  const [selectedColor, setSelectedColor] = useState<ColorOption["id"]>(
    product.colorOptions[0]?.id ?? "natural-titanium",
  );

  const storage = useMemo(
    () => findStorageOption(product.storageOptions, selectedStorage),
    [product.storageOptions, selectedStorage],
  );
  const color = useMemo(
    () => findColorOption(product.colorOptions, selectedColor),
    [product.colorOptions, selectedColor],
  );

  const subtotal = product.priceFrom + storage.priceDelta;
  const estimatedTax = Math.round(subtotal * 0.08);
  const estimatedTotal = subtotal + estimatedTax;
  const monthlyInstallment = Math.round(estimatedTotal / 24);
  const deliveryMessage = getDeliveryMessage(storage.id);

  return (
    <section className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
      <div className="space-y-7">
        <div className="rounded-[36px] bg-[linear-gradient(180deg,#FBF9F6_0%,#EAE6DF_100%)] p-7 ring-1 ring-inset ring-[#B89765]/20 sm:p-8">
          <p className="apple-kicker text-[#2A2725]/60">Selected finish</p>
          <h2 className="mt-2 apple-subheadline text-[#2A2725]">{color.name}</h2>
          <p className="mt-1 apple-body text-[#2A2725]/70">{storage.label} configuration</p>
          <ProductRender palette={color.renderPalette} className="mt-6 h-52" />
          <div className="mt-6 rounded-[24px] bg-[#EAE6DF] p-4 ring-1 ring-inset ring-[#B89765]/20">
            <p className="text-sm font-semibold text-[#2A2725]">{deliveryMessage}</p>
            <p className="mt-1 text-xs text-[#2A2725]/70">
              Free delivery and returns. Personal setup available in-store.
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          {product.highlights.map((highlight, index) => (
            <li
              key={highlight}
              className={cn(
                "rounded-[24px] px-4 py-3.5 apple-body ring-1 ring-inset ring-[#B89765]/20 text-[17px] leading-[1.47]",
                index % 2 === 0
                  ? "bg-[#EAE6DF] text-[#2A2725]/70"
                  : "bg-[#FBF9F6] text-[#2A2725]/70",
              )}
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[36px] bg-[linear-gradient(180deg,#FBF9F6_0%,#EAE6DF_100%)] p-7 ring-1 ring-inset ring-[#B89765]/20 sm:p-8">
        <h3 className="apple-subheadline text-[#2A2725]">Configure your model</h3>

        <div className="mt-7 space-y-8">
          <fieldset className="space-y-4">
            <legend className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2A2725]/60">
              Case Size
            </legend>
            <p className="apple-body text-[#2A2725]/70 text-[17px] leading-[1.47]">Choose the case size that fits your wrist.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {product.storageOptions.map((option) => (
                <ConfigChip
                  key={option.id}
                  title={option.label}
                  subtitle={getPriceDeltaLabel(option.priceDelta)}
                  active={option.id === storage.id}
                  onPress={() => setSelectedStorage(option.id)}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2A2725]/60">
              Case Material
            </legend>
            <p className="apple-body text-[#2A2725]/70 text-[17px] leading-[1.47]">Select your preferred case material and finish.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {product.colorOptions.map((option) => (
                <ConfigChip
                  key={option.id}
                  title={option.name}
                  subtitle="Premium titanium finish"
                  swatchHex={option.hex}
                  active={option.id === color.id}
                  onPress={() => setSelectedColor(option.id)}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2A2725]/60">
              Strap Type
            </legend>
            <p className="apple-body text-[#2A2725]/70 text-[17px] leading-[1.47]">Choose your preferred strap material.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <ConfigChip
                title="Alligator Leather"
                subtitle="Hand-stitched premium leather"
                active={true}
                onPress={() => {}}
              />
              <ConfigChip
                title="Stainless Steel"
                subtitle="Polished metal bracelet"
                active={false}
                onPress={() => {}}
              />
            </div>
          </fieldset>
        </div>

        <div className="mt-10 rounded-[28px] bg-[#EAE6DF] p-5 ring-1 ring-inset ring-[#B89765]/20">
          <p className="apple-kicker text-[#2A2725]/60">Estimated total</p>
          <p className="mt-1 text-[34px] font-semibold tracking-apple-headline text-[#2A2725]">
            {formatUsd(estimatedTotal)}
          </p>
          <p className="mt-1 apple-body text-[#2A2725]/70">
            {product.name} - {storage.label} - {color.name}
          </p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between text-[#2A2725]/70">
              <dt>Watch</dt>
              <dd className="font-medium text-[#2A2725]">{formatUsd(product.priceFrom)}</dd>
            </div>
            <div className="flex items-center justify-between text-[#2A2725]/70">
              <dt>Case size upgrade</dt>
              <dd className="font-medium text-[#2A2725]">{getPriceDeltaLabel(storage.priceDelta)}</dd>
            </div>
            <div className="flex items-center justify-between text-[#2A2725]/70">
              <dt>Strap</dt>
              <dd className="font-medium text-[#2A2725]">Included</dd>
            </div>
            <div className="flex items-center justify-between text-[#2A2725]/70">
              <dt>Estimated tax</dt>
              <dd className="font-medium text-[#2A2725]">{formatUsd(estimatedTax)}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-[#B89765]/30 pt-2 text-[#2A2725]/70">
              <dt>24-month financing</dt>
              <dd className="font-semibold text-[#2A2725]">{formatUsd(monthlyInstallment)}/mo</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink
            href={`/cart?product=${product.slug}&storage=${storage.id}&color=${color.id}`}
            className="bg-[#B89765] text-[#EAE6DF] hover:bg-[#A07A55]"
          >
            Add to Bag
          </ButtonLink>
          <ButtonLink href="/store" variant="secondary">
            Continue shopping
          </ButtonLink>
        </div>

        <p className="mt-4 text-xs text-[#2A2725]/60">
          Secure checkout. Free shipping. 14-day returns.
        </p>
      </div>
    </section>
  );
}
