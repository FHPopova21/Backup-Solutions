import Link from "next/link";
import { COMPANY_DETAILS, SERVICES_OPTIONS } from "@/lib/company";

const companyLinks = [
    { label: "За нас", href: "/about" },
    { label: "Политика за поверителност", href: "/privacy" },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1.2fr] xl:gap-12">
                {/* Company info */}
                <div>
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight text-slate-900"
                    >
                        Backup <span className="text-brand-primary">Solutions</span>
                    </Link>

                    <p className="mt-5 max-w-sm leading-7 text-brand-text">
                        Решения за видеонаблюдение, комуникационна
                        инфраструктура и техническо обслужване на вашия бизнес.
                    </p>
                </div>

                {/* Company links */}
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
                        {SERVICES_OPTIONS.map((service) => (
                            <li key={service.id}>
                                <Link
                                    href={`/services/${service.id}`}
                                    className="text-sm text-brand-text transition-colors hover:text-brand-primary"
                                >
                                    {service.title}
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

                    <div className="flex flex-col items-start gap-3.5 text-sm">
                        <a
                            href={`mailto:${COMPANY_DETAILS.email}`}
                            className="break-all font-medium text-brand-text transition-colors hover:text-brand-primary"
                        >
                            {COMPANY_DETAILS.email}
                        </a>

                        <div>
                            <p className="text-brand-text font-medium">
                                {COMPANY_DETAILS.address}
                            </p>
                            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                                За кореспонденция и координация. Посещения след уговорка.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-200">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} {COMPANY_DETAILS.brandName}. Всички права запазени.
                    </p>

                    <p>
                        <Link href="/privacy" className="hover:text-brand-primary hover:underline">
                            Политика за поверителност
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
