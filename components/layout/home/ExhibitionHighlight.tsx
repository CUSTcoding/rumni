
import Link from "next/link";

export default function ExhibitionHighlight() {
  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[#22212B]">

      <div className="max-w-4xl space-y-8">

        <p className="uppercase tracking-[0.2em] text-[#D4A373] text-sm">
          Upcoming Exhibition
        </p>

        <h2 className="text-4xl md:text-7xl leading-tight font-light">
          A night of texture, emotion and transformation.
        </h2>

        <p className="max-w-2xl text-lg text-[#EDEDED]/80 leading-relaxed">
          I’m over the moon to share that my first art exhibition is happening.
          It’s been months of late nights, messy paint, and a lot of heart
          poured into these pieces.
        </p>

        <div className="flex gap-4 flex-wrap">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1aXstpaSHQ8lGyuweDIx0FC0CNNtpUm_0mDL4P2zDBxW45Q/viewform"
            target="_blank"
            className="px-6 py-3 bg-[#D4A373] text-[#1C1B22]"
          >
            RSVP
          </a>

          <Link
            href="/exhibitions"
            className="px-6 py-3 border border-[#EDEDED]/30"
          >
            View Exhibitions
          </Link>



        </div>
      </div>
    </section>
  );
}