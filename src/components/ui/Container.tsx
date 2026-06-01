import React from "react";
import { cn } from "../../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

/**
 * Standard page layout grid container
 */
export function Container({ children, className, clean = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-12",
        !clean && "max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
