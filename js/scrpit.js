const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarpergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const respostas = document.getElementById(controls);

  respostas.classList.toggle("ativa");
  const ativa = respostas.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarpergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeira de bikes
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosgaleria(img) {
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosgaleria);

// Plugin animaçao

new SimpleAnime();
