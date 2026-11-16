
import Image from "next/image";

export default function WhyChooseus() {
    return (
        <section className="bg-slate-50 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left - Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 lg:aspect-[5/4]">
                        <Image
                            src="/images/services/networking-technical.jpg"
                            alt="Проверка на мрежови връзки и комуникационно оборудване"
                            fill
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="max-w-xl">
                        <p className="mb-5 text-sm font-semibold uppercase text-brand-primary">
                            Цялостни технически решения
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:leading-tight">
                            Технологиите работят най-добре, когато са свързани.
                        </h2>

                        <p className="mt-7 text-lg leading-8 text-brand-text">
                            Видеонаблюдението, локалната мрежа и мрежовото оборудване
                            не функционират изолирано. Ако видеопотокът от камерите
                            натоварва неподходящо конфигуриран суич, това може да
                            забави служебния интернет или да доведе до загуба на кадри.
                        </p>

                        <p className="mt-5 leading-8 text-brand-text">
                            Когато кабелните трасета, комутаторите и записващите устройства
                            са съгласувани по капацитет и технически параметри,
                            рискът от претоварване на мрежата намалява, а
                            локализирането на технически проблем става значително по-лесно.
                        </p>

                        <div className="mt-9 border-l-2 border-brand-primary pl-5">
                            <p className="font-semibold text-slate-900">
                                От изграждането до техническото обслужване
                            </p>

                            <p className="mt-2 text-sm leading-7 text-brand-text">
                                Backup Solutions предлага услуги за изграждане,
                                настройка и последващо техническо обслужване
                                на комуникационни системи.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
