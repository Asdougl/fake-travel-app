import Image from "next/image";
import Link from "next/link";
import Hero from "~/features/home/hero/Hero";

export default function Home() {
  return (
    <main className="relative">
      <header className="flex justify-between px-12 h-16 items-center sticky top-0">
        <h1 className="text-3xl font-bold text-center">fta*</h1>
        <div className="flex items-center gap-4">
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      </header>
      <Hero />
    </main>
  );
}
