import QuoteRequestModal from "./QuoteRequestModal";
import CompanyDetails from "./CompanyDetails";
import LocationMap from "./LocationMap";
import { COMPANY_DETAILS } from "@/lib/company";

export default function Contact() {
    return (
        <section id="contact" className="bg-slate-900 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* UPPER LEVEL */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
                    {/* Upper Left: Heading, Text & CTAs */}
                    <div className="max-w-xl">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-accent">
                            Свържете се с нас
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Нека обсъдим вашия проект.
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                            Планирате нова инсталация, разширяване на мрежа или техническа поддръжка? Свържете се с нас за оферта или директна консултация.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <QuoteRequestModal
                                label="Поискай оферта"
                                className="rounded-lg bg-brand-primary px-7 py-3.5 font-semibold text-white shadow-md hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-brand-accent"
                            />
                            <a
                                href={`mailto:${COMPANY_DETAILS.email}`}
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 font-semibold text-white hover:border-slate-500 hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-brand-accent"
                            >
                                <svg
                                    className="h-4 w-4 text-brand-accent"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>{COMPANY_DETAILS.email}</span>
                            </a>
                        </div>
                    </div>

                    {/* Upper Right: Clean Direct Contact Info */}
                    <div className="space-y-6 pt-4 lg:pt-0 lg:pl-10">
                        <div>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Бизнес имейл
                            </span>
                            <a
                                href={`mailto:${COMPANY_DETAILS.email}`}
                                className="mt-1.5 inline-block break-all text-xl font-medium tracking-tight text-white transition-colors duration-200 hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-brand-accent sm:text-2xl"
                            >
                                {COMPANY_DETAILS.email}
                            </a>
                        </div>

                        <div className="border-t border-slate-800/80 pt-6">
                            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Адрес за кореспонденция
                            </span>
                            <p className="mt-1.5 text-base font-medium text-white">
                                {COMPANY_DETAILS.address}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-400">
                                Техническа координация; посещения след предварителна уговорка.
                            </p>
                        </div>
                    </div>
                </div>

                {/* LOWER LEVEL: Two Columns (Company Information & Google Maps) */}
                <div className="mt-14 pt-14 border-t border-slate-800/80 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <CompanyDetails variant="dark" />
                    <LocationMap variant="dark" />
                </div>
            </div>
        </section>
    );
}
