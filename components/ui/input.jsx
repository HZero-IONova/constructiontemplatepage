import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-neutral-950 placeholder:text-secondary selection:bg-primary selection:text-primary-foreground flex h-[54px] w-full min-w-0 rounded-none border border-border focus:border-accent bg-white px-6 py-2 text-base text-primary transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
