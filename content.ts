/**
 * All editable copy lives here, in one place, so the brand voice stays
 * consistent and nothing has to be hunted down inside JSX.
 *
 * IMPORTANT — before this goes live:
 * 1. TESTIMONIALS below are placeholder / illustrative copy, not real
 *    submissions. Replace with genuine attendee testimonials you have
 *    permission to publish (name, likeness, and quote).
 * 2. SEATS_CLAIMED is intentionally NOT wired to a live number — a fake
 *    "X of 99 claimed" counter is a deceptive dark pattern if the figure
 *    isn't real. Wire this to real inventory data, or remove it.
 * 3. INVESTMENT is a placeholder figure carried over from project notes.
 *    Confirm before publishing.
 */

export const SITE = {
  name: "The Only Voice In The Room",
  tagline: "A masterclass in authority.",
};

export const OFFER = {
  day: "Saturday",
  time: "Night",
  duration: "30 minutes",
  seatCap: 99,
  investment: "$10,000", // TODO: confirm before launch
};

export const HERO = {
  eyebrow: "Opens once a week — Saturday night",
  headline: "You have persuaded everyone. Except yourself.",
  subhead:
    "Thirty minutes. Ninety-nine seats. One door, opened once a week, for the people who stopped performing and started arriving.",
};

export const BENEFITS = [
  {
    title: "Becoming the Expert",
    body: "You already carry a framework. You have simply never been given permission to name it out loud.",
  },
  {
    title: "The Epiphany Bridge",
    body: "Not a pitch — a corridor. The exact story shape that lets a room live its way into believing you, instead of being argued into it.",
  },
  {
    title: "The Big Domino",
    body: "One sentence, placed correctly, that makes every objection in the room irrelevant before it's spoken.",
  },
  {
    title: "The Three Secrets",
    body: "The three doubts every audience carries — about the method, about themselves, and about the world — answered before they surface.",
  },
  {
    title: "The Future-Based Cause",
    body: "The difference between an audience and a following: a name for what they're becoming, and an old world worth leaving behind.",
  },
  {
    title: "The Close",
    body: "How to end without asking twice. Said once, plainly, and left to stand alone in the silence.",
  },
] as const;

// Placeholder testimonials — see note at top of file. Replace before launch.
export const TESTIMONIALS = [
  {
    name: "Illustrative attendee",
    role: "Placeholder — replace with a real, consented testimonial",
    quote:
      "This is sample copy standing in for a genuine attendee quote. Swap it out before publishing.",
  },
  {
    name: "Illustrative attendee",
    role: "Placeholder — replace with a real, consented testimonial",
    quote:
      "Sample testimonial content. Do not present this text as a real review — replace it.",
  },
  {
    name: "Illustrative attendee",
    role: "Placeholder — replace with a real, consented testimonial",
    quote:
      "Sample testimonial content. Do not present this text as a real review — replace it.",
  },
] as const;

export const FAQ = [
  {
    q: "Why only once a week?",
    a: "Thirty minutes, taught once, live. There is no recorded replay and no self-paced version — the format is deliberately small, so it stays that way.",
  },
  {
    q: "Why only ninety-nine seats?",
    a: "The close, the silence, and the exercises depend on a room that can still feel intimate. Past a certain size, that stops being true.",
  },
  {
    q: "What happens if I can't attend this Saturday?",
    a: "The door opens again the following Saturday, at the same time, for whoever is left of that week's ninety-nine.",
  },
  {
    q: "Is this recorded?",
    a: "No. The sessions are not recorded or resold. What happens in the room stays with the people who were in it.",
  },
  {
    q: "What is the investment?",
    a: `${OFFER.investment}, fixed. It does not move, and it is not open to negotiation.`,
  },
  {
    q: "Who is this for?",
    a: "People who already have expertise and results, and have never once said what they believe without a script in front of them.",
  },
] as const;
