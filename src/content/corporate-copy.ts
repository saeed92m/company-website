import type { Locale } from "../data/locales";

type CorporateCopy = {
  homeHeroIntro: string;
  companyOverview: string[];
};

export const corporateCopy: Record<Locale, CorporateCopy> = {
  fa: {
    homeHeroIntro: "پیشگامان نواندیش فناورگستر کیهان یک مجموعه فناوری و تحقیق‌وتوسعه است که دانش علمی، تحلیل داده و مهندسی را به هم پیوند می‌دهد. تمرکز ما بر شناخت مسئله، طراحی راهکار و توسعه فناوری در شش حوزه تخصصی است؛ از نجوم و سامانه‌های هوافضایی تا سنجش از دور، انرژی، هوش مصنوعی و موتوراسپرت.",
    companyOverview: [
      "شرکت پیشگامان نواندیش فناورگستر کیهان با رویکردی پژوهش‌محور و مهندسی فعالیت می‌کند. هدف شرکت، ایجاد پیوند میان دانش علمی، توسعه فناوری و نیازهای واقعی صنعت و بازار است. در این رویکرد، شناخت دقیق مسئله، بررسی علمی، طراحی، تحلیل و توسعه راهکار، بخش‌های به‌هم‌پیوسته یک مسیر هستند.",
      "فعالیت شرکت شش حوزه را در بر می‌گیرد: نجوم، هوافضا، سنجش از دور، انرژی، هوش مصنوعی و موتوراسپرت. این حوزه‌ها دامنه‌ای از علوم پایه و مشاهده زمین تا سامانه‌های مهندسی، فناوری‌های انرژی و کاربردهای محاسباتی را پوشش می‌دهند. هر حوزه بر دانش و روش‌های تخصصی خود تکیه دارد و در عین حال می‌تواند از ظرفیت حوزه‌های دیگر بهره بگیرد.",
      "رویکرد شرکت، نگاه میان‌رشته‌ای به مسائل است. تحلیل داده، مدل‌سازی، طراحی سامانه، ارزیابی فنی و توسعه نرم‌افزار می‌توانند در کنار یکدیگر برای تبدیل یک نیاز یا ایده به مسیر پژوهش و راهکار مهندسی به کار روند. انتخاب روش و دامنه هر فعالیت باید بر اساس مسئله، شواهد فنی و منابع در دسترس انجام شود.",
      "پیشگامان نواندیش فناورگستر کیهان توسعه توانمندی‌ها و پروژه‌های خود را به‌صورت مرحله‌ای دنبال می‌کند. معرفی هر حوزه در این وب‌سایت، چارچوب فعالیت و زمینه‌های تخصصی مورد توجه شرکت را توضیح می‌دهد؛ این معرفی به‌تنهایی به معنی اجرای همه خدمات یا تکمیل همه فناوری‌های ذکرشده نیست."
    ]
  },
  en: {
    homeHeroIntro: "Pishgaman Novandish Fannavargostar Keyhan is an R&D-focused technology company that connects scientific knowledge, data analysis, and engineering. Its work spans six areas: astronomy, aerospace, remote sensing, energy, artificial intelligence, and motorsport.",
    companyOverview: [
      "Pishgaman Novandish Fannavargostar Keyhan is a research- and engineering-oriented technology company. Its purpose is to connect scientific knowledge and technology development with practical needs in industry and the market. Problem definition, scientific investigation, design, analysis, and solution development are treated as connected parts of this process.",
      "The company focuses on six areas: astronomy, aerospace, remote sensing, energy, artificial intelligence, and motorsport. Together, these areas cover topics from fundamental science and Earth observation to engineered systems, energy technologies, and computational applications. Each area draws on its own specialist methods and can also benefit from the capabilities of the others.",
      "The company's approach is interdisciplinary. Data analysis, modelling, system design, technical evaluation, and software development can be combined to turn a defined need or idea into a research path and an engineering solution. The method and scope of each activity must be selected according to the problem, technical evidence, and available resources.",
      "The company develops its capabilities and projects in stages. The descriptions on this website explain the areas of interest and technical scope of the company. They do not, by themselves, mean that every listed service is currently delivered or that every mentioned technology is complete."
    ]
  },
  ar: {
    homeHeroIntro: "شركة پيشگامان نوانديش فناورگستر كيهان هي شركة تقنية تركز على البحث والتطوير، وتربط المعرفة العلمية وتحليل البيانات بالهندسة. وتشمل مجالات عملها ستة تخصصات: علم الفلك، والطيران والفضاء، والاستشعار عن بعد، والطاقة، والذكاء الاصطناعي، ورياضة المحركات.",
    companyOverview: [
      "تعمل شركة پيشگامان نوانديش فناورگستر كيهان بوصفها شركة تقنية ذات توجه بحثي وهندسي. وتهدف إلى الربط بين المعرفة العلمية وتطوير التكنولوجيا والاحتياجات العملية للصناعة والسوق. ويشمل هذا النهج تحديد المشكلة، والبحث العلمي، والتصميم، والتحليل، وتطوير الحلول بوصفها مراحل مترابطة.",
      "تركز الشركة على ستة مجالات: علم الفلك، والطيران والفضاء، والاستشعار عن بعد، والطاقة، والذكاء الاصطناعي، ورياضة المحركات. وتغطي هذه المجالات موضوعات تمتد من العلوم الأساسية ورصد الأرض إلى الأنظمة الهندسية وتقنيات الطاقة والتطبيقات الحاسوبية. ويعتمد كل مجال على أساليبه المتخصصة، مع إمكانية الاستفادة من قدرات المجالات الأخرى.",
      "يعتمد نهج الشركة على العمل متعدد التخصصات. ويمكن الجمع بين تحليل البيانات والنمذجة وتصميم الأنظمة والتقييم الفني وتطوير البرمجيات لتحويل الاحتياجات أو الأفكار المحددة إلى مسارات بحثية وحلول هندسية. ويُحدد أسلوب العمل ونطاقه وفقاً للمشكلة والأدلة الفنية والموارد المتاحة.",
      "تعمل الشركة على تطوير قدراتها ومشروعاتها بصورة مرحلية. وتوضح صفحات هذا الموقع مجالات اهتمام الشركة ونطاقها التقني، ولا يعني ذكر أي خدمة أنها تُقدَّم حالياً أو أن جميع التقنيات المذكورة قد اكتملت."
    ]
  },
  ru: {
    homeHeroIntro: "Pishgaman Novandish Fannavargostar Keyhan — технологическая компания, ориентированная на исследования и разработки и объединяющая научные знания, анализ данных и инженерные методы. Её деятельность охватывает шесть направлений: астрономию, аэрокосмические технологии, дистанционное зондирование, энергетику, искусственный интеллект и автоспорт.",
    companyOverview: [
      "Pishgaman Novandish Fannavargostar Keyhan — технологическая компания с исследовательской и инженерной направленностью. Её цель — связывать научные знания и разработку технологий с практическими потребностями промышленности и рынка. Определение задачи, научное исследование, проектирование, анализ и разработка решений рассматриваются как взаимосвязанные этапы.",
      "Компания работает в шести направлениях: астрономия, аэрокосмические технологии, дистанционное зондирование, энергетика, искусственный интеллект и автоспорт. Они охватывают темы от фундаментальной науки и наблюдения Земли до инженерных систем, энергетических технологий и вычислительных приложений. Каждое направление использует собственные специализированные методы и может опираться на возможности других направлений.",
      "Подход компании основан на междисциплинарной работе. Анализ данных, моделирование, проектирование систем, техническая оценка и разработка программного обеспечения могут сочетаться для преобразования задачи или идеи в исследовательскую программу и инженерное решение. Методы и объём каждой работы определяются задачей, техническими доказательствами и доступными ресурсами.",
      "Компания развивает свои компетенции и проекты поэтапно. Описания на этом сайте раскрывают направления интересов и техническую область деятельности компании. Само по себе такое описание не означает, что все перечисленные услуги уже оказываются или все упомянутые технологии завершены."
    ]
  },
  de: {
    homeHeroIntro: "Pishgaman Novandish Fannavargostar Keyhan ist ein technologieorientiertes Forschungs- und Entwicklungsunternehmen, das wissenschaftliches Wissen, Datenanalyse und Ingenieurwesen verbindet. Die Arbeit umfasst sechs Bereiche: Astronomie, Luft- und Raumfahrt, Fernerkundung, Energie, künstliche Intelligenz und Motorsport.",
    companyOverview: [
      "Pishgaman Novandish Fannavargostar Keyhan ist ein technologieorientiertes Unternehmen mit Forschungs- und Ingenieurfokus. Ziel ist es, wissenschaftliche Erkenntnisse und Technologieentwicklung mit praktischen Anforderungen von Industrie und Markt zu verbinden. Problemdefinition, wissenschaftliche Untersuchung, Entwurf, Analyse und Lösungsentwicklung bilden dabei zusammenhängende Schritte.",
      "Das Unternehmen konzentriert sich auf sechs Bereiche: Astronomie, Luft- und Raumfahrt, Fernerkundung, Energie, künstliche Intelligenz und Motorsport. Sie reichen von Grundlagenwissenschaft und Erdbeobachtung bis zu technischen Systemen, Energietechnologien und computergestützten Anwendungen. Jeder Bereich nutzt eigene Fachmethoden und kann zugleich von den Kompetenzen der anderen Bereiche profitieren.",
      "Der Ansatz des Unternehmens ist interdisziplinär. Datenanalyse, Modellierung, Systementwurf, technische Bewertung und Softwareentwicklung können kombiniert werden, um einen konkreten Bedarf oder eine Idee in einen Forschungsweg und eine technische Lösung zu überführen. Methode und Umfang jeder Tätigkeit richten sich nach der Aufgabe, der technischen Evidenz und den verfügbaren Ressourcen.",
      "Das Unternehmen entwickelt seine Kompetenzen und Projekte schrittweise. Die Beschreibungen auf dieser Website erläutern die Interessengebiete und den technischen Rahmen des Unternehmens. Sie bedeuten nicht automatisch, dass jede aufgeführte Dienstleistung bereits angeboten wird oder jede genannte Technologie abgeschlossen ist."
    ]
  },
  zh: {
    homeHeroIntro: "Pishgaman Novandish Fannavargostar Keyhan 是一家以研发为导向的科技公司，将科学知识、数据分析与工程方法相结合。公司关注六个领域：天文学、航空航天、遥感、能源、人工智能和赛车运动。",
    companyOverview: [
      "Pishgaman Novandish Fannavargostar Keyhan 是一家注重研究与工程实践的科技公司。公司的目标是将科学知识和技术开发与工业及市场的实际需求联系起来。在这一过程中，问题定义、科学研究、设计、分析和解决方案开发构成相互关联的环节。",
      "公司的业务关注六个领域：天文学、航空航天、遥感、能源、人工智能和赛车运动。这些领域涵盖基础科学与地球观测、工程系统、能源技术以及计算应用。每个领域采用自身的专业方法，同时也可以借助其他领域的能力。",
      "公司的工作方式强调跨学科协作。数据分析、建模、系统设计、技术评估和软件开发可以结合使用，将明确的需求或想法转化为研究路径和工程解决方案。具体方法和工作范围应根据问题、技术证据及可用资源确定。",
      "公司以阶段性方式发展自身能力和项目。本网站中的介绍用于说明公司的关注领域和技术范围，并不表示所有列出的服务目前均已提供，也不表示所有相关技术均已完成。"
    ]
  },
  fr: {
    homeHeroIntro: "Pishgaman Novandish Fannavargostar Keyhan est une entreprise technologique axée sur la recherche et le développement, qui relie connaissances scientifiques, analyse de données et ingénierie. Ses activités couvrent six domaines : astronomie, aérospatiale, télédétection, énergie, intelligence artificielle et sport automobile.",
    companyOverview: [
      "Pishgaman Novandish Fannavargostar Keyhan est une entreprise technologique orientée vers la recherche et l’ingénierie. Elle vise à relier les connaissances scientifiques et le développement technologique aux besoins concrets de l’industrie et du marché. La définition du problème, l’étude scientifique, la conception, l’analyse et le développement de solutions sont considérés comme des étapes complémentaires.",
      "L’entreprise se concentre sur six domaines : astronomie, aérospatiale, télédétection, énergie, intelligence artificielle et sport automobile. Ces domaines vont des sciences fondamentales et de l’observation de la Terre aux systèmes techniques, aux technologies énergétiques et aux applications informatiques. Chacun mobilise ses méthodes spécialisées et peut également bénéficier des compétences des autres.",
      "L’approche de l’entreprise est interdisciplinaire. L’analyse de données, la modélisation, la conception de systèmes, l’évaluation technique et le développement logiciel peuvent être associés pour transformer un besoin ou une idée en démarche de recherche et en solution d’ingénierie. La méthode et le périmètre de chaque activité doivent être définis selon le problème, les éléments techniques disponibles et les ressources.",
      "L’entreprise développe ses compétences et ses projets par étapes. Les descriptions de ce site présentent ses domaines d’intérêt et son périmètre technique. Elles ne signifient pas, à elles seules, que tous les services cités sont actuellement proposés ni que toutes les technologies mentionnées sont achevées."
    ]
  },
  es: {
    homeHeroIntro: "Pishgaman Novandish Fannavargostar Keyhan es una empresa tecnológica centrada en I+D que conecta el conocimiento científico, el análisis de datos y la ingeniería. Su actividad abarca seis áreas: astronomía, aeroespacial, teledetección, energía, inteligencia artificial y motorsport.",
    companyOverview: [
      "Pishgaman Novandish Fannavargostar Keyhan es una empresa tecnológica con orientación a la investigación y la ingeniería. Su objetivo es conectar el conocimiento científico y el desarrollo tecnológico con las necesidades prácticas de la industria y del mercado. La definición del problema, la investigación científica, el diseño, el análisis y el desarrollo de soluciones forman parte de un proceso relacionado.",
      "La empresa se centra en seis áreas: astronomía, aeroespacial, teledetección, energía, inteligencia artificial y motorsport. Estas áreas abarcan desde las ciencias fundamentales y la observación de la Tierra hasta los sistemas de ingeniería, las tecnologías energéticas y las aplicaciones computacionales. Cada área utiliza métodos especializados y también puede aprovechar las capacidades de las demás.",
      "El enfoque de la empresa es interdisciplinario. El análisis de datos, la modelización, el diseño de sistemas, la evaluación técnica y el desarrollo de software pueden combinarse para convertir una necesidad o idea definida en una línea de investigación y una solución de ingeniería. El método y el alcance de cada actividad se determinan según el problema, la evidencia técnica y los recursos disponibles.",
      "La empresa desarrolla sus capacidades y proyectos por etapas. Las descripciones de este sitio explican sus áreas de interés y su ámbito técnico. No significan, por sí solas, que todos los servicios enumerados se presten actualmente ni que todas las tecnologías mencionadas estén terminadas."
    ]
  }
};
