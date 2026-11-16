
"use client";

import { useState } from "react";
import Link from "next/link";
import ContactPopup from "./ContactPopUp";

type NavItem = {
    label: string;
    href: string;
};

type ServiceItem = {
    id: string;
    title: string;
    description: string;
};

type MobileMenuProps = {
    navItems: NavItem[];
    dropdownServices: ServiceItem[];
};

export default function MobileMenu({
    navItems,
    dropdownServices,
}: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Hamburger button */}
            <button
                type="button"
                aria-label={
                    isOpen ? "Затвори менюто" : "Отвори менюто"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-900 transition-colors hover:bg-slate-100 xl:hidden"
            >
                {isOpen ? (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile navigation panel */}
            {isOpen && (
                <div
                    id="mobile-navigation"
                    onKeyDown={(event) => {
                        if (event.key === "Escape") closeMenu();
                    }}
                    className="absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-6 py-6 shadow-xl xl:hidden"
                >
                    <ul className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {item.label === "Услуги" ? (
                                    <details className="group/services">
                                        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 font-medium text-brand-text hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                                            Услуги

                                            <span
                                                aria-hidden="true"
                                                className="transition-transform group-open/services:rotate-180"
                                            >
                                                ▾
                                            </span>
                                        </summary>

                                        <ul className="space-y-1 pb-2 pl-4">
                                            {dropdownServices.map((service) => (
                                                <li key={service.id}>
                                                    <Link
                                                        href={`/services/${service.id}`}
                                                        onClick={closeMenu}
                                                        className="block rounded-lg px-3 py-3 text-sm text-brand-text hover:bg-slate-50 hover:text-brand-primary"
                                                    >
                                                        {service.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="flex min-h-12 items-center rounded-lg px-3 py-3 font-medium text-brand-text hover:bg-slate-50 hover:text-brand-primary"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 border-t border-slate-100 pt-6">
                        <ContactPopup
                            className="w-full rounded-lg bg-brand-primary px-5 py-3 font-medium text-white"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
