// components/LoadingSpinner.tsx
import * as React from "react";

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  /** Message shown to the right of the spinner */
  message?: string;
  /** Extra classes for the wrapper (e.g., min-h-screen) */
  className?: string;
}

const sizeStyles: Record<
  NonNullable<LoadingSpinnerProps["size"]>,
  { icon: string; text: string; gap: string }
> = {
  sm: { icon: "h-5 w-5", text: "text-sm", gap: "gap-2" },
  md: { icon: "h-8 w-8", text: "text-base", gap: "gap-3" },
  lg: { icon: "h-12 w-12", text: "text-lg", gap: "gap-4" },
};

export function LoadingSpinner({
  size = "md",
  message = "Loading...",
  className = "",
}: LoadingSpinnerProps) {
  const s = sizeStyles[size];

  return (
    <div
      className={[
        "flex items-center justify-center",
        "w-full", // allows easy centering inside containers
        className,
      ].join(" ")}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className={`flex items-center ${s.gap}`}>
        {/* Spinner icon */}
        <svg
          className={`animate-spin ${s.icon}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Message */}
        <span className={`text-muted-foreground ${s.text}`}>{message}</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
