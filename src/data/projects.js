/*
 * PROJECT DATA
 * ------------------------------------
 * Static portfolio content for Home featured projects and the Projects page.
 * No database is used in this frontend version.
 *
 * Each project has an `aspect` field that controls the image slot proportions:
 *   - "wide"   → 2000 × 1400  (default landscape)
 *   - "tall"   → 1400 × 1800  (vertical)
 *   - "square" → 1600 × 1600
 *   - "medium" → 1600 × 1200
 *
 * IMAGES: Replace `image: null` with real project photography.
 * Use object-fit: cover inside the card so aspect ratios render cleanly.
 */

window.Strucora.projects = [
  {
    id: "alta-residence",
    number: "01",
    name: "ALTA RESIDENCE",
    nameAr: "مشروع ألتا السكني",
    category: { en: "Residential Architecture", ar: "عمارة سكنية" },
    categoryKey: "residential",
    location: "Baghdad, Iraq",
    locationAr: "بغداد، العراق",
    year: "2026",
    aspect: "wide",
    description: {
      en: "A contemporary residential concept focused on natural light, material balance, and quiet spatial transitions.",
      ar: "مشروع سكني معاصر يركز على الضوء الطبيعي وتوازن المواد وانتقال المساحات بانسيابية.",
    },
    image: "./project-01-alta-residence.webp.jpg",
  },
  {
    id: "nova-business-center",
    number: "02",
    name: "NOVA BUSINESS CENTER",
    nameAr: "مركز نوفا للأعمال",
    category: { en: "Commercial Development", ar: "تطوير تجاري" },
    categoryKey: "commercial",
    location: "Erbil, Iraq",
    locationAr: "أربيل، العراق",
    year: "2025",
    aspect: "tall",
    description: {
      en: "A contemporary commercial environment designed around movement, flexibility, and modern workplace culture.",
      ar: "بيئة تجارية معاصرة صُممت لتجمع بين الحركة والمرونة واحتياجات العمل الحديثة.",
    },
    image: "./project-02-nova-business-center.webp.jpg",
  },
  {
    id: "stone-house",
    number: "03",
    name: "STONE HOUSE",
    nameAr: "منزل ستون",
    category: { en: "Private Residence", ar: "مسكن خاص" },
    categoryKey: "residential",
    location: "Sulaymaniyah, Iraq",
    locationAr: "السليمانية، العراق",
    year: "2025",
    aspect: "wide",
    description: {
      en: "A restrained residential project combining concrete, natural stone, and carefully framed views.",
      ar: "مشروع سكني هادئ يجمع بين الخرسانة والحجر الطبيعي وإطلالات مدروسة بعناية.",
    },
    image: "./project-03-stone-house.webp.jpg",
  },
  {
    id: "form-08",
    number: "04",
    name: "FORM 08",
    nameAr: "FORM 08",
    category: { en: "Interior Development", ar: "تطوير داخلي" },
    categoryKey: "interior",
    location: "Baghdad, Iraq",
    locationAr: "بغداد، العراق",
    year: "2024",
    aspect: "medium",
    description: {
      en: "An interior environment developed around material simplicity, functional planning, and refined details.",
      ar: "مساحة داخلية ترتكز على بساطة المواد والتخطيط الوظيفي والتفاصيل الدقيقة.",
    },
    image: "./project-04-form-08.webp.jpg",
  },
  {
    id: "northline",
    number: "05",
    name: "NORTHLINE",
    nameAr: "نورث لاين",
    category: { en: "Mixed-Use Development", ar: "تطوير متعدد الاستخدامات" },
    categoryKey: "development",
    location: "Erbil, Iraq",
    locationAr: "أربيل، العراق",
    year: "2024",
    aspect: "wide",
    description: {
      en: "A layered mixed-use project balancing retail, workspace, and residential programs within a single architectural identity.",
      ar: "مشروع متعدد الاستخدامات يوازن بين البرامج التجارية، المكاتب، والسكن ضمن هوية معمارية واحدة.",
    },
    image: "./project-05-northline.webp.jpg",
  },
  {
    id: "courtyard-17",
    number: "06",
    name: "COURTYARD 17",
    nameAr: "كورت يارد 17",
    category: { en: "Architecture", ar: "هندسة معمارية" },
    categoryKey: "architecture",
    location: "Duhok, Iraq",
    locationAr: "دهوك، العراق",
    year: "2023",
    aspect: "square",
    description: {
      en: "A composed residential courtyard architecture organized around light, privacy, and material calm.",
      ar: "تصميم سكني محاط بفناء داخلي، ينظم الضوء والخصوصية وهدوء المواد.",
    },
    image: "./project-06-courtyard-17.webp.jpg",
  },
  {
    id: "meridian-tower",
    number: "07",
    name: "MERIDIAN TOWER",
    nameAr: "برج ميريديان",
    category: { en: "Architecture", ar: "هندسة معمارية" },
    categoryKey: "architecture",
    location: "Basra, Iraq",
    locationAr: "البصرة، العراق",
    year: "2023",
    aspect: "tall",
    description: {
      en: "A vertical commercial tower with a refined façade and a structured interior core.",
      ar: "برج تجاري عمودي بواجهة مدروسة ونواة داخلية واضحة.",
    },
    image: "./project-07-meridian-tower.webp.jpg",
  },
  {
    id: "atelier-09",
    number: "08",
    name: "ATELIER 09",
    nameAr: "أتيليه 09",
    category: { en: "Interior Development", ar: "تطوير داخلي" },
    categoryKey: "interior",
    location: "Baghdad, Iraq",
    locationAr: "بغداد، العراق",
    year: "2024",
    aspect: "medium",
    description: {
      en: "A studio interior shaped around minimalist details, calm materials, and natural light.",
      ar: "مساحة استوديو تتشكل من التفاصيل البسيطة والمواد الهادئة والإضاءة الطبيعية.",
    },
    image: "./project-08-atelier-09.webp.jpg",
  },
  {
    id: "linea-residence",
    number: "09",
    name: "LINEA RESIDENCE",
    nameAr: "مسكن لينيا",
    category: { en: "Residential Architecture", ar: "عمارة سكنية" },
    categoryKey: "residential",
    location: "Erbil, Iraq",
    locationAr: "أربيل، العراق",
    year: "2024",
    aspect: "wide",
    description: {
      en: "A linear residential project defined by elongated proportions and rhythmic façade composition.",
      ar: "مشروع سكني خطي تتشكل واجهته من النسب الطويلة والإيقاع المعماري المنتظم.",
    },
    image: "./project-09-linea-residence.webp.jpg",
  },
  {
    id: "horizon-mall",
    number: "10",
    name: "HORIZON MALL",
    nameAr: "هورايزن مول",
    category: { en: "Commercial Development", ar: "تطوير تجاري" },
    categoryKey: "commercial",
    location: "Baghdad, Iraq",
    locationAr: "بغداد، العراق",
    year: "2023",
    aspect: "wide",
    description: {
      en: "A large-scale retail environment designed around movement, daylight, and wayfinding clarity.",
      ar: "بيئة تجارية واسعة النطاق، صُممت حول الحركة والإضاءة الطبيعية ووضوح التنقل.",
    },
    image: "./project-10-horizon-mall.webp.jpg",
  },
];

window.Strucora.projectCategories = [
  { key: "all", en: "All", ar: "الكل" },
  { key: "residential", en: "Residential", ar: "سكني" },
  { key: "commercial", en: "Commercial", ar: "تجاري" },
  { key: "architecture", en: "Architecture", ar: "هندسة معمارية" },
  { key: "interior", en: "Interior", ar: "داخلي" },
  { key: "development", en: "Development", ar: "تطوير" },
];