/*
 * STATIC SERVICES DATA
 * ------------------------------------
 * Five core services rendered in the Services section list.
 * Order determines the numeric prefix (01 — 05) shown on hover/idle.
 * Descriptions are bilingual — never hard-code them inside components.
 */

window.Strucora.services = [
  {
    id: "architecture",
    number: "01",
    title: { en: "Architecture", ar: "الهندسة المعمارية" },
    description: {
      en: "Concept development, architectural planning, and refined spatial design.",
      ar: "تطوير الأفكار والتخطيط المعماري وتصميم المساحات برؤية متكاملة.",
    },
    // SERVICE IMAGE — Replace with architectural concept / building design image.
    // Recommended size: 1000 × 700px.
    image: "./service-architecture.web.jpg",
  },
  {
    id: "construction",
    number: "02",
    title: { en: "Construction", ar: "الإنشاءات والتنفيذ" },
    description: {
      en: "Precise construction built around quality, coordination, and long-term performance.",
      ar: "تنفيذ دقيق يرتكز على الجودة والتنسيق والأداء طويل الأمد.",
    },
    image: "./service-construction.webp.jpg",
  },
  {
    id: "interior",
    number: "03",
    title: { en: "Interior Development", ar: "تطوير المساحات الداخلية" },
    description: {
      en: "Functional and refined interiors shaped around the identity of each project.",
      ar: "مساحات داخلية عملية ومدروسة تنسجم مع هوية كل مشروع.",
    },
    image: "./service-interior.webp.jpg",
  },
  {
    id: "management",
    number: "04",
    title: { en: "Project Management", ar: "إدارة المشاريع" },
    description: {
      en: "Clear planning, coordination, supervision, and project delivery.",
      ar: "تخطيط وإشراف وتنسيق متكامل لضمان تنفيذ المشروع بكفاءة.",
    },
    image: "./service-project-management.webp.jpg",
  },
  {
    id: "commercial",
    number: "05",
    title: { en: "Commercial Development", ar: "التطوير التجاري" },
    description: {
      en: "Strategic development for modern commercial and mixed-use environments.",
      ar: "تطوير مدروسللمشاريع التجارية والبيئات متعددة الاستخدامات.",
    },
    image: "./service-commercial-development.webp.jpg",
  },
];