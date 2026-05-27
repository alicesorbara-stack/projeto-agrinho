const accordions =
document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

accordion.addEventListener("click", () => {

accordion.classList.toggle("ativo");

const painel =
accordion.nextElementSibling;

if(painel.style.maxHeight){

painel.style.maxHeight = null;

}else{

painel.style.maxHeight =
painel.scrollHeight + "px";

}

});

});
