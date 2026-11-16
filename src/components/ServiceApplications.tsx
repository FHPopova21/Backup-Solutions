
import Image from "next/image";

export type ApplicationItem = {
    title: string;
    description: string;
    image: string;
};

type ServiceApplicationsProps = {
    items: ApplicationItem[];
};

export default function ServiceApplications({
    items,
}: ServiceApplicationsProps) {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12">
                    <p className="mb-4 text-sm font-semibold uppercase text-brand-primary">
                        Приложения
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        Къде се използват тези системи?
                    </h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-2 lg:grid-rows-2">
                    {items.map((item, index) => (
                        <article
                            key={item.title}
                            className={
                                index === 0
                                    ? "group relative isolate min-h-[420px] overflow-hidden rounded-xl lg:row-span-2 lg:min-h-[620px]"
                                    : "group relative isolate min-h-[290px] overflow-hidden rounded-xl"
                            }
                        >
                            <Image
                                src={item.image}
                                alt=""
                                fill
                                sizes="(max-width: 1023px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
                            />

                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                <h3 className="text-xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
