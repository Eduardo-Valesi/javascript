
let conteudo = document.getElementById('area')
conteudo.addEventListener('click', clicar)
conteudo.addEventListener('mouseenter', entrar)
conteudo.addEventListener('mouseout', sair)

function clicar() {
    conteudo.innerText = 'Clicou'
    conteudo.style.background = 'red'
}

function entrar() {
    conteudo.innerText = 'Entrou!'
}

function sair() {
    conteudo.innerText = 'Saiu!'
    conteudo.style.background = 'green'
}