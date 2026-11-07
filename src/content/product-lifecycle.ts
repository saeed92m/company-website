import type { Locale } from "../data/locales";

type Stage = { title: string; description: string };
type LifecycleCopy = { pageTitle: string; intro: string; note: string; gateLabel: string; steps: Stage[] };

export const productLifecycle: Record<Locale, LifecycleCopy> = {
  fa: {
    pageTitle: "از پژوهش تا محصول",
    intro: "چرخه توسعه محصول، پژوهش و تعریف مسئله را به طراحی، ساخت، اعتبارسنجی، استقرار و پشتیبانی متصل می‌کند.",
    note: "هر مرحله باید معیار پذیرش و شواهد قابل بررسی داشته باشد. ساخت نمونه اولیه به معنی آماده‌بودن محصول برای فروش نیست.",
    gateLabel: "دروازه تصمیم و پذیرش",
    steps: [
      {title:"تحقیق و کشف",description:"تحقیق، شناسایی مسئله، نیاز ذی‌نفعان و فرصت توسعه."},
      {title:"امکان‌سنجی",description:"ارزیابی فنی، مالی، حقوقی، عملیاتی و تجاری."},
      {title:"تعریف محصول",description:"نیازمندی‌ها، PRD، محدوده، اولویت‌ها و معیارهای پذیرش."},
      {title:"معماری و طراحی",description:"معماری سامانه، طراحی مهندسی، رابط‌ها و تحلیل ریسک."},
      {title:"توسعه و نمونه‌سازی",description:"توسعه نرم‌افزار، سخت‌افزار، داده و مدل‌ها؛ ساخت نمونه قابل آزمون."},
      {title:"تأیید و اعتبارسنجی",description:"آزمون، امنیت، ارزیابی فنی و علمی و بررسی معیارهای پذیرش."},
      {title:"پایلوت و استقرار",description:"اجرای محدود، پایش، رفع اشکال و استقرار کنترل‌شده."},
      {title:"تجاری‌سازی",description:"مدل درآمد، قیمت‌گذاری، فروش، مجوزها و قراردادها."},
      {title:"موفقیت مشتری و چرخه عمر",description:"پشتیبانی، نگهداری، بازخورد و توسعه مستمر محصول."}
    ]
  },
  en: {
    pageTitle: "From Research to Product",
    intro: "The product lifecycle connects discovery and problem definition to engineering, validation, deployment, and customer support.",
    note: "Every stage requires acceptance criteria and reviewable evidence. A prototype is not a product ready for sale.",
    gateLabel: "Stage gate",
    steps: [
      {title:"Research & Discovery",description:"Research the problem, stakeholder needs, and development opportunity."},
      {title:"Feasibility Study",description:"Assess technical, financial, legal, operational, and commercial feasibility."},
      {title:"Product Definition",description:"Define requirements, PRD, scope, priorities, and acceptance criteria."},
      {title:"Architecture & Design",description:"Define system architecture, engineering design, interfaces, and risks."},
      {title:"Development & Prototyping",description:"Develop software, hardware, data, and models; build a testable prototype."},
      {title:"Verification & Validation",description:"Test security and performance; evaluate technical and scientific requirements."},
      {title:"Pilot & Deployment",description:"Run a controlled pilot, monitor results, resolve issues, and deploy."},
      {title:"Commercialization",description:"Define revenue models, pricing, sales, licensing, and contracts."},
      {title:"Customer Success & Lifecycle",description:"Provide agreed support, maintenance, feedback loops, and continuous development."}
    ]
  },
  ar: {
    pageTitle:"من البحث إلى المنتج",intro:"تربط دورة حياة المنتج اكتشاف المشكلة وتعريفها بالهندسة والتحقق والنشر ودعم العملاء.",note:"تتطلب كل مرحلة معايير قبول وأدلة قابلة للمراجعة. النموذج الأولي ليس منتجاً جاهزاً للبيع.",gateLabel:"بوابة المرحلة",
    steps:[
      {title:"البحث والاكتشاف",description:"دراسة المشكلة واحتياجات أصحاب المصلحة وفرصة التطوير."},
      {title:"دراسة الجدوى",description:"تقييم الجدوى التقنية والمالية والقانونية والتشغيلية والتجارية."},
      {title:"تعريف المنتج",description:"تحديد المتطلبات ونطاق العمل والأولويات ومعايير القبول."},
      {title:"الهندسة والتصميم",description:"تحديد بنية النظام والتصميم الهندسي والواجهات والمخاطر."},
      {title:"التطوير والنمذجة",description:"تطوير البرمجيات والأجهزة والبيانات والنماذج وبناء نموذج قابل للاختبار."},
      {title:"التحقق والتصديق",description:"اختبار الأمن والأداء وتقييم المتطلبات التقنية والعلمية."},
      {title:"التجربة والنشر",description:"تنفيذ تجربة محدودة ومراقبة النتائج ومعالجة المشكلات والنشر المنضبط."},
      {title:"التسويق التجاري",description:"تحديد الإيرادات والأسعار والمبيعات والتراخيص والعقود."},
      {title:"نجاح العملاء ودورة الحياة",description:"الدعم المتفق عليه والصيانة والتغذية الراجعة والتطوير المستمر."}
    ]
  },
  ru: {
    pageTitle:"От исследования к продукту",intro:"Жизненный цикл продукта связывает исследование и определение задачи с инженерией, проверкой, внедрением и поддержкой клиентов.",note:"Каждый этап требует критериев приёмки и проверяемых доказательств. Прототип не является готовым к продаже продуктом.",gateLabel:"Контрольный этап",
    steps:[
      {title:"Исследование и поиск",description:"Изучение проблемы, потребностей заинтересованных сторон и возможностей."},
      {title:"Оценка осуществимости",description:"Техническая, финансовая, правовая, операционная и коммерческая оценка."},
      {title:"Определение продукта",description:"Требования, PRD, объём, приоритеты и критерии приёмки."},
      {title:"Архитектура и проектирование",description:"Архитектура системы, инженерный дизайн, интерфейсы и риски."},
      {title:"Разработка и прототипирование",description:"Разработка ПО, оборудования, данных и моделей; создание прототипа."},
      {title:"Верификация и валидация",description:"Испытания безопасности и характеристик, техническая и научная оценка."},
      {title:"Пилот и внедрение",description:"Ограниченный пилот, мониторинг, устранение проблем и контролируемое внедрение."},
      {title:"Коммерциализация",description:"Модель дохода, ценообразование, продажи, лицензии и договоры."},
      {title:"Успех клиентов и жизненный цикл",description:"Согласованная поддержка, обслуживание, обратная связь и развитие."}
    ]
  },
  de: {
    pageTitle:"Von der Forschung zum Produkt",intro:"Der Produktlebenszyklus verbindet Forschung und Problemdefinition mit Engineering, Validierung, Bereitstellung und Kundenbetreuung.",note:"Jede Phase benötigt Abnahmekriterien und prüfbare Nachweise. Ein Prototyp ist kein verkaufsfertiges Produkt.",gateLabel:"Phasenfreigabe",
    steps:[
      {title:"Research & Discovery",description:"Problem, Stakeholder-Bedarf und Entwicklungschancen untersuchen."},
      {title:"Machbarkeitsstudie",description:"Technische, finanzielle, rechtliche, operative und kommerzielle Machbarkeit bewerten."},
      {title:"Produktdefinition",description:"Anforderungen, PRD, Umfang, Prioritäten und Abnahmekriterien festlegen."},
      {title:"Architektur und Design",description:"Systemarchitektur, Engineering-Design, Schnittstellen und Risiken definieren."},
      {title:"Entwicklung und Prototyping",description:"Software, Hardware, Daten und Modelle entwickeln; einen testbaren Prototyp bauen."},
      {title:"Verifizierung und Validierung",description:"Sicherheit und Leistung testen sowie technische und wissenschaftliche Anforderungen bewerten."},
      {title:"Pilot und Bereitstellung",description:"Pilot durchführen, Ergebnisse überwachen, Probleme beheben und kontrolliert bereitstellen."},
      {title:"Kommerzialisierung",description:"Erlösmodelle, Preise, Vertrieb, Lizenzen und Verträge festlegen."},
      {title:"Customer Success und Lebenszyklus",description:"Vereinbarte Betreuung, Wartung, Feedback und kontinuierliche Weiterentwicklung."}
    ]
  },
  zh: {
    pageTitle:"从研究到产品",intro:"产品生命周期将研究与问题定义连接到工程设计、验证、部署和客户支持。",note:"每个阶段都必须有验收标准和可审查证据。原型不等于可销售产品。",gateLabel:"阶段评审",
    steps:[
      {title:"研究与发现",description:"研究问题、利益相关方需求和开发机会。"},
      {title:"可行性研究",description:"评估技术、财务、法律、运营和商业可行性。"},
      {title:"产品定义",description:"确定需求、PRD、范围、优先级和验收标准。"},
      {title:"架构与设计",description:"定义系统架构、工程设计、接口和风险。"},
      {title:"开发与原型",description:"开发软件、硬件、数据和模型，构建可测试原型。"},
      {title:"验证与确认",description:"测试安全性与性能，评估技术和科学要求。"},
      {title:"试点与部署",description:"开展受控试点、监测结果、解决问题并部署。"},
      {title:"商业化",description:"制定收入模式、定价、销售、许可和合同。"},
      {title:"客户成功与生命周期",description:"提供约定的支持、维护、反馈和持续开发。"}
    ]
  },
  fr: {
    pageTitle:"De la recherche au produit",intro:"Le cycle de vie du produit relie la découverte et la définition du problème à l’ingénierie, la validation, le déploiement et l’assistance client.",note:"Chaque étape exige des critères d’acceptation et des preuves vérifiables. Un prototype n’est pas un produit prêt à la vente.",gateLabel:"Jalon de validation",
    steps:[
      {title:"Recherche et découverte",description:"Étudier le problème, les besoins des parties prenantes et les possibilités."},
      {title:"Étude de faisabilité",description:"Évaluer la faisabilité technique, financière, juridique, opérationnelle et commerciale."},
      {title:"Définition du produit",description:"Définir les exigences, le PRD, le périmètre, les priorités et les critères d’acceptation."},
      {title:"Architecture et conception",description:"Définir l’architecture, la conception technique, les interfaces et les risques."},
      {title:"Développement et prototypage",description:"Développer logiciels, matériel, données et modèles ; construire un prototype testable."},
      {title:"Vérification et validation",description:"Tester la sécurité et les performances ; évaluer les exigences techniques et scientifiques."},
      {title:"Pilote et déploiement",description:"Mener un pilote contrôlé, suivre les résultats, corriger et déployer."},
      {title:"Commercialisation",description:"Définir revenus, prix, ventes, licences et contrats."},
      {title:"Réussite client et cycle de vie",description:"Assurer le support convenu, la maintenance, les retours et l’évolution continue."}
    ]
  },
  es: {
    pageTitle:"De la investigación al producto",intro:"El ciclo de vida del producto conecta la investigación y la definición del problema con la ingeniería, la validación, el despliegue y el soporte al cliente.",note:"Cada etapa requiere criterios de aceptación y evidencias revisables. Un prototipo no es un producto listo para vender.",gateLabel:"Puerta de etapa",
    steps:[
      {title:"Investigación y descubrimiento",description:"Investigar el problema, las necesidades de las partes interesadas y las oportunidades."},
      {title:"Estudio de viabilidad",description:"Evaluar la viabilidad técnica, financiera, legal, operativa y comercial."},
      {title:"Definición del producto",description:"Definir requisitos, PRD, alcance, prioridades y criterios de aceptación."},
      {title:"Arquitectura y diseño",description:"Definir arquitectura del sistema, diseño de ingeniería, interfaces y riesgos."},
      {title:"Desarrollo y prototipado",description:"Desarrollar software, hardware, datos y modelos; construir un prototipo comprobable."},
      {title:"Verificación y validación",description:"Probar seguridad y rendimiento; evaluar requisitos técnicos y científicos."},
      {title:"Piloto y despliegue",description:"Ejecutar un piloto controlado, supervisar resultados, resolver problemas y desplegar."},
      {title:"Comercialización",description:"Definir ingresos, precios, ventas, licencias y contratos."},
      {title:"Éxito del cliente y ciclo de vida",description:"Ofrecer soporte acordado, mantenimiento, retroalimentación y mejora continua."}
    ]
  }
};
