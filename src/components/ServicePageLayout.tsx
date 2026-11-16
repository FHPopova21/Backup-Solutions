import Image from "next/image";
import ServiceFAQ, { type FAQItem } from "./FAQ";
import ContactPopup from "./ContactPopUp";
import ServiceApplications, {
    type ApplicationItem,
} from "./ServiceApplications";
import type { ReactNode } from "react";

type ServiceFeature = {
    title: string;
    description: string;
};

type ServicePageProps = {
    title: string;
    description: string;
    overview: string;
    image?: string;
    features?: ServiceFeature[];
    overviewDetails?: string[];
    overviewTitle?: string;
    faqs?: FAQItem[];
    overviewImage?: string;
    featuresTitle?: string;
    featuresImage?: string;
    applications?: ApplicationItem[];
    children?: ReactNode;
};


export default function ServicePageLayout({
    title,
    description,
    overview,
    image,
    features,
    overviewDetails,
    overviewTitle = "Какво предлагаме?",
    faqs,
    overviewImage,
    featuresTitle = "Какво включва услугата?",
    featuresImage,
    applications,
    children
}: ServicePageProps) {
    return (
        <main>
            <section className="relative isolate overflow-hidden bg-slate-900 py-24 text-white">

                {image && (
                    <Image
                        src={image}
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                )}

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35"
                />

                <div className="relative z-10 mx-auto max-w-7xl px-6">
                    <p className="mb-4 text-sm font-semibold uppercase text-brand-accent">
                        Нашите услуги
                    </p>

                    <h1 className="mb-6 text-5xl font-bold">
                        {title}
                    </h1>

                    <p className="max-w-2xl text-lg leading-8 text-slate-200">
                        {description}
                    </p>

                    <div className="mt-8">
                        <ContactPopup />
                    </div>
                </div>
            </section>



            {/* Overview Section */}
            <section className="bg-white py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Section heading */}
                    <div className="mb-10 max-w-4xl lg:mb-12">
                        <p className="mb-4 text-sm font-semibold uppercase text-brand-primary">
                            За услугата
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            {overviewTitle ?? "Повече за услугата"}
                        </h2>
                    </div>

                    {/* Image + Text */}
                    <div
                        className={
                            overviewImage
                                ? "grid items-stretch gap-8 lg:grid-cols-2 lg:gap-16"
                                : "max-w-3xl"
                        }
                    >

                        {overviewImage && (
                            <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden rounded-xl bg-slate-100 lg:aspect-auto lg:min-h-[420px]">
                                <Image
                                    src={overviewImage}
                                    alt={overviewTitle ?? "Илюстрация на услугата"}
                                    fill
                                    sizes="(max-width: 1023px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="flex flex-col justify-center">
                            <p className="text-lg leading-8 text-brand-text">
                                {overview}
                            </p>

                            {overviewDetails && overviewDetails.length > 0 && (
                                <div className="mt-6 space-y-5">
                                    {overviewDetails.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="leading-8 text-brand-text"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>




            {features && features.length > 0 && (
                <section className="bg-slate-50 py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <p className="mb-4 text-sm font-semibold uppercase text-brand-primary">
                            Нашите решения
                        </p>

                        <h2 className="mb-12 text-4xl font-bold tracking-tight text-slate-900">
                            {featuresTitle}
                        </h2>


                        <div
                            className={
                                featuresImage
                                    ? "grid gap-10 lg:grid-cols-2 lg:gap-16"
                                    : ""
                            }
                        >
                            {/* Technical Information */}
                            <div
                                className={
                                    featuresImage
                                        ? "divide-y divide-slate-300"
                                        : "grid gap-x-12 gap-y-10 md:grid-cols-2"
                                }
                            >
                                {features.map((feature, index) => (
                                    <article
                                        key={feature.title}
                                        className="border-t border-slate-300 py-6"
                                    >
                                        <span className="text-sm font-semibold text-brand-primary">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3 className="mt-4 text-xl font-semibold text-slate-900">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-brand-text">
                                            {feature.description}
                                        </p>
                                    </article>
                                ))}
                            </div>

                            {/* Technical Photograph */}
                            {featuresImage && (

                                <div className="relative h-[380px] overflow-hidden rounded-xl bg-slate-200 lg:sticky lg:top-24 lg:h-[560px] lg:self-start">
                                    <Image
                                        src={featuresImage}
                                        alt="Техническа работа по мрежова инфраструктура"
                                        fill
                                        sizes="(max-width: 1023px) 100vw, 50vw"
                                        className="object-cover object-center"
                                    />
                                </div>

                            )}
                        </div>

                    </div>

                </section>

            )}
            {children}

            {applications && applications.length > 0 && (
                <ServiceApplications items={applications} />
            )}

            {faqs && faqs.length > 0 && (
                <ServiceFAQ items={faqs} />
            )}

        </main>
    );
}
