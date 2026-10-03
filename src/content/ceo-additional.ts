import type { Locale } from "../data/locales";

export type CEOAdditional = {
  skills:string[];
  languages:string[];
  memberships:string[];
  courses:string[];
};

export const ceoAdditional: Record<Locale, CEOAdditional> = {
  fa:{
    skills:["خلبانی کوادکوپتر","خلبانی هواپیمای فوق‌سبک","مدرس و مشاور HSE","طراحی نیروگاه خورشیدی","نجوم","ایده‌پردازی کسب‌وکار","امنیت شبکه و اطلاعات","برنامه‌نویسی","مدیریت مالی","شبکه‌سازی","مدیریت پروژه","تحقیق و توسعه"],
    languages:["انگلیسی: سطح خوب","عربی: متوسط رو به پایین","ترکی استانبولی: متوسط رو به پایین","روسی: متوسط رو به پایین","فرانسوی: متوسط رو به پایین"],
    memberships:["انجمن نجوم ایران — از ۱۳۹۰","انجمن نجوم آیاز تبریز — از ۱۳۹۱","انجمن مهندسان مکانیک ایران — ۱۳۹۴","انجمن هوافضای ایران — از ۱۳۹۸"],
    courses:["CanSat و CubeSat — پژوهشگاه هوافضا","Space 4.0","سنجش از دور I و II — سازمان فضایی ایران","مهندسی هوافضا","چهارمین کنفرانس تشعشعات فضایی","پدیده‌های گرفت","اختفاسنجی و زمان‌سنجی ستارگان دوتایی و متغیر","نجوم و پدافند غیرعامل","عکاسی نجومی","مبانی هوافضا","HSE — شرکت ملی گاز ایران","شهاب‌سنگ‌شناسی","نجوم آماتوری"]
  },
  en:{
    skills:["Quadcopter pilot","Ultralight aircraft pilot","HSE instructor & consultant","Solar power plant design","Astronomy","Business startup ideation","Network & information security","Programming","Financial management","Networking","Project management","R&D"],
    languages:["English: Good level","Arabic: Lower-intermediate","Turkish (Istanbul): Lower-intermediate","Russian: Lower-intermediate","French: Lower-intermediate"],
    memberships:["Astronomical Society of Iran — since 2011","Ayaz Tabriz Astronomy Society — since 2012","Iranian Society of Mechanical Engineers — 2014","Iranian Aerospace Society — since 2019"],
    courses:["CanSat & CubeSat — Aerospace Research Institute","Space 4.0","Remote Sensing I & II — Iranian Space Agency","Aerospace Engineering","4th Space Radiation Conference","Eclipse Phenomena","Binary & Variable Star Occultation Timing","Astronomy & Passive Defense","Astrophotography","Fundamentals of Aerospace","HSE — National Iranian Gas Company","Meteoritics","Amateur Astronomy"]
  },
  ar:{
    skills:["قيادة كوادكوبتر","قيادة طائرات خفيفة","مدرب ومستشار HSE","تصميم محطات الطاقة الشمسية","علم الفلك","ابتكار أفكار الشركات الناشئة","أمن الشبكات والمعلومات","البرمجة","الإدارة المالية","بناء الشبكات","إدارة المشاريع","البحث والتطوير"],
    languages:["الإنجليزية: جيد","العربية: متوسط أدنى","التركية (إسطنبول): متوسط أدنى","الروسية: متوسط أدنى","الفرنسية: متوسط أدنى"],
    memberships:["الجمعية الفلكية الإيرانية — منذ 2011","جمعية أياز لعلم الفلك في تبريز — منذ 2012","الجمعية الإيرانية للمهندسين الميكانيكيين — 2014","الجمعية الإيرانية للطيران والفضاء — منذ 2019"],
    courses:["CanSat وCubeSat — معهد أبحاث الفضاء","Space 4.0","الاستشعار عن بُعد I وII — وكالة الفضاء الإيرانية","هندسة الطيران والفضاء","المؤتمر الرابع لإشعاعات الفضاء","ظواهر الكسوف والحجب","توقيت احتجابات النجوم الثنائية والمتغيرة","علم الفلك والدفاع السلبي","التصوير الفلكي","أساسيات الطيران والفضاء","HSE — شركة الغاز الوطنية الإيرانية","علم النيازك","علم الفلك للهواة"]
  },
  ru:{
    skills:["Пилот квадрокоптера","Пилот лёгких самолётов","Инструктор и консультант по HSE","Проектирование солнечных электростанций","Астрономия","Разработка идей стартапов","Сетевая и информационная безопасность","Программирование","Финансовый менеджмент","Нетворкинг","Управление проектами","НИОКР"],
    languages:["Английский: хороший уровень","Арабский: ниже среднего","Турецкий (Стамбул): ниже среднего","Русский: ниже среднего","Французский: ниже среднего"],
    memberships:["Astronomical Society of Iran — с 2011","Ayaz Tabriz Astronomy Society — с 2012","Iranian Society of Mechanical Engineers — 2014","Iranian Aerospace Society — с 2019"],
    courses:["CanSat & CubeSat — Aerospace Research Institute","Space 4.0","Remote Sensing I & II — Iranian Space Agency","Аэрокосмическая инженерия","4th Space Radiation Conference","Eclipse Phenomena","Binary & Variable Star Occultation Timing","Astronomy & Passive Defense","Astrophotography","Fundamentals of Aerospace","HSE — National Iranian Gas Company","Meteoritics","Amateur Astronomy"]
  },
  de:{
    skills:["Quadrocopter-Pilot","Pilot für Ultraleichtflugzeuge","HSE-Trainer und -Berater","Planung von Solarstromanlagen","Astronomie","Startup-Ideenentwicklung","Netzwerk- und Informationssicherheit","Programmierung","Finanzmanagement","Networking","Projektmanagement","F&E"],
    languages:["Englisch: gut","Arabisch: unteres Mittelstufenniveau","Türkisch (Istanbul): unteres Mittelstufenniveau","Russisch: unteres Mittelstufenniveau","Französisch: unteres Mittelstufenniveau"],
    memberships:["Astronomical Society of Iran — seit 2011","Ayaz Tabriz Astronomy Society — seit 2012","Iranian Society of Mechanical Engineers — 2014","Iranian Aerospace Society — seit 2019"],
    courses:["CanSat & CubeSat — Aerospace Research Institute","Space 4.0","Remote Sensing I & II — Iranian Space Agency","Luft- und Raumfahrttechnik","4th Space Radiation Conference","Eclipse Phenomena","Binary & Variable Star Occultation Timing","Astronomy & Passive Defense","Astrophotography","Fundamentals of Aerospace","HSE — National Iranian Gas Company","Meteoritics","Amateur Astronomy"]
  },
  zh:{
    skills:["四旋翼飞行器驾驶","超轻型飞机驾驶","HSE培训师与顾问","太阳能电站设计","天文学","创业项目构思","网络与信息安全","编程","财务管理","网络建设","项目管理","研发"],
    languages:["英语：良好","阿拉伯语：中低级","土耳其语（伊斯坦布尔）：中低级","俄语：中低级","法语：中低级"],
    memberships:["Astronomical Society of Iran — 自2011年","Ayaz Tabriz Astronomy Society — 自2012年","Iranian Society of Mechanical Engineers — 2014年","Iranian Aerospace Society — 自2019年"],
    courses:["CanSat & CubeSat — Aerospace Research Institute","Space 4.0","Remote Sensing I & II — Iranian Space Agency","航空航天工程","4th Space Radiation Conference","Eclipse Phenomena","Binary & Variable Star Occultation Timing","Astronomy & Passive Defense","Astrophotography","Fundamentals of Aerospace","HSE — National Iranian Gas Company","Meteoritics","Amateur Astronomy"]
  },
  fr:{
    skills:["Pilote de quadricoptère","Pilote d'avion ultraléger","Formateur et consultant HSE","Conception de centrales solaires","Astronomie","Idéation de startups","Sécurité des réseaux et de l'information","Programmation","Gestion financière","Networking","Gestion de projet","R&D"],
    languages:["Anglais : bon niveau","Arabe : niveau intermédiaire inférieur","Turc (Istanbul) : niveau intermédiaire inférieur","Russe : niveau intermédiaire inférieur","Français : niveau intermédiaire inférieur"],
    memberships:["Astronomical Society of Iran — depuis 2011","Ayaz Tabriz Astronomy Society — depuis 2012","Iranian Society of Mechanical Engineers — 2014","Iranian Aerospace Society — depuis 2019"],
    courses:["CanSat & CubeSat — Aerospace Research Institute","Space 4.0","Remote Sensing I & II — Iranian Space Agency","Ingénierie aérospatiale","4th Space Radiation Conference","Eclipse Phenomena","Binary & Variable Star Occultation Timing","Astronomy & Passive Defense","Astrophotography","Fundamentals of Aerospace","HSE — National Iranian Gas Company","Meteoritics","Amateur Astronomy"]
  },
  es:{
    skills:["Piloto de cuadricóptero","Piloto de aeronaves ultraligeras","Instructor y consultor HSE","Diseño de plantas solares","Astronomía","Ideación de startups","Seguridad de redes e información","Programación","Gestión financiera","Networking","Gestión de proyectos","I+D"],
    languages:["Inglés: buen nivel","Árabe: nivel intermedio bajo","Turco (Estambul): nivel intermedio bajo","Ruso: nivel intermedio bajo","Francés: nivel intermedio bajo"],
    memberships:["Astronomical Society of Iran — desde 2011","Ayaz Tabriz Astronomy Society — desde 2012","Iranian Society of Mechanical Engineers — 2014","Iranian Aerospace Society — desde 2019"],
    courses:["CanSat & CubeSat — Aerospace Research Institute","Space 4.0","Remote Sensing I & II — Iranian Space Agency","Ingeniería aeroespacial","4th Space Radiation Conference","Eclipse Phenomena","Binary & Variable Star Occultation Timing","Astronomy & Passive Defense","Astrophotography","Fundamentals of Aerospace","HSE — National Iranian Gas Company","Meteoritics","Amateur Astronomy"]
  }
};
