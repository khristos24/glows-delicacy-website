import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ChefHat, ShoppingBag, Package, Truck } from "lucide-react";
import { featuredDishes } from "../../data/menu";
import { specialPackagesImage } from "../../data/packages";

const brandLogo = "/images/brand/logo.jpg";
const heroImage = "/images/brand/hero.jpg";

export default function HomePage() {
  const services = [
    {
      icon: ChefHat,
      title: "Daily Meals",
      description:
        "Fresh, homemade Nigerian delicacies prepared daily with love and quality ingredients.",
    },
    {
      icon: ShoppingBag,
      title: "Small Chops & Baked Goods",
      description:
        "Delicious pastries, meat pies, and small chops perfect for any occasion.",
    },
    {
      icon: Package,
      title: "Trays & Special Packages",
      description:
        "Celebration lunch boxes and maxi food trays for your special events.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Glow's Delicacy hero"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <Image
            src={brandLogo}
            alt="Glow's Delicacy"
            width={220}
            height={220}
            className="h-32 w-auto mx-auto mb-6"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold text-[#d4af37] mb-4">
            Glow's Delicacy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 italic">
            Cooking, Baking & More...
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Glow's Delicacy delivers fresh, homemade meals and baked goods right to
            your doorstep. Experience authentic Nigerian cuisine prepared with love
            and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/2348164334163"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>
            <Link
              href="/menu"
              className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d4af37] mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d4af37] mb-12">
            Featured Dishes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all hover:transform hover:scale-105"
              >
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {dish.name}
                  </h3>
                  {dish.price ? (
                    <p className="text-[#d4af37] font-semibold">{dish.price}</p>
                  ) : (
                    <p className="text-gray-400 text-sm">Contact for pricing</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block px-8 py-4 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 md:p-12 border border-[#d4af37]/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-4">
                  Special Packages
                </h2>
                <p className="text-gray-300 mb-6">
                  Make your celebrations memorable with our specially curated
                  packages. From Valentine's Day to corporate events, we've got you
                  covered with our maxi food trays and celebration lunch boxes.
                </p>
                <ul className="space-y-3 text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                    Valentine Packages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                    Celebration Lunch Boxes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                    Maxi Food Trays
                  </li>
                </ul>
                <Link
                  href="/menu"
                  className="inline-block px-8 py-3 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-all"
                >
                  Explore Packages
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden relative min-h-[280px]">
                <Image
                  src={specialPackagesImage}
                  alt="Special Packages"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Promise */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck className="w-10 h-10 text-[#d4af37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-4">
            Free Delivery
          </h2>
          <p className="text-xl text-gray-300">
            Complimentary logistics coverage to your doorstep. We bring the taste
            of home to you.
          </p>
        </div>
      </section>
    </div>
  );
}
