import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BENEFITS } from "@/lib/content";

export function Benefits() {
  return (
    <section id="inside" className="py-24 md:py-32">
      <div className="container-tight">
        <p className="eyebrow mb-4">Inside the thirty minutes</p>
        <h2 className="max-w-2xl font-display text-3xl font-light leading-tight text-bone md:text-4xl">
          Six movements. No modules. No homework.
        </h2>

        <div className="mt-16 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Card key={b.title} className="rounded-none border-0 bg-basalt-2">
              <CardHeader>
                <span className="font-mono text-xs text-stone-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CardTitle className="mt-3">{b.title}</CardTitle>
              </CardHeader>
              <CardContent>{b.body}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
