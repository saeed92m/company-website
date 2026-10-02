import type { Locale } from "../data/locales";

type UiLabels = {
  skipToContent:string;
  language:string;
  education:string;
  expertise:string;
  experience:string;
  selectedProjects:string;
  contactPending:string;
  ceo:string;
};

export const ui: Record<Locale, UiLabels> = {
  fa:{skipToContent:"پرش به محتوای اصلی",language:"زبان",education:"تحصیلات",expertise:"حوزه‌های تخصصی",experience:"سوابق حرفه‌ای",selectedProjects:"پروژه‌های منتخب",contactPending:"اطلاعات تماس عمومی و فرایندهای همکاری پس از بررسی نهایی حریم خصوصی و راه‌اندازی ایمیل شرکتی منتشر خواهد شد.",ceo:"مدیرعامل"},
  en:{skipToContent:"Skip to content",language:"Language",education:"Education",expertise:"Expertise",experience:"Professional experience",selectedProjects:"Selected project experience",contactPending:"Public contact details and collaboration workflows will be published after final privacy review and corporate email setup.",ceo:"CEO"},
  ar:{skipToContent:"الانتقال إلى المحتوى الرئيسي",language:"اللغة",education:"التعليم",expertise:"مجالات الخبرة",experience:"الخبرة المهنية",selectedProjects:"مشاريع مختارة",contactPending:"سيتم نشر بيانات الاتصال العامة وآليات التعاون بعد المراجعة النهائية للخصوصية وإعداد البريد الإلكتروني للشركة.",ceo:"الرئيس التنفيذي"},
  ru:{skipToContent:"Перейти к содержимому",language:"Язык",education:"Образование",expertise:"Экспертиза",experience:"Профессиональный опыт",selectedProjects:"Избранный проектный опыт",contactPending:"Публичные контактные данные и процессы сотрудничества будут опубликованы после финальной проверки конфиденциальности и настройки корпоративной почты.",ceo:"Генеральный директор"},
  de:{skipToContent:"Zum Inhalt springen",language:"Sprache",education:"Ausbildung",expertise:"Fachgebiete",experience:"Berufserfahrung",selectedProjects:"Ausgewählte Projekterfahrung",contactPending:"Öffentliche Kontaktdaten und Kooperationsprozesse werden nach der abschließenden Datenschutzprüfung und Einrichtung der Unternehmens-E-Mail veröffentlicht.",ceo:"CEO"},
  zh:{skipToContent:"跳转到主要内容",language:"语言",education:"教育经历",expertise:"专业领域",experience:"职业经历",selectedProjects:"代表性项目经历",contactPending:"公共联系方式和合作流程将在完成隐私审查及企业邮箱设置后发布。",ceo:"首席执行官"},
  fr:{skipToContent:"Aller au contenu",language:"Langue",education:"Formation",expertise:"Expertise",experience:"Expérience professionnelle",selectedProjects:"Projets sélectionnés",contactPending:"Les coordonnées publiques et les modalités de collaboration seront publiées après la vérification finale de la confidentialité et la mise en place de l’e-mail professionnel.",ceo:"PDG"},
  es:{skipToContent:"Ir al contenido",language:"Idioma",education:"Formación",expertise:"Especialidades",experience:"Experiencia profesional",selectedProjects:"Experiencia en proyectos seleccionados",contactPending:"Los datos de contacto públicos y los procesos de colaboración se publicarán después de la revisión final de privacidad y la configuración del correo corporativo.",ceo:"CEO"}
};
