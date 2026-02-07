"use client";

import { useState } from "react";
import { MessageCircle, Instagram, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = `Hi, I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/2348164334163?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-6">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or ready to place an order? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#d4af37] mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/2348164334163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-[#1a1a1a] rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all">
                    <MessageCircle className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                    <p className="text-gray-400">+234 816 433 4163</p>
                    <p className="text-[#d4af37] text-sm mt-1">
                      Primary contact for orders
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/glows_delicacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-[#1a1a1a] rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all">
                    <Instagram className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Instagram</h3>
                    <p className="text-gray-400">@glows_delicacy</p>
                    <p className="text-[#d4af37] text-sm mt-1">
                      Follow for daily updates
                    </p>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/glory.archibong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-[#1a1a1a] rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all">
                    <svg
                      className="w-6 h-6 text-[#d4af37]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Facebook</h3>
                    <p className="text-gray-400">Glory Archibong</p>
                    <p className="text-[#d4af37] text-sm mt-1">Connect with us</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-[#1a1a1a] rounded-2xl border border-[#d4af37]/20">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">Elenlewo Mosque</p>
                    <p className="text-gray-400">Old Refinery Road</p>
                    <p className="text-gray-400">Obio/Akpor, Rivers State</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-6 border border-[#d4af37]/30">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                For urgent orders outside business hours, please send us a WhatsApp
                message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
              <h2 className="text-2xl font-bold text-[#d4af37] mb-6">
                Send Us an Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:border-[#d4af37] transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:border-[#d4af37] transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:border-[#d4af37] transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#d4af37]/30 rounded-lg text-white focus:outline-none focus:border-[#d4af37] transition-all resize-none"
                    placeholder="Tell us about your order or inquiry"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-all transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>

                <p className="text-gray-400 text-sm text-center">
                  This form will open WhatsApp with your message pre-filled
                </p>
              </form>
            </div>

            <div className="mt-6 p-6 bg-[#2a2a2a] rounded-xl border border-[#d4af37]/20">
              <p className="text-gray-300 text-center">
                <span className="text-[#d4af37] font-semibold">Prefer to call?</span>
                <br />
                Contact us directly on WhatsApp for faster response
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
