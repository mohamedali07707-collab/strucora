(() => {
  const data = window.Strucora;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const englishTitle = document.title;
  let language = "en";
  let successTimer;

  try {
    language = localStorage.getItem("strucora-language") === "ar" ? "ar" : "en";
  } catch {
    language = "en";
  }

  const t = (key) => data.translations[language]?.[key] ?? data.translations.en[key] ?? key;
  const localize = (value) => typeof value === "string" ? value : value?.[language] ?? "";
  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);

  function updateLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      const required = element.querySelector(".field__req");
      if (element.dataset.i18nLines) {
        const lineClass = element.dataset.i18nLines;
        element.innerHTML = value.split("\n").map((line) => `<span class="${lineClass}">${escapeHTML(line)}</span>`).join("");
      } else {
        element.textContent = value;
        if (required) element.append(required);
      }
      if (element.classList.contains("home-services__note")) element.textContent += " →";
    });

    document.querySelectorAll("[data-localized]").forEach((element) => {
      const [english, arabic = english] = element.dataset.localized.split("|");
      element.innerHTML = escapeHTML(language === "ar" ? arabic : english).replace(/\\n|\n/g, "<br>");
    });

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "Switch to English");
      button.querySelectorAll(".lang-switch__opt").forEach((option) => {
        option.classList.toggle("is-active", option.textContent.trim().toLowerCase() === language);
      });
    });

    document.querySelectorAll("[data-whatsapp]").forEach((link) => {
      link.href = data.buildWhatsAppLink(language);
    });

    document.querySelectorAll("[data-project-name]").forEach((element) => {
      const project = data.projects.find((item) => item.id === element.dataset.projectName);
      if (!project) return;
      const name = language === "ar" ? project.nameAr : project.name;
      const category = localize(project.category);
      element.textContent = name;
      element.closest(".project-card__btn")?.setAttribute("aria-label", `${name} — ${category}`);
    });
    document.querySelectorAll("[data-project-category]").forEach((element) => {
      const project = data.projects.find((item) => item.id === element.dataset.projectCategory);
      if (project) element.textContent = localize(project.category);
    });
    document.querySelectorAll("[data-project-location]").forEach((element) => {
      const project = data.projects.find((item) => item.id === element.dataset.projectLocation);
      if (project) element.textContent = language === "ar" ? project.locationAr : project.location;
    });
    document.querySelectorAll("[data-service-title]").forEach((element) => {
      const service = data.services?.find((item) => item.id === element.dataset.serviceTitle);
      if (service) element.textContent = localize(service.title);
    });
    document.querySelectorAll("[data-service-description]").forEach((element) => {
      const service = data.services?.find((item) => item.id === element.dataset.serviceDescription);
      if (service) element.textContent = localize(service.description);
    });
    document.querySelectorAll("[data-process-title]").forEach((element) => {
      const stage = data.processStages?.[Number(element.dataset.processTitle)];
      if (stage) element.textContent = localize(stage.title);
    });
    document.querySelectorAll("[data-process-description]").forEach((element) => {
      const stage = data.processStages?.[Number(element.dataset.processDescription)];
      if (stage) element.textContent = localize(stage.description);
    });
    document.querySelectorAll("[data-value-title]").forEach((element) => {
      const value = data.values?.find((item) => item.id === element.dataset.valueTitle);
      if (value) element.textContent = localize(value.title);
    });
    document.querySelectorAll("[data-value-description]").forEach((element) => {
      const value = data.values?.find((item) => item.id === element.dataset.valueDescription);
      if (value) element.textContent = localize(value.description);
    });

    const fieldKeys = { name: "contact.form.name", email: "contact.form.email", phone: "contact.form.phone", subject: "contact.form.subject", message: "contact.form.message" };
    document.querySelectorAll("#contact-form [name]").forEach((field) => {
      field.placeholder = field.name === "phone" ? "+964 770 123 4567" : t(fieldKeys[field.name]);
    });

    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.setAttribute("aria-selected", String(button.classList.contains("is-active")));
    });
    document.title = language === "ar" ? "STRUCORA — العمارة والإنشاءات" : englishTitle;
  }

  function initializeLanguage() {
    updateLanguage();
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        language = language === "en" ? "ar" : "en";
        try {
          localStorage.setItem("strucora-language", language);
        } catch {
          // Language switching still works when storage is unavailable.
        }
        updateLanguage();
      });
    });
  }

  function initializeMenu() {
    const header = document.querySelector(".site-header");
    const menu = document.querySelector(".mobile-menu");
    const openButton = document.querySelector("[data-menu-open]");
    const closeButton = document.querySelector("[data-menu-close]");
    if (!menu || !openButton || !closeButton) return;

    const close = () => {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      openButton.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    openButton.addEventListener("click", () => {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      openButton.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    });
    closeButton.addEventListener("click", close);
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
    window.addEventListener("scroll", () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 60);
    }, { passive: true });
  }

  function initializeImages() {
    const insertImage = (container, source, alt) => {
      if (!container || !source) return;
      const inner = container.querySelector(".img-reveal__inner");
      if (!inner) return;
      let image = inner.querySelector("img");
      if (!image) {
        image = document.createElement("img");
        inner.querySelector(".img-reveal__placeholder")?.replaceWith(image);
        if (!image.isConnected) inner.append(image);
      }
      image.src = source;
      image.alt = alt;
      image.loading = container.closest(".home-hero__media") ? "eager" : "lazy";
      image.decoding = "async";
    };

    insertImage(
      document.querySelector(".home-hero__media .img-reveal"),
      "./home-hero.webp.jpg",
      "Contemporary STRUCORA residential architecture"
    );
    insertImage(
      document.querySelector(".home-about-preview__media .img-reveal"),
      "./home-approach.webp.jpg",
      "Architectural planning model and material samples"
    );

    const aboutImages = [
      [".about-hero .img-reveal", "./about-hero.webp.jpg", "Contemporary Iraqi architecture"],
      [".about-story .img-reveal", "./about-story.webp.jpg", "Stone and concrete architectural detail"],
      [".about-approach .img-reveal", "./about-approach.webp.jpg", "Architect reviewing an architectural plan"],
    ];
    aboutImages.forEach(([selector, source, alt]) => {
      insertImage(document.querySelector(selector), source, alt);
    });
    insertImage(
      document.querySelector(".contact-image .img-reveal"),
      "./contact-architecture-wide.webp.jpg",
      "Wide view of contemporary Iraqi architecture"
    );

    document.querySelectorAll(".service-row[data-service]").forEach((row) => {
      const service = data.services?.find((item) => item.id === row.dataset.service);
      insertImage(row.querySelector(".img-reveal"), service?.image, localize(service?.title));
    });
    document.querySelectorAll("[data-project]").forEach((button) => {
      const project = data.projects?.find((item) => item.id === button.dataset.project);
      insertImage(button.querySelector(".img-reveal"), project?.image, language === "ar" ? project?.nameAr : project?.name);
    });
  }

  function initializeRevealsAndCounters() {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "120px" });
      document.querySelectorAll(".img-reveal").forEach((image) => imageObserver.observe(image));

      if (!reducedMotion) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const counter = entry.target;
            const number = counter.querySelector(".counter__num");
            const target = Number(counter.dataset.counter);
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min(1, (now - start) / 1600);
              number.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(counter);
          });
        }, { threshold: 0.4 });
        document.querySelectorAll("[data-counter]").forEach((counter) => counterObserver.observe(counter));
      } else {
        document.querySelectorAll("[data-counter]").forEach((counter) => {
          counter.querySelector(".counter__num").textContent = counter.dataset.counter;
        });
      }
    }
  }

  function initializeServices() {
    document.querySelectorAll(".service-row").forEach((row) => {
      const description = row.querySelector(".service-row__desc");
      const preview = row.querySelector(".service-row__preview");
      const setOpen = (open) => {
        row.classList.toggle("is-hover", open);
        description?.classList.toggle("is-open", open);
        preview?.classList.toggle("is-open", open);
      };
      row.addEventListener("mouseenter", () => setOpen(true));
      row.addEventListener("mouseleave", () => setOpen(false));
      row.querySelector(".service-row__btn")?.addEventListener("click", () => setOpen(!row.classList.contains("is-hover")));
    });
  }

  function initializeProjects() {
    const filters = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll(".projects-list__item[data-category]");
    const count = document.querySelector("#project-count");
    const empty = document.querySelector("[data-projects-empty]");
    filters.forEach((filter) => filter.addEventListener("click", () => {
      filters.forEach((button) => {
        const active = button === filter;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
      });
      let visibleCount = 0;
      cards.forEach((card) => {
        const visible = filter.dataset.filter === "all" || card.dataset.category === filter.dataset.filter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (count) count.textContent = String(visibleCount).padStart(2, "0");
      if (empty) empty.hidden = visibleCount > 0;
    }));
  }

  function initializeProjectModal() {
    const dialog = document.querySelector("#project-modal");
    if (!dialog) return;
    document.querySelectorAll("[data-project]").forEach((button) => button.addEventListener("click", () => {
      const project = data.projects?.find((item) => item.id === button.dataset.project);
      if (!project) return;
      const name = language === "ar" ? project.nameAr : project.name;
      const category = localize(project.category);
      const location = language === "ar" ? project.locationAr : project.location;
      dialog.innerHTML = `<button type="button" class="project-modal__close" data-modal-close aria-label="${escapeHTML(t("projects.modal.close"))}"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="19" x2="5" y2="5"/></svg></button><div class="project-modal__inner"><div class="project-modal__media"><div class="img-reveal" style="aspect-ratio:16 / 10" data-visible="true"><div class="img-reveal__mask"></div><div class="img-reveal__inner"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(name)}" loading="eager" decoding="async"></div></div><div class="project-modal__media-meta"><span>PROJECT / ${escapeHTML(project.number)}</span><span>${escapeHTML(project.year)}</span></div></div><div class="project-modal__body"><div class="project-modal__category">${escapeHTML(category)}</div><h3 class="project-modal__title">${escapeHTML(name)}</h3><p class="project-modal__desc">${escapeHTML(localize(project.description))}</p><div class="project-modal__facts"><div class="project-modal__fact"><span class="project-modal__fact-label">${escapeHTML(t("projects.modal.location"))}</span><span class="project-modal__fact-value">${escapeHTML(location)}</span></div><div class="project-modal__fact"><span class="project-modal__fact-label">${escapeHTML(t("projects.modal.year"))}</span><span class="project-modal__fact-value">${escapeHTML(project.year)}</span></div><div class="project-modal__fact"><span class="project-modal__fact-label">${escapeHTML(t("projects.modal.category"))}</span><span class="project-modal__fact-value">${escapeHTML(category)}</span></div></div></div></div>`;
      dialog.querySelector("[data-modal-close]").addEventListener("click", () => dialog.close());
      dialog.showModal();
    }));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  function initializeContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let valid = true;
      form.querySelectorAll("[name]").forEach((field) => {
        const value = field.value.trim();
        let error = "";
        if (field.required && !value) error = t("contact.form.errorRequired");
        else if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = t("contact.form.errorEmail");
        const wrapper = field.closest(".field");
        wrapper.classList.toggle("is-error", Boolean(error));
        field.setAttribute("aria-invalid", String(Boolean(error)));
        wrapper.querySelector("[data-error-for]").textContent = error;
        if (error) valid = false;
      });
      if (!valid) return;
      form.hidden = true;
      const success = document.createElement("div");
      success.className = "contact-form__success";
      success.setAttribute("role", "status");
      success.innerHTML = `<span class="contact-form__success-dot"></span>${escapeHTML(t("contact.form.success"))}`;
      form.after(success);
      clearTimeout(successTimer);
      successTimer = setTimeout(() => {
        success.remove();
        form.reset();
        form.hidden = false;
      }, 6000);
    });
  }

  function initializeCursor() {
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor || reducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      cursor?.remove();
      return;
    }
    window.addEventListener("mousemove", (event) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      cursor.classList.add("is-active");
    }, { passive: true });
    window.addEventListener("mouseover", (event) => {
      cursor.classList.toggle("is-hover", Boolean(event.target.closest("a, button, input, textarea, select")));
    }, { passive: true });
  }

  initializeLanguage();
  initializeMenu();
  initializeImages();
  initializeRevealsAndCounters();
  initializeServices();
  initializeProjects();
  initializeProjectModal();
  initializeContactForm();
  initializeCursor();
})();
