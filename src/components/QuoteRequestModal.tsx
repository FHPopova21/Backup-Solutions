"use client";

import { useEffect, useRef, useState, useId, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { COMPANY_DETAILS, SERVICES_OPTIONS } from "@/lib/company";

const emptySubscribe = () => () => { };

interface QuoteRequestModalProps {
    label?: string;
    className?: string;
    defaultService?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

interface FormState {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    description: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    service?: string;
    description?: string;
}

const initialFormState: FormState = {
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    description: "",
};

export default function QuoteRequestModal({
    label = "Поискай оферта",
    className = "rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
    defaultService,
    isOpen: controlledIsOpen,
    onClose: controlledOnClose,
}: QuoteRequestModalProps) {
    const triggerBtnRef = useRef<HTMLButtonElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLInputElement>(null);

    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
    const isControlled = typeof controlledIsOpen === "boolean";
    const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

    const [form, setForm] = useState<FormState>(() => ({
        ...initialFormState,
        service: defaultService || "",
    }));
    const [prevDefaultService, setPrevDefaultService] = useState(defaultService);

    if (defaultService !== prevDefaultService) {
        setPrevDefaultService(defaultService);
        setForm((prev) => ({ ...prev, service: defaultService || "" }));
    }

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    // Formspree Public Form ID from environment
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    const isFormConfigured = Boolean(formspreeId && formspreeId.trim() !== "" && formspreeId !== "YOUR_FORMSPREE_FORM_ID");

    const modalTitleId = useId();
    const modalDescId = useId();

    // Developer log if Formspree is not configured
    useEffect(() => {
        if (!isFormConfigured && process.env.NODE_ENV !== "production") {
            console.warn(
                "[Backup Solutions] Formspree form ID is not configured (NEXT_PUBLIC_FORMSPREE_FORM_ID). Form submission is disabled."
            );
        }
    }, [isFormConfigured]);

    // Handle background scroll lock and autofocus on open
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // Focus first input on next frame
        const timeoutId = setTimeout(() => {
            firstInputRef.current?.focus();
        }, 50);

        return () => {
            document.body.style.overflow = originalOverflow;
            clearTimeout(timeoutId);
        };
    }, [isOpen]);

    const handleOpen = () => {
        setTouched({});
        setErrors({});
        setSubmitStatus("idle");
        setErrorMessage("");
        if (!isControlled) {
            setUncontrolledIsOpen(true);
        }
    };

    const handleClose = () => {
        setTouched({});
        setErrors({});
        setSubmitStatus("idle");
        setErrorMessage("");
        if (isControlled) {
            controlledOnClose?.();
        } else {
            setUncontrolledIsOpen(false);
        }
        triggerBtnRef.current?.focus();
    };

    // Keyboard accessibility: ESC to close, Tab to cycle within dialog
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Escape") {
            e.preventDefault();
            handleClose();
            return;
        }

        if (e.key === "Tab") {
            const container = modalContentRef.current;
            if (!container) return;

            const focusableElements = container.querySelectorAll<HTMLElement>(
                'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const validateField = (name: keyof FormState, value: string): string | undefined => {
        switch (name) {
            case "fullName":
                if (!value.trim()) return "Моля, въведете вашето име и фамилия.";
                if (value.trim().length < 2) return "Името трябва да съдържа поне 2 символа.";
                return undefined;
            case "email": {
                if (!value.trim()) return "Моля, въведете валиден имейл адрес.";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value.trim())) return "Моля, въведете валиден формат (напр. ime@domain.bg).";
                return undefined;
            }
            case "service":
                if (!value) return "Моля, изберете услуга.";
                return undefined;
            case "description":
                if (!value.trim()) return "Моля, въведете описание на проекта.";
                if (value.trim().length < 10) return "Моля, въведете поне 10 символа.";
                return undefined;
            default:
                return undefined;
        }
    };

    const validateAll = (): boolean => {
        const newErrors: FormErrors = {
            fullName: validateField("fullName", form.fullName),
            email: validateField("email", form.email),
            service: validateField("service", form.service),
            description: validateField("description", form.description),
        };

        setErrors(newErrors);
        setTouched({
            fullName: true,
            company: true,
            email: true,
            phone: true,
            service: true,
            description: true,
        });

        return !Object.values(newErrors).some(Boolean);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        if (touched[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: validateField(name as keyof FormState, value),
            }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name as keyof FormState, value),
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSubmitting) return;

        if (!validateAll()) {
            return;
        }

        if (!isFormConfigured) {
            setSubmitStatus("error");
            setErrorMessage(
                `Онлайн формата временно не приема заявки. Моля, свържете се с нас директно на ${COMPANY_DETAILS.phone} или ${COMPANY_DETAILS.email}.`
            );
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const endpoint = `https://formspree.io/f/${formspreeId}`;
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.fullName.trim(),
                    company: form.company.trim() || "Не е посочена",
                    email: form.email.trim(),
                    phone: form.phone.trim() || "Не е посочен",
                    service: SERVICES_OPTIONS.find((s) => s.id === form.service)?.title || form.service,
                    description: form.description.trim(),
                    submittedAt: new Date().toISOString(),
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setForm({
                    ...initialFormState,
                    service: defaultService || "",
                });
                setTouched({});
                setErrors({});
            } else {
                const data = await response.json().catch(() => null);
                setSubmitStatus("error");
                setErrorMessage(
                    data?.error ||
                    "Възникна грешка при изпращането. Моля, опитайте отново или ни пишете на info@backupbg.net."
                );
            }
        } catch {
            setSubmitStatus("error");
            setErrorMessage(
                "Няма връзка със сървъра. Моля, свържете се с нас на info@backupbg.net."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetFormAndState = () => {
        setSubmitStatus("idle");
        setErrorMessage("");
        setForm({
            ...initialFormState,
            service: defaultService || "",
        });
        setTouched({});
        setErrors({});
    };

    const modalContent = isOpen ? (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            aria-describedby={modalDescId}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs overscroll-contain"
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
        >
            {/* Single Centered Container - Header, Body & Footer all in ONE element */}
            <div
                ref={modalContentRef}
                className="relative flex flex-col w-[calc(100vw-1rem)] sm:w-[min(680px,calc(100vw-2rem))] max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] rounded-xl sm:rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* A. Compact Header (normal flex child, shrink-0) */}
                <div className="flex shrink-0 items-start justify-between border-b border-slate-100 px-6 py-4 sm:px-7 sm:py-5 bg-white">
                    <div className="pr-4">
                        <h2 id={modalTitleId} className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                            Поискай оферта
                        </h2>
                        <p id={modalDescId} className="mt-1 text-xs sm:text-sm text-slate-500 leading-normal">
                            Разкажете ни за проекта си. Ще се свържем с вас за уточнения.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        aria-label="Затвори прозореца"
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* B. Scrollable Body & C. Fixed Action Footer */}
                {submitStatus === "success" ? (
                    <div className="flex flex-col flex-1 overflow-y-auto px-6 py-10 sm:px-7 sm:py-12 text-center overscroll-contain">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-brand-primary">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-slate-900">
                            Запитването е изпратено успешно!
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                            Благодарим ви. Ще се запознаем с параметрите на вашия обект и ще се свържем с вас възможно най-скоро.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                type="button"
                                onClick={resetFormAndState}
                                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                            >
                                Ново запитване
                            </button>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                            >
                                Затвори
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col flex-1 min-h-0">
                        {/* B. Scrollable Form Body (flex-1 min-h-0 overflow-y-auto) */}
                        <div className="flex-1 overflow-y-auto px-6 py-5 sm:px-7 sm:py-6 overscroll-contain space-y-4">
                            {/* Error Banner */}
                            {submitStatus === "error" && errorMessage && (
                                <div
                                    role="alert"
                                    className="rounded-lg border border-red-200 bg-red-50 p-3.5 text-xs text-red-800"
                                >
                                    <strong className="block font-semibold mb-0.5">Възникна проблем:</strong>
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            {/* 2-Column Grid on Desktop */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5">
                                {/* Row 1: Име и фамилия * */}
                                <div>
                                    <label htmlFor="quote-name" className="block text-xs font-medium text-slate-700 mb-1.5">
                                        Име и фамилия <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        ref={firstInputRef}
                                        id="quote-name"
                                        name="fullName"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={form.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(touched.fullName && errors.fullName)}
                                        aria-describedby={touched.fullName && errors.fullName ? "name-error" : undefined}
                                        className={`block h-10 w-full rounded-lg border px-3 text-sm text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 ${touched.fullName && errors.fullName
                                            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                            : "border-slate-300 focus:border-brand-primary focus:ring-blue-100"
                                            }`}
                                        placeholder="Иван Иванов"
                                    />
                                    {touched.fullName && errors.fullName && (
                                        <p id="name-error" className="mt-1 text-xs text-red-600">
                                            {errors.fullName}
                                        </p>
                                    )}
                                </div>

                                {/* Row 1: Фирма / обект */}
                                <div>
                                    <label htmlFor="quote-company" className="block text-xs font-medium text-slate-700 mb-1.5">
                                        Фирма / обект
                                    </label>
                                    <input
                                        id="quote-company"
                                        name="company"
                                        type="text"
                                        autoComplete="organization"
                                        value={form.company}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="block h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-900 shadow-sm transition-colors focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-blue-100"
                                        placeholder="Име на фирма или обект"
                                    />
                                </div>

                                {/* Row 2: Имейл * */}
                                <div>
                                    <label htmlFor="quote-email" className="block text-xs font-medium text-slate-700 mb-1.5">
                                        Имейл <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="quote-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(touched.email && errors.email)}
                                        aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                                        className={`block h-10 w-full rounded-lg border px-3 text-sm text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 ${touched.email && errors.email
                                            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                            : "border-slate-300 focus:border-brand-primary focus:ring-blue-100"
                                            }`}
                                        placeholder="ivan@company.bg"
                                    />
                                    {touched.email && errors.email && (
                                        <p id="email-error" className="mt-1 text-xs text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Row 2: Телефон */}
                                <div>
                                    <label htmlFor="quote-phone" className="block text-xs font-medium text-slate-700 mb-1.5">
                                        Телефон
                                    </label>
                                    <input
                                        id="quote-phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="block h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-900 shadow-sm transition-colors focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-blue-100"
                                        placeholder="08X XXX XXXX"
                                    />
                                </div>

                                {/* Row 3: Услуга * (full width) */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="quote-service" className="block text-xs font-medium text-slate-700 mb-1.5">
                                        Услуга <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="quote-service"
                                            name="service"
                                            required
                                            value={form.service}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            aria-invalid={Boolean(touched.service && errors.service)}
                                            aria-describedby={touched.service && errors.service ? "service-error" : undefined}
                                            className={`block h-10 w-full appearance-none rounded-lg border bg-white px-3 pr-10 text-sm text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 ${touched.service && errors.service
                                                ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                                : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                                                }`}
                                        >
                                            <option value="">-- Изберете услуга --</option>
                                            {SERVICES_OPTIONS.map((srv) => (
                                                <option key={srv.id} value={srv.id}>
                                                    {srv.title}
                                                </option>
                                            ))}
                                        </select>
                                        <svg
                                            aria-hidden="true"
                                            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="m6 9 6 6 6-6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    {touched.service && errors.service && (
                                        <p id="service-error" className="mt-1 text-xs text-red-600">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>

                                {/* Row 4: Описание на проекта * (full width) */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="quote-desc" className="block text-xs font-medium text-slate-700 mb-1.5">
                                        Описание на проекта <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="quote-desc"
                                        name="description"
                                        rows={3}
                                        required
                                        value={form.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(touched.description && errors.description)}
                                        aria-describedby={touched.description && errors.description ? "desc-error" : undefined}
                                        className={`block w-full rounded-lg border p-3 text-sm text-slate-900 shadow-sm transition-colors focus:outline-none focus:ring-2 ${touched.description && errors.description
                                            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                                            : "border-slate-300 focus:border-brand-primary focus:ring-blue-100"
                                            }`}
                                        placeholder="Опишете накратко нуждите на обекта, брой камери, работни места или особености на инсталацията..."
                                    />
                                    {touched.description && errors.description && (
                                        <p id="desc-error" className="mt-1 text-xs text-red-600">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Privacy Policy Note */}
                            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed pt-1">
                                Изпращайки формата, се съгласявате данните ви да бъдат обработвани за целите на офертата съгласно нашата{" "}
                                <Link
                                    href="/privacy"
                                    target="_blank"
                                    className="font-medium text-brand-primary underline hover:text-blue-700"
                                >
                                    Политика за поверителност
                                </Link>
                                .
                            </p>

                            {/* Unconfigured Form Notice */}
                            {!isFormConfigured && (
                                <div className="rounded-lg bg-slate-50 border border-slate-200/90 p-3 text-xs text-slate-600 leading-relaxed">
                                    <span className="font-semibold text-slate-800">Забележка: </span>
                                    <span>
                                        Онлайн формата временно се обновява. За оферта можете да ни пишете директно на{" "}
                                        <a href={`mailto:${COMPANY_DETAILS.email}`} className="font-semibold text-brand-primary hover:underline">
                                            {COMPANY_DETAILS.email}
                                        </a>
                                        .
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* C. Fixed Action Footer within Modal (shrink-0) */}
                        <div className="border-t border-slate-100 bg-slate-50/90 px-6 py-3.5 sm:px-7 sm:py-4 gap-3">

                            {/* Right: Actions */}
                            <div className="flex items-center justify-end gap-2.5">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    disabled={isSubmitting}
                                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50"
                                >
                                    Отказ
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !isFormConfigured}
                                    className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="mr-2 h-4 w-4 animate-spin text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v8H4z"
                                                />
                                            </svg>
                                            Изпращане...
                                        </>
                                    ) : (
                                        "Изпрати запитване"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    ) : null;

    return (
        <>
            {/* Trigger Button if not controlled */}
            {!isControlled && (
                <button
                    ref={triggerBtnRef}
                    type="button"
                    onClick={handleOpen}
                    className={className}
                >
                    {label}
                </button>
            )}

            {/* Portal to document.body: completely isolates modal from all ancestor CSS */}
            {mounted && modalContent ? createPortal(modalContent, document.body) : null}
        </>
    );
}
