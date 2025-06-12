import * as React from "react"; // ✅ ADD THIS LINE

export function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-xl transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
