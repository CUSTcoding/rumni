"use client";

import Link from "next/link";

export default function FeaturedWorks() {
  return (
    <section className="w-dvw h-dvh flex items-center justify-center px-6 md:px-16 py-28">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Crafted with vision, shaped by creativity.
        </h1>

        <h3 className="text-sm md:text-base opacity-70 max-w-xl">
          Discover a collection of works that blend artistic expression, culture, and contemporary design.
        </h3>

        <Link
          href="/gallery"
          className="mt-4 px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}