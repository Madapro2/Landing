import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DoorMotif } from "@/components/DoorMotif";
import { HERO, OFFER } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      {/* signature element, faint, right-aligned, purely atmospheric here */}
      <div className="pointer-events-none absolute -right-10 top-0 h-[36rem] w-[26rem] text-hairline opacity-40 md:-right-4">
        <DoorMotif className="h-full w-full" />
      </div>

      <div className="container-tight relative">
        <p className="eyebrow mb-8 animate-fade-up">{HERO.eyebrow}</p>

        <h1
          className="max-w-3xl animate-fade-up font-display text-[2.75rem] font-light leading-[1.08] text-bone md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {HERO.headline}
        </h1>

        <p
          className="mt-8 max-w-xl animate-fade-up font-body text-lg leading-relaxed text-stone"
          style={{ animationDelay: "160ms" }}
        >
          {HERO.subhead}
        </p>

        <div
          className="mt-12 flex animate-fade-up flex-wrap items-center gap-6"
          style={{ animationDelay: "240ms" }}
        >
          <Button asChild size="lg">
            <Link href="#the-door">Request One of {OFFER.seatCap} Seats</Link>
          </Button>
          <Link href="#inside" className="eyebrow hover:text-bone transition-colors">
            See what's inside ↓
          </Link>
        </div>

        {/* Social proof — qualitative, not a fabricated headline number.
            Replace / extend with real, verifiable proof points as they exist. */}
        <p
          className="mt-16 max-w-lg animate-fade-up font-mono text-xs uppercase tracking-[0.18em] text-stone-dim"
          style={{ animationDelay: "320ms" }}
        >
          Attended by operators, founders, and executives who have never once said
          what they believe without a script in front of them.
        </p>
      </div>
    </section>
  );
}
