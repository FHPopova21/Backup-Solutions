import ServiceCard from "./ServiceCard";

const services = [
    {
        id: "video-surveillance",
        title: "Видеонаблюдение",
        description: "Доставка и монтаж на камери за наблюдение на важни зони, входни точки и периметъра на обекта.",
        image: "/images/services/surveillance.jpg",
    },
    {
        id: "networking",
        title: "Локални мрежи",
        description: "Организирано кабелно трасиране и структурно окабеляване за стабилна връзка, по-лесна диагностика и бъдещо разширяване на работните места.",
        image: "/images/services/networking.jpg",
    },
    {
        id: "equipment",
        title: "Комуникационно оборудване",
        description: "Подбор, доставка и инсталиране на подходящо оборудване според капацитета, натоварването и техническите нужди на вашата мрежа.",
        image: "/images/services/equipment.jpg",
    },
    {
        id: "maintenance",
        title: "Абонаментно обслужване",
        description: "Периодична техническа профилактика и диагностика за своевременно установяване на възможни неизправности и поддържане на системите в изправност.",
        image: "/images/services/maintenance.jpg",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <p className="mb-4 text-sm font-semibold uppercase text-[#2563EB]">
                    Какво предлагаме
                </p>

                <h2 className="mb-4 text-4xl font-bold text-[#111827]">
                    Нашите услуги
                </h2>

                <p className="mb-12 text-[#64748B]">
                    Цялостни решения за сигурност, свързаност и надеждна работа на вашата техническа инфраструктура.
                </p>

                <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">                    {services.map((service) => (
                    < ServiceCard
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                    />
                ))}
                </div>


            </div>
        </section >
    )
}

