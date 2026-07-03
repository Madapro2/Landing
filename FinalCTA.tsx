"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DoorMotif } from "@/components/DoorMotif";
import { CountdownTimer } from "@/components/CountdownTimer";
import { OFFER } from "@/lib/content";

export function FinalCTA() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOpen(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="the-door"
      ref={ref}
      className="hairline-top relative overflow-hidden py-28 text-center md:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[30rem] w-[26rem] text-hairline">
        <DoorMotif open={open} className="h-full w-full" />
      </div>

      <div className="container-tight relative flex flex-col items-center">
        <p className="eyebrow mb-6">The door</p>

        <h2 className="max-w-2xl font-display text-4xl font-light leading-tight text-bone md:text-5xl">
          It opens once a week. It stays open thirty minutes.
        </h2>

        <p className="mt-6 max-w-md font-body text-stone">
          {OFFER.seatCap} seats, every {OFFER.day} {OFFER.time.toLowerCase()}. No more are cut.
          Miss the hour, wait the week.
        </p>

        <div className="mt-14">
          <CountdownTimer />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-dim">
            until the next door opens
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <Button size="lg">Request One of {OFFER.seatCap} Seats</Button>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-dim">
            {OFFER.investment} — fixed
          </p>
        </div>
      </div>
    </section>
  );
}
