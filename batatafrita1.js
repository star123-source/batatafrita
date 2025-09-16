// Função para mudar cor de fundo de um parágrafo
function mudarCor(novaCor) {
  var elemento = document.getElementById("para1");
  elemento.style.backgroundColor = novaCor;
  elemento.style.backgroundColor = novaCor;
  elemento.style.display = 'inline';
}

// Lógica para alternar imagem
const imagem = document.getElementById('foto');
let foto_t = false;

imagem.addEventListener('click', () => {
  if (!foto_t) {
    imagem.src = 'foto.jpg'; 
    foto_t = true;
  } else {
    imagem.src = 'teste.jpg';
    foto_t = false;
  }
});

// Lógica para redimensionar o círculo
const rodri_circulo = document.getElementById('circulo');
let rodri_tamanho = 30;

rodri_circulo.addEventListener('dblclick', () => {
  alert(rodri_tamanho);
  rodri_circulo.style.borderRadius = `${rodri_tamanho}px`;
  rodri_circulo.style.width = `${rodri_tamanho * 2}px`;
  rodri_circulo.style.height = `${rodri_tamanho * 2}px`;
  rodri_tamanho += 30;
});

// Validação de idade
const form = document.getElementById("texto-form");
const section = document.getElementById("sc");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  const valor = parseInt(input.value);
  c

  if (isNaN(valor) || valor < 24) {
    p.innerText = "Professor é mais velho";
    p.style.display = 'block';

  } else {

    p.innerHTML = '<h1>Olá, Mundo</h1>';
    p.style.display = 'block';
  }
});

