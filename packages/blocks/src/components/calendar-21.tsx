"use client";

import { Calendar } from "@frontal-ds/ui";
import type { ButtonHTMLAttributes } from "react";
import * as React from "react";
import type { CalendarDay, DateRange, Modifiers } from "react-day-picker";

function DayButton({
  children,
  modifiers,
  day,
  ...props
}: {
  day: CalendarDay;
  modifiers: Modifiers;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6;

  return (
    <button {...props}>
      {children}
      {!modifiers.outside && <span>{isWeekend ? "$220" : "$100"}</span>}
    </button>
  );
}

export default function Calendar21() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 5, 17),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={range?.from}
      selected={range}
      onSelect={setRange}
      numberOfMonths={1}
      captionLayout="dropdown"
      className="rounded-lg border shadow-sm [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]"
      formatters={{
        formatMonthDropdown: (date) => {
          return date.toLocaleString("default", { month: "long" });
        },
      }}
      components={{
        DayButton,
      }}
    />
  );
}
