
import Image from "next/image";

const equipment = [
    {
        title: "Мрежови комутатори",
        description:
            "Осигуряват връзката и комуникацията между устройствата в локалната мрежа.",
        image: "/images/services/switch.jpeg",
    },
    {
        title: "Маршрутизатори",
        description:
            "Маршрутизаторите (routers) насочват мрежовия трафик между различни мрежи и осигуряват свързаност.",
        image: "/images/services/routes.jpeg",
    },
    {
        title: "Безжични точки за достъп",
        description:
            "Access points осигуряват безжичен достъп до мрежата и позволяват свързване на мобилни устройства.",
        image: "/images/services/access-point.jpeg",
    },
    {
        title: "Комуникационни шкафове",
        description:
            "Комуникационните шкафове служат за подредено разполагане на мрежовото оборудване и кабелните връзки.",
        image: "/images/services/cabinet.jpeg",
    },
];

export default function EquipmentShowcase() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase text-brand-primary">
                        Технологии и оборудване
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        Оборудването зад надеждната свързаност
                    </h2>

                    <p className="mt-5 leading-8 text-brand-text">
                        Различните комуникационни устройства изпълняват
                        специфични функции при изграждането и управлението
                        на мрежовата инфраструктура.
                    </p>
                </div>

                <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
                    {equipment.map((item) => (
                        <article key={item.title} className="group">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 767px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                                />
                            </div>

                            <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-3 max-w-xl leading-7 text-brand-text">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
