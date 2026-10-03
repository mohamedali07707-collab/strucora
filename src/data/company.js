/*
 * GLOBAL CONTACT / COMPANY DATA
 * ------------------------------------
 * Replace placeholder values with the real STRUCORA contact information later.
 * Centralizing avoids editing the same data in many components.
 *
 * - phone / whatsapp: digits-only for wa.me links.
 * - social URLs: change here once and the whole site updates.
 */

window.Strucora.company = {
  name: "STRUCORA",
  shortName: "STRUCORA",
  tagline: "Construction / Architecture",
  description:
    "STRUCORA is a modern construction and architecture company focused on thoughtful design, disciplined execution, and lasting quality.",
  established: 2018,
  city: "Baghdad, Iraq",
  cityAr: "بغداد، العراق",
  workingHours: {
    en: "Saturday – Thursday\n9:00 AM – 5:00 PM",
    ar: "السبت – الخميس\n9:00 صباحاً – 5:00 مساءً",
  },
  contact: {
    email: "hello@strucora.site",
    phoneDisplay: "+964 770 123 4567",
    phoneRaw: "+9647701234567",
    whatsapp: "9647701234567",
  },
  social: {
    instagram: "https://instagram.com/strucora.site",
    facebook: "https://facebook.com/strucora.site",
  },
};

/*
 * WHATSAPP LINK HELPER
 * Builds the wa.me URL with a localized pre-filled message.
 * Used by Header CTA, Hero CTA, Contact, Footer, etc.
 */
window.Strucora.buildWhatsAppLink = (lang = "en") => {
  const message =
    lang === "ar"
      ? "مرحباً STRUCORA، أود معرفة المزيد عن خدماتكم."
      : "Hello STRUCORA, I would like to learn more about your services.";
  const num = window.Strucora.company.contact.whatsapp;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
};