// Scroll suave
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

// Navbar efecto scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(15, 23, 42, 0.9)";
    } else {
        header.style.background = "rgba(15, 23, 42, 0.7)";
    }
});

// Animaciones al aparecer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".qr-card, .card, .video-section, .info, .final").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});

// Modal QR
const modal = document.getElementById("qrModal");
const modalImg = document.getElementById("qrImage");

function openQR(element) {
    const img = element.querySelector("img");
    modalImg.src = img.src;
    modal.style.display = "flex";
}

function closeQR() {
    modal.style.display = "none";
}

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeQR();
    }
});

// Botón volver arriba
const btnTop = document.createElement("button");
btnTop.innerHTML = "↑";
btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.padding = "10px 15px";
btnTop.style.fontSize = "18px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "8px";
btnTop.style.background = "#38bdf8";
btnTop.style.color = "#0f172a";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.zIndex = "1500";

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});