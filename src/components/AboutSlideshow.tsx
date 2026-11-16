
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
        src: "/images/services/maintenance-overview.jpeg",
        alt: "Работа по мрежова инфраструктура",
    },
    {
        src: "/images/services/surveillance.jpg",
        alt: "Монтаж на система за видеонаблюдение",
    },
    {
        src: "/images/services/cabinet.jpeg",
        alt: "Комуникационно оборудване",
    },
];

export default function AboutSlideshow() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Respect reduced motion accessibility settings
        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }

        const timer = window.setTimeout(() => {
            setActiveIndex(
                (previous) => (previous + 1) % slides.length
            );
        }, 3000);

        return () => window.clearTimeout(timer);
    }, [activeIndex]);

    return (
        <div className="relative h-[250px] overflow-hidden bg-slate-100 sm:h-[340px] lg:h-[440px]">

            {/* Smooth crossfade images */}
            {slides.map((slide, index) => (
                <div
                    key={slide.src}
                    aria-hidden={index !== activeIndex}
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out motion-reduce:transition-none ${index === activeIndex
                        ? "opacity-100"
                        : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
                        className="object-cover object-center"
                        priority={index === 0}
                        loading={index === 0 ? undefined : "eager"}
                    />
                </div>
            ))}

            {/* Minimal slide indicators */}
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1">
                {slides.map((slide, index) => (
                    <button
                        key={slide.src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Покажи снимка ${index + 1}`}
                        aria-current={
                            activeIndex === index ? "true" : undefined
                        }
                        className="flex h-10 w-10 items-center justify-center"
                    >
                        <span
                            className={`block h-1 rounded-full transition-all duration-500 ${activeIndex === index
                                ? "w-8 bg-white"
                                : "w-3 bg-white/50"
                                }`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
