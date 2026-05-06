import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-apple-parchment px-6">
      <div className="max-w-lg text-center">
        <p className="apple-kicker text-apple-textMuted">404</p>
        <h1 className="mt-4 apple-headline text-apple-text">The requested page was not found.</h1>
        <p className="mt-3 apple-body text-apple-textMuted">
          The product may no longer be available, or the URL is incorrect.
        </p>
        <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-apple-action">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
