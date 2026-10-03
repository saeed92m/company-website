import type { Locale } from "../data/locales";

type UiLabels = {
  skipToContent:string;
  language:string;
  education:string;
  expertise:string;
  experience:string;
  selectedProjects:string;
  publications:string;
  contactPending:string;
  ceo:string;
  projectsNote:string;
  theme:string;
  night:string;
  day:string;
};

export const ui: Record<Locale, UiLabels> = {
  fa:{theme:"پوسته",night:"شب",day:"روز",skipToContent:"پرش به محتوای اصلی",language:"زبان",education:"تحصیلات",expertise:"حوزه‌های تخصصی",experience:"سوابق حرفه‌ای",selectedProjects:"پروژه‌های منتخب",publications:"انتشارات علمی",contactPending:"اطلاعات تماس عمومی و فرایندهای همکاری پس از بررسی نهایی حریم خصوصی و راه‌اندازی ایمیل شرکتی منتشر خواهد شد.",ceo:"مدیرعامل",projectsNote:"لینک‌های خارجی و مخزن این پروژه‌ها تا زمان آماده‌شدن نهایی منتشر نمی‌شوند."},
  en:{theme:"Theme",night:"Night",day:"Day",skipToContent:"Skip to content",language:"Language",education:"Education",expertise:"Expertise",experience:"Professional experience",selectedProjects:"Selected project experience",publications:"Scientific publications",contactPending:"Public contact details and collaboration workflows will be published after final privacy review and corporate email setup.",ceo:"CEO",projectsNote:"External and repository links remain unpublished until these projects are ready for release."},
  ar:{theme:"المظهر",night:"ليل",day:"نهار",skipToContent:"الانتقال إلى المحتوى الرئيسي",language:"اللغة",education:"التعليم",expertise:"مجالات الخبرة",experience:"الخبرة المهنية",selectedProjects:"مشاريع مختارة",publications:"المنشورات العلمية",contactPending:"سيتم نشر بيانات الاتصال العامة وآليات التعاون بعد المراجعة النهائية للخصوصية وإعداد البريد الإلكتروني للشركة.",ceo:"الرئيس التنفيذي",projectsNote:"لن يتم نشر الروابط الخارجية وروابط المستودعات حتى تصبح هذه المشاريع جاهزة للإصدار."},
  ru:{theme:"Тема",night:"Ночь",day:"День",skipToContent:"Перейти к содержимому",language:"Язык",education:"Образование",expertise:"Экспертиза",experience:"Профессиональный опыт",selectedProjects:"Избранный проектный опыт",publications:"Научные публикации",contactPending:"Публичные контактные данные и процессы сотрудничества будут опубликованы после финальной проверки конфиденциальности и настройки корпоративной почты.",ceo:"Генеральный директор",projectsNote:"Внешние ссылки и ссылки на репозитории не публикуются до готовности проектов к выпуску."},
  de:{theme:"Design",night:"Nacht",day:"Tag",skipToContent:"Zum Inhalt springen",language:"Sprache",education:"Ausbildung",expertise:"Fachgebiete",experience:"Berufserfahrung",selectedProjects:"Ausgewählte Projekterfahrung",publications:"Wissenschaftliche Publikationen",contactPending:"Öffentliche Kontaktdaten und Kooperationsprozesse werden nach der abschließenden Datenschutzprüfung und Einrichtung der Unternehmens-E-Mail veröffentlicht.",ceo:"CEO",projectsNote:"Externe und Repository-Links werden bis zur Release-Reife der Projekte nicht veröffentlicht."},
  zh:{theme:"主题",night:"夜间",day:"日间",skipToContent:"跳转到主要内容",language:"语言",education:"教育经历",expertise:"专业领域",experience:"职业经历",selectedProjects:"代表性项目经历",publications:"学术出版物",contactPending:"公共联系方式和合作流程将在完成隐私审查及企业邮箱设置后发布。",ceo:"首席执行官",projectsNote:"在项目达到发布条件之前，不公开外部链接和代码仓库链接。"},
  fr:{theme:"Thème",night:"Nuit",day:"Jour",skipToContent:"Aller au contenu",language:"Langue",education:"Formation",expertise:"Expertise",experience:"Expérience professionnelle",selectedProjects:"Projets sélectionnés",publications:"Publications scientifiques",contactPending:"Les coordonnées publiques et les modalités de collaboration seront publiées après la vérification finale de la confidentialité et la mise en place de l’e-mail professionnel.",ceo:"PDG",projectsNote:"Les liens externes et vers les dépôts restent non publiés jusqu’à ce que les projets soient prêts à être publiés."},
  es:{theme:"Tema",night:"Noche",day:"Día",skipToContent:"Ir al contenido",language:"Idioma",education:"Formación",expertise:"Especialidades",experience:"Experiencia profesional",selectedProjects:"Experiencia en proyectos seleccionados",publications:"Publicaciones científicas",contactPending:"Los datos de contacto públicos y los procesos de colaboración se publicarán después de la revisión final de privacidad y la configuración del correo corporativo.",ceo:"CEO",projectsNote:"Los enlaces externos y de los repositorios no se publicarán hasta que los proyectos estén listos para su lanzamiento."}
};
