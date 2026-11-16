import ContactPopup from "./ContactPopUp";

export default function Hero() {
    return (
        <section className="relative flex min-h-[600px] items-center overflow-hidden bg-slate-900">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="absolute inset-0 z-0 h-full w-full object-cover motion-reduce:hidden"
            >
                <source src="/videos/hero1.mp4" type="video/mp4" />
            </video>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-slate-950/50 via-slate-950/60 to-slate-950/20"
            />


            <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
                <div className="max-w-xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-accent">
                        МРЕЖИ И ВИДЕОНАБЛЮДЕНИЕ
                    </p>
                    <h1 className="mb-6 text-5xl font-bold text-white">
                        Свързваме бизнеса ви с бъдещето.
                    </h1>
                    <p className="mb-8 text-lg text-[#DCE5EE]">
                        Проектиране, изграждане и поддръжка на локални мрежи,
                        видеонаблюдение и комуникационна техника за бизнеса в Бургас —
                        с фокус върху стабилна връзка, надеждно наблюдение и
                        работеща техническа среда.
                    </p>

                    <div className="flex gap-[16px]">
                        <ContactPopup label="Поискай оферта" />
                        <a
                            href="#services"
                            className="rounded-lg border border-white px-[28px] py-[18px] font-semibold text-white transition-colors hover:bg-[#ffffff] hover:text-slate-900">
                            Нашите услуги

                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}