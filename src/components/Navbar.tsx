import ContactPopup from "./ContactPopUp";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navItems = [
    { label: "Начало", href: "/" },
    { label: "Услуги", href: "/#services" },
    { label: "За нас", href: "/about" },
    { label: "Контакти", href: "/#contact" }
];

const dropdownServices = [
    {
        id: "video-surveillance",
        title: "Видеонаблюдение",
        description: "Наблюдение на важни зони, входни точки и възможност за отдалечен преглед.",
    },
    {
        id: "networking",
        title: "Локални мрежи",
        description: "Организирано кабелно трасиране за стабилна връзка и лесно разширяване.",
    },
    {
        id: "equipment",
        title: "Комуникационно оборудване",
        description: "Подбор и инсталиране на мрежови устройства според натоварването на обекта.",
    },
    {
        id: "maintenance",
        title: "Абонаментно обслужване",
        description: "Периодична профилактика и диагностика за навременно откриване на проблеми.",
    },
];


export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white">
            <nav
                aria-label="Основна навигация"
                className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-6 xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-6"            >
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
                <ul className="hidden items-center justify-center gap-12 text-base font-medium xl:flex">                    {navItems.map((item) => (
                    <li key={item.label}>
                        {item.label === "Услуги" ? (
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center gap-2 whitespace-nowrap text-brand-text transition-colors hover:text-brand-primary [&::-webkit-details-marker]:hidden">
                                    Услуги

                                    <span
                                        aria-hidden="true"
                                        className="text-sm transition-transform group-open:rotate-180"
                                    >
                                        ▾
                                    </span>
                                </summary>

                                <div className="absolute left-0 right-0 top-full z-50 border-t border-slate-200 bg-white px-6 py-8 shadow-lg">
                                    <div className="mb-5 text-xs font-semibold uppercase tracking-wider text-brand-primary">
                                        Нашите услуги
                                    </div>

                                    <ul className="grid grid-cols-4 gap-5 whitespace-normal">
                                        {dropdownServices.map((service) => (
                                            <li key={service.id} className="min-w-0">
                                                <Link
                                                    href={`/services/${service.id}`}
                                                    className="block h-full border-l-2 border-transparent px-4 py-3 transition-colors hover:border-brand-primary hover:bg-slate-50"
                                                >
                                                    <span className="block text-base font-semibold text-slate-900">
                                                        {service.title}
                                                    </span>

                                                    <span className="mt-3 block text-sm font-normal leading-6 text-brand-text">
                                                        {service.description}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </details>

                        ) : (
                            <Link
                                href={item.href}
                                className="text-brand-text transition-colors hover:text-brand-primary"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden shrink-0 xl:justify-self-end xl:block">                    <ContactPopup />
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

