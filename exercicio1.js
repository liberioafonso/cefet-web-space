// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let botoes = document.querySelectorAll(".botao-expandir-retrair");

for (let i = 0; i < botoes.length; i++) {   
	botoes[i].addEventListener('click', function(e) {
    let pn = botoes[i].parentNode
    pn.classList.toggle('expandido')
    botoes[i].innerHTML = botoes[i].innerHTML === '+' ? '-' : '+';
  })
}
