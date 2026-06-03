// ================================
// MENU MOBILE
// ================================

const menuMobile = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

menuMobile.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuMobile.classList.toggle("active");

});

// Fechar menu ao clicar em um link

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuMobile.classList.remove("active");

    });

});

// ================================
// ACCORDION
// ================================

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("ativo");

        const painel =
        btn.nextElementSibling;

        if(painel.style.maxHeight){

            painel.style.maxHeight = null;

        }else{

            painel.style.maxHeight =
            painel.scrollHeight + "px";

        }

    });

});

// ================================
// CONTADORES ANIMADOS
// ================================

const counters =
document.querySelectorAll(".contador");

let contadorExecutado = false;

function iniciarContadores(){

    if(contadorExecutado) return;

    contadorExecutado = true;

    counters.forEach(counter => {

        const target =
        +counter.dataset.target;

        let current = 0;

        const increment =
        target / 80;

        const updateCounter = () => {

            current += increment;

            if(current < target){

                counter.innerText =
                Math.floor(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText =
                target + "%";

            }

        };

        updateCounter();

    });

}

// ================================
// REVEAL AO ROLAR
// ================================

const reveals =
document.querySelectorAll(".reveal");

function revealScroll(){

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const sectionTop =
        section.getBoundingClientRect().top;

        const visible =
        120;

        if(sectionTop < windowHeight - visible){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealScroll);

revealScroll();

// ================================
// CONTADOR OBSERVER
// ================================

const dados =
document.querySelector("#dados");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            iniciarContadores();

        }

    });

},{
    threshold:0.4
});

observer.observe(dados);

// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const topo =
document.getElementById("topo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topo.style.display = "flex";

    }else{

        topo.style.display = "none";

    }

});

topo.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ================================
// NAVBAR INTELIGENTE
// ================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.padding =
        "12px 8%";

        navbar.style.background =
        "rgba(0,0,0,.75)";

    }else{

        navbar.style.padding =
        "20px 8%";

        navbar.style.background =
        "rgba(0,0,0,.35)";

    }

});

// ================================
// EFEITO PARALLAX
// ================================

window.addEventListener("scroll", () => {

    const scroll =
    window.pageYOffset;

    const hero =
    document.querySelector("header");

    hero.style.backgroundPositionY =
    scroll * 0.4 + "px";

});

// ================================
// HOVER 3D NOS CARDS
// ================================

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 12;

        const rotateX =
        ((y / rect.height) - 0.5) * -12;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// ================================
// IMAGENS COM ZOOM SUAVE
// ================================

const imagens =
document.querySelectorAll(".imagens img");

imagens.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform =
        "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform =
        "scale(1)";

    });

});

// ================================
// ANO AUTOMÁTICO NO FOOTER
// ================================

const footer =
document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `Projeto desenvolvido para o Concurso Agrinho ${new Date().getFullYear()}`;

}

// ================================
// LOADING DA PÁGINA
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ================================
// CONSOLE
// ================================

console.log(
"%c🌱 Agro Sustentável - Agrinho 2026",
"color:#7CFC00;font-size:18px;font-weight:bold;"
);

console.log(
"%cSite otimizado e carregado com sucesso.",
"color:#4CAF50;"
);
