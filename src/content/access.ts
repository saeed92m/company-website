import type { Locale } from "../data/locales";

type AccessCopy = {
  eyebrow: string;
  userTitle: string;
  adminTitle: string;
  userDescription: string;
  adminDescription: string;
  userIdentifier: string;
  adminIdentifier: string;
  password: string;
  userPlaceholder: string;
  adminPlaceholder: string;
  passwordPlaceholder: string;
  signIn: string;
  userInactive: string;
  adminInactive: string;
  noTransfer: string;
  userScope: string;
  adminScope: string;
  backToCompany: string;
};

export const accessCopy: Record<Locale, AccessCopy> = {
  fa: {
    eyebrow: "دسترسی امن", userTitle: "ورود به پنل کاربری", adminTitle: "ورود به پنل مدیریت",
    userDescription: "برای ورود به حساب کاربری، نام کاربری و گذرواژه خود را وارد کنید.",
    adminDescription: "این بخش فقط برای مدیران مجاز شرکت است.",
    userIdentifier: "نام کاربری", adminIdentifier: "نام کاربری یا ایمیل", password: "گذرواژه",
    userPlaceholder: "نام کاربری خود را وارد کنید", adminPlaceholder: "نام کاربری یا ایمیل مدیریتی",
    passwordPlaceholder: "گذرواژه را وارد کنید", signIn: "ورود",
    userInactive: "ورود به پنل کاربری هنوز فعال نشده است.", adminInactive: "ورود مدیران هنوز فعال نشده است.",
    noTransfer: "این صفحه اطلاعات ورود را ارسال یا در سایت ذخیره نمی‌کند.",
    userScope: "امکانات حساب کاربری پس از راه‌اندازی سرویس احراز هویت تعریف می‌شود.",
    adminScope: "پنل مدیریت تا زمان راه‌اندازی API امن و مجوزهای سمت سرور در دسترس نیست.",
    backToCompany: "بازگشت به معرفی شرکت"
  },
  en: {
    eyebrow: "Secure access", userTitle: "User portal sign in", adminTitle: "Admin panel sign in",
    userDescription: "Enter your username and password to access your account.",
    adminDescription: "This area is restricted to authorized company administrators.",
    userIdentifier: "Username", adminIdentifier: "Username or email", password: "Password",
    userPlaceholder: "Enter your username", adminPlaceholder: "Enter your admin username or email",
    passwordPlaceholder: "Enter your password", signIn: "Sign in",
    userInactive: "User portal sign-in is not active yet.", adminInactive: "Administrator sign-in is not active yet.",
    noTransfer: "This page does not send or store sign-in details.",
    userScope: "User account features will be defined after the authentication service is ready.",
    adminScope: "The management panel stays unavailable until a secure API and server-side permissions are in place.",
    backToCompany: "Back to company overview"
  },
  ar: {
    eyebrow: "وصول آمن", userTitle: "تسجيل الدخول إلى بوابة المستخدم", adminTitle: "تسجيل الدخول إلى لوحة الإدارة",
    userDescription: "أدخل اسم المستخدم وكلمة المرور للوصول إلى حسابك.",
    adminDescription: "هذا القسم مخصص لمديري الشركة المصرح لهم فقط.",
    userIdentifier: "اسم المستخدم", adminIdentifier: "اسم المستخدم أو البريد الإلكتروني", password: "كلمة المرور",
    userPlaceholder: "أدخل اسم المستخدم", adminPlaceholder: "أدخل اسم المستخدم الإداري أو البريد الإلكتروني",
    passwordPlaceholder: "أدخل كلمة المرور", signIn: "تسجيل الدخول",
    userInactive: "تسجيل الدخول إلى بوابة المستخدم غير مفعل بعد.", adminInactive: "تسجيل دخول المسؤولين غير مفعل بعد.",
    noTransfer: "لا ترسل هذه الصفحة بيانات الدخول ولا تحفظها.",
    userScope: "سيتم تحديد ميزات حساب المستخدم بعد إعداد خدمة المصادقة.",
    adminScope: "تظل لوحة الإدارة غير متاحة حتى إعداد واجهة API آمنة وصلاحيات على الخادم.",
    backToCompany: "العودة إلى نبذة الشركة"
  },
  ru: {
    eyebrow: "Защищённый доступ", userTitle: "Вход в личный кабинет", adminTitle: "Вход в панель управления",
    userDescription: "Введите имя пользователя и пароль для доступа к своей учётной записи.",
    adminDescription: "Раздел доступен только уполномоченным администраторам компании.",
    userIdentifier: "Имя пользователя", adminIdentifier: "Имя пользователя или электронная почта", password: "Пароль",
    userPlaceholder: "Введите имя пользователя", adminPlaceholder: "Введите имя пользователя администратора или почту",
    passwordPlaceholder: "Введите пароль", signIn: "Войти",
    userInactive: "Вход в личный кабинет пока не активен.", adminInactive: "Вход администратора пока не активен.",
    noTransfer: "Страница не отправляет и не сохраняет данные для входа.",
    userScope: "Функции учётной записи будут определены после настройки службы аутентификации.",
    adminScope: "Панель управления останется недоступной до настройки защищённого API и серверных прав.",
    backToCompany: "Вернуться к описанию компании"
  },
  de: {
    eyebrow: "Sicherer Zugang", userTitle: "Anmeldung im Benutzerportal", adminTitle: "Anmeldung im Administrationsbereich",
    userDescription: "Geben Sie Ihren Benutzernamen und Ihr Passwort ein.",
    adminDescription: "Dieser Bereich ist nur für autorisierte Unternehmensadministratoren bestimmt.",
    userIdentifier: "Benutzername", adminIdentifier: "Benutzername oder E-Mail-Adresse", password: "Passwort",
    userPlaceholder: "Benutzernamen eingeben", adminPlaceholder: "Administrator-Benutzername oder E-Mail eingeben",
    passwordPlaceholder: "Passwort eingeben", signIn: "Anmelden",
    userInactive: "Die Anmeldung im Benutzerportal ist noch nicht aktiv.", adminInactive: "Die Administrator-Anmeldung ist noch nicht aktiv.",
    noTransfer: "Diese Seite sendet oder speichert keine Anmeldedaten.",
    userScope: "Die Funktionen des Benutzerkontos werden nach Einrichtung des Authentifizierungsdienstes festgelegt.",
    adminScope: "Der Administrationsbereich bleibt gesperrt, bis eine sichere API und serverseitige Berechtigungen bereitstehen.",
    backToCompany: "Zur Unternehmensübersicht"
  },
  zh: {
    eyebrow: "安全访问", userTitle: "用户中心登录", adminTitle: "管理面板登录",
    userDescription: "请输入用户名和密码以访问您的账户。",
    adminDescription: "此区域仅供获得授权的公司管理员使用。",
    userIdentifier: "用户名", adminIdentifier: "用户名或电子邮件", password: "密码",
    userPlaceholder: "请输入用户名", adminPlaceholder: "请输入管理员用户名或电子邮件",
    passwordPlaceholder: "请输入密码", signIn: "登录",
    userInactive: "用户中心登录功能尚未启用。", adminInactive: "管理员登录功能尚未启用。",
    noTransfer: "此页面不会发送或保存登录信息。",
    userScope: "身份验证服务启用后，将定义用户账户功能。",
    adminScope: "在安全 API 和服务器端权限配置完成前，管理面板不可用。",
    backToCompany: "返回公司介绍"
  },
  fr: {
    eyebrow: "Accès sécurisé", userTitle: "Connexion à l’espace utilisateur", adminTitle: "Connexion au panneau d’administration",
    userDescription: "Saisissez votre nom d’utilisateur et votre mot de passe pour accéder à votre compte.",
    adminDescription: "Cette section est réservée aux administrateurs autorisés de l’entreprise.",
    userIdentifier: "Nom d’utilisateur", adminIdentifier: "Nom d’utilisateur ou adresse e-mail", password: "Mot de passe",
    userPlaceholder: "Saisissez votre nom d’utilisateur", adminPlaceholder: "Saisissez votre identifiant administrateur ou votre e-mail",
    passwordPlaceholder: "Saisissez votre mot de passe", signIn: "Se connecter",
    userInactive: "La connexion à l’espace utilisateur n’est pas encore active.", adminInactive: "La connexion administrateur n’est pas encore active.",
    noTransfer: "Cette page n’envoie ni n’enregistre les informations de connexion.",
    userScope: "Les fonctions du compte utilisateur seront définies après la mise en place du service d’authentification.",
    adminScope: "Le panneau reste indisponible jusqu’à la mise en place d’une API sécurisée et des autorisations côté serveur.",
    backToCompany: "Retour à la présentation de l’entreprise"
  },
  es: {
    eyebrow: "Acceso seguro", userTitle: "Acceso al portal de usuario", adminTitle: "Acceso al panel de administración",
    userDescription: "Introduce tu nombre de usuario y contraseña para acceder a tu cuenta.",
    adminDescription: "Esta sección está reservada a los administradores autorizados de la empresa.",
    userIdentifier: "Nombre de usuario", adminIdentifier: "Nombre de usuario o correo electrónico", password: "Contraseña",
    userPlaceholder: "Introduce tu nombre de usuario", adminPlaceholder: "Introduce el usuario administrador o el correo electrónico",
    passwordPlaceholder: "Introduce tu contraseña", signIn: "Iniciar sesión",
    userInactive: "El acceso al portal de usuario aún no está activo.", adminInactive: "El acceso de administrador aún no está activo.",
    noTransfer: "Esta página no envía ni almacena los datos de acceso.",
    userScope: "Las funciones de la cuenta se definirán cuando esté listo el servicio de autenticación.",
    adminScope: "El panel seguirá sin estar disponible hasta que existan una API segura y permisos del lado del servidor.",
    backToCompany: "Volver a la presentación de la empresa"
  }
};
