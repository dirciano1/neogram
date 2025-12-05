let current = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const carousel = document.getElementById("carousel");
const descriptionBox = document.getElementById("product-description");

/* TEXTOS PARA CADA PRODUTO */
const descriptions = [
  {
    name: "BetGram",
    text: "Sistema avançado de inteligência esportiva que identifica oportunidades, analisa riscos e entrega apostas estratégicas"
  },
  {
    name: "BusinessGram",
    text: "Assistente estratégico que identifica tendências de mercado, sugere ideias lucrativas e orienta a criação de negócios atuais."
  },
  {
    name: "CryptoGram",
    text: "Plataforma inteligente para análise de criptomoedas que monitora tendências, identifica movimentos e otimiza decisões."
  },
  {
    name: "InvestGram",
    text: "Ferramenta inteligente de suporte financeiro que avalia cenários, analisa ativos e orienta decisões estratégicas com precisão."
  },
  {
    name: "TalkGram",
    text: "Assistente dedicado ao ecossistema NeoGram que esclarece dúvidas, explica recursos, orienta usos e conecta você aos produtos."
  }
];


/* ATUALIZAÇÃO DO SLIDE + TEXTO */
function updateSlider() {
  carousel.scrollTo({
    left: current * window.innerWidth,
    behavior: "smooth"
  });

  dots.forEach(d => d.classList.remove("active"));
  dots[current].classList.add("active");

  // Atualizar texto
  descriptionBox.innerHTML = `
    <h2>${descriptions[current].name}</h2>
    <p>${descriptions[current].text}</p>
  `;
}


/* NAVEGAÇÃO */
function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlider();
}


/* AUTO SLIDE */
setInterval(() => {
  nextSlide();
}, 6000);


/* GARANTIR QUE AJUSTE AO REDIMENSIONAR */
window.addEventListener("resize", updateSlider);
