import { cn } from "@/lib/cn";

interface ProductRenderProps {
  palette: readonly [string, string];
  dark?: boolean;
  className?: string;
}

export function ProductRender({ palette, dark = false, className }: ProductRenderProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative mx-auto h-56 w-full max-w-[420px] overflow-hidden rounded-[40px]",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 28%, ${palette[0]} 0%, ${palette[1]} 75%)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),rgba(255,255,255,0.03)_62%)]" />
      <div
        className={cn(
          "absolute bottom-5 left-1/2 h-8 w-36 -translate-x-1/2 rounded-full blur-2xl",
          dark ? "bg-black/56" : "bg-black/18",
        )}
      />
      <div className="absolute bottom-7 left-1/2 h-[112px] w-[196px] -translate-x-1/2 rounded-[32px] bg-gradient-to-br from-white/72 via-white/12 to-black/14 shadow-product" />
    </div>
  );
}
