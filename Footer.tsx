import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-basalt-2">
      <div className="container-tight py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg text-bone">{SITE.name}</p>
            <p className="mt-2 max-w-xs text-sm text-stone">{SITE.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 font-mono text-xs uppercase tracking-[0.14em] text-stone sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-stone-dim">Contact</span>
              {/* TODO: replace with a real support address */}
              <a href="mailto:hello@example.com" className="hover:text-bone transition-colors">
                hello@example.com
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-stone-dim">Legal</span>
              <Link href="/terms" className="hover:text-bone transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-bone transition-colors">
                Privacy
              </Link>
              <Link href="/refunds" className="hover:text-bone transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-2 text-xs text-stone-dim md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          {/* TODO: insert the registered business entity name here — required in most jurisdictions for compliant footer/legal copy */}
          <p>Operated by [Business Entity Name].</p>
        </div>
      </div>
    </footer>
  );
}
