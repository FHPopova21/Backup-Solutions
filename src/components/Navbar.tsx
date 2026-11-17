"use client";

import QuoteRequestModal from "./QuoteRequestModal";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navItems = [
    { label: "Начало", href: "/" },
    { label: "Услуги", href: "/#services" },
    { label: "За нас", href: "/about" },
    { label: "Контакти", href: "/#contact" }
];

export const dropdownServices = [
    {
        id: "video-surveillance",
        title: "Видеонаблюдение",
        description: "Монтаж на камери за наблюдение на важни зони и периметър.",
        icon: (
            <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="m15 10 5-3v10l-5-3" />
                <rect width="13" height="12" x="2" y="6" rx="2" />
            </svg>
        ),
    },
    {
        id: "networking",
        title: "Локални мрежи",
        description: "Структурно окабеляване и трасиране за надеждна свързаност.",
        icon: (
            <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <rect width="6" height="6" x="9" y="3" rx="1" />
                <rect width="6" height="6" x="2" y="15" rx="1" />
                <rect width="6" height="6" x="16" y="15" rx="1" />
                <path d="M12 9v3m-7 3v-1.5a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5V15" />
            </svg>
        ),
    },
    {
        id: "equipment",
        title: "Комуникационно оборудване",
        description: "Подбор и инсталиране на суичове, рутери и шкафове.",
        icon: (
            <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <rect width="20" height="8" x="2" y="4" rx="2" />
                <rect width="20" height="8" x="2" y="12" rx="2" />
                <line x1="6" x2="6.01" y1="8" y2="8" />
                <line x1="10" x2="10.01" y1="8" y2="8" />
                <line x1="6" x2="6.01" y1="16" y2="16" />
                <line x1="10" x2="10.01" y1="16" y2="16" />
            </svg>
        ),
    },
    {
        id: "maintenance",
        title: "Абонаментно обслужване",
        description: "Периодична профилактика и техническа диагностика.",
        icon: (
            <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white backdrop-blur-sm">
            <nav
                aria-label="Основна навигация"
                className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-6 xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-6"
            >
                {/* Logo */}
                <Link href="/" className="shrink-0" aria-label="Backup Solutions - начало">
                    <Image
                        src="/images/logo/logo.jpg"
                        alt="Backup Solutions"
                        width={200}
                        height={200}
                        className="h-14 w-[165px] object-contain xl:w-[200px]"
                        priority
                    />
                </Link>

                {/* Desktop navigation */}
                <ul className="hidden items-center justify-center gap-10 text-base font-medium xl:flex">
                    {navItems.map((item) => (
                        <li key={item.label} className={item.label === "Услуги" ? "relative" : undefined}>
                            {item.label === "Услуги" ? (
                                <details
                                    className="group relative"
                                    onKeyDown={(e) => {
                                        if (e.key === "Escape") {
                                            e.currentTarget.removeAttribute("open");
                                        }
                                    }}
                                >
                                    <summary className="flex cursor-pointer list-none items-center gap-1.5 whitespace-nowrap text-brand-text transition-colors hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-brand-primary [&::-webkit-details-marker]:hidden">
                                        Услуги
                                        <svg
                                            className="h-4 w-4 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </summary>

                                    {/* Backdrop for click outside */}
                                    <div
                                        className="fixed inset-0 z-40 bg-transparent"
                                        aria-hidden="true"
                                        onClick={(e) => {
                                            e.currentTarget.closest("details")?.removeAttribute("open");
                                        }}
                                    />

                                    {/* Compact 2-column x 2-row dropdown panel */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-3 w-[560px] rounded-xl border border-slate-200/90 bg-white p-3 shadow-xl ring-1 ring-slate-900/5">
                                        <div className="mb-2 px-2.5 pt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                            Нашите услуги
                                        </div>

                                        <ul className="grid grid-cols-2 gap-2">
                                            {dropdownServices.map((service) => (
                                                <li key={service.id}>
                                                    <Link
                                                        href={`/services/${service.id}`}
                                                        onClick={(e) => {
                                                            e.currentTarget.closest("details")?.removeAttribute("open");
                                                        }}
                                                        className="group/item flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-blue-50/70 focus-visible:outline-2 focus-visible:outline-brand-primary"
                                                    >
                                                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-50 text-brand-primary transition-colors group-hover/item:bg-blue-100 group-hover/item:text-blue-700">
                                                            {service.icon}
                                                        </div>
                                                        <div className="min-w-0">
                                                            <span className="block text-sm font-semibold text-slate-900 group-hover/item:text-brand-primary transition-colors">
                                                                {service.title}
                                                            </span>
                                                            <span className="mt-0.5 block text-xs leading-snug text-slate-500 line-clamp-2">
                                                                {service.description}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </details>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-brand-text transition-colors hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-brand-primary"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden shrink-0 xl:justify-self-end xl:block">
                    <QuoteRequestModal
                        label="Поискай оферта"
                        className="rounded-lg bg-brand-primary px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary"
                    />
                </div>

                {/* Mobile navigation */}
                <MobileMenu
                    navItems={navItems}
                    dropdownServices={dropdownServices}
                />
            </nav>
        </header>
    );
}
