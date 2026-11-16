
import Link from "next/link";

const services = [
    {
        label: "Видеонаблюдение",
        href: "/services/video-surveillance",
    },
    {
        label: "Локални мрежи",
        href: "/services/networking",
    },
    {
        label: "Комуникационно оборудване",
        href: "/services/equipment",
    },
    {
        label: "Абонаментно обслужване",
        href: "/services/maintenance",
    },
];

const companyLinks = [
    { label: "За нас", href: "/about" },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 xl:grid-cols-[1.4fr_1.2fr_.8fr_1fr] xl:gap-12">
                {/* Company */}
                <div>
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight text-slate-900"
                    >
                        Backup <span className="text-brand-primary">Solutions</span>
                    </Link>

                    <p className="mt-5 max-w-sm leading-7 text-brand-text">
                        Решения за видеонаблюдение, комуникационна
                        инфраструктура и техническо обслужване.
                    </p>
                </div>


                {/* Company */}
                <nav aria-label="Компания">
                    <h3 className="mb-6 font-semibold text-slate-900">
                        Компания
                    </h3>

                    <ul className="space-y-4">
                        {companyLinks.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-sm text-brand-text transition-colors hover:text-brand-primary"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>


                {/* Services */}
                <nav aria-label="Услуги">
                    <h3 className="mb-6 font-semibold text-slate-900">
                        Услуги
                    </h3>

                    <ul className="space-y-4">
                        {services.map((service) => (
                            <li key={service.href}>
                                <Link
                                    href={service.href}
                                    className="text-sm text-brand-text transition-colors hover:text-brand-primary"
                                >
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contacts */}
                <div>
                    <h3 className="mb-6 font-semibold text-slate-900">
                        Контакти
                    </h3>

                    <div className="flex flex-col items-start gap-4 text-sm">
                        <a
                            href="tel:+359878729829"
                            className="text-brand-text transition-colors hover:text-brand-primary"
                        >
                            0878 729 829
                        </a>

                        <a
                            href="mailto:shop@lan-bg.com"
                            className="break-all text-brand-text transition-colors hover:text-brand-primary"
                        >
                            shop@lan-bg.com
                        </a>

                        <p className="text-brand-text">
                            Бургас, България
                        </p>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-200">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Backup Solutions.
                    </p>

                    <p>Всички права запазени.</p>
                </div>
            </div>
        </footer>
    );
}
