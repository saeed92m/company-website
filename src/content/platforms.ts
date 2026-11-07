import type { Locale } from "../data/locales";

export const domainBrands: Record<string, string> = {
  astronomy: "ASTROINTEL",
  aerospace: "AEROINTEL",
  "remote-sensing": "GEOINTEL",
  energy: "ENERGIQ",
  "artificial-intelligence": "KEYHAN AI",
  motorsport: "MOTIONIQ"
};

const names = [
  "KEYHAN AI CORE",
  "KEYHAN DATA PLATFORM",
  "NEXUS IoT",
  "KEYHAN SDK & API ECOSYSTEM",
  "ENGINEERING INTEGRATIONS"
];

const summaries: Record<Locale, string[]> = {
  fa: [
    "زیرساخت مشترک برای مهندسی داده و ویژگی، آموزش، ارزیابی، استنتاج و پایش مدل‌های هوش مصنوعی.",
    "زیرساخت مدیریت داده، ذخیره‌سازی، فراداده، منشأ داده، کیفیت و کنترل دسترسی.",
    "لایه اتصال حسگرها، تجهیزات و سامانه‌های فیزیکی به پردازش لبه، تله‌متری و رویدادها.",
    "قراردادهای نسخه‌بندی‌شده API و داده، SDK، احراز هویت، مجوزدهی و مدیریت ترافیک.",
    "یکپارچه‌سازی هدف با ابزارهای CAD، CFD/FEA، شبیه‌سازی، GIS و تجهیزات مهندسی."
  ],
  en: [
    "Shared foundations for data and feature engineering, model training, evaluation, inference, and monitoring.",
    "Shared data management, storage, metadata, provenance, quality, and access-control services.",
    "Connectivity for sensors, equipment, and physical systems with edge processing, telemetry, and events.",
    "Versioned API and data contracts, SDKs, authentication, authorization, and traffic controls.",
    "Planned integration with CAD, CFD/FEA, simulation, GIS, and engineering equipment."
  ],
  ar: ["أسس مشتركة لهندسة البيانات وتدريب النماذج وتقييمها ومراقبتها.","إدارة البيانات والتخزين والبيانات الوصفية والجودة والتحكم في الوصول.","ربط المستشعرات والمعدات والأنظمة المادية مع المعالجة الطرفية والقياس عن بُعد.","عقود API والبيانات ذات الإصدارات وحزم SDK والمصادقة والتفويض.","تكامل مستهدف مع CAD وCFD/FEA والمحاكاة ونظم المعلومات الجغرافية."],
  ru: ["Общие средства инженерии данных, обучения, оценки и мониторинга моделей.","Управление данными, хранение, метаданные, происхождение и контроль доступа.","Подключение датчиков, оборудования и физических систем с периферийной обработкой.","Версионируемые API и контракты данных, SDK, аутентификация и авторизация.","Планируемая интеграция с CAD, CFD/FEA, моделированием и GIS."],
  de: ["Gemeinsame Grundlagen für Datenengineering, Training, Bewertung und Modellüberwachung.","Datenverwaltung, Speicherung, Metadaten, Herkunft, Qualität und Zugriffskontrolle.","Anbindung von Sensoren, Geräten und physischen Systemen mit Edge-Verarbeitung.","Versionierte API- und Datenverträge, SDKs, Authentifizierung und Autorisierung.","Geplante Integration mit CAD, CFD/FEA, Simulation und GIS."],
  zh: ["共享数据工程、模型训练、评估、推理和监控基础。","数据管理、存储、元数据、来源、质量和访问控制。","连接传感器、设备和物理系统，并支持边缘处理与遥测。","版本化API与数据契约、SDK、身份验证和授权。","计划与CAD、CFD/FEA、仿真和GIS集成。"],
  fr: ["Fondations communes pour l’ingénierie des données, l’entraînement et l’évaluation des modèles.","Gestion des données, stockage, métadonnées, provenance, qualité et contrôle d’accès.","Connexion des capteurs et systèmes physiques avec traitement en périphérie et télémétrie.","Contrats API et données versionnés, SDK, authentification et autorisation.","Intégration prévue avec CAD, CFD/FEA, simulation et SIG."],
  es: ["Bases compartidas para ingeniería de datos, entrenamiento, evaluación y supervisión de modelos.","Gestión de datos, almacenamiento, metadatos, procedencia, calidad y control de acceso.","Conexión de sensores y sistemas físicos con procesamiento en el borde y telemetría.","Contratos versionados de API y datos, SDK, autenticación y autorización.","Integración prevista con CAD, CFD/FEA, simulación y GIS."]
};

type Labels = {
  pageTitle: string; intro: string; notice: string; homeTitle: string; homeIntro: string;
  sharedTitle: string; viewArchitecture: string; plannedStatus: string; inProgressStatus: string;
  architectureTitle: string; architectureIntro: string; companyPlatformTitle: string;
  companyPlatformDescription: string; domainsTitle: string; domainsDescription: string;
  sharedPlatformsDescription: string; engineeringTitle: string; engineeringDescription: string;
  digitalTitle: string; digitalDescription: string; governanceTitle: string; governanceDescription: string;
  businessTitle: string; businessDescription: string;
};

const labels: Record<Locale, Labels> = {
  fa: {
    pageTitle:"پلتفرم‌ها و فناوری‌های مشترک",
    intro:"زیرساخت‌های مشترک، محصولات مستقل شش حوزه را پشتیبانی می‌کنند. هر محصول مالکیت داده، منطق تخصصی و چرخه توسعه مستقل خود را حفظ می‌کند.",
    notice:"این صفحه معماری هدف شرکت را نشان می‌دهد. معرفی یک قابلیت به معنی پیاده‌سازی یا ارائه تجاری آن نیست. نام ابزارها نیز به معنی داشتن مجوز یا یکپارچه‌سازی تکمیل‌شده نیست.",
    homeTitle:"فناوری‌های مشترک؛ زیرساخت توسعه محصولات",
    homeIntro:"پنج سکوی فناوری مشترک برای پشتیبانی از محصولات مستقل شرکت تعریف شده‌اند. این سکوها حوزه فعالیت هفتم تا یازدهم نیستند.",
    sharedTitle:"زیرساخت‌های مشترک", viewArchitecture:"مشاهده معماری کلان شرکت",
    plannedStatus:"شروع‌نشده · معماری هدف", inProgressStatus:"در حال اجرا",
    architectureTitle:"معماری کلان شرکت",
    architectureIntro:"لایه‌های سازمانی، حوزه‌های تخصصی، فناوری‌های مشترک و توانمندی‌های پشتیبان را از هم جدا می‌کند.",
    companyPlatformTitle:"COMPANY-PLATFORM — سامانه مدیریت و یکپارچه‌سازی شرکت",
    companyPlatformDescription:"سامانه داخلی عملیات شرکت برای مدیریت راهبرد، سبد محصولات، پروژه‌ها، مشتریان، گردش‌کار و دسترسی. این سامانه محصول تجاری عمومی نیست.",
    domainsTitle:"شش حوزه فعالیت مستقل",
    domainsDescription:"هر حوزه مأموریت، محصولات، پروژه‌ها و مسیر توسعه تخصصی خود را دارد.",
    sharedPlatformsDescription:"این پنج زیرساخت برای استفاده مشترک طراحی شده‌اند؛ وضعیت فعلی آن‌ها شروع‌نشده است.",
    engineeringTitle:"مهندسی و سخت‌افزار",
    engineeringDescription:"قلمرو توانمندی هدف؛ وجود آزمایشگاه، تجهیزات یا ظرفیت عملیاتی مشخص از این فهرست نتیجه نمی‌شود.",
    digitalTitle:"زیرساخت دیجیتال و IT", digitalDescription:"معماری هدف برای محاسبات، شبکه، ذخیره‌سازی، توسعه امن و پایش.",
    governanceTitle:"حاکمیت و تضمین", governanceDescription:"کنترل کیفیت، ریسک، امنیت، حریم خصوصی، انطباق و صحت علمی در چرخه عمر محصولات.",
    businessTitle:"توسعه بازار و کسب‌وکار", businessDescription:"قابلیت‌های هدف برای تبدیل محصولات معتبر به راهکارهای قابل عرضه و پشتیبانی."
  },
  en: {
    pageTitle:"Shared Platforms & Technology",
    intro:"Shared infrastructure supports the company's independent products. Each product retains its own data ownership, domain logic, and development lifecycle.",
    notice:"This page describes the target company architecture. A listed capability is not proof of implementation or commercial availability. Tool names do not confirm licences or completed integrations.",
    homeTitle:"Shared technology for independent products",
    homeIntro:"Five shared technology platforms support the company's independent products. They are not additional business domains.",
    sharedTitle:"Shared technology platforms", viewArchitecture:"Explore the company architecture",
    plannedStatus:"Not started · Target architecture", inProgressStatus:"In progress",
    architectureTitle:"Company technology architecture",
    architectureIntro:"The architecture separates corporate operations, specialist domains, shared technology, and enabling capabilities.",
    companyPlatformTitle:"COMPANY-PLATFORM — Corporate operating and integration system",
    companyPlatformDescription:"The internal company system for strategy, portfolio, projects, customers, workflows, and access management. It is not a public commercial product.",
    domainsTitle:"Six independent activity domains",
    domainsDescription:"Each domain has its own mission, products, projects, and specialist development path.",
    sharedPlatformsDescription:"These five foundations are designed for cross-domain use. Their current status is not started.",
    engineeringTitle:"Engineering & hardware",
    engineeringDescription:"Target capability scope. This list does not confirm that specific laboratories, equipment, or operational capacity exist.",
    digitalTitle:"Digital infrastructure & IT", digitalDescription:"Target architecture for compute, networks, storage, secure delivery, and observability.",
    governanceTitle:"Governance & assurance", governanceDescription:"Quality, risk, security, privacy, compliance, and scientific integrity across the product lifecycle.",
    businessTitle:"Business & market development", businessDescription:"Target capabilities for turning validated products into supported market offerings."
  },
  ar: {
    pageTitle:"المنصات والتقنيات المشتركة",intro:"تدعم البنية المشتركة المنتجات المستقلة للشركة، ويحتفظ كل منتج ببياناته ومنطقه المتخصص ودورة تطويره.",notice:"تعرض هذه الصفحة البنية المستهدفة. ولا يعني إدراج قدرة أنها نُفذت أو أصبحت خدمة تجارية.",
    homeTitle:"تقنيات مشتركة لمنتجات مستقلة",homeIntro:"خمس منصات تقنية مشتركة لدعم منتجات الشركة، وليست مجالات نشاط إضافية.",sharedTitle:"المنصات التقنية المشتركة",viewArchitecture:"استكشف بنية الشركة",plannedStatus:"لم يبدأ · بنية مستهدفة",inProgressStatus:"قيد التنفيذ",architectureTitle:"بنية الشركة التقنية",architectureIntro:"تفصل البنية بين إدارة الشركة والمجالات المتخصصة والتقنيات المشتركة والقدرات الداعمة.",
    companyPlatformTitle:"COMPANY-PLATFORM — نظام تشغيل الشركة وتكاملها",companyPlatformDescription:"نظام داخلي لإدارة الاستراتيجية والمشاريع والعملاء وسير العمل والصلاحيات. ليس منتجاً تجارياً عاماً.",domainsTitle:"مجالات النشاط الستة المستقلة",domainsDescription:"لكل مجال مهمته ومنتجاته ومشاريعه ومسار تطويره المتخصص.",sharedPlatformsDescription:"هذه الأسس الخمسة مصممة للاستخدام المشترك، وحالتها الحالية لم يبدأ.",engineeringTitle:"الهندسة والأجهزة",engineeringDescription:"نطاق قدرات مستهدف، ولا يثبت وجود مختبرات أو معدات أو طاقة تشغيلية محددة.",digitalTitle:"البنية الرقمية وتقنية المعلومات",digitalDescription:"البنية المستهدفة للحوسبة والشبكات والتخزين والتسليم الآمن والمراقبة.",governanceTitle:"الحوكمة والضمان",governanceDescription:"الجودة والمخاطر والأمن والخصوصية والامتثال والنزاهة العلمية طوال دورة حياة المنتج.",businessTitle:"تطوير الأعمال والسوق",businessDescription:"قدرات مستهدفة لتحويل المنتجات المتحقق منها إلى عروض سوقية مدعومة."
  },
  ru: {
    pageTitle:"Общие платформы и технологии",intro:"Общая инфраструктура поддерживает независимые продукты компании. Каждый продукт сохраняет собственные данные, логику и цикл разработки.",notice:"Страница описывает целевую архитектуру. Наличие возможности не означает, что она реализована или доступна как коммерческая услуга.",homeTitle:"Общие технологии для независимых продуктов",homeIntro:"Пять общих технологических платформ поддерживают независимые продукты компании и не являются дополнительными направлениями.",sharedTitle:"Общие технологические платформы",viewArchitecture:"Архитектура компании",plannedStatus:"Не начато · целевая архитектура",inProgressStatus:"В разработке",architectureTitle:"Технологическая архитектура компании",architectureIntro:"Архитектура разделяет корпоративное управление, направления, общие технологии и обеспечивающие возможности.",companyPlatformTitle:"COMPANY-PLATFORM — внутренняя система управления и интеграции",companyPlatformDescription:"Внутренняя система для стратегии, проектов, клиентов, процессов и управления доступом. Это не публичный коммерческий продукт.",domainsTitle:"Шесть независимых направлений",domainsDescription:"У каждого направления есть собственная миссия, продукты, проекты и путь развития.",sharedPlatformsDescription:"Эти пять платформ предназначены для общего использования. Их текущий статус — не начато.",engineeringTitle:"Инженерия и оборудование",engineeringDescription:"Целевой перечень компетенций; он не подтверждает наличие лабораторий, оборудования или действующих мощностей.",digitalTitle:"Цифровая инфраструктура и IT",digitalDescription:"Целевая архитектура вычислений, сетей, хранения, безопасной разработки и наблюдаемости.",governanceTitle:"Управление и обеспечение",governanceDescription:"Качество, риски, безопасность, конфиденциальность, соответствие требованиям и научная добросовестность.",businessTitle:"Развитие бизнеса и рынка",businessDescription:"Целевые возможности для вывода проверенных продуктов на рынок и их поддержки."
  },
  de: {
    pageTitle:"Gemeinsame Plattformen und Technologien",intro:"Gemeinsame Infrastruktur unterstützt die unabhängigen Produkte des Unternehmens. Jedes Produkt behält seine eigenen Daten, Fachlogik und seinen Entwicklungszyklus.",notice:"Diese Seite beschreibt die Zielarchitektur. Eine aufgeführte Fähigkeit ist kein Nachweis für Implementierung oder kommerzielle Verfügbarkeit.",homeTitle:"Gemeinsame Technologie für unabhängige Produkte",homeIntro:"Fünf gemeinsame Technologieplattformen unterstützen die unabhängigen Produkte. Sie sind keine zusätzlichen Geschäftsbereiche.",sharedTitle:"Gemeinsame Technologieplattformen",viewArchitecture:"Unternehmensarchitektur ansehen",plannedStatus:"Nicht begonnen · Zielarchitektur",inProgressStatus:"In Arbeit",architectureTitle:"Technologiearchitektur des Unternehmens",architectureIntro:"Die Architektur trennt Unternehmensbetrieb, Fachbereiche, gemeinsame Technologien und unterstützende Fähigkeiten.",companyPlatformTitle:"COMPANY-PLATFORM — internes Betriebs- und Integrationssystem",companyPlatformDescription:"Internes System für Strategie, Projekte, Kunden, Workflows und Zugriffsverwaltung. Es ist kein öffentliches kommerzielles Produkt.",domainsTitle:"Sechs unabhängige Tätigkeitsbereiche",domainsDescription:"Jeder Bereich hat eine eigene Mission, Produkte, Projekte und Entwicklungslinie.",sharedPlatformsDescription:"Diese fünf Grundlagen sind für die bereichsübergreifende Nutzung vorgesehen. Ihr Status ist nicht begonnen.",engineeringTitle:"Engineering und Hardware",engineeringDescription:"Zielkompetenzbereich; diese Liste bestätigt keine vorhandenen Labore, Geräte oder Betriebskapazitäten.",digitalTitle:"Digitale Infrastruktur und IT",digitalDescription:"Zielarchitektur für Computing, Netzwerke, Speicher, sichere Bereitstellung und Observability.",governanceTitle:"Governance und Qualitätssicherung",governanceDescription:"Qualität, Risiken, Sicherheit, Datenschutz, Compliance und wissenschaftliche Integrität über den Produktlebenszyklus.",businessTitle:"Geschäfts- und Marktentwicklung",businessDescription:"Zielkompetenzen für die Markteinführung validierter Produkte und deren Betreuung."
  },
  zh: {
    pageTitle:"共享平台与技术",intro:"共享基础设施支持公司的独立产品。每个产品保留自己的数据、专业逻辑和开发周期。",notice:"本页展示目标架构。列出某项能力并不表示它已实现或可作为商业服务提供。",homeTitle:"支持独立产品的共享技术",homeIntro:"五个共享技术平台为公司的独立产品提供支持，它们不是新增的业务领域。",sharedTitle:"共享技术平台",viewArchitecture:"查看公司架构",plannedStatus:"尚未启动 · 目标架构",inProgressStatus:"进行中",architectureTitle:"公司技术架构",architectureIntro:"该架构区分公司运营、专业领域、共享技术和支持能力。",companyPlatformTitle:"COMPANY-PLATFORM — 内部运营与集成系统",companyPlatformDescription:"用于战略、项目、客户、工作流和访问管理的内部系统。它不是面向公众销售的商业产品。",domainsTitle:"六个独立业务领域",domainsDescription:"每个领域都有自己的使命、产品、项目和专业发展路径。",sharedPlatformsDescription:"这五项基础设施面向跨领域共享使用，目前尚未启动。",engineeringTitle:"工程与硬件",engineeringDescription:"目标能力范围；此列表不代表已有实验室、设备或运营能力。",digitalTitle:"数字基础设施与IT",digitalDescription:"面向计算、网络、存储、安全交付和可观测性的目标架构。",governanceTitle:"治理与保障",governanceDescription:"在产品生命周期内管理质量、风险、安全、隐私、合规和科学诚信。",businessTitle:"业务与市场发展",businessDescription:"将经过验证的产品转化为可交付市场方案的目标能力。"
  },
  fr: {
    pageTitle:"Plateformes et technologies partagées",intro:"L’infrastructure commune soutient les produits indépendants de l’entreprise. Chaque produit conserve ses données, sa logique métier et son cycle de développement.",notice:"Cette page décrit l’architecture cible. Une capacité répertoriée ne prouve ni sa mise en œuvre ni sa disponibilité commerciale.",homeTitle:"Technologies communes pour des produits indépendants",homeIntro:"Cinq plateformes technologiques communes soutiennent les produits indépendants. Elles ne constituent pas de nouveaux domaines d’activité.",sharedTitle:"Plateformes technologiques communes",viewArchitecture:"Explorer l’architecture",plannedStatus:"Non commencé · architecture cible",inProgressStatus:"En cours",architectureTitle:"Architecture technologique de l’entreprise",architectureIntro:"L’architecture distingue les opérations, les domaines spécialisés, les technologies communes et les capacités de soutien.",companyPlatformTitle:"COMPANY-PLATFORM — système interne de gestion et d’intégration",companyPlatformDescription:"Système interne pour la stratégie, les projets, les clients, les workflows et les accès. Ce n’est pas un produit commercial public.",domainsTitle:"Six domaines d’activité indépendants",domainsDescription:"Chaque domaine possède sa mission, ses produits, ses projets et sa trajectoire.",sharedPlatformsDescription:"Ces cinq fondations sont conçues pour un usage transversal. Leur statut actuel est non commencé.",engineeringTitle:"Ingénierie et matériel",engineeringDescription:"Périmètre de compétences cible ; cette liste ne confirme pas l’existence de laboratoires, d’équipements ou de capacités opérationnelles.",digitalTitle:"Infrastructure numérique et IT",digitalDescription:"Architecture cible pour le calcul, les réseaux, le stockage, la livraison sécurisée et l’observabilité.",governanceTitle:"Gouvernance et assurance",governanceDescription:"Qualité, risques, sécurité, confidentialité, conformité et intégrité scientifique.",businessTitle:"Développement commercial et marché",businessDescription:"Capacités cibles pour transformer des produits validés en offres commercialisables."
  },
  es: {
    pageTitle:"Plataformas y tecnologías compartidas",intro:"La infraestructura compartida da soporte a los productos independientes. Cada producto conserva sus datos, lógica especializada y ciclo de desarrollo.",notice:"Esta página describe la arquitectura objetivo. Incluir una capacidad no demuestra que esté implementada ni disponible comercialmente.",homeTitle:"Tecnología compartida para productos independientes",homeIntro:"Cinco plataformas tecnológicas compartidas respaldan los productos independientes. No son nuevas áreas de actividad.",sharedTitle:"Plataformas tecnológicas compartidas",viewArchitecture:"Explorar la arquitectura",plannedStatus:"No iniciado · arquitectura objetivo",inProgressStatus:"En curso",architectureTitle:"Arquitectura tecnológica de la empresa",architectureIntro:"La arquitectura separa las operaciones corporativas, los dominios especializados, la tecnología compartida y las capacidades de apoyo.",companyPlatformTitle:"COMPANY-PLATFORM — sistema interno de operaciones e integración",companyPlatformDescription:"Sistema interno para estrategia, proyectos, clientes, flujos de trabajo y gestión de acceso. No es un producto comercial público.",domainsTitle:"Seis áreas de actividad independientes",domainsDescription:"Cada área tiene su propia misión, productos, proyectos y trayectoria.",sharedPlatformsDescription:"Estas cinco bases están diseñadas para uso compartido. Su estado actual es no iniciado.",engineeringTitle:"Ingeniería y hardware",engineeringDescription:"Alcance de capacidades objetivo; esta lista no confirma laboratorios, equipos ni capacidad operativa existente.",digitalTitle:"Infraestructura digital e IT",digitalDescription:"Arquitectura objetivo para computación, redes, almacenamiento, entrega segura y observabilidad.",governanceTitle:"Gobernanza y aseguramiento",governanceDescription:"Calidad, riesgos, seguridad, privacidad, cumplimiento e integridad científica.",businessTitle:"Desarrollo de negocio y mercado",businessDescription:"Capacidades objetivo para convertir productos validados en ofertas comerciales con soporte."
  }
};

const lists: Record<Locale, { engineering: string[]; digital: string[]; governance: string[]; business: string[] }> = {
  fa: {engineering:["مهندسی مکانیک","برق و الکترونیک","سامانه‌های نهفته و Firmware","طراحی PCB","ابزار دقیق و کنترل","رباتیک و اتوماسیون","حسگر و گردآوری داده","نمونه‌سازی و ساخت","چاپ سه‌بعدی","آزمون و یکپارچه‌سازی سامانه"],digital:["Workstations · Servers · Cloud · Edge","LAN · WAN · VPN · DNS · TLS","Backup · Restore · Disaster Recovery","Git · CI/CD · Testing · Releases","IAM · MFA · RBAC · Encryption","Logs · Metrics · Tracing · Alerts"],governance:["معماری سازمانی و مدیریت کیفیت","مدیریت ریسک و امنیت اطلاعات","حریم خصوصی و حفاظت از داده","انطباق حقوقی و مجوزها","مالکیت فکری و ایمنی مهندسی","صحت علمی و ممیزی"],business:["توسعه کسب‌وکار و مدیریت محصول","پژوهش بازار و رقبا","فروش B2B · B2G · B2C","پیشنهاد فنی و مناقصه","قیمت‌گذاری و مدل درآمد","مشارکت، موفقیت مشتری و پشتیبانی","تجاری‌سازی و صدور مجوز"]},
  en: {engineering:["Mechanical engineering","Electrical & electronics","Embedded systems & firmware","PCB design","Instrumentation & control","Robotics & automation","Sensors & data acquisition","Prototyping & manufacturing","3D printing","Testing & system integration"],digital:["Workstations · Servers · Cloud · Edge","LAN · WAN · VPN · DNS · TLS","Backup · Restore · Disaster Recovery","Git · CI/CD · Testing · Releases","IAM · MFA · RBAC · Encryption","Logs · Metrics · Tracing · Alerts"],governance:["Enterprise architecture & quality management","Risk management & information security","Privacy & data protection","Legal and regulatory compliance","IP management & engineering safety","Scientific integrity & audit"],business:["Business development & product management","Market and competitor research","B2B · B2G · B2C sales","Proposals and tenders","Pricing and revenue models","Partnerships, customer success & support","Commercialization and licensing"]},
  ar: {engineering:["الهندسة الميكانيكية","الكهرباء والإلكترونيات","الأنظمة المضمنة","تصميم PCB","الأجهزة والتحكم","الروبوتات والأتمتة","المستشعرات والبيانات","النمذجة والتصنيع","الطباعة ثلاثية الأبعاد","الاختبار وتكامل الأنظمة"],digital:["Workstations · Servers · Cloud · Edge","LAN · WAN · VPN · DNS · TLS","Backup · Restore · Disaster Recovery","Git · CI/CD · Testing · Releases","IAM · MFA · RBAC · Encryption","Logs · Metrics · Tracing · Alerts"],governance:["هندسة المؤسسة والجودة","إدارة المخاطر وأمن المعلومات","الخصوصية وحماية البيانات","الامتثال القانوني","الملكية الفكرية والسلامة","النزاهة العلمية والتدقيق"],business:["تطوير الأعمال والمنتجات","أبحاث السوق والمنافسين","مبيعات B2B · B2G · B2C","العروض والمناقصات","التسعير والإيرادات","الشراكات ودعم العملاء","التسويق التجاري والترخيص"]},
  ru: {engineering:["Механическая инженерия","Электротехника и электроника","Встроенные системы","Проектирование PCB","Измерения и управление","Робототехника и автоматизация","Датчики и сбор данных","Прототипирование и производство","3D-печать","Испытания и интеграция"],digital:["Workstations · Servers · Cloud · Edge","LAN · WAN · VPN · DNS · TLS","Backup · Restore · Disaster Recovery","Git · CI/CD · Testing · Releases","IAM · MFA · RBAC · Encryption","Logs · Metrics · Tracing · Alerts"],governance:["Корпоративная архитектура и качество","Риски и информационная безопасность","Конфиденциальность и защита данных","Правовое соответствие","Интеллектуальная собственность и безопасность","Научная добросовестность и аудит"],business:["Развитие бизнеса и управление продуктом","Исследование рынка и конкурентов","Продажи B2B · B2G · B2C","Предложения и тендеры","Ценообразование и доходы","Партнёрства и поддержка клиентов","Коммерциализация и лицензирование"]},
  de: {engineering:["Maschinenbau","Elektrotechnik und Elektronik","Embedded Systems","PCB-Design","Mess- und Regeltechnik","Robotik und Automatisierung","Sensorik und Datenerfassung","Prototyping und Fertigung","3D-Druck","Prüfung und Systemintegration"],digital:["Workstations · Servers · Cloud · Edge","LAN · WAN · VPN · DNS · TLS","Backup · Restore · Disaster Recovery","Git · CI/CD · Testing · Releases","IAM · MFA · RBAC · Encryption","Logs · Metrics · Tracing · Alerts"],governance:["Unternehmensarchitektur und Qualität","Risikomanagement und Informationssicherheit","Datenschutz","Rechtliche Compliance","IP und Engineering-Sicherheit","Wissenschaftliche Integrität und Audit"],business:["Business Development und Produktmanagement","Markt- und Wettbewerbsanalyse","B2B · B2G · B2C Vertrieb","Angebote und Ausschreibungen","Preis- und Erlösmodelle","Partnerschaften und Kundensupport","Kommerzialisierung und Lizenzierung"]},
  zh: {engineering:["机械工程","电气与电子","嵌入式系统与固件","PCB设计","仪器仪表与控制","机器人与自动化","传感器与数据采集","原型设计与制造","3D打印","测试与系统集成"],digital:["Workstations · Servers · Cloud · Edge","LAN · WAN · VPN · DNS · TLS","Backup · Restore · Disaster Recovery","Git · CI/CD · Testing · Releases","IAM · MFA · RBAC · Encryption","Logs · Metrics · Tracing · Alerts"],governance:["企业架构与质量管理","风险管理与信息安全","隐私与数据保护","法律与监管合规","知识产权与工程安全","科学诚信与审计"],business:["业务发展与产品管理","市场与竞争研究","B2B · B2G · B2C销售","方案与招标","定价与收入模式","合作伙伴与客户支持","商业化与许可"]},
  fr: {engineering:["Génie mécanique","Électricité et électronique","Systèmes embarqués","Conception PCB","Instrumentation et contrôle","Robotique et automatisation","Capteurs et acquisition","Prototypage et fabrication","Impression 3D","Essais et intégration"],digital:["Workstations · Servers · Cloud · Edge","LAN · WAN · VPN · DNS · TLS","Backup · Restore · Disaster Recovery","Git · CI/CD · Testing · Releases","IAM · MFA · RBAC · Encryption","Logs · Metrics · Tracing · Alerts"],governance:["Architecture d’entreprise et qualité","Gestion des risques et sécurité","Confidentialité et protection des données","Conformité juridique","Propriété intellectuelle et sécurité","Intégrité scientifique et audit"],business:["Développement commercial et produit","Études de marché et concurrence","Ventes B2B · B2G · B2C","Offres et appels d’offres","Tarification et revenus","Partenariats et support client","Commercialisation et licences"]},
  es: {engineering:["Ingeniería mecánica","Electricidad y electrónica","Sistemas embebidos","Diseño PCB","Instrumentación y control","Robótica y automatización","Sensores y adquisición de datos","Prototipado y fabricación","Impresión 3D","Pruebas e integración"],digital:["Workstations · Servers · Cloud · Edge","LAN · WAN · VPN · DNS · TLS","Backup · Restore · Disaster Recovery","Git · CI/CD · Testing · Releases","IAM · MFA · RBAC · Encryption","Logs · Metrics · Tracing · Alerts"],governance:["Arquitectura empresarial y calidad","Gestión de riesgos y seguridad","Privacidad y protección de datos","Cumplimiento legal","Propiedad intelectual y seguridad","Integridad científica y auditoría"],business:["Desarrollo de negocio y producto","Investigación de mercado y competencia","Ventas B2B · B2G · B2C","Propuestas y licitaciones","Precios y modelos de ingresos","Alianzas y soporte al cliente","Comercialización y licencias"]}
};

export const platformsPage = Object.fromEntries(
  (Object.keys(labels) as Locale[]).map((locale) => [
    locale,
    {
      ...labels[locale],
      platforms: names.map((name, index) => ({ name, summary: summaries[locale][index] })),
      engineeringItems: lists[locale].engineering,
      digitalItems: lists[locale].digital,
      governanceItems: lists[locale].governance,
      businessItems: lists[locale].business
    }
  ])
) as Record<Locale, Labels & {
  platforms: { name: string; summary: string }[];
  engineeringItems: string[]; digitalItems: string[]; governanceItems: string[]; businessItems: string[];
}>;
