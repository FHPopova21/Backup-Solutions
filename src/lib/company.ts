export interface ServiceOption {
    id: string;
    title: string;
    description: string;
}

export const SERVICES_OPTIONS: ServiceOption[] = [
    {
        id: "video-surveillance",
        title: "Видеонаблюдение",
        description: "Доставка, монтаж и конфигуриране на системи за видеонаблюдение.",
    },
    {
        id: "networking",
        title: "Локални мрежи",
        description: "Структурно окабеляване, трасиране и изграждане на локална мрежова свързаност.",
    },
    {
        id: "equipment",
        title: "Комуникационно оборудване",
        description: "Подбор, доставка и монтаж на комутатори, рутери и мрежови шкафове.",
    },
    {
        id: "maintenance",
        title: "Абонаментно обслужване",
        description: "Периодична профилактика, диагностика и техническа поддръжка.",
    },
];

export const COMPANY_DETAILS = {
    brandName: "Backup Solutions",
    // Забележка: Правното наименование на търговското дружество подлежи на финално потвърждение от собственика.
    legalNamePendingConfirmation: "[Изисква потвърждение: Наименование на търговеца / Юридическо лице]",
    address: "Бургас, ул. Михаил Герджиков 11",
    addressCity: "Бургас, България",
    addressNotice: "Адресът служи за кореспонденция и техническа координация. Посещения на място се извършват след предварителна уговорка.",
    email: "info@backupbg.net",
    phone: "0878 729 829",
    phoneRaw: "+359878729829",
    // Google Maps координати и линкове
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D0%91%D1%83%D1%80%D0%B3%D0%B0%D1%81%2C+%D1%83%D0%BB.+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%93%D0%B5%D1%80%D0%B4%D0%B6%D0%B8%D0%BA%D0%BE%D0%B2+11",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=%D0%91%D1%83%D1%80%D0%B3%D0%B0%D1%81%2C+%D1%83%D0%BB.+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%93%D0%B5%D1%80%D0%B4%D0%B6%D0%B8%D0%BA%D0%BE%D0%B2+11&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

