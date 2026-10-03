import type { Locale } from "../data/locales";

type UiLabels = {
  skipToContent:string;
  language:string;
  education:string;
  expertise:string;
  experience:string;
  selectedProjects:string;
  skills:string;
  languages:string;
  memberships:string;
  courses:string;
  publications:string;
  viewPublication:string;
  summaryPublication:string;
  downloadPublication:string;
  close:string;
  contactPending:string;
  contactLocationNote:string;
  ceo:string;
view:string;
    projectsNote:string;
  theme:string;
  night:string;
  day:string;
};

export const ui: Record<Locale, UiLabels> = {
  fa:{theme:"پوسته",night:"شب",day:"روز",skipToContent:"پرش به محتوای اصلی",language:"زبان",education:"تحصیلات",expertise:"حوزه‌های تخصصی",experience:"سوابق حرفه‌ای",selectedProjects:"پروژه‌های منتخب",skills:"مهارت‌ها",languages:"زبان‌ها",memberships:"عضویت‌های حرفه‌ای",courses:"دوره‌ها و گواهی‌ها",publications:"انتشارات علمی",viewPublication:"مشاهده مقاله",summaryPublication:"خلاصه مقاله",downloadPublication:"دانلود PDF",close:"بستن",contactPending:"اطلاعات تماس عمومی و فرایندهای همکاری پس از بررسی نهایی حریم خصوصی و راه‌اندازی ایمیل شرکتی",contactLocationNote:"مستقر در پارک علم و فناوری استان آذربایجان شرقی",ceo:"مدیریت",view:"مشاهده",projectsNote:"لینک‌های خارجی و مخزن این پروژه‌ها تا زمان آماده‌شدن نهایی منتشر نمی‌شوند."},
  en:{theme:"Theme",night:"Night",day:"Day",skipToContent:"Skip to content",language:"Language",education:"Education",expertise:"Expertise",experience:"Professional experience",selectedProjects:"Selected project experience",skills:"Skills",languages:"Languages",memberships:"Professional memberships",courses:"Courses & certificates",publications:"Scientific publications",viewPublication:"View article",summaryPublication:"Article abstract",downloadPublication:"Download PDF",close:"Close",contactPending:"Public contact details and collaboration workflows will be published after final privacy review and corporate email setup.",contactLocationNote:"Based at the East Azerbaijan Science & Technology Park",ceo:"Management",view:"View",projectsNote:"External and repository links remain unpublished until these projects are ready for release."},
  ar:{theme:"المظهر",night:"ليل",day:"نهار",skipToContent:"الانتقال إلى المحتوى الرئيسي",language:"اللغة",education:"التعليم",expertise:"مجالات الخبرة",experience:"الخبرة المهنية",selectedProjects:"مشاريع مختارة",skills:"المهارات",languages:"اللغات",memberships:"العضويات المهنية",courses:"الدورات والشهادات",publications:"المنشورات العلمية",viewPublication:"عرض المقال",summaryPublication:"ملخص المقالة",downloadPublication:"تنزيل PDF",close:"إغلاق",contactPending:"سيتم نشر بيانات الاتصال العامة وآليات التعاون بعد المراجعة النهائية للخصوصية وإعداد البريد الإلكتروني للشركة.",contactLocationNote:"مستقر في حديقة العلوم والتكنولوجيا بمحافظة أذربيجان الشرقية",ceo:"الإدارة",view:"عرض",projectsNote:"لن يتم نشر الروابط الخارجية وروابط المستودعات حتى تصبح هذه المشاريع جاهزة للإصدار."},
  ru:{theme:"Тема",night:"Ночь",day:"День",skipToContent:"Перейти к содержимому",language:"Язык",education:"Образование",expertise:"Экспертиза",experience:"Профессиональный опыт",selectedProjects:"Избранный проектный опыт",skills:"Навыки",languages:"Языки",memberships:"Профессиональные членства",courses:"Курсы и сертификаты",publications:"Научные публикации",viewPublication:"Открыть статью",summaryPublication:"Аннотация статьи",downloadPublication:"Скачать PDF",close:"Закрыть",contactPending:"Публичные контактные данные и процессы сотрудничества будут опубликованы после финальной проверки конфиденциальности и настройки корпоративной почты.",contactLocationNote:"Компания размещена в Парке науки и технологий Восточного Азербайджана",ceo:"Руководство",view:"Просмотреть",projectsNote:"Внешние ссылки и ссылки на репозитории не публикуются до готовности проектов к выпуску."},
  de:{view:"Ansehen",theme:"Design",night:"Nacht",day:"Tag",skipToContent:"Zum Inhalt springen",language:"Sprache",education:"Ausbildung",expertise:"Fachgebiete",experience:"Berufserfahrung",selectedProjects:"Ausgewählte Projekterfahrung",skills:"Fähigkeiten",languages:"Sprachen",memberships:"Berufsmitgliedschaften",courses:"Kurse & Zertifikate",publications:"Wissenschaftliche Publikationen",viewPublication:"Artikel öffnen",summaryPublication:"Artikelzusammenfassung",downloadPublication:"PDF herunterladen",close:"Schließen",contactPending:"Öffentliche Kontaktdaten und Kooperationsprozesse werden nach der abschließenden Datenschutzprüfung und Einrichtung der Unternehmens-E-Mail veröffentlicht.",contactLocationNote:"Ansässig im Science & Technology Park der Provinz Ost-Aserbaidschan",ceo:"Management",projectsNote:"Externe und Repository-Links werden bis zur Release-Reife der Projekte nicht veröffentlicht."},
  zh:{view:"查看",theme:"主题",night:"夜间",day:"日间",skipToContent:"跳转到主要内容",language:"语言",education:"教育经历",expertise:"专业领域",experience:"职业经历",selectedProjects:"代表性项目经历",skills:"技能",languages:"语言",memberships:"专业会员资格",courses:"课程与证书",publications:"学术出版物",viewPublication:"查看文章",summaryPublication:"文章摘要",downloadPublication:"下载 PDF",close:"关闭",contactPending:"公共联系方式和合作流程将在完成隐私审查及企业邮箱设置后发布。",contactLocationNote:"入驻东阿塞拜疆省科技园",ceo:"管理层",projectsNote:"在项目达到发布条件之前，不公开外部链接和代码仓库链接。"},
  fr:{view:"Voir",theme:"Thème",night:"Nuit",day:"Jour",skipToContent:"Aller au contenu",language:"Langue",education:"Formation",expertise:"Expertise",experience:"Expérience professionnelle",selectedProjects:"Projets sélectionnés",skills:"Compétences",languages:"Langues",memberships:"Adhésions professionnelles",courses:"Cours et certificats",publications:"Publications scientifiques",viewPublication:"Voir l’article",summaryPublication:"Résumé de l’article",downloadPublication:"Télécharger le PDF",close:"Fermer",contactPending:"Les coordonnées publiques et les modalités de collaboration seront publiées après la vérification finale de la confidentialité et la mise en place de l’e-mail professionnel.",contactLocationNote:"Implantée au parc des sciences et technologies de la province d’Azerbaïdjan oriental",ceo:"Direction",projectsNote:"Les liens externes et vers les dépôts restent non publiés jusqu’à ce que les projets soient prêts à être publiés."},
  es:{view:"Ver",theme:"Tema",night:"Noche",day:"Día",skipToContent:"Ir al contenido",language:"Idioma",education:"Formación",expertise:"Especialidades",experience:"Experiencia profesional",selectedProjects:"Experiencia en proyectos seleccionados",skills:"Habilidades",languages:"Idiomas",memberships:"Afiliaciones profesionales",courses:"Cursos y certificados",publications:"Publicaciones científicas",viewPublication:"Ver artículo",summaryPublication:"Resumen del artículo",downloadPublication:"Descargar PDF",close:"Cerrar",contactPending:"Los datos de contacto públicos y los procesos de colaboración se publicarán después de la revisión final de privacidad y la configuración del correo corporativo.",contactLocationNote:"Establecida en el Parque de Ciencia y Tecnología de la provincia de Azerbaiyán Oriental",ceo:"Dirección",projectsNote:"Los enlaces externos y de los repositorios no se publicarán hasta que los proyectos estén listos para su lanzamiento."}
};
