import Image from "next/image";
import { Heart, Award, Clock, Users } from "lucide-react";

const storyImage = "/images/gallery/native-seafood.jpg";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Homemade Quality",
      description:
        "Every dish is prepared with love and care, just like home-cooked meals.",
    },
    {
      icon: Award,
      title: "Premium Ingredients",
      description:
        "We use only the finest, freshest ingredients to ensure the best taste.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Hot, fresh meals delivered right to your doorstep on time, every time.",
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description:
        "Your happiness is our priority. We strive to exceed your expectations.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-6">
            About Glow's Delicacy
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where tradition meets convenience, and every meal tells a story of
            passion and quality.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden border border-[#d4af37]/20 relative min-h-[320px]">
            <Image
              src={storyImage}
              alt="Our Story"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#d4af37] mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Glow's Delicacy was born from a passion for authentic Nigerian
                cuisine and a desire to bring the warmth of home-cooked meals to
                busy individuals and families.
              </p>
              <p>
                We understand that in today's fast-paced world, finding time to
                prepare traditional, nutritious meals can be challenging. That's
                why we've made it our mission to deliver fresh, homemade Nigerian
                delicacies right to your doorstep.
              </p>
              <p>
                From our daily plates featuring classics like Jollof rice and
                Egusi soup, to our special occasion packages and delightful baked
                goods, every item on our menu is crafted with care, using authentic
                recipes and the finest ingredients.
              </p>
              <p>
                At Glow's Delicacy, we don't just deliver food - we deliver
                comfort, tradition, and the taste of home, one meal at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 md:p-12 border border-[#d4af37]/30 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To provide convenient access to authentic, high-quality Nigerian
                cuisine while maintaining the homemade touch that makes every meal
                special. We aim to be your trusted partner for daily meals, special
                occasions, and everything in between.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#d4af37] mb-4">Our Promise</h2>
              <p className="text-gray-300">
                We promise to deliver fresh, delicious meals prepared with love and
                attention to detail. With complimentary logistics coverage to your
                doorstep, we ensure that enjoying authentic Nigerian cuisine has
                never been easier or more convenient.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d4af37] mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-[#d4af37] mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our growing family of satisfied customers who trust Glow's
            Delicacy for their daily meals and special occasions.
          </p>
          <a
            href="https://wa.me/2348164334163"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-all transform hover:scale-105"
          >
            Order Your First Meal
          </a>
        </div>
      </section>
    </div>
  );
}
