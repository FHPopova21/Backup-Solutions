"use client";

import { useRef } from "react";
import { COMPANY_DETAILS } from "@/lib/company";

type ContactPopupProps = {
    label?: string;
    className?: string;
};

export default function ContactPopup({
    label = "Свържете се с нас",
    className = "rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary",
}: ContactPopupProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className={className}
            >
                {label}
            </button>

            <dialog
                ref={dialogRef}
                aria-label="Контакти на Backup Solutions"
                className="m-auto w-[calc(100%-2rem)] max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/70"
            >
                <div className="p-6 sm:p-8">
                    <div className="mb-5 flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-bold">
                            Свържете се с нас
                        </h2>

                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            aria-label="Затвори"
                            className="rounded-lg p-1 text-2xl leading-none text-slate-500 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-brand-primary"
                        >
                            ×
                        </button>
                    </div>

                    <p className="mb-6 leading-7 text-brand-text text-sm">
                        Имате въпроси или искате консултация относно наш проект или услуга?
                        Свържете се с нас директно.
                    </p>

                    <div className="space-y-4">
                        <a
                            href={`mailto:${COMPANY_DETAILS.email}`}
                            className="block rounded-xl bg-slate-50 p-5 transition-colors hover:bg-blue-50"
                        >
                            <span className="block text-xs uppercase tracking-wider text-slate-500">
                                Имейл
                            </span>
                            <span className="mt-1 block text-lg font-semibold text-brand-primary break-all">
                                {COMPANY_DETAILS.email}
                            </span>
                        </a>

                        <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 text-xs text-slate-600">
                            <span className="block font-medium text-slate-800">
                                {COMPANY_DETAILS.address}
                            </span>
                            <span className="mt-1 block text-slate-500 leading-relaxed">
                                {COMPANY_DETAILS.addressNotice}
                            </span>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}
