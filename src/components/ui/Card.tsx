import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        hover && "transition-all duration-200 hover:border-primary-200 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
