
"use client";

import { useRef } from "react";

type ContactPopupProps = {
    label?: string;
    className?: string;
};

export default function ContactPopup({
    label = "Поискай оферта",
    className = "rounded-lg bg-brand-primary px-6 py-3 font-medium text-white hover:bg-blue-700",
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
                            className="text-2xl text-slate-500 hover:text-slate-900"
                        >
                            ×
                        </button>
                    </div>

                    <p className="mb-8 leading-7 text-brand-text">
                        Имате въпроси или искате консултация?
                        Свържете се с нас директно.
                    </p>

                    <div className="space-y-4">
                        <a
                            href="tel:+359878729829"
                            className="block rounded-xl bg-slate-50 p-5 hover:bg-blue-50"
                        >
                            <span className="block text-sm text-slate-500">
                                Телефон
                            </span>
                            <span className="font-semibold text-brand-primary">
                                0878 729 829
                            </span>
                        </a>

                        <a
                            href="mailto:shop@lan-bg.com"
                            className="block rounded-xl bg-slate-50 p-5 hover:bg-blue-50"
                        >
                            <span className="block text-sm text-slate-500">
                                Имейл
                            </span>
                            <span className="font-semibold text-brand-primary">
                                shop@lan-bg.com
                            </span>
                        </a>
                    </div>
                </div>
            </dialog>
        </>
    );
}
