import type { Field } from "./site";
import type { Locale } from "../data/locales";

export const localizedFields: Partial<Record<Locale, Field[]>> = {
  ru:[
    {slug:"astronomy",title:"Астрономия",summary:"Решения для наблюдательной астрономии и исследований на основе данных.",capabilities:["Проектирование и производство модульных телескопов","Астрономические базы данных","Исследовательские астрономические проекты","Интегрированная сеть обмена данными об обсерваториях"]},
    {slug:"aerospace",title:"Аэрокосмические технологии",summary:"Проектирование космических систем, подсистем и технологий.",capabilities:["Спутники","Ракеты-носители","Космические механизмы и системы управления","Космические двигательные установки и биокапсулы"]},
    {slug:"remote-sensing",title:"Дистанционное зондирование",summary:"Интеллектуальный анализ спутниковых данных для наблюдения Земли.",capabilities:["Анализ спутниковых данных","Мониторинг наводнений, землетрясений, пожаров и засух","Актуальные базы данных для сельского хозяйства и промышленности","Городское управление и эффективность использования ресурсов"]},
    {slug:"energy",title:"Энергетика",summary:"Развитие инфраструктуры производства энергии на основе возобновляемых источников.",capabilities:["Проектирование энергетических ферм","Солнечные, ветровые и гибридные электростанции","Солнечные панели для космических систем"]},
    {slug:"artificial-intelligence",title:"Искусственный интеллект",summary:"ИИ для автоматизации, анализа, моделирования и оптимизации сложных систем.",capabilities:["Интеллектуальная автоматизация телескопов","Анализ больших данных","Автономное моделирование и управление космическими проектами","Интеллектуальная оптимизация электростанций"]},
    {slug:"motorsport",title:"Автоспорт",summary:"Инженерия высокопроизводительных автомобильных систем.",capabilities:["Компоненты High-Performance","Аэродинамические комплекты кузова","Двигатели внутреннего и внешнего сгорания","Гибридные топливные системы и системы наддува"]}
  ],
  de:[
    {slug:"astronomy",title:"Astronomie",summary:"Beobachtungs- und datenbasierte Lösungen für astronomische Forschung.",capabilities:["Entwicklung und Fertigung modularer Teleskope","Astronomische Datenbanken","Astronomische Forschungsprojekte","Integrierter Austausch von Observatoriumsdaten"]},
    {slug:"aerospace",title:"Luft- und Raumfahrt",summary:"Entwicklung von Raumfahrtsystemen, Subsystemen und Technologien.",capabilities:["Satellitenentwicklung und -fertigung","Entwicklung von Trägerraketen","Raumfahrtmechanismen und Steuerungseinheiten","Raumantriebe und biologische Raumkapseln"]},
    {slug:"remote-sensing",title:"Fernerkundung",summary:"Intelligente Analyse von Satellitendaten zur Erdbeobachtung.",capabilities:["Analyse von Satellitendaten","Intelligente Überwachung von Überschwemmungen, Erdbeben, Bränden und Dürren","Aktuelle Datenbanken für Landwirtschaft und Industrie","Stadtmanagement und Ressourceneffizienz"]},
    {slug:"energy",title:"Energie",summary:"Entwicklung von Energieinfrastruktur mit Schwerpunkt auf erneuerbaren Quellen.",capabilities:["Planung und Bau von Energieparks","Solar-, Wind- und Hybridkraftwerke","Solarmodule für Raumfahrtsysteme"]},
    {slug:"artificial-intelligence",title:"Künstliche Intelligenz",summary:"KI für Automatisierung, Analyse, Simulation und Optimierung komplexer Systeme.",capabilities:["Intelligente Automatisierung astronomischer Systeme","Big-Data-Analyse","Autonome Simulation und Verwaltung von Raumfahrtprojekten","Intelligente Kraftwerkssteuerung und -optimierung"]},
    {slug:"motorsport",title:"Motorsport",summary:"Engineering leistungsorientierter Fahrzeugsysteme und Motorsporttechnologien.",capabilities:["High-Performance-Fahrzeugkomponenten","Aerodynamische Karosseriekits","Verbrennungs- und externe Verbrennungsmotoren","Hybrid-Kraftstoffsysteme und Aufladung"]}
  ],
  zh:[
    {slug:"astronomy",title:"天文学",summary:"面向天文观测、研究与数据发现的基础设施和解决方案。",capabilities:["模块化天文台及业余望远镜设计与制造","天文数据库","天文学研究项目","一体化天文台信息共享网络"]},
    {slug:"aerospace",title:"航空航天",summary:"航天系统、子系统及相关技术的设计与开发。",capabilities:["卫星设计与制造","运载火箭设计与开发","空间机构与控制单元","空间推进系统与空间生物舱"]},
    {slug:"remote-sensing",title:"遥感",summary:"利用卫星数据进行智能地球观测与资源管理。",capabilities:["卫星数据分析","洪水、地震、火灾、干旱和自然灾害智能监测","面向农业、工业、矿业、食品和医药的更新数据平台","城市管理与资源利用效率"]},
    {slug:"energy",title:"能源",summary:"重点发展可再生能源生产与供应基础设施。",capabilities:["能源农场设计与建设","太阳能、风能及混合电站","用于空间系统的太阳能电池板"]},
    {slug:"artificial-intelligence",title:"人工智能",summary:"利用人工智能实现复杂系统的自动化、分析、仿真与优化。",capabilities:["天文望远镜等系统的智能自动化","大数据分析","空间项目自主仿真与管理","电站运行的智能控制与优化"]},
    {slug:"motorsport",title:"赛车运动",summary:"高性能汽车系统与赛车技术工程。",capabilities:["高性能汽车部件工程","车身空气动力学套件工程","内燃机与外燃烧发动机工程设计","混合动力燃料系统与增压系统工程"]}
  ],
  fr:[
    {slug:"astronomy",title:"Astronomie",summary:"Solutions d'observation et d'analyse de données pour la recherche astronomique.",capabilities:["Conception et fabrication de télescopes modulaires","Bases de données astronomiques","Projets de recherche astronomique","Réseau intégré de partage des données d'observatoires"]},
    {slug:"aerospace",title:"Aérospatiale",summary:"Conception et développement de systèmes, sous-systèmes et technologies spatiales.",capabilities:["Conception et fabrication de satellites","Développement de lanceurs","Mécanismes et unités de contrôle spatiaux","Propulsion spatiale et capsules biologiques"]},
    {slug:"remote-sensing",title:"Télédétection",summary:"Analyse intelligente des données satellitaires pour l'observation de la Terre.",capabilities:["Analyse des données satellitaires","Surveillance des inondations, séismes, incendies et sécheresses","Bases de données actualisées pour l'agriculture et l'industrie","Gestion urbaine et efficacité des ressources"]},
    {slug:"energy",title:"Énergie",summary:"Développement d'infrastructures énergétiques axées sur les sources renouvelables.",capabilities:["Conception et construction de fermes énergétiques","Centrales solaires, éoliennes et hybrides","Panneaux solaires pour systèmes spatiaux"]},
    {slug:"artificial-intelligence",title:"Intelligence artificielle",summary:"IA pour l'automatisation, l'analyse, la simulation et l'optimisation de systèmes complexes.",capabilities:["Automatisation intelligente des systèmes astronomiques","Analyse du Big Data","Simulation et gestion autonomes de projets spatiaux","Contrôle et optimisation intelligents des centrales"]},
    {slug:"motorsport",title:"Sport automobile",summary:"Ingénierie des systèmes de performance automobile et des technologies de compétition.",capabilities:["Composants automobiles High-Performance","Kits aérodynamiques de carrosserie","Conception de moteurs à combustion interne et externe","Systèmes de carburant Hybrid et systèmes de suralimentation"]}
  ],
  es:[
    {slug:"astronomy",title:"Astronomía",summary:"Infraestructura y soluciones basadas en datos para investigación y observación astronómica.",capabilities:["Diseño y fabricación de telescopios modulares","Bases de datos astronómicas","Proyectos de investigación astronómica","Red integrada para compartir información de observatorios"]},
    {slug:"aerospace",title:"Aeroespacial",summary:"Diseño y desarrollo de sistemas, subsistemas y tecnologías espaciales.",capabilities:["Diseño y fabricación de satélites","Desarrollo de vehículos lanzadores","Mecanismos y unidades de control espaciales","Propulsión espacial y cápsulas biológicas"]},
    {slug:"remote-sensing",title:"Teledetección",summary:"Análisis inteligente de datos satelitales para la observación de la Tierra.",capabilities:["Análisis de datos satelitales","Monitoreo inteligente de inundaciones, terremotos, incendios y sequías","Bases de datos actualizadas para agricultura e industria","Gestión urbana y eficiencia de recursos"]},
    {slug:"energy",title:"Energía",summary:"Desarrollo de infraestructura de generación de energía con énfasis en fuentes renovables.",capabilities:["Diseño y construcción de granjas energéticas","Centrales solares, eólicas e híbridas","Paneles solares para sistemas espaciales"]},
    {slug:"artificial-intelligence",title:"Inteligencia artificial",summary:"IA para automatización, análisis, simulación y optimización de sistemas complejos.",capabilities:["Automatización inteligente de sistemas astronómicos","Análisis de Big Data","Simulación y gestión autónoma de proyectos espaciales","Control y optimización inteligente de centrales"]},
    {slug:"motorsport",title:"Motorsport",summary:"Ingeniería de sistemas de alto rendimiento y tecnologías de competición.",capabilities:["Componentes automotrices High-Performance","Kits aerodinámicos de carrocería","Diseño de motores de combustión interna y externa","Sistemas de combustible Hybrid y sistemas de sobrealimentación"]}
  ]
};
