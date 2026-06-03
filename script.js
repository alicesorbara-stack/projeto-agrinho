```javascript
// MENU MOBILE

const menuMobile = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

if(menuMobile){

menuMobile.addEventListener("click",()=>{

navLinks.classList.toggle("active");
menuMobile.classList.toggle("active");

});

}

// FECHAR MENU AO CLICAR

document.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

// ACCORDION

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(btn=>{

btn.addEventListener("click",()=>{

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

// REVEAL AO ROLAR

const reveals =
document.querySelectorAll(".reveal");

function revealScroll(){

reveals.forEach(section=>{

const windowHeight =
window.innerHeight;

const sectionTop =
section.getBoundingClientRect().top;

const visible = 120;

if(sectionTop < windowHeight - visible){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",
revealScroll);

revealScroll();

// CONTADORES

const counters =
document.querySelectorAll(".contador");

let contadorExecutado = false;

function iniciarContadores(){

if(contadorExecutado) return;

contadorExecutado = true;

counters.forEach(counter=>{

const target =
+counter.dataset.target;

let current = 0;

const increment =
target / 80;

const updateCounter = ()=>{

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

// OBSERVER

const dados =
document.querySelector("#graficos");

if(dados){

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

iniciarContadores();

}

});

},{
threshold:0.4
});

observer.observe(dados);

}

// BOTÃO TOPO

const topo =
document.getElementById("topo");

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topo.style.display = "flex";

}else{

topo.style.display = "none";

}

});

topo.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

// BARRA DE PROGRESSO

window.addEventListener("scroll",()=>{

const winScroll =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled =
(winScroll / height) * 100;

document.getElementById("progress-bar")
.style.width =
scrolled + "%";

});

// GRÁFICO

const ctx =
document.getElementById("grafico");

if(ctx){

new Chart(ctx,{

type:"bar",

data:{

labels:[
"Economia de Água",
"Eficiência",
"Precisão"
],

datasets:[{

label:"Resultados (%)",

data:[
30,
70,
95
]

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

}

}

});

}

// EFEITO PARALLAX

window.addEventListener("scroll",()=>{

const hero =
document.querySelector("header");

if(hero){

hero.style.backgroundPositionY =
window.pageYOffset * 0.4 + "px";

}

});

// HOVER NOS CARDS

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*10;

const rotateX =
((y / rect.height)-0.5)*-10;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

// CONSOLE

console.log(
"%c🌱 Agro Sustentável - Agrinho 2026",
"color:#7CFC00;font-size:18px;font-weight:bold;"
);

console.log(
"%cProjeto desenvolvido por Alice Sorbara",
"color:#4CAF50;"
);
```
