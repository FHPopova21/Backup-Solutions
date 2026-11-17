"use client";

import Link from "next/link";
import { COMPANY_DETAILS } from "@/lib/company";

interface LocationMapProps {
    variant?: "light" | "dark";
    className?: string;
}

export default function LocationMap({
    variant = "light",
    className = "",
}: LocationMapProps) {
    const isDark = variant === "dark";

    return (
        <div
            className={`flex flex-col justify-between rounded-xl border p-6 sm:p-7 transition-colors ${
                isDark
                    ? "border-slate-800 bg-slate-800/40 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-900"
            } ${className}`}
        >
            <div>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                        <span
                            className={`text-xs font-semibold uppercase tracking-wider ${
                                isDark ? "text-brand-accent" : "text-brand-primary"
                            }`}
                        >
                            Местоположение
                        </span>
                        <h3
                            className={`mt-0.5 text-xl font-bold tracking-tight ${
                                isDark ? "text-white" : "text-slate-900"
                            }`}
                        >
                            Координационен адрес
                        </h3>
                    </div>

                    <a
                        href={COMPANY_DETAILS.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-xs font-semibold hover:underline ${
                            isDark ? "text-brand-accent" : "text-brand-primary"
                        }`}
                        aria-label="Отвори локацията на Backup Solutions в Google Maps (отваря се в нов прозорец)"
                    >
                        <span>Отвори в Google Maps</span>
                        <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>

                {/* Direct Map Display */}
                <div className="relative w-full overflow-hidden rounded-lg border border-slate-700/60 bg-slate-900 shadow-inner h-[280px] sm:h-[320px] lg:h-[340px]">
                    <iframe
                        src={COMPANY_DETAILS.googleMapsEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Интерактивна карта на местоположението на Backup Solutions в Google Maps"
                        className="h-full w-full border-0"
                    />

                    <noscript>
                        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-xs text-slate-300">
                            <p className="font-semibold">{COMPANY_DETAILS.address}</p>
                            <a
                                href={COMPANY_DETAILS.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block rounded bg-brand-primary px-4 py-2 font-medium text-white hover:bg-blue-700"
                            >
                                Отвори адреса в Google Maps
                            </a>
                        </div>
                    </noscript>
                </div>
            </div>

            {/* Bottom note & privacy reference */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span>{COMPANY_DETAILS.address}</span>
                <Link
                    href="/privacy"
                    className="hover:underline hover:text-slate-300 transition-colors"
                >
                    Политика за поверителност
                </Link>
            </div>
        </div>
    );
}
