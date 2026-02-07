"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

const brandLogo = "/images/brand/logo.jpg";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/menu", label: "Menu / Packages" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={brandLogo}
              alt="Glow's Delicacy"
              width={160}
              height={160}
              className="h-12 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-xl font-semibold text-[#d4af37]">
                Glow's Delicacy
              </div>
              <div className="text-xs text-gray-400">
                Cooking, Baking & More...
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-[#d4af37]"
                    : "text-gray-300 hover:text-[#d4af37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/2348164334163"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#d4af37] p-2"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-[#d4af37]"
                    : "text-gray-300 hover:text-[#d4af37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/2348164334163"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order Now</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
