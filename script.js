// ===================================
// AGRO SUSTENTÁVEL - AGRINHO 2026
// Alice Sorbara
// ===================================

// ================================
// MENU MOBILE
// ================================
const menuMobile = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

if (menuMobile && navLinks) {
    menuMobile.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuMobile.classList.toggle("active");
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
        menuMobile?.classList.remove("active");
    });
});

// ================================
// REVEAL AO ROLAR
// ================================
const reveals = document.querySelectorAll(".reveal");

function revealScroll() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const visible = 120;

        if (sectionTop < windowHeight - visible) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealScroll);
revealScroll(); // Executa uma vez no início

// ================================
// CONTADORES ANIMADOS
// ================================
const counters = document.querySelectorAll(".contador");
let contadorExecutado = false;

function iniciarContadores() {
    if (contadorExecutado) return;
    contadorExecutado = true;

    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        let current = 0;
        const increment = target / 80;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                if (target % 1 !== 0) {
                    counter.innerText = current.toFixed(1);
                } else {
                    counter.innerText = Math.floor(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + "%";
            }
        };

        updateCounter();
    });
}

// Observer para ativar os contadores ao rolar a página
const dadosSection = document.querySelector("#dados");
if (dadosSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iniciarContadores();
            }
        });
    }, { threshold: 0.4 });

    observer.observe(dadosSection);
}

// ================================
// BOTÃO TOPO
// ================================
const topoBtn = document.getElementById("topo");

window.addEventListener("scroll", () => {
    if (!topoBtn) return;
    if (window.scrollY > 400) {
        topoBtn.style.display = "flex";
    } else {
        topoBtn.style.display = "none";
    }
});

topoBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================================
// BARRA DE PROGRESSO
// ================================
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    if (!progressBar) return;
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});

// ================================
// GRÁFICO CHART.JS
// ================================
const ctx = document.getElementById("grafico");

if (ctx && typeof Chart !== "undefined") {
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Estabelecimentos Familiares",
                "Produção de Mandioca",
                "Produção de Feijão",
                "Produção de Leite"
            ],
            datasets: [{
                label: "Percentual (%)",
                data: [84.4, 87, 70, 58],
                backgroundColor: 'rgba(76, 175, 80, 0.6)',
                borderColor: 'rgba(76, 175, 80, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });
}

// ================================
// EFEITO 3D NOS CARDS
// ================================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
});

// ================================
// ZOOM NAS IMAGENS
// ================================
const imagens = document.querySelectorAll(".imagens img");

imagens.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});

// ================================
// QUIZ INTERATIVO
// ================================
let pontos = 0;

function responder(botao, correta) {
    const questao = botao.parentElement;

    if (questao.dataset.respondida) return;
    questao.dataset.respondida = "sim";

    if (correta) {
        botao.classList.add("correto");
        pontos++;
    } else {
        botao.classList.add("errado");
    }

    const placar = document.getElementById("pontuacao");
    if (placar) {
        placar.innerText = pontos;
    }
}

// Mensagem de Inicialização
console.log("%c🌱 Agro Sustentável - Agrinho 2026", "color:#7CFC00;font-size:18px;font-weight:bold;");
console.log("%cProjeto desenvolvido por Alice Sorbara", "color:#4CAF50;font-size:14px;");
