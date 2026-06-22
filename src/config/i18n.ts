import type { Locale } from "./site";

export type Translations = {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    appointment: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    slogan: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: {
    experience: string;
    cases: string;
    satisfaction: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    link: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    learnMore: string;
  };
  values: {
    eyebrow: string;
    title: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    description: string;
    serviceLabel: string;
    bullets: [string, string, string];
    cta: string;
    servicesList: { title: string; summary: string }[];
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    description: string;
    expertiseTitle: string;
    expertiseP1: string;
    expertiseP2: string;
    valuesEyebrow: string;
    valuesTitle: string;
    cta: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    formTitle: string;
    fields: {
      firstName: string;
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    submit: string;
    sending: string;
    success: string;
    error: string;
    coordTitle: string;
    phoneLabel: string;
    emailLabel: string;
    agenciesTitle: string;
    mapsTitle: string;
    optional: string;
    required: string;
    gdpr: string;
    errors: {
      nameTooShort: string;
      firstNameTooShort: string;
      emailInvalid: string;
      subjectTooShort: string;
      messageTooShort: string;
    };
  };
  appointmentPage: {
    eyebrow: string;
    title: string;
    description: string;
    calendarTitle: string;
    calendarSubtitle: string;
    calendarIntro: string;
    calendarButton: string;
    calendarNote: string;
    whatsappCta: string;
    phoneCta: string;
    emailCta: string;
    orTitle: string;
  };
  footer: {
    nav: string;
    contact: string;
    legal: string;
    privacy: string;
    cookies: string;
    rights: string;
  };
  whatsapp: string;
};

export const translations: Record<Locale, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Nos services",
      about: "À propos",
      contact: "Contact",
      appointment: "Prendre rendez-vous",
      cta: "Prendre rendez-vous",
    },
    hero: {
      eyebrow: "Cabinet d'accompagnement administratif",
      slogan: "Faire de vos démarches un succès",
      description:
        "Titre de séjour, naturalisation, regroupement familial, autorisation de travail : nous vous accompagnons à chaque étape, avec rigueur, transparence et confidentialité.",
      ctaPrimary: "Prendre rendez-vous",
      ctaSecondary: "Nos services",
    },
    stats: { experience: "Expérience", cases: "Dossiers traités", satisfaction: "Satisfaction" },
    about: {
      eyebrow: "Qui sommes-nous",
      title: "Un cabinet au service des étrangers en France",
      description:
        "Accueil Formalités vous accompagne dans l'ensemble de vos démarches : visas, réunification familiale, demande d'asile, DALO, logement, retraite et CAF. Nous nous appuyons sur tout un réseau de professionnels au service de nos clients et traitons chaque dossier partout en France avec la même rigueur, en nous déplaçant lorsque la situation l'exige.",
      link: "En savoir plus",
    },
    services: {
      eyebrow: "Nos expertises",
      title: "Des services adaptés à chaque situation",
      description:
        "Que vous soyez salarié, étudiant, conjoint de Français ou demandeur de naturalisation, nous prenons en charge votre dossier de bout en bout.",
      learnMore: "En savoir plus",
    },
    values: { eyebrow: "Nos engagements", title: "Quatre valeurs qui guident notre cabinet" },
    cta: {
      title: "Une démarche à entreprendre ? Parlons-en.",
      description:
        "Premier échange confidentiel et sans engagement. Nous évaluons votre situation et vous proposons un plan d'action clair.",
      button: "Prendre rendez-vous",
    },
    servicesPage: {
      eyebrow: "Nos services",
      title: "Un accompagnement pour chaque démarche",
      description:
        "Notre équipe traite l'ensemble des procédures administratives liées au séjour, au travail et à la nationalité. Chaque dossier fait l'objet d'une analyse personnalisée.",
      serviceLabel: "Service",
      bullets: ["Analyse approfondie de votre situation", "Préparation complète du dossier", "Suivi jusqu'à la décision finale"],
      cta: "Demander un rendez-vous",
      servicesList: [
        { title: "Titre de séjour", summary: "Constitution complète et suivi de votre demande de titre de séjour, de la prise de rendez-vous en préfecture à la remise du titre." },
        { title: "Renouvellement de titre de séjour", summary: "Anticipation des délais, vérification des pièces et accompagnement jusqu'au renouvellement de votre titre." },
        { title: "Autorisation de travail", summary: "Montage du dossier employeur et démarches auprès de la DREETS pour l'obtention de votre autorisation de travail." },
        { title: "Naturalisation", summary: "Évaluation de votre éligibilité, préparation des justificatifs et accompagnement jusqu'au décret de naturalisation." },
        { title: "Regroupement familial", summary: "Procédure complète de regroupement familial : conditions, dépôt OFII et suivi du dossier jusqu'à l'arrivée des proches." },
        { title: "Accompagnement personnalisé", summary: "Conseil sur-mesure, rédaction de courriers, recours gracieux et hiérarchiques, suivi de vos démarches au quotidien." },
      ],
    },
    aboutPage: {
      eyebrow: "Notre cabinet",
      title: "Une expertise reconnue au service des étrangers en France",
      description:
        "Accueil Formalités vous accompagne dans l'ensemble de vos démarches : visas, réunification familiale, demande d'asile, DALO, logement, retraite et CAF. Nous nous appuyons sur tout un réseau de professionnels au service de nos clients et traitons chaque dossier partout en France avec la même rigueur, en nous déplaçant lorsque la situation l'exige.",
      expertiseTitle: "Notre expertise",
      expertiseP1:
        "Nous connaissons les exigences des préfectures, des consulats, de l'OFII et des services de la DREETS. Cette maîtrise du terrain nous permet d'anticiper les difficultés, de constituer des dossiers solides et de réduire les délais de traitement.",
      expertiseP2:
        "Nous intervenons aussi bien sur les premières demandes que sur les renouvellements, les recours et les situations complexes (refus, OQTF, régularisation). Nous traitons les dossiers dans toute la France avec la même rigueur, et nous nous déplaçons chaque fois que cela est nécessaire.",
      valuesEyebrow: "Nos valeurs",
      valuesTitle: "Quatre engagements forts",
      cta: "Prendre rendez-vous",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Parlons de votre situation",
      description: "Nous vous répondons sous 24h ouvrées. Premier échange confidentiel et sans engagement.",
      formTitle: "Formulaire de contact",
      fields: { firstName: "Prénom", name: "Nom", email: "E-mail", phone: "Téléphone", subject: "Objet", message: "Message" },
      submit: "Envoyer",
      sending: "Envoi en cours…",
      success: "Merci, votre message a bien été envoyé. Nous revenons vers vous sous 24h ouvrées.",
      error: "Une erreur est survenue. Merci de réessayer ou de nous appeler directement.",
      coordTitle: "Nos coordonnées",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      agenciesTitle: "Notre agence",
      mapsTitle: "Nous trouver",
      optional: "(facultatif)",
      required: "*",
      gdpr: "Les informations recueillies sont utilisées uniquement pour traiter votre demande et vous recontacter. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à contact@accueilformalites.fr.",
      errors: {
        nameTooShort: "Nom trop court",
        firstNameTooShort: "Prénom trop court",
        emailInvalid: "E-mail invalide",
        subjectTooShort: "Objet trop court",
        messageTooShort: "Message trop court",
      },
    },
    footer: {
      nav: "Navigation",
      contact: "Contact",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      cookies: "Politique de cookies",
      rights: "Tous droits réservés.",
    },
    whatsapp: "Bonjour, je souhaite des informations sur vos services.",
    appointmentPage: {
      eyebrow: "Rendez-vous",
      title: "Prenez rendez-vous en ligne",
      description: "Choisissez un créneau disponible directement dans notre agenda Google Calendar. Premier échange confidentiel et sans engagement.",
      calendarTitle: "Sélectionnez un créneau",
      calendarSubtitle: "Le calendrier ci-dessous affiche nos disponibilités en temps réel.",
      calendarIntro: "Cliquez sur le bouton ci-dessous pour accéder à notre agenda en ligne et choisir le créneau qui vous convient.",
      calendarButton: "Choisir mon créneau",
      calendarNote: "S'ouvre dans un nouvel onglet · Google Calendar",
      whatsappCta: "Nous contacter via WhatsApp",
      phoneCta: "Nous appeler",
      emailCta: "Nous écrire",
      orTitle: "Ou contactez-nous directement",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Our services",
      about: "About",
      contact: "Contact",
      appointment: "Book an appointment",
      cta: "Book an appointment",
    },
    hero: {
      eyebrow: "Administrative assistance office",
      slogan: "Making your formalities a success",
      description:
        "Residence permit, naturalisation, family reunification, work authorisation: we guide you at every step, with rigour, transparency and confidentiality.",
      ctaPrimary: "Book an appointment",
      ctaSecondary: "Our services",
    },
    stats: { experience: "Experience", cases: "Cases handled", satisfaction: "Satisfaction" },
    about: {
      eyebrow: "Who we are",
      title: "A firm dedicated to foreigners in France",
      description:
        "Accueil Formalités supports you with all your procedures: visas, family reunification, asylum applications, DALO, housing, retirement and CAF. We draw on a whole network of professionals at our clients' service and handle every file across France with the same rigour, travelling whenever the situation requires.",
      link: "Learn more",
    },
    services: {
      eyebrow: "Our expertise",
      title: "Services tailored to every situation",
      description:
        "Whether you are an employee, student, spouse of a French citizen or applying for naturalisation, we handle your file from start to finish.",
      learnMore: "Learn more",
    },
    values: { eyebrow: "Our commitments", title: "Four values that guide our firm" },
    cta: {
      title: "A procedure to start? Let's talk.",
      description: "First consultation is confidential and free of charge. We assess your situation and propose a clear action plan.",
      button: "Book an appointment",
    },
    servicesPage: {
      eyebrow: "Our services",
      title: "Support for every procedure",
      description: "Our team handles all administrative procedures related to residence, work and nationality. Each file receives a personalised analysis.",
      serviceLabel: "Service",
      bullets: ["In-depth analysis of your situation", "Complete file preparation", "Follow-up until the final decision"],
      cta: "Request an appointment",
      servicesList: [
        { title: "Residence permit", summary: "Full preparation and follow-up of your residence permit application, from booking the prefecture appointment to receiving the permit." },
        { title: "Residence permit renewal", summary: "Anticipating deadlines, checking documents and guiding you through to the renewal of your permit." },
        { title: "Work authorisation", summary: "Preparing the employer file and handling procedures with DREETS to obtain your work authorisation." },
        { title: "Naturalisation", summary: "Assessing your eligibility, preparing supporting documents and guiding you through to the naturalisation decree." },
        { title: "Family reunification", summary: "Full family reunification procedure: conditions, OFII submission and file follow-up until your relatives arrive." },
        { title: "Personalised support", summary: "Tailored advice, letter writing, administrative appeals, and daily follow-up of your procedures." },
      ],
    },
    aboutPage: {
      eyebrow: "Our firm",
      title: "Recognised expertise at the service of foreigners in France",
      description:
        "Accueil Formalités supports you with all your procedures: visas, family reunification, asylum applications, DALO, housing, retirement and CAF. We draw on a whole network of professionals at our clients' service and handle every file across France with the same rigour, travelling whenever the situation requires.",
      expertiseTitle: "Our expertise",
      expertiseP1:
        "We know the requirements of préfectures, consulates, OFII and DREETS. This field knowledge allows us to anticipate difficulties, build solid files and reduce processing times.",
      expertiseP2:
        "We handle first-time applications as well as renewals, appeals and complex situations (refusals, OQTF, regularisation). We process files across all of France with the same rigour, and travel whenever necessary.",
      valuesEyebrow: "Our values",
      valuesTitle: "Four strong commitments",
      cta: "Book an appointment",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let's talk about your situation",
      description: "We reply within 24 business hours. First consultation is confidential and free of charge.",
      formTitle: "Contact form",
      fields: { firstName: "First name", name: "Last name", email: "Email", phone: "Phone", subject: "Subject", message: "Message" },
      submit: "Send",
      sending: "Sending…",
      success: "Thank you, your message has been sent. We will get back to you within 24 business hours.",
      error: "An error occurred. Please try again or call us directly.",
      coordTitle: "Contact details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      agenciesTitle: "Our office",
      mapsTitle: "Find us",
      optional: "(optional)",
      required: "*",
      gdpr: "The information collected is used solely to process your request and contact you. In accordance with the GDPR, you have the right to access, rectify and delete your data by writing to contact@accueilformalites.fr.",
      errors: {
        nameTooShort: "Last name too short",
        firstNameTooShort: "First name too short",
        emailInvalid: "Invalid email",
        subjectTooShort: "Subject too short",
        messageTooShort: "Message too short",
      },
    },
    footer: {
      nav: "Navigation",
      contact: "Contact",
      legal: "Legal notice",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
      rights: "All rights reserved.",
    },
    whatsapp: "Hello, I would like information about your services.",
    appointmentPage: {
      eyebrow: "Appointment",
      title: "Book an appointment online",
      description: "Choose an available slot directly in our Google Calendar. First consultation is confidential and free of charge.",
      calendarTitle: "Select a time slot",
      calendarSubtitle: "The calendar below shows our real-time availability.",
      calendarIntro: "Click the button below to access our online calendar and choose a time that works for you.",
      calendarButton: "Choose my time slot",
      calendarNote: "Opens in a new tab · Google Calendar",
      whatsappCta: "Contact us via WhatsApp",
      phoneCta: "Call us",
      emailCta: "Email us",
      orTitle: "Or contact us directly",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Nuestros servicios",
      about: "Quiénes somos",
      contact: "Contacto",
      appointment: "Pedir cita",
      cta: "Pedir cita",
    },
    hero: {
      eyebrow: "Despacho de asesoría administrativa",
      slogan: "Haciendo de sus trámites un éxito",
      description:
        "Permiso de residencia, naturalización, reagrupación familiar, autorización de trabajo: le acompañamos en cada etapa, con rigor, transparencia y confidencialidad.",
      ctaPrimary: "Pedir cita",
      ctaSecondary: "Nuestros servicios",
    },
    stats: { experience: "Experiencia", cases: "Expedientes gestionados", satisfaction: "Satisfacción" },
    about: {
      eyebrow: "Quiénes somos",
      title: "Un despacho al servicio de los extranjeros en Francia",
      description:
        "Accueil Formalités le acompaña en todos sus trámites: visados, reagrupación familiar, solicitud de asilo, DALO, vivienda, jubilación y CAF. Nos apoyamos en toda una red de profesionales al servicio de nuestros clientes y gestionamos cada expediente en toda Francia con el mismo rigor, desplazándonos cuando la situación lo requiere.",
      link: "Saber más",
    },
    services: {
      eyebrow: "Nuestra experiencia",
      title: "Servicios adaptados a cada situación",
      description:
        "Tanto si es trabajador, estudiante, cónyuge de un ciudadano francés o solicitante de naturalización, nos encargamos de su expediente de principio a fin.",
      learnMore: "Saber más",
    },
    values: { eyebrow: "Nuestros compromisos", title: "Cuatro valores que guían nuestro despacho" },
    cta: {
      title: "¿Un trámite que iniciar? Hablemos.",
      description: "Primera consulta confidencial y sin compromiso. Evaluamos su situación y le proponemos un plan de acción claro.",
      button: "Pedir cita",
    },
    servicesPage: {
      eyebrow: "Nuestros servicios",
      title: "Acompañamiento para cada trámite",
      description: "Nuestro equipo gestiona todos los procedimientos administrativos relacionados con la residencia, el trabajo y la nacionalidad.",
      serviceLabel: "Servicio",
      bullets: ["Análisis en profundidad de su situación", "Preparación completa del expediente", "Seguimiento hasta la decisión final"],
      cta: "Solicitar una cita",
      servicesList: [
        { title: "Permiso de residencia", summary: "Preparación completa y seguimiento de su solicitud de permiso de residencia, desde la cita en la prefectura hasta la entrega del permiso." },
        { title: "Renovación del permiso de residencia", summary: "Anticipación de plazos, verificación de documentos y acompañamiento hasta la renovación de su permiso." },
        { title: "Autorización de trabajo", summary: "Preparación del expediente del empleador y gestiones ante la DREETS para obtener su autorización de trabajo." },
        { title: "Naturalización", summary: "Evaluación de su elegibilidad, preparación de justificantes y acompañamiento hasta el decreto de naturalización." },
        { title: "Reagrupación familiar", summary: "Procedimiento completo de reagrupación familiar: condiciones, presentación ante el OFII y seguimiento del expediente hasta la llegada de sus familiares." },
        { title: "Acompañamiento personalizado", summary: "Asesoramiento a medida, redacción de escritos, recursos administrativos y seguimiento diario de sus trámites." },
      ],
    },
    aboutPage: {
      eyebrow: "Nuestro despacho",
      title: "Una experiencia reconocida al servicio de los extranjeros en Francia",
      description:
        "Accueil Formalités le acompaña en todos sus trámites: visados, reagrupación familiar, solicitud de asilo, DALO, vivienda, jubilación y CAF. Nos apoyamos en toda una red de profesionales al servicio de nuestros clientes y gestionamos cada expediente en toda Francia con el mismo rigor, desplazándonos cuando la situación lo requiere.",
      expertiseTitle: "Nuestra experiencia",
      expertiseP1:
        "Conocemos los requisitos de las prefecturas, consulados, OFII y DREETS. Este conocimiento del terreno nos permite anticipar dificultades y reducir los plazos de tramitación.",
      expertiseP2:
        "Intervenimos tanto en primeras solicitudes como en renovaciones, recursos y situaciones complejas (denegaciones, OQTF, regularización). Gestionamos expedientes en toda Francia con el mismo rigor, y nos desplazamos siempre que sea necesario.",
      valuesEyebrow: "Nuestros valores",
      valuesTitle: "Cuatro compromisos fuertes",
      cta: "Pedir cita",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Hablemos de su situación",
      description: "Le respondemos en 24 horas hábiles. Primera consulta confidencial y sin compromiso.",
      formTitle: "Formulario de contacto",
      fields: { firstName: "Nombre", name: "Apellido", email: "Correo electrónico", phone: "Teléfono", subject: "Asunto", message: "Mensaje" },
      submit: "Enviar",
      sending: "Enviando…",
      success: "Gracias, su mensaje ha sido enviado. Le responderemos en 24 horas hábiles.",
      error: "Se ha producido un error. Por favor, inténtelo de nuevo o llámenos.",
      coordTitle: "Nuestros datos",
      phoneLabel: "Teléfono",
      emailLabel: "Correo electrónico",
      agenciesTitle: "Nuestra oficina",
      mapsTitle: "Encuéntrenos",
      optional: "(opcional)",
      required: "*",
      gdpr: "La información recopilada se utiliza únicamente para procesar su solicitud y ponernos en contacto con usted. De conformidad con el RGPD, tiene derecho a acceder, rectificar y suprimir sus datos escribiendo a contact@accueilformalites.fr.",
      errors: {
        nameTooShort: "Apellido demasiado corto",
        firstNameTooShort: "Nombre demasiado corto",
        emailInvalid: "Correo inválido",
        subjectTooShort: "Asunto demasiado corto",
        messageTooShort: "Mensaje demasiado corto",
      },
    },
    footer: {
      nav: "Navegación",
      contact: "Contacto",
      legal: "Aviso legal",
      privacy: "Política de privacidad",
      cookies: "Política de cookies",
      rights: "Todos los derechos reservados.",
    },
    whatsapp: "Hola, me gustaría obtener información sobre sus servicios.",
    appointmentPage: {
      eyebrow: "Cita",
      title: "Reserve una cita en línea",
      description: "Elija un horario disponible directamente en nuestro Google Calendar. Primera consulta confidencial y sin compromiso.",
      calendarTitle: "Seleccione un horario",
      calendarSubtitle: "El calendario muestra nuestra disponibilidad en tiempo real.",
      calendarIntro: "Haga clic en el botón siguiente para acceder a nuestra agenda en línea y elegir el horario que más le convenga.",
      calendarButton: "Elegir mi horario",
      calendarNote: "Se abre en una nueva pestaña · Google Calendar",
      whatsappCta: "Contáctanos por WhatsApp",
      phoneCta: "Llamarnos",
      emailCta: "Escribirnos",
      orTitle: "O contáctenos directamente",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      about: "من نحن",
      contact: "اتصل بنا",
      appointment: "حجز موعد",
      cta: "حجز موعد",
    },
    hero: {
      eyebrow: "مكتب المساعدة الإدارية",
      slogan: "نجعل إجراءاتكم ناجحة",
      description:
        "تصريح إقامة، جنسية، لمّ شمل الأسرة، تصريح عمل: نُرافقكم في كل خطوة بدقة وشفافية وسرية تامة.",
      ctaPrimary: "حجز موعد",
      ctaSecondary: "خدماتنا",
    },
    stats: { experience: "سنوات الخبرة", cases: "ملفات معالَجة", satisfaction: "رضا العملاء" },
    about: {
      eyebrow: "من نحن",
      title: "مكتب في خدمة الأجانب في فرنسا",
      description:
        "تُرافقكم Accueil Formalités في جميع إجراءاتكم: التأشيرات، لمّ شمل الأسرة، طلب اللجوء، DALO، السكن، التقاعد والـ CAF. نعتمد على شبكة واسعة من المحترفين في خدمة عملائنا ونعالج كل ملف في جميع أنحاء فرنسا بنفس الصرامة، مع التنقل كلما اقتضت الحاجة.",
      link: "اعرف أكثر",
    },
    services: {
      eyebrow: "خبرتنا",
      title: "خدمات مكيّفة لكل وضع",
      description:
        "سواء كنت موظفاً أو طالباً أو زوجاً لمواطن فرنسي أو طالب تجنيس، نتولى ملفك من الألف إلى الياء.",
      learnMore: "اعرف أكثر",
    },
    values: { eyebrow: "التزاماتنا", title: "أربع قيم توجّه مكتبنا" },
    cta: {
      title: "لديكم إجراء للقيام به؟ تحدثوا معنا.",
      description: "أول تشاور سري وبدون التزام. نقيّم وضعكم ونقترح خطة عمل واضحة.",
      button: "حجز موعد",
    },
    servicesPage: {
      eyebrow: "خدماتنا",
      title: "مرافقة لكل إجراء",
      description: "يتولى فريقنا جميع الإجراءات الإدارية المتعلقة بالإقامة والعمل والجنسية. يحظى كل ملف بتحليل شخصي.",
      serviceLabel: "خدمة",
      bullets: ["تحليل معمّق لوضعكم", "إعداد كامل للملف", "متابعة حتى القرار النهائي"],
      cta: "طلب موعد",
      servicesList: [
        { title: "تصريح الإقامة", summary: "إعداد كامل ومتابعة طلب تصريح الإقامة، من حجز الموعد في المحافظة حتى استلام التصريح." },
        { title: "تجديد تصريح الإقامة", summary: "استباق الآجال، التحقق من الوثائق والمرافقة حتى تجديد تصريحكم." },
        { title: "تصريح العمل", summary: "إعداد ملف صاحب العمل والإجراءات لدى مديرية العمل DREETS للحصول على تصريح العمل." },
        { title: "الجنسية الفرنسية", summary: "تقييم أهليتكم، تحضير المستندات الداعمة والمرافقة حتى مرسوم التجنيس." },
        { title: "لمّ شمل الأسرة", summary: "إجراء كامل للمّ شمل الأسرة: الشروط، تقديم الطلب لدى OFII ومتابعة الملف حتى وصول ذويكم." },
        { title: "المرافقة الشخصية", summary: "استشارة مخصصة، كتابة المراسلات، الطعون الإدارية ومتابعة يومية لإجراءاتكم." },
      ],
    },
    aboutPage: {
      eyebrow: "مكتبنا",
      title: "خبرة معترف بها في خدمة الأجانب في فرنسا",
      description: "تُرافقكم Accueil Formalités في جميع إجراءاتكم: التأشيرات، لمّ شمل الأسرة، طلب اللجوء، DALO، السكن، التقاعد والـ CAF. نعتمد على شبكة واسعة من المحترفين في خدمة عملائنا ونعالج كل ملف في جميع أنحاء فرنسا بنفس الصرامة، مع التنقل كلما اقتضت الحاجة.",
      expertiseTitle: "خبرتنا",
      expertiseP1:
        "يعرف مستشارونا متطلبات المحافظات والقنصليات ومكتب الهجرة والاندماج (OFII) ومديرية العمل (DREETS). تتيح لنا هذه المعرفة الميدانية توقع الصعوبات وبناء ملفات متينة وتقليص آجال المعالجة.",
      expertiseP2:
        "نتدخل في الطلبات الأولى كما في التجديدات والطعون والحالات المعقدة (الرفض، OQTF، التسوية). نعالج الملفات في جميع أنحاء فرنسا بنفس الصرامة، وننتقل كلما كان ذلك ضرورياً.",
      valuesEyebrow: "قيمنا",
      valuesTitle: "أربعة التزامات قوية",
      cta: "حجز موعد",
    },
    contactPage: {
      eyebrow: "اتصل بنا",
      title: "تحدثوا معنا عن وضعكم",
      description: "نردّ خلال 24 ساعة عمل. أول تشاور سري وبدون التزام.",
      formTitle: "نموذج الاتصال",
      fields: { firstName: "الاسم الأول", name: "اللقب", email: "البريد الإلكتروني", phone: "الهاتف", subject: "الموضوع", message: "الرسالة" },
      submit: "إرسال",
      sending: "جارٍ الإرسال…",
      success: "شكراً، تم إرسال رسالتكم. سنردّ عليكم خلال 24 ساعة عمل.",
      error: "حدث خطأ. يرجى المحاولة مجدداً أو الاتصال بنا مباشرة.",
      coordTitle: "معلومات الاتصال",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      agenciesTitle: "مكتبنا",
      mapsTitle: "جدونا",
      optional: "(اختياري)",
      required: "*",
      gdpr: "تُستخدم المعلومات المجمّعة فقط لمعالجة طلبكم والتواصل معكم. وفقاً للائحة RGPD، يحق لكم الوصول إلى بياناتكم وتصحيحها وحذفها بالكتابة إلى contact@accueilformalites.fr.",
      errors: {
        nameTooShort: "اللقب قصير جداً",
        firstNameTooShort: "الاسم الأول قصير جداً",
        emailInvalid: "بريد إلكتروني غير صالح",
        subjectTooShort: "الموضوع قصير جداً",
        messageTooShort: "الرسالة قصيرة جداً",
      },
    },
    footer: {
      nav: "التنقل",
      contact: "اتصل بنا",
      legal: "الإشعار القانوني",
      privacy: "سياسة الخصوصية",
      cookies: "سياسة ملفات تعريف الارتباط",
      rights: "جميع الحقوق محفوظة.",
    },
    whatsapp: "مرحباً، أودّ الحصول على معلومات حول خدماتكم.",
    appointmentPage: {
      eyebrow: "موعد",
      title: "احجز موعدك عبر الإنترنت",
      description: "اختر موعداً متاحاً مباشرةً في تقويم Google Calendar الخاص بنا. أول تشاور سري وبدون التزام.",
      calendarTitle: "اختر موعداً",
      calendarSubtitle: "يعرض التقويم أدناه التوافر الفوري.",
      calendarIntro: "انقر على الزر أدناه للوصول إلى أجندتنا الإلكترونية واختيار الموعد المناسب لك.",
      calendarButton: "اختر موعدي",
      calendarNote: "يُفتح في علامة تبويب جديدة · Google Calendar",
      whatsappCta: "تواصل معنا عبر واتساب",
      phoneCta: "اتصل بنا",
      emailCta: "راسلنا",
      orTitle: "أو تواصل معنا مباشرة",
    },
  },
};

export function t(locale: Locale): Translations {
  return translations[locale];
}

/** Retourne true si la langue s'écrit de droite à gauche */
export function isRTL(locale: Locale): boolean {
  return locale === "ar";
}

/** Retourne le préfixe d'URL pour une locale (fr = "", en = "/en", etc.) */
export function localePath(locale: Locale, path: string): string {
  const prefix = locale === "fr" ? "" : `/${locale}`;
  return `${prefix}${path}`;
}
