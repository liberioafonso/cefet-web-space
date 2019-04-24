// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML
const server_imagens = 'https://fegemo.github.io/cefet-web/images/',
  imagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

  let i = 0;
  const prox = document.querySelector("#proximo");
  const ant = document.querySelector("#anterior");
  let slide = document.querySelector("#slide");
  prox.addEventListener("click", function(e) {
    i = (i + 1) % imagens.length;
    slide.src = server_imagens + imagens[i];
  });
  ant.addEventListener("click", function(e) {
    i = i === 0 ? 4 : (i - 1)
    slide.src = server_imagens + imagens[i];
  });