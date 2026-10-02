import type { Field } from "./site";
import type { Locale } from "../data/locales";

/**
 * Non-source locales are translations of the approved Persian/English
 * corporate capability baseline. Do not introduce capabilities that are
 * absent from the supplied company profile/resume.
 */
export const localizedFields: Partial<Record<Locale, Field[]>> = {
  ru:[
    {slug:"astronomy",title:"Астрономия",summary:"Решения для наблюдательной и основанной на данных астрономии, исследований и открытий.",capabilities:["Проектирование и изготовление оптических и радиотелескопов — от любительского до обсерваторного масштаба","Астрономические базы данных и анализ данных","Астрономические исследования","Образовательные курсы и семинары"]},
    {slug:"aerospace",title:"Аэрокосмические технологии",summary:"Исследования и разработки аэрокосмических систем, подсистем и технологий.",capabilities:["Проектирование и изготовление CanSat, CubeSat и спутниковых сетей","Аэродинамика и управление","Космическая и орбитальная динамика","Космические системы, БПЛА и двигательные установки"]},
    {slug:"remote-sensing",title:"Дистанционное зондирование",summary:"Анализ радиолокационных и оптических спутниковых изображений для наблюдения Земли и инженерных задач.",capabilities:["Анализ радиолокационных и оптических спутниковых изображений","Обработка данных Landsat и Sentinel","Экологический мониторинг","Применения в точном земледелии"]},
    {slug:"energy",title:"Энергетика",summary:"Разработка решений по производству и обеспечению энергией с акцентом на возобновляемые источники.",capabilities:["Домашние и промышленные солнечные электростанции","Ветровые и гибридные солнечно-ветровые электростанции","Энергетические фермы","Техническая поддержка нефтегазовой и нефтехимической промышленности"]},
    {slug:"artificial-intelligence",title:"Искусственный интеллект",summary:"Применение ИИ в управлении, Интернете вещей и технических направлениях компании.",capabilities:["Интеллектуальное управление","Решения для умных городов","Применение ИИ в Интернете вещей (IoT)","Применение ИИ в других направлениях деятельности компании"]},
    {slug:"motorsport",title:"Автоспорт и высокопроизводительные компоненты",summary:"Развиваемое направление инженерии высокопроизводительных автомобильных компонентов и технологий.",capabilities:["Аэродинамические компоненты","Механические высокопроизводительные компоненты","Компоненты турбокомпрессоров","Механические компоненты для автоспорта"]}
  ],
  de:[
    {slug:"astronomy",title:"Astronomie",summary:"Beobachtungs- und datenbasierte Lösungen für astronomische Forschung und Entdeckung.",capabilities:["Entwicklung und Bau optischer und Radioteleskope – vom Amateur- bis zum Observatoriumsmaßstab","Astronomische Datenbanken und Datenanalyse","Astronomische Forschung","Schulungen und Seminare"]},
    {slug:"aerospace",title:"Luft- und Raumfahrt",summary:"Forschung und Entwicklung von Luft- und Raumfahrtsystemen, Subsystemen und Technologien.",capabilities:["Entwicklung und Bau von CanSat, CubeSat und Satellitennetzen","Aerodynamik und Regelung","Raumfahrt- und Orbitaldynamik","Raumfahrtsysteme, UAVs und Antriebssysteme"]},
    {slug:"remote-sensing",title:"Fernerkundung",summary:"Analyse radar- und optischer Satellitenbilder für Erdbeobachtung und technische Anwendungen.",capabilities:["Analyse radar- und optischer Satellitenbilder","Verarbeitung von Landsat- und Sentinel-Daten","Umweltmonitoring","Anwendungen in der Präzisionslandwirtschaft"]},
    {slug:"energy",title:"Energie",summary:"Entwicklung von Lösungen für Energieerzeugung und -versorgung mit Schwerpunkt auf erneuerbaren Quellen.",capabilities:["Private und industrielle Solarstromanlagen","Windkraftanlagen und hybride Solar-Wind-Anlagen","Energieparks","Technische Unterstützung für Öl-, Gas- und petrochemische Industrien"]},
    {slug:"artificial-intelligence",title:"Künstliche Intelligenz",summary:"KI-Anwendungen für Management, IoT und die technischen Tätigkeitsfelder des Unternehmens.",capabilities:["Intelligentes Management","Lösungen für Smart Cities","KI-Anwendungen im Internet der Dinge (IoT)","KI-Anwendungen in den weiteren Tätigkeitsfeldern des Unternehmens"]},
    {slug:"motorsport",title:"Motorsport & Performance-Teile",summary:"Ein Entwicklungsbereich für die Konstruktion leistungsorientierter Fahrzeugkomponenten und Technologien.",capabilities:["Aerodynamische Komponenten","Mechanische Performance-Teile","Komponenten für Turbolader","Mechanische Performance-Komponenten"]}
  ],
  zh:[
    {slug:"astronomy",title:"天文学",summary:"面向天文研究与发现的观测和数据驱动型解决方案。",capabilities:["光学与射电望远镜设计和制造，从业余规模到天文台规模","天文数据库与数据分析","天文学研究","培训课程与研讨会"]},
    {slug:"aerospace",title:"航空航天",summary:"航空航天系统、子系统及相关技术的研发。",capabilities:["CanSat、CubeSat及卫星网络的设计与制造","空气动力学与控制","空间与轨道动力学","空间系统、无人机与推进系统"]},
    {slug:"remote-sensing",title:"遥感",summary:"面向地球观测和工程应用的雷达与光学卫星影像分析。",capabilities:["雷达与光学卫星影像分析","Landsat与Sentinel数据处理","环境监测","精准农业应用"]},
    {slug:"energy",title:"能源",summary:"以可再生能源为重点的能源生产与供应解决方案开发。",capabilities:["住宅和工业太阳能发电站","风力及太阳能-风能混合发电站","能源农场","为石油、天然气和石化行业提供技术支持"]},
    {slug:"artificial-intelligence",title:"人工智能",summary:"人工智能在管理、物联网及公司其他技术领域中的应用。",capabilities:["智能管理","智慧城市解决方案","人工智能在物联网（IoT）中的应用","人工智能在公司其他业务领域中的应用"]},
    {slug:"motorsport",title:"赛车运动与高性能部件",summary:"面向车辆与赛车运动的高性能部件及相关技术工程开发方向。",capabilities:["空气动力学部件","机械高性能部件","涡轮增压器部件","机械性能部件"]}
  ],
  fr:[
    {slug:"astronomy",title:"Astronomie",summary:"Solutions d'observation et d'analyse de données pour la recherche et la découverte astronomiques.",capabilities:["Conception et fabrication de télescopes optiques et radio, de l'échelle amateur à l'observatoire","Bases de données astronomiques et analyse de données","Recherche astronomique","Cours et séminaires de formation"]},
    {slug:"aerospace",title:"Aérospatiale",summary:"R&D sur les systèmes, sous-systèmes et technologies aérospatiaux.",capabilities:["Conception et fabrication de CanSat, CubeSat et réseaux satellitaires","Aérodynamique et contrôle","Dynamique spatiale et orbitale","Systèmes spatiaux, drones et propulsion"]},
    {slug:"remote-sensing",title:"Télédétection",summary:"Analyse d'images satellitaires radar et optiques pour l'observation de la Terre et les applications d'ingénierie.",capabilities:["Analyse d'images satellitaires radar et optiques","Traitement des données Landsat et Sentinel","Surveillance environnementale","Applications à l'agriculture de précision"]},
    {slug:"energy",title:"Énergie",summary:"Développement de solutions de production et d'approvisionnement énergétique axées sur les sources renouvelables.",capabilities:["Centrales solaires résidentielles et industrielles","Centrales éoliennes et hybrides solaire-éolien","Fermes énergétiques","Assistance technique aux industries pétrolières, gazières et pétrochimiques"]},
    {slug:"artificial-intelligence",title:"Intelligence artificielle",summary:"Applications de l'IA au management, à l'IoT et aux domaines techniques de l'entreprise.",capabilities:["Gestion intelligente","Solutions de villes intelligentes","Applications de l'IA à l'Internet des objets (IoT)","Applications de l'IA dans les autres domaines d'activité de l'entreprise"]},
    {slug:"motorsport",title:"Sport automobile et pièces Performance",summary:"Domaine de développement consacré à l'ingénierie de composants et technologies de performance pour les véhicules et le sport automobile.",capabilities:["Composants aérodynamiques","Pièces mécaniques de performance","Composants de turbocompresseurs","Composants mécaniques de performance"]}
  ],
  es:[
    {slug:"astronomy",title:"Astronomía",summary:"Soluciones de observación y análisis de datos para la investigación y el descubrimiento astronómicos.",capabilities:["Diseño y construcción de telescopios ópticos y de radio, desde escala amateur hasta observatorio","Bases de datos astronómicas y análisis de datos","Investigación astronómica","Cursos y seminarios de formación"]},
    {slug:"aerospace",title:"Aeroespacial",summary:"I+D en sistemas, subsistemas y tecnologías aeroespaciales.",capabilities:["Diseño y construcción de CanSat, CubeSat y redes de satélites","Aerodinámica y control","Dinámica espacial y orbital","Sistemas espaciales, UAV y propulsión"]},
    {slug:"remote-sensing",title:"Teledetección",summary:"Análisis de imágenes satelitales de radar y ópticas para observación de la Tierra y aplicaciones de ingeniería.",capabilities:["Análisis de imágenes satelitales de radar y ópticas","Procesamiento de datos Landsat y Sentinel","Monitoreo ambiental","Aplicaciones de agricultura de precisión"]},
    {slug:"energy",title:"Energía",summary:"Desarrollo de soluciones de generación y suministro energético con énfasis en fuentes renovables.",capabilities:["Centrales solares residenciales e industriales","Centrales eólicas e híbridas solar-eólica","Granjas energéticas","Apoyo técnico a las industrias del petróleo, gas y petroquímica"]},
    {slug:"artificial-intelligence",title:"Inteligencia artificial",summary:"Aplicaciones de IA en gestión, IoT y las áreas técnicas de la empresa.",capabilities:["Gestión inteligente","Soluciones de ciudades inteligentes","Aplicaciones de IA en el Internet de las cosas (IoT)","Aplicaciones de IA en las demás áreas de actividad de la empresa"]},
    {slug:"motorsport",title:"Motorsport y piezas Performance",summary:"Área de desarrollo para la ingeniería de componentes y tecnologías de alto rendimiento relacionadas con vehículos y motorsport.",capabilities:["Componentes aerodinámicos","Piezas mecánicas de alto rendimiento","Componentes de turbocompresores","Componentes mecánicos de rendimiento"]}
  ]
};
