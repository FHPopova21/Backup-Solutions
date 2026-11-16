
export type FAQItem = {
    question: string;
    answer: string;
};

type ServiceFAQProps = {
    items: FAQItem[];
};

export default function ServiceFAQ({ items }: ServiceFAQProps) {
    return (
        <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">

                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase text-brand-primary">
                            Полезна информация
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Често задавани въпроси
                        </h2>
                    </div>

                    <div className="divide-y divide-slate-200 border-y border-slate-200">
                        {items.map((item) => (
                            <details key={item.question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                                    {item.question}

                                    <span
                                        aria-hidden="true"
                                        className="text-2xl text-brand-primary transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>

                                <p className="mt-4 leading-7 text-brand-text">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
