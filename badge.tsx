import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em]",
  {
    variants: {
      variant: {
        default: "border-hairline-bright text-stone",
        patina: "border-patina/50 text-patina-bright",
        oxide: "border-oxide/60 text-oxide",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
