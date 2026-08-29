import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-light"
  | "emergency"
  | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-600/20",
  secondary:
    "bg-secondary-800 text-white hover:bg-secondary-900 shadow-sm",
  outline:
    "border-2 border-primary-600 bg-white text-primary-700 hover:bg-primary-50",
  "outline-light":
    "border-2 border-white/40 bg-white/10 text-white hover:border-white/60 hover:bg-white/20 backdrop-blur-sm",
  emergency:
    "bg-emergency text-white hover:bg-emergency-dark shadow-sm",
  ghost: "text-secondary-700 hover:bg-secondary-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-6 py-3 text-base font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
