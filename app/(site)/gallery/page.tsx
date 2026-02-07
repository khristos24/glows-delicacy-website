"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryImages, type GalleryImage } from "../../../data/gallery";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-6">
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A visual feast showcasing our delicious dishes and memorable moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`
                ${image.featured ? "lg:col-span-2 lg:row-span-2" : ""}
                relative rounded-2xl overflow-hidden border border-[#d4af37]/20
                hover:border-[#d4af37]/50 transition-all cursor-pointer group
              `}
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`aspect-square ${image.featured ? "lg:aspect-video" : ""} overflow-hidden relative`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-all text-lg">
                    Click to view
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more of our delicious creations? Follow us on social media!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://instagram.com/glows_delicacy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1a1a1a] border border-[#d4af37]/30 text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition-all"
            >
              @glows_delicacy
            </a>
            <a
              href="https://facebook.com/glory.archibong"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1a1a1a] border border-[#d4af37]/30 text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition-all"
            >
              Glory Archibong
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-[#d4af37] text-black rounded-full hover:bg-[#f5d877] transition-all"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain rounded-lg"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
