
/* MENU FIX */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
  mobileMenu.style.left = "0";
  overlay.classList.remove("hidden");
};

overlay.onclick = () => {
  mobileMenu.style.left = "-100%";
  overlay.classList.add("hidden");
};

/* Typing */
const text = "I build modern websites using Tailwind & JavaScript";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

/* Modal */
function openModal(t, txt) {
  document.getElementById("modalTitle").innerText = t;
  document.getElementById("modalText").innerText = txt;
  document.getElementById("modal").classList.remove("hidden");
}
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* EmailJS */
emailjs.init("6SMATWAxvkhsmclZr");

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send("service_36j5mfj", "template_fnzasiy", {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  })
  .then(() => {
    alert("✅ Message sent!");
    this.reset();
  })
  .catch(() => {
    alert("❌ Failed!");
  });
});

/* Particle */
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 60 },
    move: { enable: true, speed: 1 }
  }
});
