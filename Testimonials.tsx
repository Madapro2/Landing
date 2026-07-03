import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="voices" className="hairline-top bg-basalt-2 py-24 md:py-32">
      <div className="container-tight">
        <div className="mb-16 flex items-center justify-between">
          <p className="eyebrow">Testimony</p>
          <Badge variant="oxide">Placeholder copy — replace before launch</Badge>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="flex flex-col gap-6">
              <blockquote className="font-display text-lg italic leading-relaxed text-bone">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-body text-sm text-bone">{t.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone-dim">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
