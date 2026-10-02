import type { Locale } from "../data/locales";

export type Field = {
  slug:string;
  title:string;
  summary:string;
  capabilities:string[];
};

type SiteContent = {
  companyName:string;
  founded:string;
  location:string;
  founder:string;
  tagline:string;
  intro:string;
  fields:Field[];
  projects:{title:string;summary:string}[];
  navigation:{company:string;fields:string;projects:string;contact:string};
};

export const content: Record<Locale, SiteContent> = {
  fa:{
    companyName:"شرکت پیشگامان نواندیش فناورگستر کیهان (مسئولیت محدود)",
    founded:"تأسیس ۱۴۰۲",
    location:"تبریز",
    founder:"بنیانگذار و مدیرعامل: سعید معمارزاده",
    tagline:"خلق آینده با نوآوری، تحقیق و توسعه",
    intro:"یک شرکت فناوری و تحقیق‌وتوسعه با تمرکز بر راهکارهای علمی، مهندسی و فناورانه در شش حوزه نجوم، هوافضا، سنجش از دور، انرژی، هوش مصنوعی و موتوراسپرت.",
    fields:[
      {slug:"astronomy",title:"نجوم",summary:"توسعه زیرساخت‌ها و سامانه‌های رصدی و داده‌محور برای پژوهش و اکتشاف نجومی.",capabilities:["طراحی و ساخت تلسکوپ‌های ماژولار رصدخانه‌ای و آماتوری","پایگاه داده و زیرساخت اطلاعات نجومی","پروژه‌های تحقیقاتی نجومی","اشتراک‌گذاری اطلاعات جامع رصدخانه‌ای در قالب شبکه یکپارچه"]},
      {slug:"aerospace",title:"هوافضا",summary:"طراحی و توسعه سامانه‌ها، زیرسامانه‌ها و فناوری‌های فضایی.",capabilities:["طراحی و ساخت ماهواره","طراحی و ساخت موشک ماهواره‌بر","مکانیزم‌های فضایی و واحدهای کنترل سامانه‌های فضایی","پیشرانه‌های فضایی","کپسول‌های زیستی فضایی"]},
      {slug:"remote-sensing",title:"سنجش از دور",summary:"تحلیل هوشمند داده‌های ماهواره‌ای برای پایش زمین، مدیریت منابع و تصمیم‌سازی.",capabilities:["آنالیز و تحلیل داده‌های ماهواره‌ای","پایش هوشمند سیل، زلزله، آتش‌سوزی، خشک‌سالی و بلایای طبیعی","بانک داده به‌روز برای کشاورزی، صنایع و معادن، غذا و دارو","راهکارهای داده‌محور برای مدیریت شهری و بهره‌وری منابع"]},
      {slug:"energy",title:"انرژی",summary:"توسعه زیرساخت‌ها و سامانه‌های تولید و تأمین انرژی با تمرکز بر منابع تجدیدپذیر.",capabilities:["طراحی و ساخت مزرعه انرژی","اجرای نیروگاه‌های برق خورشیدی، بادی و ترکیبی","ساخت پنل‌های خورشیدی برای سامانه‌های فضایی"]},
      {slug:"artificial-intelligence",title:"هوش مصنوعی",summary:"به‌کارگیری هوش مصنوعی برای خودکارسازی، تحلیل، شبیه‌سازی و بهینه‌سازی سامانه‌های پیچیده.",capabilities:["اتوماسیون و هوشمندسازی سامانه‌های نجومی مانند تلسکوپ‌های اپتیکی و رادیویی","تحلیل Big Data","شبیه‌سازی و مدیریت پروژه‌های فضایی بدون دخالت انسان","کنترل و بهینه‌سازی هوشمند فعالیت نیروگاه‌ها"]},
      {slug:"motorsport",title:"موتوراسپرت",summary:"مهندسی سامانه‌های عملکردی خودرو و توسعه فناوری‌های مرتبط با موتوراسپرت.",capabilities:["مهندسی قطعات High-Performance خودرویی","مهندسی کیت‌های آیرودینامیک بدنه","مهندسی و طراحی موتورهای احتراق داخلی و احتراق خارجی","مهندسی سیستم‌های سوخت ترکیبی (Hybrid) و سیستم‌های پرخوران"]}
    ],
    projects:[
      {title:"Alpha Linux",summary:"سیستم‌عامل و پلتفرم ورک‌استیشن AI-native در حال توسعه."},
      {title:"ZTF Classifier",summary:"پلتفرم تحلیل و کشف داده‌های نجومی در حال توسعه."}
    ],
    navigation:{company:"شرکت",fields:"حوزه‌های فعالیت",projects:"پروژه‌ها",contact:"ارتباط با ما"}
  },
  en:{
    companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"Founded 1402",location:"Tabriz",founder:"Founder & CEO: Saeed Memarzadeh",tagline:"Creating the future through innovation, research and development",intro:"An R&D-driven technology company working across astronomy, aerospace, remote sensing, energy, artificial intelligence and motorsport.",fields:[
      {slug:"astronomy",title:"Astronomy",summary:"Observational and data-driven infrastructure for astronomical research and discovery.",capabilities:["Modular observatory and amateur telescope design and manufacturing","Astronomical databases and information infrastructure","Astronomical research projects","Integrated sharing of comprehensive observatory information"]},
      {slug:"aerospace",title:"Aerospace",summary:"Design and development of space systems, subsystems and technologies.",capabilities:["Satellite design and manufacturing","Launch vehicle design and development","Space mechanisms and control units","Space propulsion systems","Space bio-capsules"]},
      {slug:"remote-sensing",title:"Remote Sensing",summary:"Intelligent satellite-data analysis for Earth observation, resource management and decision support.",capabilities:["Satellite data analysis","Intelligent monitoring of floods, earthquakes, wildfires, drought and natural disasters","Up-to-date data banks for agriculture, industry and mining, food and pharmaceuticals","Data-driven urban management and resource efficiency"]},
      {slug:"energy",title:"Energy",summary:"Development of energy-generation infrastructure with an emphasis on renewable sources.",capabilities:["Energy-farm design and construction","Solar, wind and hybrid power plants","Solar panels for space systems"]},
      {slug:"artificial-intelligence",title:"Artificial Intelligence",summary:"AI for automation, analysis, simulation and optimization of complex systems.",capabilities:["Automation and intelligent control of astronomical systems such as optical and radio telescopes","Big-data analysis","Autonomous simulation and management of space projects","Intelligent control and optimization of power-plant operations"]},
      {slug:"motorsport",title:"Motorsport",summary:"Engineering of vehicle performance systems and motorsport technologies.",capabilities:["High-performance automotive component engineering","Body aerodynamic kit engineering","Internal- and external-combustion engine engineering and design","Hybrid fuel-system and forced-induction engineering"]}
    ],projects:[{title:"Alpha Linux",summary:"An AI-native workstation platform under development."},{title:"ZTF Classifier",summary:"An astronomical data analysis and discovery platform under development."}],navigation:{company:"Company",fields:"Fields",projects:"Projects",contact:"Contact"}
  },
  ar:{
    companyName:"شركة بيشگامان نوانديش فناورگستر كيهان (ذات مسؤولية محدودة)",founded:"تأسست عام 1402",location:"تبريز",founder:"المؤسس والرئيس التنفيذي: سعيد معمارزاده",tagline:"صناعة المستقبل بالابتكار والبحث والتطوير",intro:"شركة تكنولوجية قائمة على البحث والتطوير تعمل في مجالات علم الفلك والفضاء والاستشعار عن بُعد والطاقة والذكاء الاصطناعي ورياضة المحركات.",fields:[
      {slug:"astronomy",title:"علم الفلك",summary:"تطوير بنى رصدية وبنى بيانات للبحث والاكتشاف الفلكي.",capabilities:["تصميم وتصنيع التلسكوبات المعيارية للرصد والمستخدمين الهواة","قواعد بيانات وبنية معلومات فلكية","مشاريع بحثية فلكية","مشاركة معلومات المراصد ضمن شبكة متكاملة"]},
      {slug:"aerospace",title:"الفضاء والطيران",summary:"تصميم وتطوير الأنظمة والأنظمة الفرعية والتقنيات الفضائية.",capabilities:["تصميم وتصنيع الأقمار الصناعية","تصميم وتطوير مركبات الإطلاق","الآليات الفضائية ووحدات التحكم","أنظمة الدفع الفضائي","الكبسولات الحيوية الفضائية"]},
      {slug:"remote-sensing",title:"الاستشعار عن بُعد",summary:"تحليل ذكي للبيانات الفضائية لمراقبة الأرض وإدارة الموارد.",capabilities:["تحليل بيانات الأقمار الصناعية","المراقبة الذكية للفيضانات والزلازل والحرائق والجفاف والكوارث الطبيعية","قواعد بيانات محدثة للزراعة والصناعة والتعدين والغذاء والدواء","حلول قائمة على البيانات للإدارة الحضرية وكفاءة الموارد"]},
      {slug:"energy",title:"الطاقة",summary:"تطوير بنى وأنظمة إنتاج الطاقة مع التركيز على المصادر المتجددة.",capabilities:["تصميم وإنشاء مزارع الطاقة","تنفيذ محطات شمسية وريحية وهجينة","تصنيع الألواح الشمسية للأنظمة الفضائية"]},
      {slug:"artificial-intelligence",title:"الذكاء الاصطناعي",summary:"استخدام الذكاء الاصطناعي للأتمتة والتحليل والمحاكاة والتحسين.",capabilities:["أتمتة الأنظمة الفلكية مثل التلسكوبات البصرية والراديوية","تحليل البيانات الضخمة","محاكاة وإدارة المشاريع الفضائية بشكل مستقل","التحكم الذكي في عمليات محطات الطاقة وتحسينها"]},
      {slug:"motorsport",title:"رياضة المحركات",summary:"هندسة أنظمة أداء المركبات وتقنيات رياضة المحركات.",capabilities:["هندسة مكونات السيارات عالية الأداء","هندسة أطقم الديناميكا الهوائية للهيكل","هندسة وتصميم محركات الاحتراق الداخلي والخارجي","هندسة أنظمة الوقود الهجينة وأنظمة الشحن القسري"]}
    ],projects:[{title:"Alpha Linux",summary:"منصة محطة عمل AI-native قيد التطوير."},{title:"ZTF Classifier",summary:"منصة لتحليل واكتشاف البيانات الفلكية قيد التطوير."}],navigation:{company:"الشركة",fields:"مجالات النشاط",projects:"المشاريع",contact:"اتصل بنا"}
  },
  ru:{
    companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"Основана в 1402 году",location:"Тебриз",founder:"Основатель и генеральный директор: Саид Мемарзаде",tagline:"Создаём будущее посредством инноваций, исследований и разработок",intro:"Научно-инженерная технологическая компания, работающая в области астрономии, аэрокосмических технологий, дистанционного зондирования, энергетики, искусственного интеллекта и автоспорта.",fields:[],projects:[{title:"Alpha Linux",summary:"AI-native рабочая платформа в разработке."},{title:"ZTF Classifier",summary:"Платформа анализа и исследования астрономических данных в разработке."}],navigation:{company:"Компания",fields:"Направления",projects:"Проекты",contact:"Контакты"}
  },
  de:{
    companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"Gegründet 1402",location:"Täbris",founder:"Gründer und CEO: Saeed Memarzadeh",tagline:"Die Zukunft durch Innovation, Forschung und Entwicklung gestalten",intro:"Ein technologieorientiertes F&E-Unternehmen in den Bereichen Astronomie, Luft- und Raumfahrt, Fernerkundung, Energie, künstliche Intelligenz und Motorsport.",fields:[],projects:[{title:"Alpha Linux",summary:"Eine AI-native Workstation-Plattform in Entwicklung."},{title:"ZTF Classifier",summary:"Eine Plattform zur Analyse und Erforschung astronomischer Daten in Entwicklung."}],navigation:{company:"Unternehmen",fields:"Bereiche",projects:"Projekte",contact:"Kontakt"}
  },
  zh:{
    companyName:"Pishgaman Novandish Fannavargostar Keyhan 有限责任公司",founded:"成立于 1402 年",location:"大不里士",founder:"创始人兼首席执行官：Saeed Memarzadeh",tagline:"以创新、研究与开发创造未来",intro:"一家以研发为核心的科技公司，业务涵盖天文学、航空航天、遥感、能源、人工智能和赛车运动。",fields:[],projects:[{title:"Alpha Linux",summary:"正在开发的 AI-native 工作站平台。"},{title:"ZTF Classifier",summary:"正在开发的天文数据分析与发现平台。"}],navigation:{company:"公司",fields:"业务领域",projects:"项目",contact:"联系我们"}
  },
  fr:{
    companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"Fondée en 1402",location:"Tabriz",founder:"Fondateur et PDG : Saeed Memarzadeh",tagline:"Créer l'avenir par l'innovation, la recherche et le développement",intro:"Une entreprise technologique axée sur la R&D, active dans l'astronomie, l'aérospatiale, la télédétection, l'énergie, l'intelligence artificielle et le sport automobile.",fields:[],projects:[{title:"Alpha Linux",summary:"Plateforme de station de travail AI-native en développement."},{title:"ZTF Classifier",summary:"Plateforme d'analyse et de découverte de données astronomiques en développement."}],navigation:{company:"Entreprise",fields:"Domaines",projects:"Projets",contact:"Contact"}
  },
  es:{
    companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"Fundada en 1402",location:"Tabriz",founder:"Fundador y CEO: Saeed Memarzadeh",tagline:"Crear el futuro mediante la innovación, la investigación y el desarrollo",intro:"Una empresa tecnológica orientada a I+D que trabaja en astronomía, aeroespacial, teledetección, energía, inteligencia artificial y motorsport.",fields:[],projects:[{title:"Alpha Linux",summary:"Plataforma de estación de trabajo AI-native en desarrollo."},{title:"ZTF Classifier",summary:"Plataforma de análisis y descubrimiento de datos astronómicos en desarrollo."}],navigation:{company:"Empresa",fields:"Áreas",projects:"Proyectos",contact:"Contacto"}
  }
};
