/*
 * TRANSLATIONS
 * ------------------------------------
 * Centralized bilingual strings for the entire website.
 * The static site renderer reads the active language from this dictionary.
 *
 * To add a new string:
 *   1. Add the key under both `en` and `ar`.
 *   2. Reference it with a data-i18n attribute or the translation helper.
 */

window.Strucora.translations = {
  en: {
    /* HEADER */
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "cta.start": "Start a Project",
    "lang.toggle": "AR",
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    /* HOME — HERO */
    "home.hero.label": "STRUCORA / CONSTRUCTION & ARCHITECTURE",
    "home.hero.heading": "WE BUILD WHAT\nCOMES NEXT.",
    "home.hero.lead":
      "Architecture, construction, and development shaped with precision, purpose, and a commitment to lasting quality.",
    "home.hero.ctaPrimary": "Start a Project",
    "home.hero.ctaSecondary": "Explore Our Work",
    "home.hero.metaLocation": "Baghdad / Iraq",
    "home.hero.metaEstablished": "Est. 2018",
    "home.hero.projectCode": "PROJECT / 01",

    /* HOME — INTRO */
    "home.intro.label": "ABOUT STRUCORA",
    "home.intro.heading": "BUILT WITH PURPOSE.\nDEFINED BY PRECISION.",
    "home.intro.text":
      "STRUCORA brings architectural thinking and construction expertise together to create spaces that are practical, refined, and built to endure.",
    "home.intro.cta": "Discover STRUCORA",

    /* HOME — SERVICES */
    "home.services.label": "WHAT WE DO",
    "home.services.heading": "DISCIPLINES THAT\nSHAPE OUR WORK.",
    "home.services.note": "Hover to expand",

    /* HOME — PROJECTS */
    "home.projects.label": "SELECTED WORK",
    "home.projects.heading": "SPACES BUILT TO MATTER.",
    "home.projects.cta": "View All Projects",
    "home.projects.viewProject": "View Project",

    /* HOME — STATS */
    "home.stats.heading": "A STUDIO MEASURED BY RESULTS.",

    /* HOME — PROCESS */
    "home.process.label": "OUR PROCESS",
    "home.process.heading": "FROM IDEA TO REALITY",
    "home.process.note": "Scroll to advance",

    /* HOME — ABOUT PREVIEW */
    "home.about.label": "THE STRUCORA APPROACH",
    "home.about.heading": "WE BELIEVE QUALITY STARTS LONG BEFORE CONSTRUCTION.",
    "home.about.text":
      "From the first idea to the final detail, every stage should be deliberate, coordinated, and built around the same standard of quality.",
    "home.about.cta": "More About STRUCORA",

    /* HOME — FINAL CTA */
    "home.final.heading": "LET'S BUILD SOMETHING THAT LASTS.",
    "home.final.text":
      "Have a project in mind? Tell us what you are building, and let's shape the next step together.",
    "home.final.cta": "Start a Project",

    /* ABOUT */
    "about.hero.label": "ABOUT / THE COMPANY",
    "about.hero.heading": "BUILT ON\nPRECISION.",
    "about.hero.text":
      "STRUCORA is a modern construction and architecture company focused on thoughtful design, disciplined execution, and lasting quality.",
    "about.intro.label": "ABOUT STRUCORA",
    "about.intro.heading": "A STUDIO WHERE\nVISION MEETS STRUCTURE.",
    "about.intro.text":
      "STRUCORA brings together architects, engineers, project managers, and construction specialists under one disciplined workflow. We believe clarity at the planning stage is the foundation of every successful build.",
    "about.story.label": "OUR STORY",
    "about.story.heading": "A CLEARER WAY TO BUILD.",
    "about.story.text":
      "We believe strong projects are created when design, engineering, construction, and communication work as one system. STRUCORA was built around this principle — combining creative thinking with disciplined execution to create spaces that perform as well as they look.",
    "about.values.label": "VALUES",
    "about.values.heading": "PRINCIPLES THAT GUIDE\nEVERY DECISION.",
    "about.team.label": "PEOPLE",
    "about.team.heading": "A TEAM BUILT AROUND\nTHE WORK.",
    "about.team.text":
      "Our team combines architectural thinking with hands-on construction experience — every member is connected to the practical outcome of the projects we deliver.",
    "about.approach.label": "APPROACH",
    "about.approach.heading": "PLANNING IS HALF THE BUILD.",
    "about.approach.text":
      "We invest heavily in the planning stage because we know it determines quality, cost, and timing downstream. Clear drawings, clear coordination, and clear communication are non-negotiable.",
    "about.cta.heading": "LET'S BUILD\nWITH PURPOSE.",
    "about.cta.text": "Talk to us about your project and we'll start shaping the first step.",
    "about.cta.button": "Start a Project",

    /* PROJECTS */
    "projects.hero.label": "PORTFOLIO",
    "projects.hero.heading": "SELECTED\nPROJECTS.",
    "projects.hero.text":
      "A selection of spaces shaped through architecture, construction, and careful attention to detail.",
    "projects.filter.all": "All",
    "projects.filter.residential": "Residential",
    "projects.filter.commercial": "Commercial",
    "projects.filter.architecture": "Architecture",
    "projects.filter.interior": "Interior",
    "projects.filter.development": "Development",
    "projects.count": "Projects",
    "projects.modal.close": "Close",
    "projects.modal.year": "Year",
    "projects.modal.location": "Location",
    "projects.modal.category": "Category",
    "projects.empty": "No projects in this category yet.",

    /* CONTACT */
    "contact.hero.label": "CONTACT",
    "contact.hero.heading": "LET'S BUILD\nTHE NEXT STEP.",
    "contact.hero.text":
      "Tell us about your project, your goals, and what you are looking to create.",
    "contact.info.label": "GET IN TOUCH",
    "contact.info.heading": "DIRECT CONTACTS",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.whatsapp": "WhatsApp",
    "contact.info.location": "Location",
    "contact.info.hours": "Office Hours",
    "contact.form.label": "START A CONVERSATION",
    "contact.form.heading": "SEND US A\nBRIEF.",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.phone": "Your phone",
    "contact.form.subject": "Project inquiry",
    "contact.form.message": "Tell us briefly about your project...",
    "contact.form.submit": "Send Inquiry",
    "contact.form.submitting": "Sending...",
    "contact.form.success":
      "Thank you. Your message has been received.",
    "contact.form.errorRequired": "Please complete the required fields.",
    "contact.form.errorEmail": "Please enter a valid email address.",
    "contact.cta.label": "PREFER WHATSAPP?",
    "contact.cta.text": "Tap to start a conversation directly with our team.",
    "contact.cta.button": "Open WhatsApp",

    /* FOOTER */
    "footer.statement": "BUILT TO LAST.",
    "footer.brand.title": "STRUCORA",
    "footer.brand.subtitle": "Construction / Architecture",
    "footer.col.nav": "Navigation",
    "footer.col.services": "Services",
    "footer.col.contact": "Contact",
    "footer.copy": "© 2026 STRUCORA. All rights reserved.",

    /* META / PLACEHOLDERS */
    "placeholder.image": "IMAGE PLACEHOLDER",
    "placeholder.replace": "Replace with final photography",
  },

  ar: {
    /* HEADER */
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.projects": "المشاريع",
    "nav.contact": "اتصل بنا",
    "cta.start": "ابدأ مشروعك",
    "lang.toggle": "EN",
    "menu.open": "افتح القائمة",
    "menu.close": "إغلاق القائمة",

    /* HOME — HERO */
    "home.hero.label": "STRUCORA / للمقاولات والهندسة المعمارية",
    "home.hero.heading": "نبني ما\nيأتي بعد ذلك.",
    "home.hero.lead":
      "نقدّم حلولاً متكاملة في التصميم والتنفيذ والتطوير، بدقة عالية ورؤية تركز على الجودة والاستدامة.",
    "home.hero.ctaPrimary": "ابدأ مشروعك",
    "home.hero.ctaSecondary": "استكشف مشاريعنا",
    "home.hero.metaLocation": "بغداد / العراق",
    "home.hero.metaEstablished": "تأسست عام 2018",
    "home.hero.projectCode": "مشروع / 01",

    /* HOME — INTRO */
    "home.intro.label": "عن STRUCORA",
    "home.intro.heading": "نبني بهدف.\nونتميّز بالدقة.",
    "home.intro.text":
      "تجمع STRUCORA بين الرؤية المعمارية والخبرة التنفيذية لتقديم مساحات عملية ومدروسة ومصممة لتدوم.",
    "home.intro.cta": "اكتشف STRUCORA",

    /* HOME — SERVICES */
    "home.services.label": "خدماتنا",
    "home.services.heading": "تخصصات\nتشكل عملنا.",
    "home.services.note": "مرّر للتوسيع",

    /* HOME — PROJECTS */
    "home.projects.label": "مشاريع مختارة",
    "home.projects.heading": "مساحات صُممت لتصنع فرقاً.",
    "home.projects.cta": "عرض جميع المشاريع",
    "home.projects.viewProject": "عرض المشروع",

    /* HOME — STATS */
    "home.stats.heading": "استوديو يُقاس بالنتائج.",

    /* HOME — PROCESS */
    "home.process.label": "منهجيتنا",
    "home.process.heading": "من الفكرة إلى الواقع",
    "home.process.note": "مرّر للتقدم",

    /* HOME — ABOUT PREVIEW */
    "home.about.label": "منهج STRUCORA",
    "home.about.heading": "نؤمن أن الجودة تبدأ قبل التنفيذ بوقت طويل.",
    "home.about.text":
      "من الفكرة الأولى وحتى أدق التفاصيل النهائية، يجب أن تكون كل مرحلة مدروسة ومنظمة وتخضع للمستوى نفسه من الجودة.",
    "home.about.cta": "المزيد عن STRUCORA",

    /* HOME — FINAL CTA */
    "home.final.heading": "لنبنِ شيئاً يدوم.",
    "home.final.text":
      "لديك مشروع في ذهنك؟ أخبرنا عن فكرتك ولنضع الخطوة التالية معاً.",
    "home.final.cta": "ابدأ مشروعك",

    /* ABOUT */
    "about.hero.label": "عن الشركة",
    "about.hero.heading": "نُبنى\nعلى الدقة.",
    "about.hero.text":
      "STRUCORA شركة حديثة في مجال المقاولات والهندسة المعمارية، تركز على التصميم المدروس والتنفيذ المنضبط والجودة المستدامة.",
    "about.intro.label": "عن STRUCORA",
    "about.intro.heading": "استوديو يلتقي فيه\nالرؤية بالهيكل.",
    "about.intro.text":
      "تجمع STRUCORA بين المعماريين والمهندسين ومديري المشاريع والمتخصصين في التنفيذ ضمن سير عمل واحد منضبط. نؤمن أن الوضوح في مرحلة التخطيط هو أساس كل بناء ناجح.",
    "about.story.label": "قصتنا",
    "about.story.heading": "طريقة أوضح للبناء.",
    "about.story.text":
      "نؤمن أن المشاريع القوية تبدأ عندما تعمل الهندسة والتصميم والتنفيذ والتواصل كنظام واحد. تأسست STRUCORA على هذا المبدأ، لتجمع بين التفكير الإبداعي والتنفيذ المنضبط وتقديم مساحات تجمع بين الجودة والأداء والمظهر المتوازن.",
    "about.values.label": "القيم",
    "about.values.heading": "مبادئ توجّه\nكل قرار.",
    "about.team.label": "الفريق",
    "about.team.heading": "فريق يُبنى\nحول العمل.",
    "about.team.text":
      "يجمع فريقنا بين التفكير المعماري والخبرة التنفيذية الميدانية، كل عضو مرتبط بالنتيجة العملية للمشاريع التي نسلّمها.",
    "about.approach.label": "المنهج",
    "about.approach.heading": "التخطيط نصف البناء.",
    "about.approach.text":
      "نستثمر بشكل كبير في مرحلة التخطيط لأنها تحدد الجودة والتكلفة والتوقيت لاحقاً. الرسومات الواضحة والتنسيق الواضح والتواصل الواضح أمور غير قابلة للتفاوض.",
    "about.cta.heading": "لنبنِ\nبهدف.",
    "about.cta.text": "حدّثنا عن مشروعك وسنبدأ بتشكيل الخطوة الأولى.",
    "about.cta.button": "ابدأ مشروعك",

    /* PROJECTS */
    "projects.hero.label": "الأعمال",
    "projects.hero.heading": "مشاريع\nمختارة.",
    "projects.hero.text":
      "مجموعة من المشاريع التي تشكلت من خلال الهندسة المعمارية والتنفيذ والعناية الدقيقة بالتفاصيل.",
    "projects.filter.all": "الكل",
    "projects.filter.residential": "سكني",
    "projects.filter.commercial": "تجاري",
    "projects.filter.architecture": "هندسة معمارية",
    "projects.filter.interior": "داخلي",
    "projects.filter.development": "تطوير",
    "projects.count": "المشاريع",
    "projects.modal.close": "إغلاق",
    "projects.modal.year": "السنة",
    "projects.modal.location": "الموقع",
    "projects.modal.category": "الفئة",
    "projects.empty": "لا توجد مشاريع في هذه الفئة بعد.",

    /* CONTACT */
    "contact.hero.label": "تواصل",
    "contact.hero.heading": "لنَبْنِ\nخطوتنا القادمة.",
    "contact.hero.text":
      "أخبرنا عن مشروعك وأهدافك وما الذي تتطلع إلى إنشائه.",
    "contact.info.label": "تواصل مباشر",
    "contact.info.heading": "معلومات الاتصال",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.phone": "الهاتف",
    "contact.info.whatsapp": "واتساب",
    "contact.info.location": "الموقع",
    "contact.info.hours": "ساعات العمل",
    "contact.form.label": "ابدأ المحادثة",
    "contact.form.heading": "أرسل لنا\nنبذة.",
    "contact.form.name": "اسمك",
    "contact.form.email": "بريدك الإلكتروني",
    "contact.form.phone": "رقم هاتفك",
    "contact.form.subject": "استفسار عن مشروع",
    "contact.form.message": "اكتب نبذة قصيرة عن مشروعك...",
    "contact.form.submit": "إرسال الاستفسار",
    "contact.form.submitting": "جاري الإرسال...",
    "contact.form.success": "شكراً لك. تم استلام رسالتك بنجاح.",
    "contact.form.errorRequired": "يرجى إكمال الحقول المطلوبة.",
    "contact.form.errorEmail": "يرجى إدخال بريد إلكتروني صالح.",
    "contact.cta.label": "تفضل واتساب؟",
    "contact.cta.text": "انقر لبدء محادثة مباشرة مع فريقنا.",
    "contact.cta.button": "فتح واتساب",

    /* FOOTER */
    "footer.statement": "مبني ليدوم.",
    "footer.brand.title": "STRUCORA",
    "footer.brand.subtitle": "مقاولات / هندسة معمارية",
    "footer.col.nav": "التنقل",
    "footer.col.services": "الخدمات",
    "footer.col.contact": "تواصل",
    "footer.copy": "© 2026 STRUCORA. جميع الحقوق محفوظة.",

    /* META / PLACEHOLDERS */
    "placeholder.image": "مكان الصورة",
    "placeholder.replace": "استبدل بالصورة النهائية",
  },
};