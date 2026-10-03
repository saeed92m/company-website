import type { Locale } from "../data/locales";

export type CEOContent = {
  name:string; role:string; summary:string;
  education:{degree:string;field:string;institution:string;years:string}[];
  expertise:string[];
  experience:{role:string;organization:string;period:string;summary:string}[];
  selectedProjects:{name:string;period:string;summary:string}[];
};

export const ceo: Record<Locale, CEOContent> = {
  fa:{
    name:"سعید معمارزاده",role:"بنیانگذار و مدیرعامل",
    summary:"کارآفرین و مهندس با پیشینه مهندسی مکانیک و مهندسی هوافضا و رویکرد حرفه‌ای مبتنی بر تحقیق و توسعه، نوآوری و پیوند میان دانش نظری و راهکارهای عملی صنعتی.",
    education:[
      {degree:"کارشناسی مهندسی مکانیک",field:"حرارت و سیالات",institution:"دانشگاه سراسری تبریز",years:"2012–2017"},
      {degree:"کارشناسی ارشد مهندسی هوافضا",field:"مهندسی فضایی",institution:"دانشگاه سراسری تبریز",years:"2018–2020"}
    ],
    expertise:["تحقیق و توسعه","هوافضا و سامانه‌های فضایی","نجوم و ستاره‌شناسی","سنجش از دور","هوش مصنوعی و برنامه‌نویسی","طراحی نیروگاه خورشیدی","موتوراسپرت و قطعات Performance","مدیریت پروژه و راه‌اندازی کسب‌وکار"],
    experience:[
      {role:"بنیانگذار و مدیرعامل",organization:"شرکت پیشگامان نواندیش فناورگستر کیهان",period:"Aug 2023–present",summary:"توسعه استراتژی‌های تحقیق و توسعه، مدیریت تیم، شبکه‌سازی و پیشبرد پروژه‌های ایده‌محور و فناورانه."},
      {role:"عضو هیئت‌مدیره و مدیر تولید محتوا",organization:"شرکت رهپویان اطلس آسمان",period:"2018–2019",summary:"تولید محتوا، آموزش و ارائه راهکارهای نوآورانه در راستای تحقیق و توسعه و توسعه شبکه ارتباطی."}
    ],
    selectedProjects:[
      {name:"CanSat",period:"2024",summary:"مشارکت تیم Alpha Team در پروژه طراحی و ساخت CanSat با مأموریت سنجشی-ارتباطی."},
      {name:"CubeSat",period:"2023",summary:"مشارکت تیم Alpha Team در طراحی و ساخت CubeSat نوع 1U برای مأموریت سنجشی-ارتباطی."},
      {name:"CBS",period:"2020",summary:"هدایت تحلیل و زمان‌سنجی ستارگان دوتایی که به انتشار مقاله بین‌المللی انجامید."},
      {name:"Remote Sensing Projects",period:"2019",summary:"اجرای پروژه‌های تحلیلی با تصاویر ماهواره‌ای Landsat 8 و Sentinel-1/2."},
      {name:"Space Radiation & Earth Shielding Study",period:"2020–2021",summary:"تحلیل فوران‌های جرم تاجی خورشیدی (CME) و راهکارهای حفاظت از ماهواره‌ها و زیرساخت‌های فضایی."},
      {name:"APTO",period:"۲۰۱۹",summary:"همکاری با رصدخانه خواجه نصیرالدین طوسی دانشگاه تبریز در تحلیل داده‌های کلیدی اختفاهای قمری (Occultation)."}
    ]
  },
  en:{
    name:"Saeed Memarzadeh",role:"Founder & CEO",
    summary:"An entrepreneur and engineer with academic backgrounds in mechanical and aerospace engineering, focused on R&D, innovation and translating scientific knowledge into practical engineering solutions.",
    education:[{degree:"B.Sc. Mechanical Engineering",field:"Thermal & Fluids",institution:"University of Tabriz",years:"2012–2017"},{degree:"M.Sc. Aerospace Engineering",field:"Space Engineering",institution:"University of Tabriz",years:"2018–2020"}],
    expertise:["Research & development","Aerospace and space systems","Astronomy","Remote sensing","Artificial intelligence and programming","Solar power engineering","Motorsport and performance components","Project management and entrepreneurship"],
    experience:[{role:"Founder & CEO",organization:"Pishgaman Novandish Fannavargostar Keyhan",period:"Aug 2023–present",summary:"R&D strategy, team leadership, networking and delivery of technology-focused projects."},{role:"Board Member & Content Director",organization:"Rahpouyan Atlas Aseman",period:"2018–2019",summary:"Science communication, training, R&D strategy and industry networking."}],
    selectedProjects:[{name:"CanSat",period:"2024",summary:"Alpha Team participation in a CanSat project with a sensing-communications mission."},{name:"CubeSat",period:"2023",summary:"Alpha Team participation in a 1U CubeSat sensing-communications project."},{name:"CBS",period:"2020",summary:"Leadership of a binary-star timing and analysis project resulting in an international publication."},{name:"Remote Sensing Projects",period:"2019",summary:"Analytical projects using Landsat 8 and Sentinel-1/2 satellite imagery."},
      {name:"Space Radiation & Earth Shielding Study",period:"2020–2021",summary:"CME analysis and satellite-protection strategies for space-radiation and Earth-shielding research."},
      {name:"APTO",period:"2019",summary:"Collaboration with Khajeh Nasireddin Tusi Observatory, University of Tabriz, on lunar occultation analysis."}
    ]
  },
  ar:{
    name:"سعيد معمارزاده",role:"المؤسس والرئيس التنفيذي",summary:"رائد أعمال ومهندس بخلفية في الهندسة الميكانيكية وهندسة الفضاء، يركز على البحث والتطوير والابتكار وتحويل المعرفة العلمية إلى حلول هندسية عملية.",
    education:[{degree:"بكالوريوس هندسة ميكانيكية",field:"الحرارة والموائع",institution:"جامعة تبريز",years:"2012–2017"},{degree:"ماجستير هندسة الطيران والفضاء",field:"هندسة الفضاء",institution:"جامعة تبريز",years:"2018–2020"}],
    expertise:["البحث والتطوير","الفضاء والأنظمة الفضائية","علم الفلك","الاستشعار عن بُعد","الذكاء الاصطناعي والبرمجة","هندسة الطاقة الشمسية","رياضة المحركات ومكونات الأداء","إدارة المشاريع وريادة الأعمال"],
    experience:[{role:"المؤسس والرئيس التنفيذي",organization:"شركة بيشگامان نوانديش فناورگستر كيهان",period:"أغسطس 2023–الآن",summary:"تطوير استراتيجيات البحث والتطوير وقيادة الفرق والشبكات وتنفيذ المشاريع التقنية."}],
    selectedProjects:[{name:"CanSat",period:"2024–2025",summary:"مشاركة فريق Alpha Team في مشروع CanSat لمهام الاستشعار والاتصالات."},{name:"CubeSat",period:"2023",summary:"مشاركة فريق Alpha Team في مشروع CubeSat من نوع 1U."},
      {name:"Space Radiation & Earth Shielding Study",period:"2020–2021",summary:"تحليل CME واستراتيجيات حماية الأقمار الصناعية في أبحاث إشعاعات الفضاء وحماية الأرض."},
      {name:"APTO",period:"2019",summary:"التعاون مع مرصد خواجه نصير الدين الطوسي بجامعة تبريز في تحليل احتجابات القمر."}
    ]
  },
  ru:{
    name:"Саид Мемарзаде",role:"Основатель и генеральный директор",summary:"Предприниматель и инженер с образованием в области механики и аэрокосмической техники, ориентированный на исследования, разработки и практическую инженерную реализацию.",
    education:[{degree:"Бакалавр машиностроения",field:"Тепло- и гидродинамика",institution:"Тебризский университет",years:"2012–2017"},{degree:"Магистр аэрокосмической инженерии",field:"Космическая инженерия",institution:"Тебризский университет",years:"2018–2020"}],
    expertise:["НИОКР","Аэрокосмические системы","Астрономия","Дистанционное зондирование","ИИ и программирование","Солнечная энергетика","Автоспорт","Управление проектами и предпринимательство"],
    experience:[{role:"Основатель и генеральный директор",organization:"Pishgaman Novandish Fannavargostar Keyhan",period:"с августа 2023 г. — настоящее время",summary:"Стратегия НИОКР, управление командами и развитие технологических проектов."}],
    selectedProjects:[{name:"CanSat",period:"2024–2025",summary:"Участие Alpha Team в проекте CanSat для задач дистанционного зондирования и связи."},{name:"CubeSat",period:"2023",summary:"Участие Alpha Team в проекте CubeSat 1U."},
      {name:"Space Radiation & Earth Shielding Study",period:"2020–2021",summary:"Анализ CME и стратегий защиты спутников в исследованиях космической радиации и экранирования Земли."},
      {name:"APTO",period:"2019",summary:"Сотрудничество с обсерваторией Ходжа Насир ад-Дин Туси Университета Тебриза по анализу лунных покрытий."}
    ]
  },
  de:{
    name:"Saeed Memarzadeh",role:"Gründer und CEO",summary:"Unternehmer und Ingenieur mit Ausbildung in Maschinenbau und Luft- und Raumfahrttechnik, mit Fokus auf F&E, Innovation und praktische technische Lösungen.",
    education:[{degree:"B.Sc. Maschinenbau",field:"Thermo- und Fluidtechnik",institution:"Universität Täbris",years:"2012–2017"},{degree:"M.Sc. Luft- und Raumfahrttechnik",field:"Raumfahrttechnik",institution:"Universität Täbris",years:"2018–2020"}],
    expertise:["Forschung und Entwicklung","Luft- und Raumfahrtsysteme","Astronomie","Fernerkundung","KI und Programmierung","Solarenergie","Motorsport","Projektmanagement und Unternehmertum"],
    experience:[{role:"Gründer und CEO",organization:"Pishgaman Novandish Fannavargostar Keyhan",period:"seit August 2023",summary:"F&E-Strategie, Teamführung, Netzwerke und technologieorientierte Projekte."}],
    selectedProjects:[{name:"CanSat",period:"2024–2025",summary:"Beteiligung des Alpha Teams an einem CanSat-Projekt für Fernerkundung und Kommunikation."},{name:"CubeSat",period:"2023",summary:"Beteiligung des Alpha Teams an einem 1U-CubeSat-Projekt."},
      {name:"Space Radiation & Earth Shielding Study",period:"2020–2021",summary:"CME-Analyse und Strategien zum Satellitenschutz im Rahmen der Forschung zu Weltraumstrahlung und Erdabschirmung."},
      {name:"APTO",period:"2019",summary:"Zusammenarbeit mit dem Khajeh-Nasireddin-Tusi-Observatorium der Universität Täbris zur Analyse von Mondbedeckungen."}
    ]
  },
  zh:{
    name:"Saeed Memarzadeh",role:"创始人兼首席执行官",summary:"具有机械工程和航空航天工程背景的企业家与工程师，专注于研发、创新以及将科学知识转化为工程解决方案。",
    education:[{degree:"机械工程学士",field:"热能与流体",institution:"大不里士大学",years:"2012–2017"},{degree:"航空航天工程硕士",field:"空间工程",institution:"大不里士大学",years:"2018–2020"}],
    expertise:["研发","航空航天与空间系统","天文学","遥感","人工智能与编程","太阳能工程","赛车运动","项目管理与创业"],
    experience:[{role:"创始人兼首席执行官",organization:"Pishgaman Novandish Fannavargostar Keyhan",period:"2023年8月至今",summary:"负责研发战略、团队管理、产业网络与技术项目推进。"}],
    selectedProjects:[{name:"CanSat",period:"2024–2025",summary:"Alpha Team 参与面向遥感与通信任务的 CanSat 项目。"},{name:"CubeSat",period:"2023",summary:"Alpha Team 参与 1U CubeSat 遥感通信项目。"},
      {name:"Space Radiation & Earth Shielding Study",period:"2020–2021",summary:"开展CME分析及卫星防护策略研究，聚焦空间辐射与地球屏蔽。" },
      {name:"APTO",period:"2019",summary:"与大不里士大学 Khajeh Nasireddin Tusi 天文台合作开展月掩星分析。" }
    ]
  },
  fr:{
    name:"Saeed Memarzadeh",role:"Fondateur et PDG",summary:"Entrepreneur et ingénieur formé en génie mécanique et aérospatial, spécialisé dans la R&D, l'innovation et la mise en œuvre de solutions d'ingénierie.",
    education:[{degree:"Licence en génie mécanique",field:"Thermique et fluides",institution:"Université de Tabriz",years:"2012–2017"},{degree:"Master en génie aérospatial",field:"Ingénierie spatiale",institution:"Université de Tabriz",years:"2018–2020"}],
    expertise:["Recherche et développement","Systèmes aérospatiaux","Astronomie","Télédétection","IA et programmation","Énergie solaire","Sport automobile","Gestion de projets et entrepreneuriat"],
    experience:[{role:"Fondateur et PDG",organization:"Pishgaman Novandish Fannavargostar Keyhan",period:"depuis août 2023",summary:"Stratégie R&D, direction d'équipe, développement de réseaux et projets technologiques."}],
    selectedProjects:[{name:"CanSat",period:"2024–2025",summary:"Participation de l'Alpha Team à un projet CanSat de télédétection et communication."},{name:"CubeSat",period:"2023",summary:"Participation de l'Alpha Team à un projet CubeSat 1U."},
      {name:"Space Radiation & Earth Shielding Study",period:"2020–2021",summary:"Analyse des CME et stratégies de protection des satellites dans le cadre de recherches sur les rayonnements spatiaux."},
      {name:"APTO",period:"2019",summary:"Collaboration avec l’Observatoire Khajeh Nasireddin Tusi de l’Université de Tabriz pour l’analyse des occultations lunaires."}
    ]
  },
  es:{
    name:"Saeed Memarzadeh",role:"Fundador y CEO",summary:"Emprendedor e ingeniero con formación en ingeniería mecánica y aeroespacial, centrado en I+D, innovación y soluciones de ingeniería aplicadas.",
    education:[{degree:"Grado en Ingeniería Mecánica",field:"Térmica y Fluidos",institution:"Universidad de Tabriz",years:"2012–2017"},{degree:"Máster en Ingeniería Aeroespacial",field:"Ingeniería Espacial",institution:"Universidad de Tabriz",years:"2018–2020"}],
    expertise:["Investigación y desarrollo","Sistemas aeroespaciales","Astronomía","Teledetección","IA y programación","Energía solar","Motorsport","Gestión de proyectos y emprendimiento"],
    experience:[{role:"Fundador y CEO",organization:"Pishgaman Novandish Fannavargostar Keyhan",period:"desde agosto de 2023",summary:"Estrategia de I+D, liderazgo de equipos, redes y proyectos tecnológicos."}],
    selectedProjects:[{name:"CanSat",period:"2024–2025",summary:"Participación de Alpha Team en un proyecto CanSat de teledetección y comunicaciones."},{name:"CubeSat",period:"2023",summary:"Participación de Alpha Team en un proyecto CubeSat 1U."},
      {name:"Space Radiation & Earth Shielding Study",period:"2020–2021",summary:"Análisis de CME y estrategias de protección de satélites en estudios de radiación espacial y blindaje terrestre."},
      {name:"APTO",period:"2019",summary:"Colaboración con el Observatorio Khajeh Nasireddin Tusi de la Universidad de Tabriz en el análisis de ocultaciones lunares."}
    ],
  }
};
