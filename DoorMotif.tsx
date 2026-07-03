"use client";

import * as React from "react";

/**
 * A single-line engraved arch, split down the middle into two leaves.
 * At rest the leaves sit closed (seam visible, no gap). When `open`
 * is true — driven by an IntersectionObserver in the parent — each
 * leaf slides outward a few pixels, as though the door is parting.
 *
 * This is the page's one signature element. It appears small and
 * quiet in the hero, and large and literal at the final CTA. Nowhere
 * else. Restraint is the point.
 */
export function DoorMotif({
  open = false,
  className = "",
}: {
  open?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 320 400"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        {/* left leaf */}
        <g
          style={{
            transform: open ? "translateX(-10px)" : "translateX(0)",
            transition: "transform 1.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <path
            d="M160 398 V120 C160 55 120 12 60 4"
            stroke="currentColor"
            strokeWidth="1"
            className="text-hairline-bright"
          />
        </g>
        {/* right leaf */}
        <g
          style={{
            transform: open ? "translateX(10px)" : "translateX(0)",
            transition: "transform 1.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <path
            d="M160 398 V120 C160 55 200 12 260 4"
            stroke="currentColor"
            strokeWidth="1"
            className="text-hairline-bright"
          />
        </g>
        {/* threshold */}
        <line
          x1="30"
          y1="398"
          x2="290"
          y2="398"
          stroke="currentColor"
          strokeWidth="1"
          className="text-hairline"
        />
      </svg>
    </div>
  );
}
