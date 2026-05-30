
import Link from "next/link";
import Image from "next/image";

const works = [
  "/assets/gallery.jpg",
  "/assets/rumani.png",
  "/assets/exhibitions.jpg",
  "/assets/contactNbali.png",
];

export default function FeaturedWorks() {
  return (
    <section className="w-full px-6 md:px-16 py-28">

      <div className="flex items-end justify-between mb-12">

        <div>
          <p className="text-[#D4A373] uppercase tracking-[0.2em] text-sm">
            Selected Works
          </p>

          <h2 className="text-4xl md:text-6xl font-light mt-2">
            Featured Pieces
          </h2>
        </div>

        <Link
          href="/gallery"
          className="hidden md:block text-sm border-b border-[#D4A373]"
        >
          Explore Gallery
        </Link>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {works.map((image, index) => (
          <div
            key={index}
            className="relative h-[500px] overflow-hidden group"
          >

            <Image
              src={image}
              alt="Artwork"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>
        ))}

      </div>
    </section>
  );
}
