import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "dark";
};

export function SectionContainer({
  children,
  id,
  className,
  background = "white",
}: SectionContainerProps) {
  const backgroundStyles = {
    white: "bg-white",
    dark: "section-dark text-white relative",
  };
  
  return (
    <section 
      id={id}
      className={cn(
        "py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden",
        backgroundStyles[background],
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {children}
      </div>
    </section>
  );
}