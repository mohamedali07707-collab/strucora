/*
 * TEAM DATA
 * ------------------------------------
 * Fictional placeholder team members shown on the About page.
 * Replace with real portraits + bios. Recommended portrait: 1000 × 1250px.
 */

window.Strucora.team = [
  {
    id: "omar",
    name: "Omar Kareem",
    nameAr: "عمر كريم",
    role: { en: "Managing Director", ar: "المدير التنفيذي" },
    image: null,
  },
  {
    id: "lina",
    name: "Lina Hassan",
    nameAr: "لينا حسن",
    role: { en: "Architectural Director", ar: "مديرة الهندسة المعمارية" },
    image: null,
  },
  {
    id: "ahmed",
    name: "Ahmed Rahman",
    nameAr: "أحمد رحمن",
    role: { en: "Project Manager", ar: "مدير المشاريع" },
    image: null,
  },
  {
    id: "sara",
    name: "Sara Mahmoud",
    nameAr: "سارة محمود",
    role: { en: "Design Lead", ar: "قائدة التصميم" },
    image: null,
  },
];

/*
 * VALUES LIST
 * Used on About → Values. Each value has a short description.
 */
window.Strucora.values = [
  {
    id: "precision",
    number: "01",
    title: { en: "PRECISION", ar: "الدقة" },
    description: {
      en: "Every measurement, drawing, and decision is reviewed with discipline.",
      ar: "كل قياس ورسم وقرار يخضع للمراجعة بانضباط.",
    },
  },
  {
    id: "integrity",
    number: "02",
    title: { en: "INTEGRITY", ar: "النزاهة" },
    description: {
      en: "We work with honesty, clarity, and long-term responsibility.",
      ar: "نعمل بصدق ووضوح ومسؤولية طويلة المدى.",
    },
  },
  {
    id: "craftsmanship",
    number: "03",
    title: { en: "CRAFTSMANSHIP", ar: "الحرفية" },
    description: {
      en: "We respect materials, detailing, and the people who build them.",
      ar: "نحترم المواد والتفاصيل ومن ينفذها.",
    },
  },
  {
    id: "innovation",
    number: "04",
    title: { en: "INNOVATION", ar: "الابتكار" },
    description: {
      en: "We explore modern methods without abandoning fundamentals.",
      ar: "نستكشف الأساليب الحديثة دون التخلي عن الأساسيات.",
    },
  },
  {
    id: "responsibility",
    number: "05",
    title: { en: "RESPONSIBILITY", ar: "المسؤولية" },
    description: {
      en: "Every project is a commitment to clients, teams, and context.",
      ar: "كل مشروع التزام تجاه العميل والفريق والسياق.",
    },
  },
];

/*
 * PROCESS STAGES
 * Used on Home → Process timeline.
 */
window.Strucora.processStages = [
  {
    number: "01",
    title: { en: "DISCOVER", ar: "اكتشاف" },
    description: {
      en: "Understand requirements, context, scope, and project goals.",
      ar: "فهم المتطلبات والسياق والأهداف الأساسية للمشروع.",
    },
  },
  {
    number: "02",
    title: { en: "DESIGN", ar: "تصميم" },
    description: {
      en: "Develop concepts, planning, materials, and spatial direction.",
      ar: "تطوير الأفكار والمخططات والمواد والتوجه المكاني.",
    },
  },
  {
    number: "03",
    title: { en: "BUILD", ar: "تنفيذ" },
    description: {
      en: "Coordinate construction, execution, supervision, and quality.",
      ar: "تنسيق أعمال التنفيذ والإشراف وضمان الجودة.",
    },
  },
  {
    number: "04",
    title: { en: "DELIVER", ar: "تسليم" },
    description: {
      en: "Complete the project with attention to detail and final quality.",
      ar: "استكمال المشروع بعناية والتأكد من جودة التفاصيل النهائية.",
    },
  },
];

/*
 * STATISTICS
 * Placeholder values shown on the Home → Statistics section.
 * Numbers animate on scroll (Counter component) and respect prefers-reduced-motion.
 */
window.Strucora.statistics = [
  { value: 12, suffix: "+", en: "Completed Projects", ar: "مشروعاً منجزاً" },
  { value: 8, suffix: "+", en: "Years of Experience", ar: "سنوات من الخبرة" },
  { value: 24, suffix: "", en: "Project Specialists", ar: "متخصصاً" },
  { value: 98, suffix: "%", en: "Client Satisfaction", ar: "رضا العملاء" },
];