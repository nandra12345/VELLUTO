import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "inline";

interface BaseButtonStyleProps {
  variant?: ButtonVariant;
  className?: string;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonStyleProps {
  children: ReactNode;
}

export interface ButtonLinkProps extends BaseButtonStyleProps {
  href: string;
  children: ReactNode;
  prefetch?: boolean | null;
}

function buttonStyles({ variant = "primary", className }: BaseButtonStyleProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-150 active:scale-95";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-apple-action text-white",
    secondary: "bg-transparent text-apple-action ring-1 ring-inset ring-[#d2d2d7]",
    inline: "bg-transparent px-0 py-0 text-apple-action text-base font-medium",
  };

  return cn(base, variants[variant], className);
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={buttonStyles({ variant, className })}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  prefetch,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={buttonStyles({ variant, className })}
    >
      {children}
    </Link>
  );
}
