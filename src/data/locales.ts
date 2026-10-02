export const locales = ["fa","en","ar","ru","de","zh","fr","es"] as const;
export type Locale = (typeof locales)[number];

export const rtlLocales: Locale[] = ["fa","ar"];

export const localeMeta: Record<Locale,{label:string;dir:"rtl"|"ltr"}> = {
  fa:{label:"فارسی",dir:"rtl"}, en:{label:"English",dir:"ltr"}, ar:{label:"العربية",dir:"rtl"},
  ru:{label:"Русский",dir:"ltr"}, de:{label:"Deutsch",dir:"ltr"}, zh:{label:"中文",dir:"ltr"},
  fr:{label:"Français",dir:"ltr"}, es:{label:"Español",dir:"ltr"}
};

export function isLocale(value:string): value is Locale {
  return locales.includes(value as Locale);
}
