import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p className="mb-6 text-lg text-muted-foreground">The page you are looking for does not exist.</p>
        <Link href="/" className="text-primary underline hover:text-primary/90">
          Go to the home page
        </Link>
      </div>
    </section>
  );
}
