import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ as FAQ_ITEMS } from "@/lib/content";

export function FAQ() {
  return (
    <section id="questions" className="py-24 md:py-32">
      <div className="container-tight max-w-prose">
        <p className="eyebrow mb-4">Before you request entry</p>
        <h2 className="mb-12 font-display text-3xl font-light text-bone md:text-4xl">
          Questions, answered plainly.
        </h2>

        <Accordion type="single" collapsible>
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
