
/* ===== STARS BACKGROUND ===== */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars = [];

    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random()
        });
    }
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(101, 232, 255, ${star.opacity})`;
        ctx.fill();

        star.y -= star.speed;

        if (star.y < 0) {
            star.y = canvas.height;
        }
    });

    requestAnimationFrame(animateStars);
}

resizeCanvas();
animateStars();

window.addEventListener("resize", resizeCanvas);


/* ===== DISCOVERY CARDS ===== */

function toggleDetails(button) {
    const details = button.nextElementSibling;

    details.classList.toggle("show");

    button.textContent = details.classList.contains("show")
        ? "إخفاء التفاصيل ↑"
        : "اكتشف المزيد ↓";
}


/* ===== AI EXPERIENCE ===== */

const predictions = {
    space: "قد تكون بداية اكتشافك القادم من أسرار الكون والثقوب السوداء. 🌌",

    mind: "ربما يكمن الاكتشاف القادم في فهم الوعي البشري وأسرار العقل. 🧠",

    future: "تخيّل عالماً تتعاون فيه العقول البشرية والذكاء الاصطناعي لصناعة مستقبل جديد. 🤖"
};

function exploreInterest(interest) {
    const result = document.getElementById("prediction-result");

    result.innerHTML = `
        <span class="result-symbol">✧</span>
        <p>${predictions[interest]}</p>
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* ===== SCROLL REVEAL ===== */

const revealElements = document.querySelectorAll(
    ".section, .discovery-card, .creation-step"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);
});


/* ===== SMOOTH NAVIGATION ===== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
