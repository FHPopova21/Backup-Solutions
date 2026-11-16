
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Проекти",
    description:
        "Реализирани проекти на Backup Solutions в областта на видеонаблюдението и комуникационната инфраструктура.",
};

type Project = {
    title: string;
    category: string;
    description: string;
    image: string;
};

// Ще добавим само потвърдени проекти.
const projects: Project[] = [];

export default function ProjectsPage() {
    return (
        <main>
            <section className="bg-white py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="mb-5 text-sm font-semibold uppercase text-brand-primary">
                        Нашата работа
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                        Реализирани проекти
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-text">
                        Представяне на изпълнени решения в областта
                        на видеонаблюдението и комуникационната
                        инфраструктура.
                    </p>

                    {projects.length > 0 ? (
                        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
                            {projects.map((project) => (
                                <article key={project.title}>
                                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 767px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    <p className="mt-6 text-sm font-semibold uppercase text-brand-primary">
                                        {project.category}
                                    </p>

                                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                                        {project.title}
                                    </h2>

                                    <p className="mt-3 leading-7 text-brand-text">
                                        {project.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-16 border-t border-slate-200 py-12">
                            <p className="max-w-xl leading-8 text-brand-text">
                                Подготвяме представянето на реализирани
                                проекти. Междувременно можете да разгледате
                                услугите ни.
                            </p>

                            <Link
                                href="/#services"
                                className="mt-6 inline-block font-semibold text-brand-primary hover:underline"
                            >
                                Разгледайте услугите
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
