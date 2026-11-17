import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/lib/company";

export const metadata: Metadata = {
    title: "Политика за поверителност",
    description:
        "Политика за поверителност и защита на личните данни при запитвания за оферти и комуникация с Backup Solutions.",
};

export default function PrivacyPage() {
    return (
        <main className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-4xl px-6">
                {/* Breadcrumb */}
                <nav aria-label="Навигационна пътека" className="mb-6 text-sm text-slate-500">
                    <Link href="/" className="hover:text-brand-primary">
                        Начало
                    </Link>{" "}
                    / <span className="text-slate-900 font-medium">Политика за поверителност</span>
                </nav>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Политика за поверителност и защита на личните данни
                </h1>
                <p className="mt-4 text-sm text-slate-500">
                    Последна актуализация: ноември 2026 г.
                </p>

                {/* Owner confirmation banner */}
                <div
                    role="note"
                    className="mt-8 rounded-xl border border-blue-200 bg-blue-50/70 p-5 text-sm text-slate-800 leading-relaxed"
                >
                    <p className="font-semibold text-blue-900">
                        Информация за идентификация на администратора:
                    </p>
                    <p className="mt-1 text-xs text-slate-700">
                        Backup Solutions спазва изискванията на Общия регламент за защита на данните (Регламент (ЕС) 2016/679 - GDPR) и Закона за защита на личните данни на Република България. Точните фирмени данни на юридическото лице са отбелязани за финално потвърждение от собственика по-долу.
                    </p>
                </div>

                <div className="mt-10 space-y-10 text-brand-text leading-7">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900">
                            1. Данни за администратора на лични данни
                        </h2>
                        <p className="mt-3">
                            Администратор на личните данни, обработвани чрез този уебсайт, е:
                        </p>
                        <ul className="mt-3 list-disc pl-6 space-y-1 text-sm">
                            <li>
                                <strong>Търговска марка / Дейност:</strong> {COMPANY_DETAILS.brandName}
                            </li>
                            <li className="text-blue-950 font-medium bg-blue-50/80 p-1.5 rounded">
                                <strong>Юридическо лице:</strong> {COMPANY_DETAILS.legalNamePendingConfirmation}
                            </li>
                            <li>
                                <strong>Адрес за кореспонденция и координация:</strong> {COMPANY_DETAILS.address} ({COMPANY_DETAILS.addressNotice})
                            </li>
                            <li>
                                <strong>Електронен адрес:</strong>{" "}
                                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-brand-primary underline">
                                    {COMPANY_DETAILS.email}
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900">
                            2. Какви лични данни събираме чрез сайта
                        </h2>
                        <p className="mt-3">
                            Ние събираме единствено минимално необходимите данни, които доброволно ни предоставяте при попълване на формата за оферта или при директен контакт:
                        </p>
                        <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                            <li>
                                <strong>Форма „Поискай оферта“:</strong> име и фамилия, имейл адрес, избрана категория услуга и описание на техническите изисквания на обекта. Полетата за фирма/организация и телефон са незадължителни.
                            </li>
                            <li>
                                <strong>Директна комуникация (имейл):</strong> всяка информация, която прецените да споделите във връзка с изготвянето на оферта или запитване за техническо обслужване.
                            </li>
                        </ul>
                        <p className="mt-3 text-sm">
                            Ние <strong>не събираме</strong> специални (чувствителни) категории лични данни по смисъла на чл. 9 от GDPR, нито извършваме профилиране или автоматизирано вземане на решения.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900">
                            3. Цели и правни основания за обработване
                        </h2>
                        <p className="mt-3">
                            Вашите лични данни се обработват на следните законови основания:
                        </p>
                        <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                            <li>
                                <strong>Преддоговорни отношения (чл. 6, ал. 1, б. „б“ от GDPR):</strong> обработката на вашето запитване, изготвяне на индивидуална ценова оферта, съгласуване на технически детайли и обратна връзка относно видеонаблюдение, кабелни мрежи, оборудване или абонамент.
                            </li>
                            <li>
                                <strong>Законен интерес (чл. 6, ал. 1, б. „е“ от GDPR):</strong> осигуряване на стабилност, защита от злоупотреби и спам, както и защита на правата ни при правни спорове.
                            </li>
                        </ul>
                        <p className="mt-3 text-sm">
                            Данните <strong>не се използват</strong> за непоискани маркетингови бюлетини или продажба на трети лица.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900">
                            4. Срок на съхранение на данните
                        </h2>
                        <p className="mt-3 text-sm">
                            Данните, предоставени чрез формата за оферта или контактните канали, се пазят за периода, необходим за провеждане на комуникацията и финализиране на офертата (обичайно до 6 месеца от последната кореспонденция), освен ако не възникне последващ договор за изпълнение, при който се прилагат сроковете, изисквани от данъчното и счетоводното законодателство.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900">
                            5. Предоставяне на данни на трети страни
                        </h2>
                        <p className="mt-3 text-sm">
                            За техническото обработване и сигурно препращане на съобщенията от уеб формата използваме Formspree Inc. като технически доставчик. Услугата обработва данните единствено по наше възлагане и при прилагане на подходящи технически и организационни мерки за сигурност. Ние не споделяме, не отдаваме под наем и не продаваме вашите данни на трети лица.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900">
                            6. Интерактивни карти и бисквитки
                        </h2>
                        <p className="mt-3 text-sm">
                            Сайтът на Backup Solutions не използва проследяващи, маркетингови или рекламни бисквитки.
                        </p>
                        <p className="mt-2 text-sm">
                            В секцията за контакти сайтът визуализира местоположението чрез карта от Google Maps (Google Ireland Limited / Google LLC) на основание легитимен интерес за улесняване на локализирането на обекта за техническа координация. Вграждането използва режим с отложено зареждане (lazy loading) и ограничено предаване на референтна информация (no-referrer-when-downgrade).
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-900">
                            7. Вашите права като субект на данни
                        </h2>
                        <p className="mt-3 text-sm">
                            Съгласно европейското законодателство имате следните права:
                        </p>
                        <ul className="mt-3 list-disc pl-6 space-y-1.5 text-sm">
                            <li>Право на достъп до отнасящите се за вас лични данни;</li>
                            <li>Право на коригиране на неточни или непълни данни;</li>
                            <li>Право на изтриване („право да бъдеш забравен“);</li>
                            <li>Право на ограничаване на обработването;</li>
                            <li>Право на възражение срещу обработването;</li>
                            <li>Право на преносимост на данните (когато е приложимо).</li>
                        </ul>
                        <p className="mt-3 text-sm">
                            За да упражните някое от правата си, изпратете имейл на:{" "}
                            <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-brand-primary underline">
                                {COMPANY_DETAILS.email}
                            </a>
                            .
                        </p>
                        <p className="mt-3 text-sm">
                            Имате право да подадете жалба до надзорния орган по защита на личните данни:
                            <br />
                            <strong>Комисия за защита на личните данни (КЗЛД)</strong>
                            <br />
                            Адрес: гр. София 1592, бул. „Проф. Цветан Лазаров” № 2
                            <br />
                            Уебсайт:{" "}
                            <a
                                href="https://www.cpdp.bg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-primary underline"
                            >
                                www.cpdp.bg
                            </a>
                        </p>
                    </section>

                    {/* Back link */}
                    <div className="pt-8 border-t border-slate-200">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                        >
                            ← Обратно към началната страница
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

