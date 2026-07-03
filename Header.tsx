import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-basalt/90 backdrop-blur-sm">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link
          href="#top"
          className="font-display text-sm tracking-[0.1em] text-bone"
        >
          The Only Voice <span className="text-patina">·</span> In The Room
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#inside" className="eyebrow hover:text-bone transition-colors">
            Inside
          </Link>
          <Link href="#voices" className="eyebrow hover:text-bone transition-colors">
            Testimony
          </Link>
          <Link href="#questions" className="eyebrow hover:text-bone transition-colors">
            Questions
          </Link>
        </nav>

        <Button asChild variant="outline" size="sm">
          <Link href="#the-door">Request Entry</Link>
        </Button>
      </div>
    </header>
  );
}
