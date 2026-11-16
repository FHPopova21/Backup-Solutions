
const steps = [
    {
        title: "Първоначална техническа оценка",
        description:
            "Преглед на съществуващото оборудване, неговото състояние и необходимостта от техническо обслужване.",
    },
    {
        title: "Определяне на обхвата",
        description:
            "Уточняване на системите, които ще бъдат обслужвани, и условията за периодична поддръжка.",
    },
    {
        title: "Периодична профилактика",
        description:
            "Проверка на оборудването и основните му функции според договорената честота на обслужване.",
    },
    {
        title: "Диагностика и техническо съдействие",
        description:
            "Установяване на възникнали неизправности и определяне на необходимите действия за отстраняването им.",
    },
];

export default function MaintenanceProcess() {
    return (
        <section className="bg-slate-50 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <p className="mb-4 text-sm font-semibold uppercase text-brand-primary">
                            Техническо обслужване
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Как може да бъде организирана поддръжката?
                        </h2>

                        <p className="mt-6 max-w-md leading-8 text-brand-text">
                            Обхватът и честотата на обслужването се
                            определят според техническите нужди и
                            договорените условия.
                        </p>
                    </div>

                    <ol className="relative ml-2 border-l border-slate-300 pl-8">
                        {steps.map((step, index) => (
                            <li
                                key={step.title}
                                className="relative pb-12 last:pb-0"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-brand-primary ring-4 ring-slate-50"
                                />

                                <span className="text-sm font-semibold text-brand-primary">
                                    ЕТАП {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-3 leading-8 text-brand-text">
                                    {step.description}
                                </p>
                            </li>
                        ))}
                    </ol>

                </div>
            </div>
        </section>
    );
}
