
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
    id: string;
    title: string;
    description: string;
    image: string;
};

export default function ServiceCard({
    id,
    title,
    description,
    image,
}: ServiceCardProps) {
    return (
        <article className="group min-w-0">
            <Link
                href={`/services/${id}`}
                className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
            >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                </div>

                {/* Content */}
                <div className="pt-5">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                        {title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-7 text-brand-text">
                        {description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-colors group-hover:text-blue-700">
                        Научи повече
                        <span aria-hidden="true">→</span>
                    </span>
                </div>
            </Link>
        </article>
    );
}
