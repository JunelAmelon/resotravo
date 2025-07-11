'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type CTAButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  withIcon?: boolean;
};

export function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  withIcon = false,
}: CTAButtonProps) {
  const baseStyles = "inline-flex w-full sm:w-auto items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-resotravo-blue disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105";
  
  const variantStyles = {
    primary: "bg-resotravo-orange text-white hover:bg-resotravo-orange/90 shadow-lg hover:shadow-resotravo-orange/25 h-12 px-6 sm:px-8 py-2 text-sm sm:text-base",
    secondary: "bg-resotravo-blue text-white hover:bg-resotravo-blue/90 shadow-lg hover:shadow-resotravo-blue/25 h-12 px-6 sm:px-8 py-2 text-sm sm:text-base",
    outline: "border-2 border-resotravo-orange text-resotravo-orange hover:bg-resotravo-orange/10 h-12 px-6 sm:px-8 py-2 text-sm sm:text-base",
  };
  
  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    withIcon && "gap-3",
    className
  );
  
  // Si nous avons un onClick mais pas de href, rendre un bouton
  if (onClick && !href) {
    return (
      <button 
        onClick={onClick}
        className={combinedStyles}
        type="button"
      >
        {children}
        {withIcon && <ArrowRight className="w-5 h-5" />}
      </button>
    );
  }
  
  // Autrement, rendre un lien
  return (
    <Link 
      href={href || "#"} 
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
      {withIcon && <ArrowRight className="w-5 h-5" />}
    </Link>
  );
}