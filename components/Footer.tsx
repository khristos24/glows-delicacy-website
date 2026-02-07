import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Instagram, MapPin, Heart } from "lucide-react";

const brandLogo = "/images/brand/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src={brandLogo}
              alt="Glow's Delicacy"
              width={180}
              height={180}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Fresh, homemade Nigerian delicacies delivered to your doorstep.
            </p>
            <p className="text-[#d4af37] text-sm italic">
              Cooking, Baking & More...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Menu / Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/2348164334163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  +234 816 433 4163
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <a
                  href="https://instagram.com/glows_delicacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  @glows_delicacy
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Elenlewo Mosque, Old Refinery Road, Obio/Akpor
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mon - Sat: 8:00 AM - 8:00 PM</li>
              <li>Sunday: 10:00 AM - 6:00 PM</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/2348164334163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#d4af37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>(c) 2026 Glow's Delicacy. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-[#d4af37] fill-current" />
              for food lovers
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348164334163"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
}
