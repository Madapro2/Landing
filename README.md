# The Only Voice In The Room — Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind + ShadCN/Radix.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Design system

- **Background** `basalt` `#0E0D0C` — warm near-black, not pure black.
- **Text** `bone` `#ECE6D9` primary, `stone` `#8C8478` secondary.
- **Accent** `patina` `#7E9280` — an oxidized bronze-green, standing in
  for an engraved plaque rather than a default SaaS gradient.
- **Oxide** `#8A4632` is reserved for scarcity/urgency flags only —
  used once, deliberately, not sprinkled around.
- **Type**: Fraunces (display, used only for headlines and numerals),
  Newsreader (body copy), IBM Plex Mono (labels, timestamps, eyebrows).
- **Signature element**: `components/DoorMotif.tsx` — a single-line
  engraved arch that appears small in the hero and large at the final
  CTA, parting open on scroll. It is the one visual idea the page
  repeats; everything else stays quiet around it.

## Before this goes live — required edits

The skill's 11-element checklist is satisfied structurally, but three
things are intentionally left as placeholders rather than fabricated:

1. **`lib/content.ts` → `TESTIMONIALS`** — placeholder copy, clearly
   labeled. Replace with real testimonials you have permission to
   publish (name, likeness, quote). Do not ship placeholder quotes as
   if they were real reviews — that's a legal and trust problem, not
   just a copy problem.
2. **Seat counter** — the page states the fixed policy ("99 seats,
   every Saturday") but does not show a live "X of 99 claimed"
   number. A fabricated real-time scarcity counter is a recognized
   dark pattern; if you want a live counter, wire it to real
   inventory data.
3. **`lib/content.ts` → `OFFER.investment`** — carried over from
   project notes as `$10,000`. Confirm before publishing.

Also replace:
- `/videos/trailer.mp4` and `/images/trailer-poster.jpg` — the media
  section references these paths but no asset is bundled.
- `/images/og-image.jpg` — social share image, 1200×630.
- Footer contact email and `[Business Entity Name]`.
- Deploy the route at a keyword-bearing slug (Element 1), e.g.
  `/masterclass` or `/the-only-voice-in-the-room`.

## Structure

```
app/            layout.tsx (fonts + metadata), page.tsx, globals.css
components/     Header, Hero, MediaSection, Benefits, Testimonials,
                FAQ, FinalCTA, Footer, DoorMotif, CountdownTimer
components/ui/  button, card, accordion, badge, avatar, separator, input
lib/            content.ts (all copy/config), utils.ts (cn helper)
```
