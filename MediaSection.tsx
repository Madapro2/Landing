"use client";

import * as React from "react";
import { Play } from "lucide-react";

export function MediaSection() {
  const [playing, setPlaying] = React.useState(false);

  return (
    <section className="hairline-top hairline-bottom bg-basalt-2">
      <div className="container-tight py-24 md:py-32">
        <p className="eyebrow mb-6">The room, before you enter it</p>

        {/*
          Placeholder poster / player. Replace the <video> src below with a
          real trailer asset, or swap this block for a real <video>/embed.
          Nothing here asserts footage that doesn't exist — it's a frame,
          not a claim.
        */}
        <div className="relative aspect-video w-full overflow-hidden border border-hairline bg-basalt">
          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="group flex h-full w-full flex-col items-center justify-center gap-6"
              aria-label="Play trailer"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-hairline-bright text-bone transition-colors group-hover:border-patina-bright group-hover:text-patina-bright">
                <Play className="h-5 w-5 translate-x-0.5" />
              </span>
              <span className="max-w-md px-6 text-center font-display text-lg italic text-stone">
                &ldquo;Silence. Five seconds. Absolute. You do not speak. They cannot
                look away.&rdquo;
              </span>
            </button>
          ) : (
            <video
              className="h-full w-full"
              controls
              autoPlay
              // TODO: replace with the real trailer file before launch
              src="/videos/trailer.mp4"
              poster="/images/trailer-poster.jpg"
            />
          )}
        </div>
      </div>
    </section>
  );
}
