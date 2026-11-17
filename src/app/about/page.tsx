
import type { Metadata } from "next";
import ContactPopup from "@/components/ContactPopUp";
import QuoteRequestModal from "@/components/QuoteRequestModal";
import AboutSlideshow from "@/components/AboutSlideshow";

export const metadata: Metadata = {
    title: "За нас",
    description:
        "Научете повече за Backup Solutions и услугите ни за видеонаблюдение, мрежова инфраструктура и техническо обслужване.",
};

export default function AboutPage() {
    return (
        <main>
            {/* Introduction */}
            <section className="bg-white py-20 lg:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="mb-8 text-sm font-semibold uppercase tracking-wide text-brand-primary">
                        За Backup Solutions
                    </p>

                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                            Свързваме технологиите с реалните нужди.
                        </h1>

                        <div className="space-y-6 text-lg leading-8 text-brand-text">
                            <p>
                                Backup Solutions предлага решения в областта
                                на видеонаблюдението, локалните мрежи,
                                комуникационното оборудване и техническото обслужване.
                            </p>

                            <p>
                                От изграждането на нова инфраструктура до
                                поддръжката на съществуващи системи — целта е
                                осигуряване на работеща и стабилна техническа среда.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual slideshow */}
            <section className="bg-white">
                <div className="mx-auto max-w-5xl px-6">
                    <AboutSlideshow />
                </div>
            </section>

            {/* Company approach */}
            <section className="bg-white py-20 lg:py-28">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="mb-5 text-sm font-semibold uppercase text-brand-primary">
                            Нашата дейност
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            От инфраструктурата до нейното обслужване.
                        </h2>
                    </div>

                    <div className="space-y-6 leading-8 text-brand-text">
                        <p>
                            При планирането и изграждането на техническа инфраструктура
                            от съществено значение са особеностите на обекта, организацията
                            на кабелните трасета и необходимият капацитет на оборудването.
                        </p>

                        <p>
                            Съвместимостта между системите и осигуряването на условия
                            за периодична профилактика са определящи за тяхната
                            дългосрочна и надеждна работа.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="bg-slate-950 py-20 lg:py-24">
                <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase text-brand-accent">
                            Свържете се с нас
                        </p>

                        <h2 className="max-w-2xl text-3xl font-bold text-white md:text-4xl">
                            Нека обсъдим вашия проект.
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <QuoteRequestModal
                            label="Поискай оферта"
                            className="rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-brand-accent"
                        />
                        <ContactPopup
                            label="Директен контакт"
                            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white hover:border-slate-500 hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-brand-accent"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
