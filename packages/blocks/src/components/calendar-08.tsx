"use client";

import { Calendar } from "@frontal-labs/ui";
import * as React from "react";

export default function Calendar08() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={setDate}
      disabled={{
        before: new Date(2025, 5, 12),
      }}
      className="rounded-lg border shadow-sm"
    />
  );
}
