import type { Locale } from "../data/locales";

export type DomainProject = { title: string; summary: string; overview: string };
export type DomainPortfolio = { introduction: string; projects: DomainProject[] };

const fa: Record<string, DomainPortfolio> = {
  astronomy: {
    introduction: "در این حوزه، داده‌های پیمایش‌های نجومی با روش‌های محاسباتی و یادگیری ماشین تحلیل می‌شوند. تمرکز کار بر منحنی‌های نوری، اجرام متغیر و گذرا، استخراج ویژگی‌های علمی، طبقه‌بندی و شناسایی ناهنجاری‌ها است. هدف، توسعه ابزارهایی برای تحلیل داده‌های حجیم و پشتیبانی از پژوهش‌های نجومی بازتولیدپذیر است.",
    projects: [
      { title: "ZTF Classifier", summary: "تحلیل داده‌های پیمایش ZTF و طبقه‌بندی اجرام گذرا با یادگیری ماشین.", overview: "یک پلتفرم CPU-first برای دریافت و اعتبارسنجی منحنی‌های نوری، استخراج ویژگی‌های علمی، طبقه‌بندی یادگیری ماشین، کالیبراسیون احتمال و بررسی داده‌های خارج از توزیع. ارزیابی علمی آن باید همراه با داده مرجع، محدودیت‌های نمونه و روش بازتولید نتایج خوانده شود." },
      { title: "تحلیل سری‌های زمانی نجومی", summary: "استخراج ویژگی و تحلیل رفتار زمانی منابع نجومی.", overview: "روش‌های محاسباتی برای پاک‌سازی، هم‌ترازسازی و تحلیل منحنی‌های نوری و دیگر سری‌های زمانی نجومی؛ با توجه به عدم‌قطعیت اندازه‌گیری، داده‌های گمشده و کیفیت مشاهدات." },
      { title: "شناسایی و اولویت‌بندی اجرام گذرا", summary: "تحلیل نامزدهای گذرا و اولویت‌بندی آن‌ها برای بررسی علمی.", overview: "ترکیب ویژگی‌های آماری، زمانی و فیزیکی برای رتبه‌بندی نامزدهای گذرا، بررسی ناهنجاری‌ها و پشتیبانی از انتخاب اهداف پیگیری رصدی. خروجی سامانه جایگزین تأیید رصدی یا تفسیر علمی نیست." }
    ]
  },
  aerospace: {
    introduction: "تمرکز این حوزه بر طراحی و تحلیل سامانه‌های هوافضایی و زیرسامانه‌های آن‌ها است. موضوعاتی مانند آیرودینامیک، سازه، دینامیک پرواز و مدار، پیشرانش، طراحی مأموریت و پایش سلامت سامانه‌ها در این دامنه قرار می‌گیرند. روش‌های شبیه‌سازی و تحلیل مهندسی برای ارزیابی عملکرد و کاهش ریسک طراحی به کار می‌روند.",
    projects: [
      { title: "سامانه‌های CanSat و CubeSat", summary: "معماری مأموریت و طراحی زیرسامانه‌های ماهواره‌های کوچک.", overview: "بررسی معماری مأموریت و زیرسامانه‌هایی مانند توان، رایانش، مخابرات، حسگرها و گردآوری داده؛ همراه با تحلیل یکپارچگی، الزامات رابط و برنامه آزمون." },
      { title: "تحلیل تابش فضایی و حفاظت", summary: "ارزیابی محیط تابشی و اثر آن بر تجهیزات فضایی.", overview: "تحلیل محیط تابشی مأموریت، بررسی منابع تابش و ارزیابی اثر آن بر قطعات و قابلیت اطمینان سامانه. انتخاب راهکار حفاظتی باید بر اساس مدار، مدت مأموریت و مشخصات قطعات انجام شود." },
      { title: "پایش سلامت پهپاد", summary: "تحلیل داده‌های حسگر و تله‌متری برای پایش وضعیت سامانه.", overview: "استفاده از داده‌های پرواز، حسگرها و زیرسامانه‌ها برای تشخیص ناهنجاری، پایش وضعیت و پشتیبانی از نگهداری. اعتبار روش‌ها به کیفیت داده و آزمون روی شرایط عملیاتی وابسته است." }
    ]
  },
  "remote-sensing": {
    introduction: "در سنجش از دور، تصاویر اپتیکی و راداری ماهواره‌ای به داده‌های مکانی قابل تحلیل تبدیل می‌شوند. پردازش تصاویر Landsat و Sentinel، طبقه‌بندی پوشش زمین، پایش تغییرات، تحلیل پوشش گیاهی و کاربردهای کشاورزی دقیق از موضوعات اصلی این حوزه هستند.",
    projects: [
      { title: "تحلیل تصاویر ماهواره‌ای", summary: "پردازش تصاویر اپتیکی و راداری و استخراج اطلاعات مکانی.", overview: "آماده‌سازی و پردازش داده‌های ماهواره‌ای، اصلاحات لازم، استخراج ویژگی‌های طیفی و مکانی و تولید لایه‌های اطلاعاتی برای تحلیل‌های محیطی و مهندسی." },
      { title: "پایش تغییرات زمین و محیط", summary: "شناسایی تغییرات مکانی با تحلیل سری زمانی تصاویر.", overview: "مقایسه تصاویر چندزمانه برای شناسایی تغییرات پوشش زمین، منابع طبیعی و محیط؛ با توجه به هم‌ثبت‌سازی، ابر، تفاوت حسگرها و عدم‌قطعیت طبقه‌بندی." },
      { title: "کشاورزی دقیق و پایش پوشش گیاهی", summary: "تحلیل شاخص‌های طیفی و وضعیت پوشش گیاهی در مقیاس مکانی.", overview: "محاسبه شاخص‌های طیفی، بررسی تغییرات سلامت پوشش گیاهی و ترکیب داده‌های مکانی برای پشتیبانی از پایش مزرعه و تحلیل‌های کشاورزی دقیق." }
    ]
  },
  "artificial-intelligence": {
    introduction: "هوش مصنوعی در این حوزه به‌عنوان ابزار حل مسئله در سامانه‌های علمی، صنعتی و مدیریتی به کار می‌رود. یادگیری ماشین و عمیق، بینایی ماشین، پردازش زبان، تحلیل سری زمانی، تشخیص ناهنجاری و پشتیبانی تصمیم از محورهای فنی آن هستند.",
    projects: [
      { title: "هوشمندسازی صنعتی", summary: "تحلیل داده‌های عملیاتی برای پایش و پشتیبانی تصمیم.", overview: "به‌کارگیری مدل‌های یادگیری ماشین برای تحلیل داده‌های فرایندی، شناسایی الگوهای غیرعادی، برآورد وضعیت تجهیزات و پشتیبانی از تصمیم‌های عملیاتی." },
      { title: "سامانه‌های بینایی ماشین", summary: "تحلیل تصویر و ویدئو برای استخراج ویژگی و بازرسی بصری.", overview: "طراحی زنجیره پردازش تصویر برای تشخیص و ردیابی اشیا، استخراج ویژگی، بازرسی بصری و تحلیل صحنه؛ با ارزیابی دقت، خطا و شرایط واقعی تصویربرداری." },
      { title: "تحلیل پیش‌بینانه و پشتیبانی تصمیم", summary: "پیش‌بینی سری‌های زمانی و ارزیابی گزینه‌های تصمیم.", overview: "مدل‌سازی سری‌های زمانی، پیش‌بینی تقاضا یا رفتار سامانه و ترکیب خروجی مدل با قیود عملیاتی برای ارائه اطلاعات قابل استفاده در تصمیم‌گیری." }
    ]
  },
  energy: {
    introduction: "این حوزه بر تحلیل و مدیریت سامانه‌های انرژی، به‌ویژه منابع تجدیدپذیر و سامانه‌های ترکیبی تمرکز دارد. مدل‌سازی تولید و مصرف، مدیریت ذخیره‌ساز، پیش‌بینی بار، پایش عملکرد و بهینه‌سازی ریزشبکه از موضوعات مهندسی آن هستند.",
    projects: [
      { title: "سامانه مدیریت هوشمند انرژی", summary: "پایش و بهینه‌سازی هماهنگ تولید، ذخیره‌سازی و مصرف.", overview: "مدل‌سازی و پایش سامانه‌های خورشیدی، باتری و شبکه؛ پیش‌بینی بار و تولید، تحلیل وضعیت باتری و تخصیص انرژی با در نظر گرفتن قیود فنی و اقتصادی." },
      { title: "تحلیل عملکرد انرژی تجدیدپذیر", summary: "ارزیابی بازده و شناسایی افت عملکرد سامانه‌های خورشیدی و بادی.", overview: "تحلیل داده‌های تولید و شرایط محیطی برای ارزیابی بازده، شناسایی افت عملکرد و تشخیص خطا در سامانه‌های تولید انرژی تجدیدپذیر." },
      { title: "بهینه‌سازی ریزشبکه", summary: "مدل‌سازی و مدیریت تولید پراکنده و ذخیره‌سازها.", overview: "تحلیل جریان توان و هماهنگی منابع تولید، ذخیره‌ساز و بار با هدف بهبود بهره‌برداری، پایداری و استفاده مؤثر از انرژی." }
    ]
  },
  motorsport: {
    introduction: "موتوراسپرت در این مجموعه با رویکرد مهندسی و داده‌محور دنبال می‌شود. تحلیل موتور و سامانه توربوشارژر، ثبت و پردازش تله‌متری، دینامیک خودرو، مدیریت حرارتی و ارزیابی عملکرد از موضوعات این حوزه هستند.",
    projects: [
      { title: "ثبت داده و تله‌متری خودرو", summary: "گردآوری و تحلیل داده‌های ECU و حسگرهای خودرو.", overview: "طراحی زنجیره ثبت و تحلیل داده‌هایی مانند دور موتور، دما، فشار، سرعت و متغیرهای عملکردی برای بررسی رفتار خودرو و مقایسه آزمون‌ها." },
      { title: "تحلیل قوای محرکه و توربوشارژر", summary: "مدل‌سازی جریان هوا، بوست، بازده و محدودیت‌های حرارتی.", overview: "تحلیل یکپارچه موتور و توربوشارژر با توجه به جریان هوا، فشار بوست، احتراق، بازده، دمای کاری و محدودیت‌های مکانیکی." },
      { title: "تحلیل دینامیک و عملکرد خودرو", summary: "بررسی رفتار دینامیکی خودرو با استفاده از داده‌های آزمون.", overview: "تحلیل تعلیق، انتقال وزن، پایداری، چسبندگی و داده‌های مسیر برای درک رفتار خودرو و ارزیابی تغییرات مهندسی." }
    ]
  }
};

const en: Record<string, DomainPortfolio> = {
  astronomy: { introduction: "This domain applies computational methods and machine learning to astronomical survey data. The focus includes light curves, variable and transient sources, scientific feature extraction, classification and anomaly detection. The aim is to develop tools for large-scale analysis and reproducible astronomical research.", projects: [
    { title: "ZTF Classifier", summary: "Analysis of ZTF survey data and machine-learning classification of transient sources.", overview: "A CPU-first platform for targeted light-curve acquisition and validation, scientific feature generation, machine-learning classification, probability calibration and out-of-distribution diagnostics. Scientific results must be read with their reference data, sample limits and reproducibility methods." },
    { title: "Astronomical Time-Series Analysis", summary: "Feature extraction and temporal analysis of astronomical sources.", overview: "Computational methods to clean, align and analyse light curves and other astronomical time series, with attention to measurement uncertainty, missing data and observation quality." },
    { title: "Transient Candidate Analysis", summary: "Analysis and prioritisation of transient candidates for scientific review.", overview: "Combining statistical, temporal and physical features to rank transient candidates, examine anomalies and support follow-up target selection. Outputs do not replace observational confirmation or scientific interpretation." }
  ]},
  aerospace: { introduction: "This domain covers the design and analysis of aerospace systems and their subsystems. Topics include aerodynamics, structures, flight and orbital dynamics, propulsion, mission design and system-health monitoring. Simulation and engineering analysis support performance assessment and design-risk reduction.", projects: [
    { title: "CanSat & CubeSat Systems", summary: "Mission architecture and subsystem design for small satellites.", overview: "Mission architecture and subsystem studies covering power, computing, communications, sensors and data acquisition, together with integration, interface requirements and test planning." },
    { title: "Space Radiation & Shielding Analysis", summary: "Assessment of the radiation environment and its effects on space equipment.", overview: "Analysis of mission radiation conditions, radiation sources and effects on components and system reliability. Shielding choices depend on orbit, mission duration and component specifications." },
    { title: "UAV Health Monitoring", summary: "Sensor and telemetry analysis for system-condition monitoring.", overview: "Use of flight, sensor and subsystem data for anomaly detection, condition monitoring and maintenance support. Method validity depends on data quality and testing under operational conditions." }
  ]},
  "remote-sensing": { introduction: "This domain turns optical and radar satellite imagery into analysable geospatial information. Landsat and Sentinel processing, land-cover classification, change monitoring, vegetation analysis and precision-agriculture applications are key topics.", projects: [
    { title: "Satellite Imagery Analysis", summary: "Processing optical and radar imagery to extract geospatial information.", overview: "Preparation and processing of satellite data, required corrections, spectral and spatial feature extraction, and production of information layers for environmental and engineering analysis." },
    { title: "Land & Environmental Change Detection", summary: "Detection of spatial change through satellite-image time series.", overview: "Multi-temporal image comparison to identify changes in land cover, natural resources and the environment, accounting for co-registration, clouds, sensor differences and classification uncertainty." },
    { title: "Precision Agriculture & Vegetation Monitoring", summary: "Spectral-index analysis and spatial monitoring of vegetation.", overview: "Calculation of spectral indices, assessment of vegetation health and integration of geospatial data to support field monitoring and precision-agriculture analysis." }
  ]},
  "artificial-intelligence": { introduction: "Artificial intelligence is treated as a problem-solving tool for scientific, industrial and management systems. Machine learning, deep learning, computer vision, language processing, time-series analysis, anomaly detection and decision support are key technical themes.", projects: [
    { title: "Industrial Intelligence", summary: "Operational-data analysis for monitoring and decision support.", overview: "Machine-learning methods for process-data analysis, unusual-pattern detection, equipment-condition estimation and operational decision support." },
    { title: "Computer Vision Systems", summary: "Image and video analysis for feature extraction and visual inspection.", overview: "Image-processing pipelines for object detection and tracking, feature extraction, visual inspection and scene analysis, with evaluation of accuracy, error and real-world imaging conditions." },
    { title: "Predictive Analytics & Decision Support", summary: "Time-series forecasting and evaluation of decision options.", overview: "Time-series modelling and system-behaviour forecasting, combined with operational constraints to provide useful decision-support information." }
  ]},
  energy: { introduction: "This domain focuses on energy-system analysis and management, especially renewable and hybrid systems. Generation and consumption modelling, storage management, load forecasting, performance monitoring and microgrid optimisation are key engineering topics.", projects: [
    { title: "Smart Energy Management System", summary: "Coordinated monitoring and optimisation of generation, storage and consumption.", overview: "Modelling and monitoring solar, battery and grid systems; load and generation forecasting; battery-state analysis; and energy allocation under technical and economic constraints." },
    { title: "Renewable Energy Performance Analytics", summary: "Yield assessment and performance-loss detection for solar and wind systems.", overview: "Analysis of generation and environmental data to assess yield, identify performance loss and detect faults in renewable-energy systems." },
    { title: "Microgrid Optimisation", summary: "Modelling and management of distributed generation and storage.", overview: "Power-flow analysis and coordination of generation sources, storage and loads to improve operation, stability and effective energy use." }
  ]},
  motorsport: { introduction: "Motorsport is approached through engineering and data analysis. Engine and turbocharger analysis, vehicle telemetry, vehicle dynamics, thermal management and performance assessment are key topics.", projects: [
    { title: "Vehicle Data Logger & Telemetry", summary: "Acquisition and analysis of vehicle ECU and sensor data.", overview: "Design of data-acquisition and analysis workflows for engine speed, temperature, pressure, speed and other performance variables to examine vehicle behaviour and compare tests." },
    { title: "Powertrain & Turbocharging Analysis", summary: "Modelling airflow, boost, efficiency and thermal limits.", overview: "Integrated analysis of engines and turbochargers, considering airflow, boost pressure, combustion, efficiency, operating temperature and mechanical limits." },
    { title: "Vehicle Dynamics & Performance Analysis", summary: "Assessment of vehicle dynamics using test data.", overview: "Analysis of suspension, weight transfer, stability, grip and track data to understand vehicle behaviour and assess engineering changes." }
  ]}
};

export const domainPortfolio: Record<Locale, Record<string, DomainPortfolio>> = {
  fa,
  en,
  ar: en,
  ru: en,
  de: en,
  zh: en,
  fr: en,
  es: en
};

export const domainPortfolioLabels: Record<Locale, { introduction: string; projects: string }> = {
  fa: { introduction: "معرفی تخصصی حوزه", projects: "پروژه‌ها و زمینه‌های مهندسی" },
  en: { introduction: "Domain overview", projects: "Projects and engineering topics" },
  ar: { introduction: "نظرة عامة على المجال", projects: "المشاريع والموضوعات الهندسية" },
  ru: { introduction: "Обзор направления", projects: "Проекты и инженерные направления" },
  de: { introduction: "Fachlicher Überblick", projects: "Projekte und technische Themen" },
  zh: { introduction: "领域介绍", projects: "项目与工程主题" },
  fr: { introduction: "Présentation du domaine", projects: "Projets et thèmes d’ingénierie" },
  es: { introduction: "Descripción del área", projects: "Proyectos y temas de ingeniería" }
};
