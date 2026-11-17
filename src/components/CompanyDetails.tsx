import { COMPANY_DETAILS } from "@/lib/company";

interface CompanyDetailsProps {
    variant?: "light" | "dark";
    className?: string;
}

export default function CompanyDetails({
    variant = "light",
    className = "",
}: CompanyDetailsProps) {
    const isDark = variant === "dark";

    return (
        <div
            className={`flex flex-col justify-between rounded-xl border p-6 sm:p-7 transition-colors ${
                isDark
                    ? "border-slate-800 bg-slate-800/40 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-900"
            } ${className}`}
        >
            <div>
                <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                        isDark ? "text-brand-accent" : "text-brand-primary"
                    }`}
                >
                    Фирмена информация
                </span>
                <h3
                    className={`mt-1 text-xl font-bold tracking-tight ${
                        isDark ? "text-white" : "text-slate-900"
                    }`}
                >
                    {COMPANY_DETAILS.brandName}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    Професионални решения за локални мрежи, системи за видеонаблюдение, комуникационно оборудване и техническо обслужване на бизнеса.
                </p>
            </div>

            <div className="mt-6 border-t border-slate-700/60 pt-5 space-y-4 text-sm">
                <div>
                    <span className={`block text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Адрес за кореспонденция
                    </span>
                    <span className={`mt-1 block font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                        {COMPANY_DETAILS.address}
                    </span>
                    <span className={`mt-0.5 block text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {COMPANY_DETAILS.addressNotice}
                    </span>
                </div>

                <div className="pt-2">
                    <span className={`block text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Бизнес имейл
                    </span>
                    <a
                        href={`mailto:${COMPANY_DETAILS.email}`}
                        className={`mt-1 inline-block font-medium hover:underline ${
                            isDark ? "text-brand-accent" : "text-brand-primary"
                        }`}
                    >
                        {COMPANY_DETAILS.email}
                    </a>
                </div>
            </div>
        </div>
    );
}
