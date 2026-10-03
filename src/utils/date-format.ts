import type { Locale } from "../data/locales";

const calendarLocale: Record<Locale, string> = {
  fa: "fa-IR-u-ca-persian-nu-arabext",
  ar: "ar-SA-u-ca-islamic-umalqura-nu-arab",
  ru: "ru-RU-u-ca-gregory-nu-latn",
  de: "de-DE-u-ca-gregory-nu-latn",
  zh: "zh-CN-u-ca-gregory-nu-latn",
  fr: "fr-FR-u-ca-gregory-nu-latn",
  es: "es-ES-u-ca-gregory-nu-latn",
  en: "en-US-u-ca-gregory-nu-latn",
};

const toAsciiDigits = (value: string) =>
  value.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
       .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));

const yearForLocale = (year: number, locale: Locale, month = 6) => {
  const date = new Date(Date.UTC(year, month, 1));
  return new Intl.DateTimeFormat(calendarLocale[locale], { year: "numeric" }).format(date);
};

export function formatYear(year: number, locale: Locale, month = 6): string {
  const value = yearForLocale(year, locale, month);
  return locale === "ar" ? value : value;
}

/**
 * Formats a year or year range from canonical Gregorian source data.
 * For Persian, the Solar Hijri calendar is used.
 * For Arabic, the Umm al-Qura lunar Hijri calendar is used.
 * All other locales use Gregorian years.
 */
export function formatPeriod(value: string, locale: Locale): string {
  const normalized = toAsciiDigits(value);
  return normalized.replace(/\b(19|20)\d{2}\b(?:\s*[–-]\s*\b(19|20)\d{2}\b)?/g, (match) => {
    const years = match.match(/\d{4}/g) ?? [];
    if (years.length === 1) return yearForLocale(Number(years[0]), locale);
    return years.map((year) => yearForLocale(Number(year), locale)).join("–");
  });
}

/** Formats membership/course text containing canonical Gregorian years. */
export function formatDateText(value: string, locale: Locale): string {
  return formatPeriod(value, locale);
}

/** Company founding year: source is August 2023, so Arabic is anchored in 1445 AH. */
export function formatFounded(locale: Locale): string {
  return yearForLocale(2023, locale, 7);
}
