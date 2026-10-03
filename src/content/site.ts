import type { Locale } from "../data/locales";
import { localizedFields } from "./localized-fields";

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
  navigation:{company:string;fields:string;projects:string;contact:string;ceo:string};
};

export const content: Record<Locale, SiteContent> = {
  fa:{
    companyName:"شرکت پیشگامان نواندیش فناورگستر کیهان (مسئولیت محدود)",
    founded:"2023",
    location:"تبریز، آذربایجان شرقی، ایران",
    founder:"بنیانگذار و مدیرعامل: سعید معمارزاده",
    tagline:"خلق آینده با نوآوری، تحقیق و توسعه",
    intro:"یک شرکت فناوری و تحقیق‌وتوسعه با تمرکز بر پیوند پژوهش علمی با کاربردهای صنعتی و بازار، در شش حوزه نجوم، هوافضا، سنجش از دور، انرژی، هوش مصنوعی و موتوراسپرت.",
    fields:[
      {slug:"astronomy",title:"نجوم",summary:"راهکارها و زیرساخت‌های رصدی و داده‌محور برای پژوهش و اکتشاف نجومی.",capabilities:["طراحی و ساخت تلسکوپ‌های اپتیکی و رادیویی، از مقیاس آماتور تا رصدخانه","پایگاه‌های داده و تحلیل داده‌های نجومی","پژوهش‌های نجومی","برگزاری دوره‌ها و سمینارهای آموزشی"]},
      {slug:"aerospace",title:"هوافضا",summary:"تحقیق و توسعه سامانه‌ها، زیرسامانه‌ها و فناوری‌های هوافضایی.",capabilities:["طراحی و ساخت کنست و کیوبست و شبکه‌های ماهواره‌ای","آیرودینامیک و کنترل","دینامیک فضایی و مداری","سامانه‌های فضایی، پهپادها و پیشرانش"]},
      {slug:"remote-sensing",title:"سنجش از دور",summary:"تحلیل تصاویر ماهواره‌ای راداری و اپتیکی برای پایش زمین و کاربردهای مهندسی.",capabilities:["تحلیل تصاویر ماهواره‌ای راداری و اپتیکی","پردازش داده‌های Landsat و Sentinel","پایش محیطی","کاربردهای کشاورزی دقیق"]},
      {slug:"energy",title:"انرژی",summary:"توسعه راهکارهای تولید و تأمین انرژی با تمرکز بر منابع تجدیدپذیر.",capabilities:["نیروگاه‌های برق خورشیدی خانگی و صنعتی","نیروگاه‌های بادی و هیبریدی خورشیدی-بادی","مزارع انرژی","پشتیبانی فنی صنایع نفت، گاز و پتروشیمی"]},
      {slug:"artificial-intelligence",title:"هوش مصنوعی",summary:"کاربرد هوش مصنوعی در مدیریت، اینترنت اشیا و حوزه‌های تخصصی شرکت.",capabilities:["مدیریت هوشمند","راهکارهای شهر هوشمند","کاربرد هوش مصنوعی در اینترنت اشیا (IoT)","کاربردهای هوش مصنوعی در سایر حوزه‌های فعالیت شرکت"]},
      {slug:"motorsport",title:"موتوراسپرت و قطعات پرفورمنس",summary:"حوزه توسعه‌ای شرکت برای مهندسی قطعات و فناوری‌های عملکردی مرتبط با خودرو و موتوراسپرت.",capabilities:["قطعات آیرودینامیک","قطعات پرفورمنس مکانیکی","اجزای توربوشارژر","قطعات مکانیکی پرفورمنس"]}
    ],
    projects:[
      {title:"Alpha Linux",summary:"پلتفرم ورک‌استیشن AI-native در حال توسعه."},
      {title:"ZTF Classifier",summary:"پلتفرم تحلیل و کشف داده‌های نجومی در حال توسعه."}
    ],
    navigation:{company:"شرکت",fields:"حوزه‌های فعالیت",projects:"پروژه‌ها",contact:"ارتباط با ما",ceo:"مدیریت"}
  },
  en:{
    companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",
    founded:"Founded in 2023",
    location:"Tabriz, East Azerbaijan, Iran",
    founder:"Founder & CEO: Saeed Memarzadeh",
    tagline:"Creating the future through innovation, research and development",
    intro:"An R&D-driven technology company connecting scientific research with industrial and market applications across six areas: astronomy, aerospace, remote sensing, energy, artificial intelligence, and motorsport.",
    fields:[
      {slug:"astronomy",title:"Astronomy",summary:"Observational and data-driven solutions for astronomical research and discovery.",capabilities:["Optical and radio telescope design and construction, from amateur to observatory scale","Astronomical databases and data analysis","Astronomical research","Training courses and seminars"]},
      {slug:"aerospace",title:"Aerospace",summary:"R&D in aerospace systems, subsystems and technologies.",capabilities:["CanSat, CubeSat and satellite-network design and construction","Aerodynamics and control","Space and orbital dynamics","Space systems, UAVs and propulsion"]},
      {slug:"remote-sensing",title:"Remote Sensing",summary:"Radar and optical satellite-image analysis for Earth observation and engineering applications.",capabilities:["Radar and optical satellite-image analysis","Landsat and Sentinel data processing","Environmental monitoring","Precision-agriculture applications"]},
      {slug:"energy",title:"Energy",summary:"Development of energy-generation and supply solutions with an emphasis on renewable sources.",capabilities:["Residential and industrial solar power plants","Wind and hybrid solar-wind power plants","Energy farms","Technical support for oil, gas and petrochemical industries"]},
      {slug:"artificial-intelligence",title:"Artificial Intelligence",summary:"AI applications in management, IoT and the company's technical domains.",capabilities:["Smart management","Smart-city solutions","AI applications in the Internet of Things (IoT)","AI applications across the company's other activity areas"]},
      {slug:"motorsport",title:"Motorsport & Performance Parts",summary:"A development area for engineering performance components and technologies related to vehicles and motorsport.",capabilities:["Aerodynamic components","Mechanical performance parts","Turbocharger components","Mechanical performance equipment"]}
    ],
    projects:[
      {title:"Alpha Linux",summary:"An AI-native workstation platform under development."},
      {title:"ZTF Classifier",summary:"An astronomical data analysis and discovery platform under development."}
    ],
    navigation:{company:"Company",fields:"Fields",projects:"Projects",contact:"Contact",ceo:"Management"}
  },
  ar:{
    companyName:"شركة بيشگامان نوانديش فناورگستر كيهان (ذات مسؤولية محدودة)",
    founded:"تأسست عام 1402",
    location:"تبريز، أذربيجان الشرقية، إيران",
    founder:"المؤسس والرئيس التنفيذي: سعيد معمارزاده",
    tagline:"صناعة المستقبل بالابتكار والبحث والتطوير",
    intro:"شركة تكنولوجية قائمة على البحث والتطوير تربط البحث العلمي بالتطبيقات الصناعية والسوقية في ستة مجالات: علم الفلك، والفضاء، والاستشعار عن بُعد، والطاقة، والذكاء الاصطناعي، ورياضة المحركات.",
    fields:[
      {slug:"astronomy",title:"علم الفلك",summary:"حلول وبنى رصدية قائمة على البيانات للبحث والاكتشاف الفلكي.",capabilities:["تصميم وبناء التلسكوبات البصرية والراديوية من مستوى الهواة إلى المراصد","قواعد البيانات وتحليل البيانات الفلكية","البحوث الفلكية","الدورات والندوات التعليمية"]},
      {slug:"aerospace",title:"الفضاء والطيران",summary:"البحث والتطوير في الأنظمة والأنظمة الفرعية والتقنيات الفضائية.",capabilities:["تصميم وبناء CanSat وCubeSat وشبكات الأقمار الصناعية","الديناميكا الهوائية والتحكم","الديناميكا الفضائية والمدارية","الأنظمة الفضائية والطائرات غير المأهولة والدفع"]},
      {slug:"remote-sensing",title:"الاستشعار عن بُعد",summary:"تحليل الصور الفضائية الرادارية والبصرية لمراقبة الأرض والتطبيقات الهندسية.",capabilities:["تحليل الصور الفضائية الرادارية والبصرية","معالجة بيانات Landsat وSentinel","المراقبة البيئية","تطبيقات الزراعة الدقيقة"]},
      {slug:"energy",title:"الطاقة",summary:"تطوير حلول إنتاج وتوفير الطاقة مع التركيز على المصادر المتجددة.",capabilities:["محطات الطاقة الشمسية المنزلية والصناعية","محطات الرياح والمحطات الهجينة الشمسية-الرياح","مزارع الطاقة","الدعم الفني لقطاعات النفط والغاز والبتروكيماويات"]},
      {slug:"artificial-intelligence",title:"الذكاء الاصطناعي",summary:"تطبيقات الذكاء الاصطناعي في الإدارة وإنترنت الأشياء ومجالات الشركة.",capabilities:["الإدارة الذكية","حلول المدن الذكية","تطبيقات الذكاء الاصطناعي في إنترنت الأشياء (IoT)","تطبيقات الذكاء الاصطناعي في مجالات الشركة الأخرى"]},
      {slug:"motorsport",title:"رياضة المحركات وقطع الأداء",summary:"مجال تطويري لهندسة مكونات وتقنيات الأداء المرتبطة بالمركبات ورياضة المحركات.",capabilities:["مكونات الديناميكا الهوائية","قطع الأداء الميكانيكية","مكونات الشحن التوربيني","معدات الأداء الميكانيكية"]}
    ],
    projects:[{title:"Alpha Linux",summary:"منصة محطة عمل AI-native قيد التطوير."},{title:"ZTF Classifier",summary:"منصة لتحليل واكتشاف البيانات الفلكية قيد التطوير."}],
    navigation:{company:"الشركة",fields:"مجالات النشاط",projects:"المشاريع",contact:"اتصل بنا",ceo:"الإدارة"}
  },
  ru:{companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"2023",location:"Тебриз, Восточный Азербайджан, Иран",founder:"Основатель и генеральный директор: Саид Мемарзаде",tagline:"Создаём будущее посредством инноваций, исследований и разработок",intro:"Научно-инженерная технологическая компания, связывающая научные исследования с промышленными и рыночными применениями в шести направлениях: астрономия, аэрокосмические технологии, дистанционное зондирование, энергетика, искусственный интеллект и автоспорт.",fields:[],projects:[{title:"Alpha Linux",summary:"AI-native рабочая платформа в разработке."},{title:"ZTF Classifier",summary:"Платформа анализа и исследования астрономических данных в разработке."}],navigation:{company:"Компания",fields:"Направления",projects:"Проекты",contact:"Контакты",ceo:"Руководство"}},
  de:{companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"2023",location:"Täbris, Ost-Aserbaidschan, Iran",founder:"Gründer und CEO: Saeed Memarzadeh",tagline:"Die Zukunft durch Innovation, Forschung und Entwicklung gestalten",intro:"Ein technologieorientiertes F&E-Unternehmen, das wissenschaftliche Forschung mit industriellen und marktbezogenen Anwendungen in sechs Bereichen verbindet: Astronomie, Luft- und Raumfahrt, Fernerkundung, Energie, künstliche Intelligenz und Motorsport.",fields:[],projects:[{title:"Alpha Linux",summary:"Eine AI-native Workstation-Plattform in Entwicklung."},{title:"ZTF Classifier",summary:"Eine Plattform zur Analyse und Erforschung astronomischer Daten in Entwicklung."}],navigation:{company:"Unternehmen",fields:"Bereiche",projects:"Projekte",contact:"Kontakt",ceo:"Management"}},
  zh:{companyName:"Pishgaman Novandish Fannavargostar Keyhan 有限责任公司",founded:"2023",location:"伊朗东阿塞拜疆省大不里士",founder:"创始人兼首席执行官：Saeed Memarzadeh",tagline:"以创新、研究与开发创造未来",intro:"一家以研发为核心的科技公司，将科学研究与产业及市场应用相结合，涵盖天文学、航空航天、遥感、能源、人工智能和赛车运动六个领域。",fields:[],projects:[{title:"Alpha Linux",summary:"正在开发的 AI-native 工作站平台。"},{title:"ZTF Classifier",summary:"正在开发的天文数据分析与发现平台。"}],navigation:{company:"公司",fields:"业务领域",projects:"项目",contact:"联系我们",ceo:"管理层"}},
  fr:{companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"2023",location:"Tabriz, Azerbaïdjan oriental, Iran",founder:"Fondateur et PDG : Saeed Memarzadeh",tagline:"Créer l'avenir par l'innovation, la recherche et le développement",intro:"Une entreprise technologique axée sur la R&D, reliant la recherche scientifique aux applications industrielles et commerciales dans six domaines : astronomie, aérospatiale, télédétection, énergie, intelligence artificielle et sport automobile.",fields:[],projects:[{title:"Alpha Linux",summary:"Plateforme de station de travail AI-native en développement."},{title:"ZTF Classifier",summary:"Plateforme d'analyse et de découverte de données astronomiques en développement."}],navigation:{company:"Entreprise",fields:"Domaines",projects:"Projets",contact:"Contact",ceo:"Direction"}},
  es:{companyName:"Pishgaman Novandish Fannavargostar Keyhan (Ltd.)",founded:"2023",location:"Tabriz, Azerbaiyán Oriental, Irán",founder:"Fundador y CEO: Saeed Memarzadeh",tagline:"Crear el futuro mediante la innovación, la investigación y el desarrollo",intro:"Una empresa tecnológica orientada a I+D que conecta la investigación científica con aplicaciones industriales y de mercado en seis áreas: astronomía, aeroespacial, teledetección, energía, inteligencia artificial y motorsport.",fields:[],projects:[{title:"Alpha Linux",summary:"Plataforma de estación de trabajo AI-native en desarrollo."},{title:"ZTF Classifier",summary:"Plataforma de análisis y descubrimiento de datos astronómicos en desarrollo."}],navigation:{company:"Empresa",fields:"Áreas",projects:"Proyectos",contact:"Contacto",ceo:"Dirección"}}
};

for (const [locale, fields] of Object.entries(localizedFields)) {
  if (fields && locale in content) content[locale as Locale].fields = fields;
}
