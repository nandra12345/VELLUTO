export default function LoadingBuyPage() {
  return (
    <main className="bg-apple-parchment py-16">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <div className="h-8 w-48 animate-pulse rounded-full bg-white" />
        <div className="mt-5 h-16 w-full max-w-[720px] animate-pulse rounded-3xl bg-white" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="h-72 animate-pulse rounded-[32px] bg-white" />
          <div className="h-72 animate-pulse rounded-[32px] bg-white" />
        </div>
      </div>
    </main>
  );
}
