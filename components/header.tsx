"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#why", label: "Pourquoi ?" },
    { href: "#how", label: "Comment ?" },
    { href: "#simulator", label: "Simulateur" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
        )}
      >
        <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo couleur textenoir.svg" 
              alt="RESOTRAVO Logo" 
              width={150}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-resotravo-blue transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            <Button 
              asChild 
              className="bg-resotravo-orange hover:bg-resotravo-orange/90 text-white rounded-full px-8 group"
            >
              <Link href="#signup" className="flex items-center gap-2">
                S&apos;inscrire maintenant
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src="/logo couleur textenoir.svg" 
                alt="RESOTRAVO Logo" 
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <Button 
              variant="outline" 
              size="icon" 
              className="border-2 border-resotravo-blue rounded-full hover:bg-resotravo-blue/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5 text-resotravo-blue" />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-6 py-4 text-base sm:text-lg font-medium text-gray-600 hover:text-resotravo-blue hover:bg-gray-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="p-8 border-t border-gray-100">
            <Button
              asChild
              className="w-full bg-resotravo-orange hover:bg-resotravo-orange/90 text-white rounded-full h-14"
            >
              <Link
                href="#signup"
                className="flex items-center justify-center gap-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                S&apos;inscrire maintenant
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}