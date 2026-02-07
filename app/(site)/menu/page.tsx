import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { menuCategories, type MenuItem } from "../../../data/menu";
import { packages } from "../../../data/packages";

export default function MenuPage() {
  const menuWithPackages = [
    ...menuCategories,
    {
      category: "Trays & Lunch Boxes",
      description: "Perfect for celebrations and events",
      items: packages.map((item) => ({
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
      })),
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-6">
            Our Menu & Packages
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our wide selection of authentic Nigerian dishes, baked goods,
            and special packages
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuWithPackages.map((category, idx) => (
            <div key={idx}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#d4af37] mb-2">
                  {category.category}
                </h2>
                <p className="text-gray-400">{category.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 md:p-12 border border-[#d4af37]/30 text-center">
          <h2 className="text-3xl font-bold text-[#d4af37] mb-4">
            Custom Orders & Full Catalog
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Looking for something specific or need a custom package? Contact us on
            WhatsApp for our full catalog and personalized meal options tailored to
            your needs.
          </p>
          <a
            href="https://wa.me/2348164334163"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all hover:transform hover:scale-105 group">
      <div className="aspect-[3/4] overflow-hidden relative">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
        {item.price && <p className="text-[#d4af37] font-semibold">{item.price}</p>}
        {!item.price && (
          <p className="text-gray-400 text-sm">Contact for pricing</p>
        )}
      </div>
    </div>
  );
}
