import type { Locale } from "../data/locales";

export type DomainItem = { title: string; body: string };
export type DomainStep = { title: string; body: string };
export type PublicWork = { title: string; body: string; kind: "documented" | "focus"; status: string };
export type DomainDeepContent = {
  kicker: string;
  problemTitle: string;
  problem: string;
  scienceTitle: string;
  science: DomainItem[];
  capabilityTitle: string;
  capabilities: DomainItem[];
  workflowTitle: string;
  workflow: DomainStep[];
  validationTitle: string;
  validation: string;
  limitsTitle: string;
  limits: string;
  linksTitle: string;
  links: string[];
  workTitle: string;
  work: PublicWork[];
  disclosureTitle: string;
  disclosure: string;
};

const fa: Record<string, DomainDeepContent> = {
  astronomy: {
    kicker: "داده‌های رصدی، تحلیل محاسباتی و اکتشاف علمی",
    problemTitle: "از مشاهده آسمان تا شواهد قابل بررسی",
    problem: "پیمایش‌های نوین نجومی، حجم بزرگی از داده‌های تصویری، فوتومتری و زمانی تولید می‌کنند. چالش فقط دریافت داده نیست؛ باید کیفیت مشاهده سنجیده شود، تغییرپذیری منابع از خطای اندازه‌گیری جدا شود و نامزدهای جالب برای بررسی علمی اولویت‌بندی شوند. هدف این حوزه، توسعه روش‌ها و ابزارهای محاسباتی است که تحلیل داده نجومی را دقیق‌تر، مقیاس‌پذیرتر و بازتولیدپذیرتر می‌کنند.",
    scienceTitle: "مبانی علمی",
    science: [
      { title: "فوتومتری و منحنی نوری", body: "اندازه‌گیری شار یا قدر ظاهری در زمان، همراه با خطای اندازه‌گیری، زمان‌سنجی، پرچم‌های کیفیت و الگوی نمونه‌برداری. منحنی نوری می‌تواند تغییرپذیری ستاره‌ای، گذر، فوران یا رویداد گذرا را آشکار کند." },
      { title: "سری زمانی نامنظم", body: "داده‌های نجومی اغلب فاصله زمانی یکنواخت ندارند. تحلیل باید شکاف‌های زمانی، نقاط پرت، حد تشخیص، عدم‌قطعیت و اثر پنجره نمونه‌برداری را در نظر بگیرد." },
      { title: "جمعیت‌شناسی و طبقه‌بندی اجرام", body: "طبقه‌بندی آماری به برچسب‌های مرجع و نمونه نماینده وابسته است. تشخیص ناهنجاری و شناسایی نامزد جدید با طبقه‌بندی کلاس‌های شناخته‌شده یک مسئله واحد نیستند." },
      { title: "هم‌سنجی پیمایش‌ها", body: "اتصال کاتالوگ‌ها و مشاهدات چندپیمایشی به سازگاری مختصات، زمان، باندهای طیفی، تفکیک زاویه‌ای و تفاوت حساسیت ابزارها نیاز دارد." }
    ],
    capabilityTitle: "توانمندی‌ها و مسیرهای تخصصی",
    capabilities: [
      { title: "تحلیل داده‌های پیمایش", body: "دریافت هدفمند، کنترل کیفیت، ساخت داده‌های تحلیلی و ثبت منشأ داده برای پیمایش‌هایی مانند ZTF و کاتالوگ‌های عمومی مرتبط." },
      { title: "استخراج ویژگی علمی", body: "ویژگی‌های آماری، زمانی و فیزیکی از منحنی‌های نوری و داده‌های چندباندی؛ با توجه به واحدها، خطاها و اعتبار اندازه‌گیری." },
      { title: "یادگیری ماشین و تشخیص ناهنجاری", body: "طبقه‌بندی، رتبه‌بندی نامزدها و شناسایی نمونه‌های دور از توزیع؛ همراه با کالیبراسیون احتمال و نمایش موارد نامطمئن." },
      { title: "پشتیبانی از پیگیری رصدی", body: "تبدیل خروجی محاسباتی به فهرست نامزدهای اولویت‌دار برای بازبینی پژوهشگر و تصمیم‌گیری درباره پیگیری رصدی." }
    ],
    workflowTitle: "چرخه تحلیل و اکتشاف",
    workflow: [
      { title: "۱. تعریف پرسش علمی", body: "کلاس هدف، بازه زمانی، پیمایش و معیار موفقیت مشخص می‌شود." },
      { title: "۲. گردآوری و کنترل کیفیت", body: "منشأ، نسخه، پرچم‌های کیفیت، واحدها و محدودیت‌های داده ثبت می‌شوند." },
      { title: "۳. تحلیل و مدل‌سازی", body: "ویژگی‌ها استخراج می‌شوند و مدل با جداسازی داده معتبر ارزیابی می‌شود." },
      { title: "۴. بازبینی و بازتولید", body: "عدم‌قطعیت و موارد نامطمئن گزارش می‌شوند؛ نتایج با داده مرجع و روش ثبت‌شده بازتولید می‌شوند." }
    ],
    validationTitle: "اعتبارسنجی علمی",
    validation: "ارزیابی باید جداسازی داده بدون نشت، تعریف روشن مجموعه مرجع، معیارهای متناسب با عدم‌توازن کلاس‌ها، کالیبراسیون احتمال، تحلیل خطا و آزمون داده خارج از توزیع را پوشش دهد. عملکرد روی یک نمونه محدود، به‌تنهایی نماینده کل آسمان یا کل داده‌های یک پیمایش نیست.",
    limitsTitle: "محدودیت‌های تفسیر",
    limits: "خروجی مدل، نامزد علمی یا اولویت بررسی است؛ نه کشف قطعی یا تأیید فیزیکی. نتیجه به کیفیت فوتومتری، انتخاب نمونه، پوشش زمانی، برچسب‌های مرجع و محدودیت ابزار وابسته است. تأیید نهایی ممکن است به داده مستقل یا پیگیری رصدی نیاز داشته باشد.",
    linksTitle: "ارتباط میان‌رشته‌ای",
    links: ["هوش مصنوعی برای طبقه‌بندی و تحلیل سری زمانی", "هوافضا برای شناخت حسگرها و سامانه‌های رصدی فضایی", "سنجش از دور برای پردازش داده‌های تصویری و مکانی در مقیاس بزرگ"],
    workTitle: "پروژه مستند و زمینه‌های مهندسی",
    work: [
      { title: "ZTF Classifier", body: "پلتفرم مستقل تحلیل منحنی‌های نوری ZTF و طبقه‌بندی اجرام گذرا با رویکرد CPU-first. وضعیت عمومی و محدودیت‌های علمی باید همراه با هر نتیجه بیان شود.", kind: "documented", status: "پروژه مستقل در حال توسعه؛ نسخه نرم‌افزاری 1.0.1 گزارش شده است." },
      { title: "تحلیل سری‌های زمانی نجومی", body: "زمینه مهندسی برای پاک‌سازی، تحلیل تغییرپذیری، استخراج ویژگی و ارزیابی عدم‌قطعیت در داده‌های زمانی.", kind: "focus", status: "زمینه تخصصی؛ نه محصول مستقل اعلام‌شده." },
      { title: "اولویت‌بندی نامزدهای گذرا", body: "روش‌های رتبه‌بندی نامزدها برای پشتیبانی از بازبینی پژوهشگر و انتخاب اهداف پیگیری.", kind: "focus", status: "زمینه توسعه؛ خروجی جایگزین تأیید رصدی نیست." }
    ],
    disclosureTitle: "مرز اطلاعات عمومی",
    disclosure: "در معرفی عمومی، مسئله علمی، نوع داده، روش‌های کلی و نمونه‌های آموزشی قابل انتشارند. کد، تنظیمات داخلی مدل، داده دارای محدودیت، جزئیات اختصاصی خط لوله و نتایج تأییدنشده منتشر نمی‌شوند."
  },
  aerospace: {
    kicker: "سامانه‌های پروازی و فضایی؛ از تحلیل تا یکپارچه‌سازی",
    problemTitle: "طراحی سامانه در حضور قیود واقعی",
    problem: "سامانه هوافضایی از چند زیرسامانه وابسته تشکیل می‌شود. جرم، توان، حجم، شرایط محیطی، ایمنی، قابلیت اطمینان و محدودیت مأموریت بر یکدیگر اثر می‌گذارند. طراحی موفق فقط انتخاب یک قطعه یا اجرای یک شبیه‌سازی نیست؛ باید الزامات، مدل‌ها، رابط‌ها، آزمون‌ها و شواهد عملکرد در یک فرایند مهندسی منسجم مدیریت شوند.",
    scienceTitle: "مبانی علمی و مهندسی",
    science: [
      { title: "آیرودینامیک و مکانیک پرواز", body: "نیرو و گشتاور آیرودینامیکی، جریان تراکم‌پذیر و تراکم‌ناپذیر، پایداری، کنترل‌پذیری و پاسخ وسیله پرنده به اغتشاش‌ها." },
      { title: "سازه و مواد", body: "بارگذاری، تنش و کرنش، خستگی، ارتعاش، کمانش و اثر محیط بر خواص مواد و اتصالات." },
      { title: "دینامیک مداری و طراحی مأموریت", body: "هندسه مدار، پنجره زمانی، پوشش، محدودیت‌های پرتاب و ارتباط میان اهداف مأموریت و منابع سامانه." },
      { title: "زیرسامانه‌های فضایی", body: "توان، رایانش، مخابرات، حسگرها، کنترل وضعیت، مدیریت حرارتی و سازگاری الکترومغناطیسی." }
    ],
    capabilityTitle: "توانمندی‌ها و مسیرهای تخصصی",
    capabilities: [
      { title: "طراحی مفهومی و معماری مأموریت", body: "تبدیل نیاز مأموریت به الزامات سطح سامانه، تخصیص عملکرد و تعریف رابط میان زیرسامانه‌ها." },
      { title: "تحلیل عددی و شبیه‌سازی", body: "مدل‌سازی آیرودینامیک، سازه، حرارت و دینامیک برای مقایسه گزینه‌ها و شناسایی ریسک طراحی." },
      { title: "سامانه‌های کوچک فضایی", body: "مطالعه معماری CanSat و CubeSat، بودجه جرم و توان، حسگر، مخابرات و برنامه یکپارچه‌سازی و آزمون." },
      { title: "پایش وضعیت و قابلیت اطمینان", body: "تحلیل داده حسگر و تله‌متری برای شناسایی ناهنجاری و پشتیبانی از نگهداری؛ با توجه به اعتبار داده و شرایط عملیاتی." }
    ],
    workflowTitle: "چرخه مهندسی سامانه",
    workflow: [
      { title: "۱. نیازمندی و مأموریت", body: "هدف، محیط، قیود، معیار پذیرش و سطح ریسک تعریف می‌شوند." },
      { title: "۲. معماری و مدل‌سازی", body: "زیرسامانه‌ها، رابط‌ها و مدل‌های تحلیلی مشخص می‌شوند." },
      { title: "۳. تحلیل و طراحی تفصیلی", body: "گزینه‌ها با محاسبه و شبیه‌سازی مقایسه می‌شوند؛ فرض‌ها ثبت می‌شوند." },
      { title: "۴. یکپارچه‌سازی و آزمون", body: "برنامه آزمون، معیار قبولی و شواهد Verification و Validation تعریف می‌شوند." }
    ],
    validationTitle: "اعتبارسنجی مهندسی",
    validation: "نتیجه شبیه‌سازی باید با بررسی شبکه، شرایط مرزی، حساسیت مدل و داده تحلیلی مستقل سنجیده شود. در سطح سامانه نیز آزمون رابط، آزمون محیطی، آزمون عملکرد و ردیابی الزامات اهمیت دارند. تطابق مدل با یک خروجی منفرد، به‌تنهایی اعتبار کل طراحی را اثبات نمی‌کند.",
    limitsTitle: "محدودیت‌های تفسیر",
    limits: "تصویر CFD یا FEA یک نتیجه مدل‌سازی تحت فرض‌های مشخص است؛ نه گواهی عملکرد پروازی یا صلاحیت پرتاب. طراحی عملیاتی به داده ورودی معتبر، تحلیل ایمنی، آزمون سخت‌افزاری و الزامات نهادهای مسئول نیاز دارد.",
    linksTitle: "ارتباط میان‌رشته‌ای",
    links: ["هوش مصنوعی برای پایش وضعیت و تحلیل داده حسگر", "نجوم برای ابزارهای رصدی و مأموریت‌های علمی", "انرژی برای سامانه توان و مدیریت انرژی", "موتوراسپرت برای تحلیل سازه، ارتعاش و جریان"],
    workTitle: "سوابق مستند و زمینه‌های مهندسی",
    work: [
      { title: "CanSat — 2024", body: "سابقه مشارکت تیم Alpha در مأموریت سنجش و ارتباط، با کارفرمایی پژوهشگاه هوافضا؛ بر اساس رزومه ارائه‌شده.", kind: "documented", status: "سابقه پروژه مستند؛ جزئیات فنی و مأموریتی منتشر نمی‌شود." },
      { title: "CubeSat 1U — 2023", body: "سابقه مشارکت تیم Alpha در پروژه ماهواره مکعبی 1U با کارفرمایی پژوهشگاه هوافضا؛ بر اساس رزومه ارائه‌شده.", kind: "documented", status: "سابقه پروژه مستند؛ جزئیات فنی و مأموریتی منتشر نمی‌شود." },
      { title: "مطالعه تابش فضایی و حفاظت", body: "سابقه مطالعه محیط تابشی و حفاظت تجهیزات فضایی در همکاری ثبت‌شده با پژوهشگاه علوم و فنون هسته‌ای و پژوهشگاه فضایی ایران.", kind: "documented", status: "مطالعه پژوهشی 2020–2021؛ بدون افشای جزئیات اختصاصی." }
    ],
    disclosureTitle: "مرز اطلاعات عمومی",
    disclosure: "معماری سطح بالا، اصول طراحی و نمودارهای آموزشی قابل انتشارند. نقشه ساخت، مشخصات قطعات، فایل CAD، پارامترهای مأموریت، بودجه‌های دقیق و جزئیات قراردادی فقط پس از بررسی مجوز انتشار قابل ارائه‌اند."
  },
  "remote-sensing": {
    kicker: "مشاهده زمین، پردازش تصویر و تحلیل مکانی",
    problemTitle: "تبدیل پیکسل به اطلاعات مکانی قابل اتکا",
    problem: "تصویر ماهواره‌ای به‌تنهایی پاسخ یک مسئله محیطی یا مهندسی نیست. حسگر، زمان تصویربرداری، جو، هندسه دید، ابر، تفکیک مکانی و روش پردازش بر نتیجه اثر می‌گذارند. سنجش از دور زمانی ارزش تصمیم‌گیری دارد که داده خام به اطلاعات مکانی همراه با منشأ، محدودیت و ارزیابی دقت تبدیل شود.",
    scienceTitle: "مبانی علمی",
    science: [
      { title: "برهم‌کنش تابش و سطح زمین", body: "بازتاب، جذب و گسیل انرژی در طول موج‌های مختلف، مبنای تفسیر داده‌های اپتیکی و حرارتی است." },
      { title: "تفکیک‌پذیری و پاسخ حسگر", body: "تفکیک مکانی، طیفی، زمانی و رادیومتریک تعیین می‌کند چه پدیده‌ای با چه دقتی قابل مشاهده است." },
      { title: "تصویربرداری راداری SAR", body: "رادار دهانه ترکیبی به ساختار، زبری، رطوبت و هندسه تصویربرداری حساس است و تفسیر آن با تصویر اپتیکی تفاوت دارد." },
      { title: "تحلیل مکانی و زمانی", body: "هم‌ثبت‌سازی، سامانه مختصات، سری زمانی، تغییرات فصلی و تفاوت حسگرها باید پیش از مقایسه کنترل شوند." }
    ],
    capabilityTitle: "توانمندی‌ها و مسیرهای تخصصی",
    capabilities: [
      { title: "پردازش داده اپتیکی", body: "کنترل کیفیت، ماسک ابر، اصلاحات لازم و استخراج اطلاعات طیفی از داده‌های عمومی مانند Landsat و Sentinel." },
      { title: "تحلیل داده راداری", body: "آماده‌سازی داده SAR، تحلیل بازپراکنش و تفسیر الگوهای مکانی با توجه به هندسه تصویربرداری." },
      { title: "طبقه‌بندی و تشخیص تغییر", body: "تولید نقشه پوشش زمین و مقایسه چندزمانه برای پایش تغییرات محیطی و کاربری زمین." },
      { title: "کاربردهای محیطی و کشاورزی", body: "تحلیل شاخص‌های پوشش گیاهی، پایش منطقه‌ای و ترکیب داده مکانی برای پشتیبانی از تصمیم‌های میدانی." }
    ],
    workflowTitle: "زنجیره پردازش مکانی",
    workflow: [
      { title: "۱. انتخاب داده", body: "حسگر، باند، زمان، منطقه و سطح پردازش با نیاز مسئله تطبیق داده می‌شوند." },
      { title: "۲. پیش‌پردازش", body: "کیفیت، هندسه، ابر، هم‌ثبت‌سازی و سازگاری داده بررسی می‌شوند." },
      { title: "۳. استخراج اطلاعات", body: "ویژگی‌ها، شاخص‌ها، طبقه‌بندی یا تغییرات با روش مشخص محاسبه می‌شوند." },
      { title: "۴. ارزیابی مکانی", body: "نقشه با داده مرجع مستقل و معیارهای دقت مکانی ارزیابی می‌شود." }
    ],
    validationTitle: "اعتبارسنجی مکانی",
    validation: "نقشه طبقه‌بندی باید با نمونه مرجع مستقل ارزیابی شود. ماتریس خطا، دقت تولیدکننده و کاربر، دقت کلی و در صورت نیاز معیارهای مکانی گزارش می‌شوند. برای تشخیص تغییر، هم‌ثبت‌سازی و انتخاب بازه زمانی مناسب اهمیت ویژه دارند.",
    limitsTitle: "محدودیت‌های تفسیر",
    limits: "شاخص طیفی به‌تنهایی علت تغییر یا سلامت قطعی یک پوشش را اثبات نمی‌کند. ابر، سایه، فصل، رطوبت، زاویه دید، نوع حسگر و کیفیت داده می‌توانند نتیجه را تغییر دهند. هر نقشه باید محدوده، تاریخ، منبع و سطح اطمینان داشته باشد.",
    linksTitle: "ارتباط میان‌رشته‌ای",
    links: ["هوش مصنوعی برای طبقه‌بندی و استخراج الگو", "انرژی برای ارزیابی منابع خورشیدی و بادی", "نجوم و هوافضا برای درک حسگرها و داده‌های سنجشی"],
    workTitle: "سابقه مستند و زمینه‌های مهندسی",
    work: [
      { title: "پروژه‌های سنجش از دور راداری و اپتیکی", body: "سابقه پروژه‌ای در سال 2019 با داده‌های Landsat-8 و Sentinel-1/2 و کارفرمایی سازمان فضایی ایران؛ مطابق رزومه ارائه‌شده.", kind: "documented", status: "سابقه پروژه مستند؛ داده‌ها و خروجی‌های قابل انتشار باید جداگانه بررسی شوند." },
      { title: "پایش تغییرات زمین و محیط", body: "زمینه مهندسی برای تحلیل سری زمانی تصاویر و شناسایی تغییرات پوشش زمین و منابع طبیعی.", kind: "focus", status: "زمینه تخصصی؛ نه پروژه عملیاتی اعلام‌شده." },
      { title: "کشاورزی دقیق", body: "کاربرد شاخص‌های طیفی و لایه‌های مکانی برای پشتیبانی از پایش مزرعه و تحلیل منطقه‌ای.", kind: "focus", status: "زمینه کاربردی؛ نیازمند داده مرجع و اعتبارسنجی میدانی." }
    ],
    disclosureTitle: "مرز اطلاعات عمومی",
    disclosure: "تصاویر ماهواره‌ای عمومی و نقشه‌های نمایشی با ذکر منبع و تاریخ قابل انتشارند. مختصات حساس، داده مشتری، لایه‌های اختصاصی، اطلاعات زیرساختی و نتایج فاقد مجوز انتشار عمومی نمی‌شوند."
  },
  "artificial-intelligence": {
    kicker: "یادگیری ماشین، مهندسی داده و سامانه‌های هوشمند",
    problemTitle: "هوش مصنوعی به‌عنوان ابزار حل مسئله",
    problem: "مدل هوشمند زمانی ارزش دارد که مسئله، داده، معیار موفقیت و هزینه خطا روشن باشند. انتخاب مدل پیش از شناخت داده می‌تواند به نتیجه‌ای زیبا اما غیرقابل اتکا منجر شود. رویکرد این حوزه بر طراحی زنجیره کامل از تعریف مسئله و آماده‌سازی داده تا ارزیابی، استقرار و پایش تمرکز دارد.",
    scienceTitle: "مبانی علمی و محاسباتی",
    science: [
      { title: "یادگیری آماری", body: "مدل از داده نمونه الگو می‌آموزد؛ تعمیم آن به داده جدید به کیفیت نمونه‌گیری، پیچیدگی مدل و کنترل بیش‌برازش وابسته است." },
      { title: "یادگیری عمیق و بینایی ماشین", body: "شبکه‌های عصبی برای استخراج نمایش از تصویر، ویدئو و داده‌های چندبعدی استفاده می‌شوند؛ ارزیابی باید شرایط واقعی تصویربرداری را پوشش دهد." },
      { title: "پردازش زبان و بازیابی اطلاعات", body: "مدل‌های زبانی، جست‌وجوی معنایی و RAG ابزارهای متفاوتی هستند. اتصال پاسخ به منبع و کنترل خطای بازیابی اهمیت دارد." },
      { title: "سری زمانی و تشخیص ناهنجاری", body: "پیش‌بینی و تشخیص تغییر باید اثر فصل، drift، داده گمشده و هزینه هشدار اشتباه را در نظر بگیرند." }
    ],
    capabilityTitle: "توانمندی‌ها و مسیرهای تخصصی",
    capabilities: [
      { title: "یادگیری ماشین و پیش‌بینی", body: "طبقه‌بندی، رگرسیون، خوشه‌بندی و پیش‌بینی با معیارهای متناسب با مسئله و داده." },
      { title: "بینایی ماشین", body: "تشخیص، بخش‌بندی، ردیابی و بازرسی بصری برای تصاویر علمی و صنعتی." },
      { title: "هوش مصنوعی مولد و RAG", body: "بازیابی دانش از اسناد و داده‌های مجاز، تولید پاسخ مستند و ارزیابی کیفیت بازیابی و پاسخ." },
      { title: "MLOps و پایش مدل", body: "نسخه‌بندی داده و مدل، پایش drift، ثبت آزمایش و مدیریت چرخه انتشار." }
    ],
    workflowTitle: "چرخه عمر سامانه هوشمند",
    workflow: [
      { title: "۱. صورت‌بندی مسئله", body: "هدف، کاربر، معیار موفقیت و هزینه خطا تعریف می‌شوند." },
      { title: "۲. مهندسی داده", body: "کیفیت، مجوز، سوگیری، نمایندگی و جداسازی داده بررسی می‌شوند." },
      { title: "۳. آموزش و ارزیابی", body: "مدل پایه و گزینه‌های پیچیده‌تر با پروتکل ثابت مقایسه می‌شوند." },
      { title: "۴. استقرار و پایش", body: "رفتار مدل، drift، امنیت، هزینه و نیاز به مداخله انسانی پایش می‌شوند." }
    ],
    validationTitle: "اعتبارسنجی و مسئولیت‌پذیری",
    validation: "معیارها باید با کاربرد هماهنگ باشند: precision، recall، F1، calibration، latency و هزینه خطا ممکن است اهمیت متفاوتی داشته باشند. ارزیابی باید روی داده مستقل انجام شود و سوگیری، نشت داده، امنیت ورودی و امکان بازبینی انسانی را پوشش دهد.",
    limitsTitle: "محدودیت‌های تفسیر",
    limits: "مدل هوشمند تضمین‌کننده صحت نیست. داده نامناسب، تغییر محیط، ورودی خصمانه و محدودیت مدل می‌توانند خطا ایجاد کنند. خروجی سامانه‌های حساس باید همراه با سطح اطمینان، منبع و مسیر بازبینی انسانی ارائه شود.",
    linksTitle: "ارتباط میان‌رشته‌ای",
    links: ["نجوم برای تحلیل داده‌های رصدی و کشف نامزدها", "هوافضا برای پایش وضعیت و تحلیل حسگر", "سنجش از دور برای پردازش تصویر ماهواره‌ای", "انرژی برای پیش‌بینی و مدیریت بار", "موتوراسپرت برای تحلیل تله‌متری و عملکرد"],
    workTitle: "زمینه‌های مهندسی و کاربرد",
    work: [
      { title: "تحلیل داده علمی", body: "کاربرد یادگیری ماشین در داده‌های نجومی و تحلیل سری‌های زمانی؛ ZTF Classifier نمونه پروژه مستقل مرتبط است.", kind: "documented", status: "ارتباط مستند از طریق پروژه مستقل ZTF Classifier." },
      { title: "بینایی ماشین و بازرسی", body: "زمینه توسعه برای استخراج اطلاعات از تصویر و ویدئو در کاربردهای علمی و صنعتی.", kind: "focus", status: "زمینه مهندسی؛ محصول عملیاتی اعلام نشده است." },
      { title: "تحلیل پیش‌بینانه و پشتیبانی تصمیم", body: "مدل‌سازی داده‌های عملیاتی و زمانی برای ارائه شواهد بهتر به تصمیم‌گیرنده.", kind: "focus", status: "زمینه مهندسی؛ نتایج باید برای هر کاربرد جداگانه ارزیابی شوند." }
    ],
    disclosureTitle: "مرز اطلاعات عمومی",
    disclosure: "معماری مفهومی، کاربردها و نمونه‌های مصنوعی قابل انتشارند. وزن مدل، داده آموزشی خصوصی، promptهای داخلی، کد اختصاصی، کلیدها و جزئیات امنیتی منتشر نمی‌شوند."
  },
  energy: {
    kicker: "تولید، ذخیره‌سازی و مدیریت سامانه‌های انرژی",
    problemTitle: "هماهنگی تولید و مصرف در یک سامانه واقعی",
    problem: "ارزیابی یک سامانه انرژی فقط با ظرفیت نامی پنل یا توربین کامل نمی‌شود. منبع انرژی متغیر است، بار در زمان تغییر می‌کند و ذخیره‌ساز، مبدل، شبکه و محدودیت‌های اقتصادی و ایمنی بر یکدیگر اثر دارند. تحلیل مهندسی باید رفتار سامانه را در طول زمان بررسی کند و میان عملکرد فنی و توجیه اقتصادی تمایز بگذارد.",
    scienceTitle: "مبانی علمی و مهندسی",
    science: [
      { title: "منابع خورشیدی", body: "تابش، دما، زاویه نصب، سایه، مشخصات ماژول و مبدل بر انرژی تولیدی و عملکرد سامانه اثر دارند." },
      { title: "انرژی بادی", body: "منحنی توان، توزیع سرعت باد، آشفتگی، ارتفاع هاب و شرایط مکان‌یابی در برآورد تولید اهمیت دارند." },
      { title: "ذخیره‌سازی الکتریکی", body: "ظرفیت و توان، بازده رفت‌وبرگشت، عمق دشارژ، عمر چرخه‌ای، دما و سامانه مدیریت باتری باید هم‌زمان بررسی شوند." },
      { title: "ریزشبکه و الکترونیک قدرت", body: "توازن توان، کنترل مبدل، کیفیت توان، حفاظت و گذار میان حالت متصل به شبکه و جزیره‌ای از مسائل اصلی‌اند." }
    ],
    capabilityTitle: "توانمندی‌ها و مسیرهای تخصصی",
    capabilities: [
      { title: "تحلیل سامانه خورشیدی و بادی", body: "برآورد منابع، مدل‌سازی تولید، بررسی سایه و شرایط محیطی و ارزیابی عملکرد." },
      { title: "سامانه‌های هیبریدی", body: "ترکیب تولید خورشیدی و بادی با ذخیره‌ساز و شبکه برای بررسی توازن انرژی." },
      { title: "مدیریت انرژی و ریزشبکه", body: "پیش‌بینی بار و تولید، زمان‌بندی منابع و تحلیل قیود فنی و بهره‌برداری." },
      { title: "ارزیابی اقتصادی و چرخه عمر", body: "مقایسه CAPEX، OPEX، هزینه چرخه عمر، تعویض تجهیزات و حساسیت اقتصادی سناریوها." }
    ],
    workflowTitle: "چرخه تحلیل سامانه انرژی",
    workflow: [
      { title: "۱. برداشت نیاز و بار", body: "پروفایل مصرف، شرایط سایت، محدودیت شبکه و نیاز پایداری مشخص می‌شوند." },
      { title: "۲. ارزیابی منبع", body: "داده تابش، باد و شرایط محیطی از منابع معتبر بررسی می‌شوند." },
      { title: "۳. مدل‌سازی و اندازه‌گذاری", body: "تولید، ذخیره‌سازی، تبدیل و کنترل در سناریوهای مختلف تحلیل می‌شوند." },
      { title: "۴. ارزیابی فنی و اقتصادی", body: "عملکرد، هزینه، ایمنی و حساسیت نتایج گزارش می‌شوند." }
    ],
    validationTitle: "اعتبارسنجی عملکرد",
    validation: "مدل باید با داده تولید واقعی یا داده مرجع معتبر مقایسه شود. خطای پیش‌بینی، بازده مبدل، تلفات، دسترس‌پذیری و فرض‌های اقتصادی باید شفاف باشند. نتایج یک سایت را نمی‌توان بدون بررسی منبع و بار به سایت دیگر تعمیم داد.",
    limitsTitle: "محدودیت‌های تفسیر",
    limits: "ظرفیت نامی معادل انرژی تضمین‌شده نیست. برآورد تولید به اقلیم، سایه، گردوغبار، نگهداری و محدودیت شبکه وابسته است. طراحی اجرایی به بازدید سایت، بررسی سازه و برق، الزامات ایمنی و مجوزهای مربوط نیاز دارد.",
    linksTitle: "ارتباط میان‌رشته‌ای",
    links: ["هوش مصنوعی برای پیش‌بینی بار و تشخیص خطا", "سنجش از دور برای ارزیابی مکانی منابع", "هوافضا برای سامانه توان و مدیریت حرارتی", "موتوراسپرت برای تحلیل مبدل، حرارت و کنترل"],
    workTitle: "زمینه‌های مهندسی",
    work: [
      { title: "سامانه‌های خورشیدی", body: "تحلیل و طراحی مفهومی سامانه‌های خورشیدی خانگی و صنعتی با توجه به منبع، بار و شرایط سایت.", kind: "focus", status: "زمینه فعالیت در پروفایل شرکت؛ پروژه عمومی مشخص معرفی نشده است." },
      { title: "سامانه‌های بادی و هیبریدی", body: "بررسی ترکیب منابع خورشیدی و بادی و ذخیره‌سازی برای سناریوهای تأمین انرژی.", kind: "focus", status: "زمینه توسعه؛ ظرفیت یا نیروگاه عملیاتی ادعا نمی‌شود." },
      { title: "پشتیبانی فنی صنایع انرژی", body: "حوزه مورد اشاره در پروفایل شرکت برای پشتیبانی فنی صنایع نفت، گاز و پتروشیمی؛ دامنه هر همکاری باید جداگانه تعریف شود.", kind: "focus", status: "حوزه فعالیت معرفی‌شده؛ سابقه پروژه عمومی مشخص در این صفحه ادعا نمی‌شود." }
    ],
    disclosureTitle: "مرز اطلاعات عمومی",
    disclosure: "داده اقلیمی عمومی، دیاگرام مفهومی و مدل آموزشی قابل انتشارند. نقشه سایت مشتری، الگوی مصرف اختصاصی، تنظیمات حفاظتی، داده قراردادی و اطلاعات بهره‌برداری بدون مجوز منتشر نمی‌شوند."
  },
  motorsport: {
    kicker: "مهندسی خودرو، قوای محرکه و تحلیل عملکرد",
    problemTitle: "عملکرد بهتر با شواهد مهندسی",
    problem: "افزایش توان به‌تنهایی معیار مهندسی موفق نیست. موتور، توربوشارژر، انتقال قدرت، خنک‌کاری، تایر، تعلیق و کنترل الکترونیکی یک سامانه به‌هم‌پیوسته‌اند. هر تغییر باید از نظر جریان، حرارت، تنش، دوام، ایمنی و رفتار خودرو بررسی شود و نتیجه آن با داده آزمون قابل مقایسه باشد.",
    scienceTitle: "مبانی علمی و مهندسی",
    science: [
      { title: "ترمودینامیک و احتراق", body: "چرخه موتور، بازده حجمی، نسبت هوا به سوخت، احتراق، ناک، تبادل حرارت و محدودیت‌های دمایی بر عملکرد و دوام اثر دارند." },
      { title: "تطبیق توربوشارژر", body: "نقشه کمپرسور و توربین، دبی جرمی، نسبت فشار، بازده، سرعت محور و محدودیت دمایی باید با موتور و محدوده دور هماهنگ شوند." },
      { title: "دینامیک خودرو", body: "انتقال بار، نیروی تایر، ترمز، پایداری، هندسه تعلیق و پاسخ خودرو به ورودی راننده رفتار دینامیکی را تعیین می‌کنند." },
      { title: "اندازه‌گیری و تله‌متری", body: "کالیبراسیون حسگر، نرخ نمونه‌برداری، هم‌زمان‌سازی و ثبت شرایط آزمون برای تحلیل معتبر ضروری‌اند." }
    ],
    capabilityTitle: "توانمندی‌ها و مسیرهای تخصصی",
    capabilities: [
      { title: "تحلیل قوای محرکه", body: "مدل‌سازی موتور، جریان هوا، احتراق، انتقال قدرت و محدودیت‌های مکانیکی و حرارتی." },
      { title: "توربوشارژر و مدیریت حرارتی", body: "تحلیل تطبیق کمپرسور و توربین، مسیر هوای ورودی، خنک‌کاری و محدوده کاری." },
      { title: "دینامیک و آیرودینامیک خودرو", body: "تحلیل تعلیق، انتقال وزن، پایداری، نیروی تایر و اثر اجزای آیرودینامیکی." },
      { title: "داده و ارزیابی عملکرد", body: "پردازش داده ECU و حسگر، مقایسه آزمون‌ها و تحلیل تغییرات عملکرد با کنترل شرایط." }
    ],
    workflowTitle: "چرخه توسعه و آزمون",
    workflow: [
      { title: "۱. تعریف هدف و محدودیت", body: "کاربری، سوخت، شرایط محیطی، دوام و حدود ایمنی مشخص می‌شوند." },
      { title: "۲. مدل‌سازی و بررسی سازگاری", body: "موتور، توربو، انتقال قدرت و سامانه خنک‌کاری به‌صورت یکپارچه بررسی می‌شوند." },
      { title: "۳. اندازه‌گیری و آزمون", body: "حسگرها، داینو یا داده مسیر با روش ثبت و کالیبراسیون مشخص به کار می‌روند." },
      { title: "۴. مقایسه و بازبینی", body: "نتایج با شرایط پایه مقایسه می‌شوند؛ عدم‌قطعیت و محدودیت آزمون گزارش می‌شود." }
    ],
    validationTitle: "اعتبارسنجی عملکرد",
    validation: "مقایسه باید شرایط آزمون، سوخت، دما، فشار محیط، دنده، تایر و روش اندازه‌گیری را ثبت کند. نمودار داینو بدون مشخصات آزمون یا داده تله‌متری بدون کالیبراسیون، شواهد کافی برای ادعای عملکرد نیستند.",
    limitsTitle: "محدودیت‌های تفسیر",
    limits: "نتیجه یک موتور یا خودرو به نمونه دیگر قابل تعمیم مستقیم نیست. تغییرات سخت‌افزاری و کالیبراسیون می‌توانند بر دوام و ایمنی اثر بگذارند. قطعات و تنظیمات اختصاصی، داده مشتری و جزئیات آزمون محرمانه منتشر نمی‌شوند.",
    linksTitle: "ارتباط میان‌رشته‌ای",
    links: ["هوافضا برای CFD، سازه، ارتعاش و کنترل", "هوش مصنوعی برای تحلیل تله‌متری و تشخیص ناهنجاری", "انرژی برای مدیریت حرارتی و سامانه‌های قدرت", "سنجش از دور برای داده مکانی و تحلیل مسیر"],
    workTitle: "زمینه‌های مهندسی و توسعه",
    work: [
      { title: "مهندسی قطعات عملکردی", body: "زمینه توسعه قطعات مکانیکی و آیرودینامیکی با تمرکز بر بارگذاری، مواد، خستگی و کیفیت ساخت.", kind: "focus", status: "حوزه توسعه؛ محصول یا قطعه تجاری تأییدشده معرفی نشده است." },
      { title: "تحلیل موتور و توربوشارژر", body: "تحلیل مفهومی و محاسباتی جریان، فشار، بازده و محدودیت‌های حرارتی و مکانیکی.", kind: "focus", status: "زمینه مهندسی؛ جزئیات پروژه‌های خصوصی منتشر نمی‌شود." },
      { title: "تله‌متری و دینامیک خودرو", body: "پردازش داده‌های خودرو و تحلیل رفتار دینامیکی برای مقایسه آزمون‌ها و تصمیم مهندسی.", kind: "focus", status: "زمینه توسعه؛ سامانه مسابقه‌ای عملیاتی ادعا نمی‌شود." }
    ],
    disclosureTitle: "مرز اطلاعات عمومی",
    disclosure: "اصول فیزیکی، نمودارهای آموزشی و روش‌های عمومی قابل انتشارند. نقشه ساخت، ابعاد قطعات، تنظیمات ECU، داده مشتری، پارامترهای موتور و جزئیات آزمون خصوصی محرمانه می‌مانند."
  }
};

const en: Record<string, DomainDeepContent> = {
  astronomy: {
    kicker: "Observational data, computational analysis and scientific discovery",
    problemTitle: "From sky surveys to inspectable evidence",
    problem: "Modern astronomical surveys produce large volumes of imaging, photometric and time-domain data. The challenge is not only data access. Observation quality must be assessed, intrinsic variability must be separated from measurement error, and scientifically useful candidates must be prioritised. This domain focuses on computational methods that make astronomical analysis more rigorous, scalable and reproducible.",
    scienceTitle: "Scientific foundations",
    science: [
      { title: "Photometry and light curves", body: "Flux or magnitude measurements over time must be read with measurement errors, timestamps, quality flags and sampling patterns. Light curves can reveal stellar variability, transits, flares and transient events." },
      { title: "Irregular time series", body: "Astronomical observations are rarely evenly sampled. Analysis must account for gaps, outliers, detection limits, uncertainty and the effects of the sampling window." },
      { title: "Source populations and classification", body: "Statistical classification depends on reference labels and representative samples. Anomaly detection and discovery of new candidates are not the same task as classification of known classes." },
      { title: "Cross-survey association", body: "Catalogue matching requires care with coordinates, epochs, passbands, angular resolution and differences in instrument sensitivity." }
    ],
    capabilityTitle: "Capabilities and technical tracks",
    capabilities: [
      { title: "Survey-data analysis", body: "Targeted acquisition, quality control, analytical data preparation and provenance tracking for surveys such as ZTF and related public catalogues." },
      { title: "Scientific feature extraction", body: "Statistical, temporal and physical features from light curves and multi-band observations, with attention to units, errors and measurement validity." },
      { title: "Machine learning and anomaly detection", body: "Classification, candidate ranking and out-of-distribution detection, supported by probability calibration and explicit uncertainty." },
      { title: "Follow-up decision support", body: "Turning computational outputs into prioritised candidate lists for researcher review and possible observational follow-up." }
    ],
    workflowTitle: "Analysis and discovery workflow",
    workflow: [
      { title: "1. Define the scientific question", body: "Target classes, time range, survey and success criteria are specified." },
      { title: "2. Acquire and validate data", body: "Provenance, versions, quality flags, units and data limitations are recorded." },
      { title: "3. Analyse and model", body: "Features are generated and models are evaluated with a valid data split." },
      { title: "4. Review and reproduce", body: "Uncertainty and ambiguous cases are reported; results are reproduced from recorded data and methods." }
    ],
    validationTitle: "Scientific validation",
    validation: "Evaluation should cover leakage-safe splits, a clearly defined reference set, metrics suited to class imbalance, probability calibration, error analysis and out-of-distribution tests. Performance on a limited sample does not represent the full sky or an entire survey population.",
    limitsTitle: "Interpretation limits",
    limits: "A model output is a scientific candidate or review priority, not a confirmed discovery or physical verification. Results depend on photometric quality, sample selection, temporal coverage, reference labels and instrument limits. Confirmation may require independent data or follow-up observations.",
    linksTitle: "Interdisciplinary links",
    links: ["Artificial intelligence for classification and time-series analysis", "Aerospace for sensors and space-based observing systems", "Remote sensing for large-scale image and spatial-data processing"],
    workTitle: "Documented work and engineering topics",
    work: [
      { title: "ZTF Classifier", body: "An independent CPU-first platform for ZTF light-curve analysis and transient-source classification. Scientific results must be presented with their limits.", kind: "documented", status: "Independent project under development; software version 1.0.1 has been reported." },
      { title: "Astronomical time-series analysis", body: "An engineering topic covering cleaning, variability analysis, feature extraction and uncertainty assessment in time-domain data.", kind: "focus", status: "Technical focus; not a separately announced product." },
      { title: "Transient-candidate prioritisation", body: "Candidate-ranking methods that support researcher review and follow-up target selection.", kind: "focus", status: "Development topic; outputs do not replace observational confirmation." }
    ],
    disclosureTitle: "Public-disclosure boundary",
    disclosure: "Scientific questions, data types, general methods and educational examples may be public. Internal model settings, restricted data, proprietary pipeline details, source code and unverified results are not disclosed."
  },
  aerospace: {
    kicker: "Flight and space systems — from analysis to integration",
    problemTitle: "System design under real constraints",
    problem: "Aerospace systems contain interdependent subsystems. Mass, power, volume, environment, safety, reliability and mission constraints affect one another. Successful design is more than selecting a component or running a simulation. Requirements, models, interfaces, tests and performance evidence must be managed as one engineering process.",
    scienceTitle: "Scientific and engineering foundations",
    science: [
      { title: "Aerodynamics and flight mechanics", body: "Aerodynamic forces and moments, compressible and incompressible flow, stability, controllability and response to disturbances." },
      { title: "Structures and materials", body: "Loads, stress and strain, fatigue, vibration, buckling and environmental effects on materials and joints." },
      { title: "Orbital dynamics and mission design", body: "Orbit geometry, timing windows, coverage, launch constraints and the link between mission objectives and system resources." },
      { title: "Spacecraft subsystems", body: "Power, computing, communications, sensors, attitude control, thermal management and electromagnetic compatibility." }
    ],
    capabilityTitle: "Capabilities and technical tracks",
    capabilities: [
      { title: "Concept design and mission architecture", body: "Translate mission needs into system requirements, performance allocation and subsystem interfaces." },
      { title: "Numerical analysis and simulation", body: "Model aerodynamics, structures, thermal behaviour and dynamics to compare options and identify design risks." },
      { title: "Small-spacecraft systems", body: "Study CanSat and CubeSat architectures, mass and power budgets, sensors, communications, integration and test planning." },
      { title: "Health monitoring and reliability", body: "Analyse sensor and telemetry data for anomaly detection and maintenance support, subject to data quality and operational testing." }
    ],
    workflowTitle: "Systems-engineering workflow",
    workflow: [
      { title: "1. Mission and requirements", body: "Objectives, environment, constraints, acceptance criteria and risk are defined." },
      { title: "2. Architecture and modelling", body: "Subsystems, interfaces and analytical models are identified." },
      { title: "3. Analysis and detailed design", body: "Options are compared through calculations and simulation; assumptions are recorded." },
      { title: "4. Integration and testing", body: "Verification plans, acceptance criteria and evidence are defined." }
    ],
    validationTitle: "Engineering validation",
    validation: "Simulation results require mesh, boundary-condition and model-sensitivity checks, plus independent analytical or test data where available. At system level, interface, environmental and performance tests must trace back to requirements. Agreement with one output does not validate an entire design.",
    limitsTitle: "Interpretation limits",
    limits: "A CFD or FEA image is a model result under stated assumptions. It is not proof of flight performance or launch qualification. Operational design requires valid inputs, safety analysis, hardware testing and applicable authority requirements.",
    linksTitle: "Interdisciplinary links",
    links: ["Artificial intelligence for health monitoring and sensor analysis", "Astronomy for observing instruments and scientific missions", "Energy for power systems and energy management", "Motorsport for structures, vibration and flow analysis"],
    workTitle: "Documented experience and engineering topics",
    work: [
      { title: "CanSat — 2024", body: "The supplied CV records Alpha Team participation in a sensing and communications mission commissioned by the Aerospace Research Institute.", kind: "documented", status: "Documented project experience; mission and design details are not disclosed." },
      { title: "CubeSat 1U — 2023", body: "The supplied CV records Alpha Team participation in a 1U CubeSat project commissioned by the Aerospace Research Institute.", kind: "documented", status: "Documented project experience; mission and design details are not disclosed." },
      { title: "Space-radiation and shielding study", body: "A 2020–2021 study of the radiation environment and spacecraft protection, recorded with the Nuclear Science and Technology Research Institute and the Iranian Space Research Center.", kind: "documented", status: "Research experience; proprietary details are not disclosed." }
    ],
    disclosureTitle: "Public-disclosure boundary",
    disclosure: "High-level architecture, design principles and educational diagrams may be public. Manufacturing drawings, component specifications, CAD files, mission parameters, detailed budgets and contractual information require explicit release approval."
  },
  "remote-sensing": {
    kicker: "Earth observation, image processing and geospatial analysis",
    problemTitle: "Turning pixels into reliable geospatial information",
    problem: "A satellite image is not, by itself, an answer to an environmental or engineering question. Sensor type, acquisition time, atmosphere, viewing geometry, clouds, spatial resolution and processing methods all affect the result. Remote sensing supports decisions only when raw observations are converted into geospatial information with traceable sources, limitations and accuracy assessment.",
    scienceTitle: "Scientific foundations",
    science: [
      { title: "Radiation and surface interaction", body: "Reflection, absorption and emission across wavelengths form the basis for interpreting optical and thermal observations." },
      { title: "Resolution and sensor response", body: "Spatial, spectral, temporal and radiometric resolution determine which features can be observed and at what level of detail." },
      { title: "Synthetic-aperture radar", body: "SAR responds to structure, roughness, moisture and imaging geometry. Its interpretation differs from optical imagery." },
      { title: "Spatial and temporal analysis", body: "Co-registration, coordinate systems, time series, seasonal variation and sensor differences must be controlled before comparison." }
    ],
    capabilityTitle: "Capabilities and technical tracks",
    capabilities: [
      { title: "Optical-data processing", body: "Quality control, cloud masking, required corrections and spectral-information extraction from public data such as Landsat and Sentinel." },
      { title: "Radar-data analysis", body: "SAR preparation, backscatter analysis and spatial-pattern interpretation with attention to acquisition geometry." },
      { title: "Classification and change detection", body: "Land-cover mapping and multi-temporal comparison for environmental and land-use monitoring." },
      { title: "Environmental and agricultural applications", body: "Vegetation-index analysis, regional monitoring and geospatial data integration for field decisions." }
    ],
    workflowTitle: "Geospatial processing chain",
    workflow: [
      { title: "1. Select observations", body: "Sensor, bands, acquisition date, region and processing level are matched to the question." },
      { title: "2. Pre-process", body: "Quality, geometry, clouds, co-registration and data consistency are checked." },
      { title: "3. Extract information", body: "Features, indices, classifications or changes are calculated using a stated method." },
      { title: "4. Assess spatial accuracy", body: "Maps are compared with independent reference data and suitable accuracy measures." }
    ],
    validationTitle: "Geospatial validation",
    validation: "Classification maps should be assessed against independent reference samples. Confusion matrices, producer's and user's accuracy, overall accuracy and, where needed, spatial metrics should be reported. Co-registration and time-window selection are especially important for change detection.",
    limitsTitle: "Interpretation limits",
    limits: "A spectral index alone does not prove the cause of change or confirm vegetation health. Clouds, shadows, season, moisture, viewing angle, sensor type and data quality can change the result. Every map should identify its region, date, source and confidence.",
    linksTitle: "Interdisciplinary links",
    links: ["Artificial intelligence for classification and pattern extraction", "Energy for solar and wind resource assessment", "Astronomy and aerospace for understanding sensors and observation data"],
    workTitle: "Documented experience and engineering topics",
    work: [
      { title: "Radar and optical remote-sensing projects", body: "The supplied CV records a 2019 project series using Landsat-8 and Sentinel-1/2 data for the Iranian Space Agency.", kind: "documented", status: "Documented project experience; release of specific data and outputs requires review." },
      { title: "Land and environmental change monitoring", body: "An engineering topic covering multi-temporal image analysis and detection of land-cover and natural-resource change.", kind: "focus", status: "Technical focus; not an announced operational project." },
      { title: "Precision agriculture", body: "Use of spectral indices and geospatial layers to support field monitoring and regional analysis.", kind: "focus", status: "Application area; requires reference data and field validation." }
    ],
    disclosureTitle: "Public-disclosure boundary",
    disclosure: "Public satellite imagery and illustrative maps may be released with source and acquisition date. Sensitive coordinates, client data, proprietary layers, infrastructure information and unapproved results remain private."
  },
  "artificial-intelligence": {
    kicker: "Machine learning, data engineering and intelligent systems",
    problemTitle: "Artificial intelligence as an engineering tool",
    problem: "An intelligent model is useful only when the problem, data, success criteria and cost of error are clear. Choosing a model before understanding the data can produce attractive but unreliable results. This domain focuses on the full workflow: problem definition, data preparation, evaluation, deployment and monitoring.",
    scienceTitle: "Scientific and computational foundations",
    science: [
      { title: "Statistical learning", body: "A model learns patterns from samples. Generalisation depends on sampling quality, model complexity and control of overfitting." },
      { title: "Deep learning and computer vision", body: "Neural networks learn representations from images, video and multidimensional data. Evaluation must reflect real imaging conditions." },
      { title: "Language processing and retrieval", body: "Language models, semantic search and retrieval-augmented generation are distinct components. Source grounding and retrieval quality matter." },
      { title: "Time series and anomaly detection", body: "Forecasting and change detection must account for seasonality, drift, missing data and the cost of false alarms." }
    ],
    capabilityTitle: "Capabilities and technical tracks",
    capabilities: [
      { title: "Machine learning and forecasting", body: "Classification, regression, clustering and forecasting with metrics suited to the task and data." },
      { title: "Computer vision", body: "Detection, segmentation, tracking and visual inspection for scientific and industrial imagery." },
      { title: "Generative AI and RAG", body: "Retrieval from authorised documents and data, source-grounded answers and evaluation of retrieval and response quality." },
      { title: "MLOps and model monitoring", body: "Data and model versioning, drift monitoring, experiment records and controlled release workflows." }
    ],
    workflowTitle: "Intelligent-system lifecycle",
    workflow: [
      { title: "1. Frame the problem", body: "The objective, user, success measure and cost of error are defined." },
      { title: "2. Engineer the data", body: "Quality, rights, bias, representativeness and data splits are reviewed." },
      { title: "3. Train and evaluate", body: "Baseline and more complex models are compared under a fixed protocol." },
      { title: "4. Deploy and monitor", body: "Model behaviour, drift, security, cost and human intervention are monitored." }
    ],
    validationTitle: "Validation and responsible use",
    validation: "Metrics must match the application. Precision, recall, F1, calibration, latency and error cost may have different priorities. Evaluation should use independent data and examine bias, leakage, input security and human review.",
    limitsTitle: "Interpretation limits",
    limits: "An AI model does not guarantee correctness. Poor data, changing environments, adversarial inputs and model limitations can cause errors. Outputs in sensitive applications should include confidence, sources and a human-review path.",
    linksTitle: "Interdisciplinary links",
    links: ["Astronomy for survey-data analysis and candidate discovery", "Aerospace for health monitoring and sensor analytics", "Remote sensing for satellite-image processing", "Energy for load forecasting and energy management", "Motorsport for telemetry and performance analysis"],
    workTitle: "Engineering topics and applications",
    work: [
      { title: "Scientific-data analysis", body: "Machine learning for astronomical data and time-series analysis; ZTF Classifier is a related independent project.", kind: "documented", status: "Documented relationship through the independent ZTF Classifier project." },
      { title: "Computer vision and inspection", body: "A development area for extracting information from images and video in scientific and industrial settings.", kind: "focus", status: "Engineering topic; no operational product is announced." },
      { title: "Predictive analytics and decision support", body: "Modelling operational and time-series data to provide stronger evidence for decisions.", kind: "focus", status: "Engineering topic; each application requires its own evaluation." }
    ],
    disclosureTitle: "Public-disclosure boundary",
    disclosure: "Conceptual architectures, applications and synthetic examples may be public. Model weights, private training data, internal prompts, proprietary code, credentials and security details are not disclosed."
  },
  energy: {
    kicker: "Generation, storage and energy-system management",
    problemTitle: "Coordinating supply and demand in real systems",
    problem: "A proper energy assessment requires more than a panel or turbine nameplate rating. Resources vary, demand changes over time, and storage, converters, the grid and economic and safety limits interact. Engineering analysis must study system behaviour over time and distinguish technical performance from economic feasibility.",
    scienceTitle: "Scientific and engineering foundations",
    science: [
      { title: "Solar resources", body: "Irradiance, temperature, installation angle, shading, module characteristics and converters affect energy yield and system performance." },
      { title: "Wind energy", body: "Power curves, wind-speed distributions, turbulence, hub height and site conditions are important for yield estimates." },
      { title: "Electrical storage", body: "Capacity and power, round-trip efficiency, depth of discharge, cycle life, temperature and battery management must be considered together." },
      { title: "Microgrids and power electronics", body: "Power balance, converter control, power quality, protection and transitions between grid-connected and islanded modes are core topics." }
    ],
    capabilityTitle: "Capabilities and technical tracks",
    capabilities: [
      { title: "Solar and wind system analysis", body: "Resource assessment, generation modelling, shading and environmental analysis, and performance assessment." },
      { title: "Hybrid systems", body: "Combining solar and wind generation with storage and the grid to examine energy balance." },
      { title: "Energy management and microgrids", body: "Load and generation forecasting, resource scheduling and analysis of technical and operational constraints." },
      { title: "Economic and lifecycle assessment", body: "Comparison of CAPEX, OPEX, lifecycle cost, replacement needs and scenario sensitivity." }
    ],
    workflowTitle: "Energy-system analysis workflow",
    workflow: [
      { title: "1. Define demand and requirements", body: "Load profile, site conditions, grid limits and reliability needs are identified." },
      { title: "2. Assess the resource", body: "Irradiance, wind and environmental data are reviewed from reliable sources." },
      { title: "3. Model and size the system", body: "Generation, storage, conversion and control are analysed across scenarios." },
      { title: "4. Evaluate technical and economic performance", body: "Performance, cost, safety and sensitivity are reported." }
    ],
    validationTitle: "Performance validation",
    validation: "Models should be compared with measured generation or reliable reference data. Forecast error, converter efficiency, losses, availability and economic assumptions must be clear. Results from one site cannot be transferred to another without reviewing resource and demand conditions.",
    limitsTitle: "Interpretation limits",
    limits: "Nameplate capacity is not guaranteed energy yield. Output depends on climate, shading, dust, maintenance and grid constraints. Detailed design requires site inspection, structural and electrical review, safety requirements and applicable permits.",
    linksTitle: "Interdisciplinary links",
    links: ["Artificial intelligence for load forecasting and fault detection", "Remote sensing for spatial resource assessment", "Aerospace for power systems and thermal management", "Motorsport for converter, thermal and control analysis"],
    workTitle: "Engineering topics",
    work: [
      { title: "Solar energy systems", body: "Conceptual analysis and design of residential and industrial solar systems, subject to resource, load and site conditions.", kind: "focus", status: "Listed in the company profile; no specific public project is claimed here." },
      { title: "Wind and hybrid systems", body: "Assessment of solar and wind combinations with storage for energy-supply scenarios.", kind: "focus", status: "Development area; no operating plant or capacity is claimed." },
      { title: "Technical support for energy industries", body: "The company profile lists technical support for oil, gas and petrochemical sectors; each engagement requires a defined scope.", kind: "focus", status: "Listed activity area; no specific public project is claimed here." }
    ],
    disclosureTitle: "Public-disclosure boundary",
    disclosure: "Public climate data, conceptual diagrams and educational models may be released. Client site plans, private load profiles, protection settings, contractual data and operational information are not disclosed without approval."
  },
  motorsport: {
    kicker: "Vehicle engineering, powertrains and performance analysis",
    problemTitle: "Better performance through engineering evidence",
    problem: "Peak power alone is not a sufficient measure of engineering success. The engine, turbocharger, drivetrain, cooling, tyres, suspension and electronic controls form an interdependent system. Every change should be assessed for flow, heat, stress, durability, safety and vehicle behaviour, then compared with controlled test data.",
    scienceTitle: "Scientific and engineering foundations",
    science: [
      { title: "Thermodynamics and combustion", body: "Engine cycles, volumetric efficiency, air-fuel ratio, combustion, knock, heat transfer and temperature limits affect performance and durability." },
      { title: "Turbocharger matching", body: "Compressor and turbine maps, mass flow, pressure ratio, efficiency, shaft speed and thermal limits must match the engine and operating range." },
      { title: "Vehicle dynamics", body: "Load transfer, tyre forces, braking, stability, suspension geometry and driver inputs determine vehicle behaviour." },
      { title: "Measurement and telemetry", body: "Sensor calibration, sample rate, synchronisation and test-condition records are essential for valid analysis." }
    ],
    capabilityTitle: "Capabilities and technical tracks",
    capabilities: [
      { title: "Powertrain analysis", body: "Engine, airflow, combustion, drivetrain and mechanical and thermal-limit modelling." },
      { title: "Turbocharging and thermal management", body: "Compressor and turbine matching, intake flow, cooling and operating-range analysis." },
      { title: "Vehicle dynamics and aerodynamics", body: "Suspension, load transfer, stability, tyre forces and aerodynamic-component analysis." },
      { title: "Data and performance assessment", body: "ECU and sensor-data processing, test comparison and analysis of performance changes under controlled conditions." }
    ],
    workflowTitle: "Development and test workflow",
    workflow: [
      { title: "1. Define goals and constraints", body: "Use case, fuel, environment, durability and safety limits are specified." },
      { title: "2. Model and check compatibility", body: "Engine, turbocharger, drivetrain and cooling are assessed as an integrated system." },
      { title: "3. Measure and test", body: "Sensors, dynamometer or track data are used with a stated recording and calibration method." },
      { title: "4. Compare and review", body: "Results are compared with a baseline; uncertainty and test limitations are reported." }
    ],
    validationTitle: "Performance validation",
    validation: "Comparisons should record test conditions, fuel, ambient temperature and pressure, gear, tyres and measurement method. A dynamometer plot without test metadata or telemetry without sensor calibration is not sufficient evidence for a performance claim.",
    limitsTitle: "Interpretation limits",
    limits: "Results from one engine or vehicle cannot be transferred directly to another. Hardware and calibration changes can affect durability and safety. Proprietary component designs, customer data and private test details are not disclosed.",
    linksTitle: "Interdisciplinary links",
    links: ["Aerospace for CFD, structures, vibration and control", "Artificial intelligence for telemetry analysis and anomaly detection", "Energy for thermal management and power systems", "Remote sensing for spatial data and route analysis"],
    workTitle: "Engineering and development topics",
    work: [
      { title: "Performance-component engineering", body: "A development area for mechanical and aerodynamic components, with attention to loads, materials, fatigue and manufacturing quality.", kind: "focus", status: "Development area; no approved commercial product is announced." },
      { title: "Engine and turbocharger analysis", body: "Conceptual and computational analysis of flow, pressure, efficiency and thermal and mechanical limits.", kind: "focus", status: "Engineering topic; private project details are not disclosed." },
      { title: "Vehicle telemetry and dynamics", body: "Processing vehicle data and analysing dynamic behaviour to compare tests and support engineering decisions.", kind: "focus", status: "Development topic; no operational race telemetry product is claimed." }
    ],
    disclosureTitle: "Public-disclosure boundary",
    disclosure: "Physical principles, educational plots and general methods may be public. Manufacturing drawings, component dimensions, ECU calibrations, customer data, engine parameters and private test details remain confidential."
  }
};

export const domainDeepContent: Record<Locale, Record<string, DomainDeepContent>> = {
  fa,
  en,
  ar: en,
  ru: en,
  de: en,
  zh: en,
  fr: en,
  es: en
};

export const domainDeepLabels: Record<Locale, {
  overview: string; science: string; capabilities: string; workflow: string;
  validation: string; limits: string; links: string; work: string;
  documented: string; focus: string; disclosure: string; note: string;
}> = {
  fa: {
    overview: "مسئله و مأموریت حوزه", science: "مبانی علمی و مهندسی",
    capabilities: "توانمندی‌ها و مسیرهای تخصصی", workflow: "چرخه کار مهندسی",
    validation: "اعتبارسنجی و کنترل کیفیت", limits: "محدودیت‌ها و ملاحظات فنی",
    links: "ارتباط با سایر حوزه‌ها", work: "سوابق مستند و زمینه‌های مهندسی",
    documented: "سابقه مستند", focus: "زمینه تخصصی", disclosure: "شفافیت و حفاظت از دانش فنی",
    note: "این صفحه توانمندی‌ها و زمینه‌های توسعه را معرفی می‌کند. درج یک موضوع به معنی ارائه مستمر خدمت تجاری یا تکمیل محصول نیست. وضعیت هر مورد در متن مشخص شده است."
  },
  en: {
    overview: "Domain problem and mission", science: "Scientific and engineering foundations",
    capabilities: "Capabilities and technical tracks", workflow: "Engineering workflow",
    validation: "Validation and quality control", limits: "Limitations and technical considerations",
    links: "Interdisciplinary links", work: "Documented work and engineering topics",
    documented: "Documented experience", focus: "Technical focus", disclosure: "Transparency and IP protection",
    note: "This page describes areas of focus and development. A listed topic does not mean that a commercial service is continuously offered or that a product is complete. The status of each item is stated."
  },
  ar: {
    overview: "مشكلة المجال ومهمته", science: "الأسس العلمية والهندسية", capabilities: "القدرات والمسارات التقنية",
    workflow: "سير العمل الهندسي", validation: "التحقق وضبط الجودة", limits: "القيود والاعتبارات التقنية",
    links: "الروابط متعددة التخصصات", work: "الأعمال الموثقة والموضوعات الهندسية",
    documented: "خبرة موثقة", focus: "مجال تخصصي", disclosure: "الشفافية وحماية الملكية الفكرية",
    note: "تعرض هذه الصفحة مجالات الاهتمام والتطوير. ولا يعني إدراج موضوع تقديم خدمة تجارية مستمرة أو اكتمال منتج. وتُذكر حالة كل عنصر بوضوح."
  },
  ru: {
    overview: "Задача и назначение направления", science: "Научные и инженерные основы", capabilities: "Компетенции и технические направления",
    workflow: "Инженерный процесс", validation: "Проверка и контроль качества", limits: "Ограничения и технические условия",
    links: "Междисциплинарные связи", work: "Подтверждённый опыт и инженерные темы",
    documented: "Подтверждённый опыт", focus: "Техническое направление", disclosure: "Прозрачность и защита интеллектуальной собственности",
    note: "Страница описывает области интереса и развития. Указанная тема не означает постоянное оказание коммерческой услуги или завершение продукта. Статус каждого пункта указан отдельно."
  },
  de: {
    overview: "Aufgabe und Ziel des Fachgebiets", science: "Wissenschaftliche und technische Grundlagen", capabilities: "Kompetenzen und technische Schwerpunkte",
    workflow: "Technischer Arbeitsablauf", validation: "Validierung und Qualitätskontrolle", limits: "Grenzen und technische Hinweise",
    links: "Interdisziplinäre Verbindungen", work: "Nachgewiesene Arbeit und technische Themen",
    documented: "Dokumentierte Erfahrung", focus: "Technischer Schwerpunkt", disclosure: "Transparenz und Schutz geistigen Eigentums",
    note: "Diese Seite beschreibt Schwerpunkte und Entwicklungsbereiche. Ein aufgeführtes Thema bedeutet weder ein dauerhaftes kommerzielles Angebot noch ein abgeschlossenes Produkt. Der Status ist jeweils angegeben."
  },
  zh: {
    overview: "领域问题与使命", science: "科学与工程基础", capabilities: "能力与技术方向",
    workflow: "工程工作流程", validation: "验证与质量控制", limits: "限制与技术注意事项",
    links: "跨学科联系", work: "已记录工作与工程主题",
    documented: "已记录经验", focus: "技术方向", disclosure: "透明度与知识产权保护",
    note: "本页面介绍关注领域与开发方向。列出某项主题并不代表持续提供商业服务或产品已经完成。每项内容的状态均有说明。"
  },
  fr: {
    overview: "Problématique et mission du domaine", science: "Fondements scientifiques et techniques", capabilities: "Compétences et axes techniques",
    workflow: "Processus d’ingénierie", validation: "Validation et contrôle qualité", limits: "Limites et considérations techniques",
    links: "Liens interdisciplinaires", work: "Travaux documentés et sujets d’ingénierie",
    documented: "Expérience documentée", focus: "Axe technique", disclosure: "Transparence et protection de la propriété intellectuelle",
    note: "Cette page présente les domaines d’intérêt et de développement. Un sujet mentionné ne signifie pas qu’un service commercial est fourni en continu ni qu’un produit est achevé. Le statut de chaque élément est indiqué."
  },
  es: {
    overview: "Problema y misión del área", science: "Fundamentos científicos y de ingeniería", capabilities: "Capacidades y líneas técnicas",
    workflow: "Proceso de ingeniería", validation: "Validación y control de calidad", limits: "Limitaciones y consideraciones técnicas",
    links: "Conexiones interdisciplinarias", work: "Trabajo documentado y temas de ingeniería",
    documented: "Experiencia documentada", focus: "Área técnica", disclosure: "Transparencia y protección de la propiedad intelectual",
    note: "Esta página describe áreas de interés y desarrollo. La inclusión de un tema no significa que se ofrezca un servicio comercial de forma continua ni que exista un producto terminado. Se indica el estado de cada elemento."
  }
};
