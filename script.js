const joinBtn = document.getElementById("joinBtn");
const contactForm = document.getElementById("contactForm");
const joinForm = document.getElementById("joinForm");

const revealElements = document.querySelectorAll(".animate");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    const offset = 80;
    if (rect.top < windowHeight - offset) {
      el.classList.add("visible");
      if (el.classList.contains("hero-copy")) {
        el.style.transitionDelay = "0.15s";
      }
      if (el.classList.contains("hero-card")) {
        el.style.transitionDelay = "0.25s";
      }
      if (el.classList.contains("hero-actions")) {
        el.style.transitionDelay = "0.25s";
      }
      if (el.classList.contains("section-cards")) {
        el.style.transitionDelay = "0.12s";
      }
      if (
        el.classList.contains("classes-grid") ||
        el.classList.contains("trainers-grid") ||
        el.classList.contains("pricing-grid")
      ) {
        el.style.transitionDelay = `${index * 0.05 + 0.1}s`;
      }
    }
  });
};

const throttle = (fn, wait) => {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      fn.apply(this, arguments);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
};

window.addEventListener("scroll", throttle(revealOnScroll, 100));
window.addEventListener("load", () => {
  revealOnScroll();
  document.body.classList.add("page-loaded");
});

if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");

    alert(
      `Thanks, ${name}! We have received your message and will be in touch at ${email}.`,
    );
    contactForm.reset();
  });
}

if (joinForm) {
  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(joinForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const plan = formData.get("plan");

    alert(
      `Welcome aboard, ${name}! Your ${plan} membership request has been received. We'll contact you at ${email}.`,
    );
    joinForm.reset();
  });
}
