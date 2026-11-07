import type { Locale } from "../data/locales";

type Pathway = { title: string; description: string };
type CollaborationCopy = {
  pageTitle: string; intro: string; note: string; pathwaysTitle: string;
  processTitle: string; process: string[]; contactCta: string; pathways: Pathway[];
};

export const collaborationPage: Record<Locale, CollaborationCopy> = {
  fa: {
    pageTitle:"همکاری با کیهان",
    intro:"برای همکاری پژوهشی، مهندسی، توسعه مشترک و بررسی مسئله‌های صنعتی و فناورانه با شرکت گفت‌وگو کنید.",
    note:"موارد زیر زمینه‌های بالقوه همکاری هستند؛ معرفی آن‌ها به معنی وجود قرارداد، شریک رسمی یا ظرفیت خدماتی تأییدشده نیست.",
    pathwaysTitle:"زمینه‌های همکاری",
    processTitle:"مسیر بررسی همکاری",
    process:["ارسال مسئله، هدف و اطلاعات اولیه","بررسی اولیه تناسب و نیازمندی‌ها","تعریف محدوده و امکان‌سنجی","تهیه پیشنهاد فنی و تجاری","توافق، اجرا و اعتبارسنجی"],
    contactCta:"ارتباط با شرکت",
    pathways:[
      {title:"دانشگاه‌ها و مراکز علمی",description:"پژوهش مشترک، پروژه‌های علمی، تبادل دانش و اعتبارسنجی."},
      {title:"صنایع و سازمان‌ها",description:"تعریف مسئله، تحلیل مهندسی، توسعه راهکار و پروژه‌های صنعتی."},
      {title:"پارک‌های علم و فناوری",description:"رشد فناوری، توسعه نمونه اولیه و ارزیابی مسیر تجاری‌سازی."},
      {title:"شرکت‌های فناور و صنعتی",description:"یکپارچه‌سازی سامانه‌ها، توسعه مشترک و همکاری زنجیره تأمین."},
      {title:"سرمایه‌گذاران و صندوق‌های نوآوری",description:"بررسی فرصت‌های سرمایه‌گذاری و تأمین مالی توسعه فناوری."},
      {title:"شرکای بین‌المللی",description:"پژوهش، مهندسی و توسعه فناوری در چارچوب‌های قابل توافق."}
    ]
  },
  en: {
    pageTitle:"Collaborate with Keyhan",
    intro:"Discuss research, engineering, joint development, and industrial or technology challenges with the company.",
    note:"These are potential collaboration areas. Their presence does not imply an existing contract, formal partner, or verified service capacity.",
    pathwaysTitle:"Collaboration pathways",
    processTitle:"How a collaboration request is reviewed",
    process:["Share the problem, objective, and initial context","Review fit and requirements","Define scope and feasibility","Prepare a technical and commercial proposal","Agree, execute, and validate"],
    contactCta:"Contact the company",
    pathways:[
      {title:"Universities and research centers",description:"Joint research, scientific projects, knowledge exchange, and validation."},
      {title:"Industry and public organizations",description:"Problem definition, engineering analysis, solution development, and industrial projects."},
      {title:"Science and technology parks",description:"Technology development, prototype work, and commercialization assessment."},
      {title:"Technology and industrial companies",description:"System integration, co-development, and supply-chain collaboration."},
      {title:"Investors and innovation funds",description:"Review technology investment and development-funding opportunities."},
      {title:"International partners",description:"Research, engineering, and technology development under agreed frameworks."}
    ]
  },
  ar: {
    pageTitle:"تعاون مع كيهان",intro:"ناقش مع الشركة فرص البحث والهندسة والتطوير المشترك والتحديات الصناعية والتقنية.",note:"هذه مجالات تعاون محتملة، ولا تعني وجود عقد أو شريك رسمي أو قدرة خدمية مؤكدة.",pathwaysTitle:"مسارات التعاون",processTitle:"مراحل مراجعة طلب التعاون",process:["إرسال المشكلة والهدف والسياق الأولي","مراجعة الملاءمة والمتطلبات","تحديد النطاق والجدوى","إعداد عرض تقني وتجاري","الاتفاق والتنفيذ والتحقق"],contactCta:"اتصل بالشركة",pathways:[{title:"الجامعات ومراكز البحث",description:"البحث المشترك والمشاريع العلمية وتبادل المعرفة والتحقق."},{title:"الصناعة والمؤسسات العامة",description:"تعريف المشكلات والتحليل الهندسي وتطوير الحلول والمشاريع الصناعية."},{title:"حدائق العلوم والتكنولوجيا",description:"تطوير التكنولوجيا والنماذج الأولية وتقييم التسويق التجاري."},{title:"الشركات التقنية والصناعية",description:"تكامل الأنظمة والتطوير المشترك والتعاون في سلسلة التوريد."},{title:"المستثمرون وصناديق الابتكار",description:"دراسة فرص الاستثمار وتمويل تطوير التكنولوجيا."},{title:"الشركاء الدوليون",description:"البحث والهندسة وتطوير التكنولوجيا ضمن أطر متفق عليها."}]
  },
  ru: {
    pageTitle:"Сотрудничество с Keyhan",intro:"Обсудите с компанией исследования, инженерию, совместную разработку и промышленные или технологические задачи.",note:"Это потенциальные направления сотрудничества. Они не подтверждают наличие договора, официального партнёра или проверенной сервисной мощности.",pathwaysTitle:"Направления сотрудничества",processTitle:"Рассмотрение запроса",process:["Описание задачи, цели и исходных условий","Первичная оценка соответствия и требований","Определение объёма и осуществимости","Подготовка технического и коммерческого предложения","Согласование, выполнение и проверка"],contactCta:"Связаться с компанией",pathways:[{title:"Университеты и научные центры",description:"Совместные исследования, научные проекты, обмен знаниями и проверка."},{title:"Промышленность и государственные организации",description:"Постановка задач, инженерный анализ и разработка решений."},{title:"Научно-технологические парки",description:"Развитие технологий, прототипирование и оценка коммерциализации."},{title:"Технологические и промышленные компании",description:"Интеграция систем, совместная разработка и цепочки поставок."},{title:"Инвесторы и инновационные фонды",description:"Оценка инвестиций в технологии и финансирования разработки."},{title:"Международные партнёры",description:"Исследования, инженерия и развитие технологий в согласованных рамках."}]
  },
  de: {
    pageTitle:"Zusammenarbeit mit Keyhan",intro:"Besprechen Sie Forschung, Engineering, gemeinsame Entwicklung sowie industrielle und technologische Herausforderungen.",note:"Dies sind mögliche Kooperationsfelder. Sie belegen weder bestehende Verträge noch offizielle Partnerschaften oder bestätigte Servicekapazitäten.",pathwaysTitle:"Kooperationswege",processTitle:"Prüfung einer Kooperationsanfrage",process:["Problem, Ziel und Ausgangslage übermitteln","Passung und Anforderungen prüfen","Umfang und Machbarkeit definieren","Technisches und kommerzielles Angebot erstellen","Vereinbaren, umsetzen und validieren"],contactCta:"Unternehmen kontaktieren",pathways:[{title:"Universitäten und Forschungszentren",description:"Gemeinsame Forschung, wissenschaftliche Projekte, Wissensaustausch und Validierung."},{title:"Industrie und öffentliche Organisationen",description:"Problemdefinition, Engineering-Analyse und Lösungsentwicklung."},{title:"Science & Technology Parks",description:"Technologieentwicklung, Prototypen und Bewertung der Kommerzialisierung."},{title:"Technologie- und Industrieunternehmen",description:"Systemintegration, gemeinsame Entwicklung und Lieferkettenkooperation."},{title:"Investoren und Innovationsfonds",description:"Prüfung von Technologieinvestitionen und Entwicklungsfinanzierung."},{title:"Internationale Partner",description:"Forschung, Engineering und Technologieentwicklung in vereinbarten Rahmenbedingungen."}]
  },
  zh: {
    pageTitle:"与基岩科技合作",intro:"欢迎与公司讨论科研、工程、联合开发以及工业和技术问题。",note:"以下为潜在合作方向，并不代表已有合同、正式合作伙伴或已验证的服务能力。",pathwaysTitle:"合作方向",processTitle:"合作申请评估流程",process:["提交问题、目标和初始背景","初步评估匹配度与需求","定义范围并开展可行性评估","准备技术与商务方案","达成协议、执行并验证"],contactCta:"联系公司",pathways:[{title:"大学与科研机构",description:"联合研究、科研项目、知识交流与验证。"},{title:"工业企业与公共机构",description:"问题定义、工程分析、解决方案开发和工业项目。"},{title:"科技园区",description:"技术开发、原型工作和商业化评估。"},{title:"科技与工业企业",description:"系统集成、联合开发和供应链合作。"},{title:"投资者与创新基金",description:"评估技术投资和研发融资机会。"},{title:"国际合作伙伴",description:"在约定框架内开展研究、工程和技术开发。"}]
  },
  fr: {
    pageTitle:"Collaborer avec Keyhan",intro:"Échangeons sur la recherche, l’ingénierie, le développement conjoint et les défis industriels ou technologiques.",note:"Il s’agit de pistes de collaboration potentielles. Elles ne prouvent ni contrat existant, ni partenariat officiel, ni capacité de service vérifiée.",pathwaysTitle:"Voies de collaboration",processTitle:"Examen d’une demande de collaboration",process:["Présenter le problème, l’objectif et le contexte","Examiner l’adéquation et les besoins","Définir le périmètre et la faisabilité","Préparer une proposition technique et commerciale","Convenir, exécuter et valider"],contactCta:"Contacter l’entreprise",pathways:[{title:"Universités et centres de recherche",description:"Recherche conjointe, projets scientifiques, échange de connaissances et validation."},{title:"Industrie et organismes publics",description:"Définition du problème, analyse d’ingénierie et développement de solutions."},{title:"Parcs scientifiques et technologiques",description:"Développement technologique, prototypage et évaluation de la commercialisation."},{title:"Entreprises technologiques et industrielles",description:"Intégration de systèmes, co-développement et chaîne d’approvisionnement."},{title:"Investisseurs et fonds d’innovation",description:"Étude d’opportunités d’investissement et de financement du développement."},{title:"Partenaires internationaux",description:"Recherche, ingénierie et développement technologique dans un cadre convenu."}]
  },
  es: {
    pageTitle:"Colabora con Keyhan",intro:"Conversemos sobre investigación, ingeniería, desarrollo conjunto y retos industriales o tecnológicos.",note:"Estas son áreas potenciales de colaboración. No implican contratos existentes, socios oficiales ni capacidad de servicio verificada.",pathwaysTitle:"Vías de colaboración",processTitle:"Revisión de una solicitud de colaboración",process:["Compartir el problema, el objetivo y el contexto inicial","Revisar el encaje y los requisitos","Definir el alcance y la viabilidad","Preparar una propuesta técnica y comercial","Acordar, ejecutar y validar"],contactCta:"Contactar con la empresa",pathways:[{title:"Universidades y centros de investigación",description:"Investigación conjunta, proyectos científicos, intercambio de conocimiento y validación."},{title:"Industria y organismos públicos",description:"Definición de problemas, análisis de ingeniería y desarrollo de soluciones."},{title:"Parques científicos y tecnológicos",description:"Desarrollo tecnológico, prototipos y evaluación de comercialización."},{title:"Empresas tecnológicas e industriales",description:"Integración de sistemas, desarrollo conjunto y colaboración en la cadena de suministro."},{title:"Inversores y fondos de innovación",description:"Evaluación de inversión tecnológica y financiación del desarrollo."},{title:"Socios internacionales",description:"Investigación, ingeniería y desarrollo tecnológico bajo marcos acordados."}]
  }
};
