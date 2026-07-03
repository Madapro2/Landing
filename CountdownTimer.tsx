"use client";

import * as React from "react";

/**
 * Counts down to the next upcoming Saturday at the given local hour.
 * This is real date arithmetic against the visitor's clock — not a
 * fabricated or resettable timer. If a visitor lands after the start
 * time on a Saturday, it rolls forward to the following week.
 *
 * SESSION_HOUR is in 24-hour local time. 19 = 7:00 PM.
 */
const SESSION_HOUR = 19;

function getNextSaturday(from: Date): Date {
  const target = new Date(from);
  target.setHours(SESSION_HOUR, 0, 0, 0);
  const day = target.getDay(); // 0 = Sunday .. 6 = Saturday
  let daysUntilSaturday = (6 - day + 7) % 7;
  if (daysUntilSaturday === 0 && from.getTime() > target.getTime()) {
    daysUntilSaturday = 7;
  }
  target.setDate(target.getDate() + daysUntilSaturday);
  return target;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer() {
  const [remaining, setRemaining] = React.useState<number | null>(null);

  React.useEffect(() => {
    const tick = () => {
      const now = new Date();
      const next = getNextSaturday(now);
      setRemaining(Math.max(0, next.getTime() - now.getTime()));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining === null) {
    // Avoid a hydration mismatch — render nothing until mounted.
    return <div className="h-16" />;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const units: [string, number][] = [
    ["days", days],
    ["hrs", hours],
    ["min", minutes],
    ["sec", seconds],
  ];

  return (
    <div
      role="timer"
      aria-label={`Next door opens in ${days} days, ${hours} hours, ${minutes} minutes`}
      className="flex items-baseline gap-6 font-mono"
    >
      {units.map(([label, value]) => (
        <div key={label} className="flex items-baseline gap-1.5">
          <span className="text-3xl tabular-nums text-bone md:text-4xl">{pad(value)}</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone">{label}</span>
        </div>
      ))}
    </div>
  );
}
