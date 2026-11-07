import type { Locale } from "../data/locales";

export const projectStatus: Record<Locale, Record<string, string>> = {
  fa: {
    "Alpha Linux": "انتشار آلفا · در حال توسعه",
    "ZTF Classifier": "نسخه ۱.۰.۱ منتشر شده · توسعه محصول ادامه دارد"
  },
  en: {
    "Alpha Linux": "Alpha release phase · in development",
    "ZTF Classifier": "Version 1.0.1 released · product development continues"
  },
  ar: {
    "Alpha Linux": "إصدار ألفا · قيد التطوير",
    "ZTF Classifier": "الإصدار 1.0.1 منشور · تطوير المنتج مستمر"
  },
  ru: {
    "Alpha Linux": "Альфа-релиз · в разработке",
    "ZTF Classifier": "Версия 1.0.1 выпущена · разработка продукта продолжается"
  },
  de: {
    "Alpha Linux": "Alpha-Version · in Entwicklung",
    "ZTF Classifier": "Version 1.0.1 veröffentlicht · Produktentwicklung läuft weiter"
  },
  zh: {
    "Alpha Linux": "Alpha 阶段 · 开发中",
    "ZTF Classifier": "1.0.1 版本已发布 · 产品持续开发"
  },
  fr: {
    "Alpha Linux": "Version alpha · en développement",
    "ZTF Classifier": "Version 1.0.1 publiée · développement du produit en cours"
  },
  es: {
    "Alpha Linux": "Versión alfa · en desarrollo",
    "ZTF Classifier": "Versión 1.0.1 publicada · el desarrollo continúa"
  }
};
