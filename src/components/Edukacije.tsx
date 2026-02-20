"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaImages,
  FaPlay,
} from "react-icons/fa";

type ImageItem = { type: "image"; src: string; alt: string };
type VideoItem = { type: "video"; src: string };
type MediaItem = ImageItem | VideoItem;

type Edukacija = {
  title: string;
  date: string;
  coverImage?: string;
  media: MediaItem[];
};

const staticEdukacije: Edukacija[] = [
  {
    title: "Edukacija",
    date: "Oktobar 2025",
    coverImage: "/images/edukacije/oktobar-2025/oktobar-2025-1.webp",
    media: Array.from({ length: 11 }, (_, i) => ({
      type: "image" as const,
      src: `/images/edukacije/oktobar-2025/oktobar-2025-${i + 1}.webp`,
      alt: `Edukacija oktobar 2025 – slika ${i + 1}`,
    })),
  },
  {
    title: "Edukacija",
    date: "Septembar 2025",
    coverImage: "/images/edukacije/septembar-2025/septembar-2025-1.webp",
    media: Array.from({ length: 4 }, (_, i) => ({
      type: "image" as const,
      src: `/images/edukacije/septembar-2025/septembar-2025-${i + 1}.webp`,
      alt: `Edukacija septembar 2025 – slika ${i + 1}`,
    })),
  },
  {
    title: "Edukacija",
    date: "Jun 2025",
    coverImage: "/images/edukacije/jun-2025/jun-2025-1.webp",
    media: [
      {
        type: "image",
        src: "/images/edukacije/jun-2025/jun-2025-1.webp",
        alt: "Edukacija jun 2025 – slika 1",
      },
      {
        type: "image",
        src: "/images/edukacije/jun-2025/jun-2025-2.webp",
        alt: "Edukacija jun 2025 – slika 2",
      },
      {
        type: "video",
        src: "/images/edukacije/jun-2025/jun-2025.mp4",
      },
    ],
  },
  {
    title: "Edukacija",
    date: "Maj 2025",
    coverImage: "/images/edukacije/maj-2025/maj-2025-1.webp",
    media: Array.from({ length: 5 }, (_, i) => ({
      type: "image" as const,
      src: `/images/edukacije/maj-2025/maj-2025-${i + 1}.webp`,
      alt: `Edukacija maj 2025 – slika ${i + 1}`,
    })),
  },
  {
    title: "Edukacija",
    date: "April 2025",
    coverImage: "/images/edukacije/april-2025/april-2025-1.webp",
    media: [
      ...Array.from({ length: 20 }, (_, i) => ({
        type: "image" as const,
        src: `/images/edukacije/april-2025/april-2025-${i + 1}.webp`,
        alt: `Edukacija april 2025 – slika ${i + 1}`,
      })),
    ],
  },
  {
    title: "Edukacija",
    date: "Mart 2025",
    coverImage: "/images/edukacije/mart-2025/mart-2025-1.webp",
    media: [
      {
        type: "image",
        src: "/images/edukacije/mart-2025/mart-2025-1.webp",
        alt: "Edukacija mart 2025 – slika 1",
      },
      {
        type: "image",
        src: "/images/edukacije/mart-2025/mart-2025-2.webp",
        alt: "Edukacija mart 2025 – slika 2",
      },
      {
        type: "video",
        src: "/images/edukacije/mart-2025/mart-2025.mp4",
      },
    ],
  },
];

export default function Edukacije({ sanityEdukacije = [] }: { sanityEdukacije?: Edukacija[] }) {
  const edukacije = [...sanityEdukacije, ...staticEdukacije];
  const [openCard, setOpenCard] = useState<Edukacija | null>(null);
  // null = modal grid view, number = lightbox on that image index
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // All media items used for lightbox navigation
  const allItems: MediaItem[] = openCard ? openCard.media : [];

  const closeModal = useCallback(() => {
    setOpenCard(null);
    setLightboxIndex(null);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === 0 ? allItems.length - 1 : i - 1
    );
  }, [allItems.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === allItems.length - 1 ? 0 : i + 1
    );
  }, [allItems.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "Escape") closeLightbox();
      } else if (openCard) {
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openCard, lightboxIndex, prevImage, nextImage, closeLightbox, closeModal]);

  useEffect(() => {
    document.body.style.overflow = openCard ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openCard]);


  return (
    <section className="section-padding bg-gradient-to-br from-white to-primary-50">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Momenti sa naših edukacija
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Pogledajte kako izgledaju naše edukacije, radionice i susreti sa
            stručnjacima.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {edukacije.map((edu) => (
            <div
              key={edu.date}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setOpenCard(edu)}
            >
              <div className="relative aspect-video overflow-hidden">
                {edu.coverImage ? (
                  <>
                    <Image
                      src={edu.coverImage}
                      alt={edu.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-700 to-primary-400 flex items-center justify-center">
                    <FaPlay className="text-white/60" size={40} />
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1.5">
                  <FaImages size={11} />
                  {edu.media.length}
                </div>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs uppercase tracking-widest text-primary-500 font-semibold mb-0.5">
                  {edu.title}
                </p>
                <h3 className="text-lg font-bold text-gray-900">{edu.date}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MODAL – grid view ────────────────────────────────────── */}
      {openCard && lightboxIndex === null && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100 rounded-t-2xl">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary-500 font-semibold">
                  {openCard.title}
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  {openCard.date}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Zatvori"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Media grid */}
            <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {openCard.media.map((item, i) => {
                if (item.type === "image") {
                  return (
                    <div
                      key={i}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-zoom-in group"
                      onClick={() => setLightboxIndex(i)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden bg-black cursor-pointer group"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <video
                      src={item.src}
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="bg-white/20 group-hover:bg-white/30 transition-colors rounded-full p-3">
                        <FaPlay className="text-white" size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── LIGHTBOX – fullscreen image nav ─────────────────────── */}
      {openCard && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10">
            {/* Back to grid */}
            <button
              onClick={closeLightbox}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <FaChevronLeft size={14} />
              Nazad
            </button>
            <span className="text-white/50 text-sm">
              {lightboxIndex + 1} / {allItems.length}
            </span>
            <button
              onClick={closeModal}
              className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Zatvori"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Current media item */}
          <div className="w-full h-full flex items-center justify-center px-16 py-16">
            {allItems[lightboxIndex].type === "image" ? (
              <img
                src={allItems[lightboxIndex].src}
                alt={(allItems[lightboxIndex] as ImageItem).alt}
                className="max-w-full max-h-full object-contain rounded-lg select-none"
                draggable={false}
              />
            ) : (
              <video
                key={allItems[lightboxIndex].src}
                src={allItems[lightboxIndex].src}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-full rounded-lg"
              />
            )}
          </div>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-colors"
            aria-label="Prethodna"
          >
            <FaChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-colors"
            aria-label="Sledeća"
          >
            <FaChevronRight size={22} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-5 flex items-center gap-2">
            {allItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === lightboxIndex ? "bg-white w-6" : "bg-white/35 w-2"
                }`}
                aria-label={item.type === "video" ? "Video" : `Slika ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
