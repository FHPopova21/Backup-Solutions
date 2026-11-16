import ContactPopup from "./ContactPopUp";

export default function Contact() {
    return (
        <section id="contact" className="bg-slate-900 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Column: Heading and CTA */}
                    <div className="max-w-xl">
                        <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
                            Свържете се с нас
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Нека обсъдим вашия проект.
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                            Планирате нова инсталация, разширяване на мрежа или абонаментна поддръжка? Свържете се с нас за консултация и конкретно техническо решение за вашия обект.
                        </p>

                        <div className="mt-8">
                            <ContactPopup label="Свържете се с нас" />
                        </div>
                    </div>

                    {/* Right Column: Direct Contact Info */}
                    <div className="border-t border-slate-800 pt-10 lg:border-t-0 lg:border-l lg:border-slate-800 lg:pl-16 lg:pt-0">
                        <div className="space-y-8">
                            <div>
                                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Телефон
                                </span>
                                <a
                                    href="tel:+359878729829"
                                    className="mt-2 inline-block text-2xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-brand-accent focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
                                >
                                    0878 729 829
                                </a>
                            </div>

                            <div className="border-t border-slate-800/80 pt-8">
                                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Имейл
                                </span>
                                <a
                                    href="mailto:shop@lan-bg.com"
                                    className="mt-2 inline-block break-all text-xl font-medium tracking-tight text-white transition-colors duration-200 hover:text-brand-accent focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:text-2xl"
                                >
                                    shop@lan-bg.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
