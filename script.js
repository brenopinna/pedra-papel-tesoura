let opcoes = document.querySelectorAll('#player img')
let opcoesInimigo = document.querySelectorAll('#enemy img')
let pontos = document.getElementById('pontos')
let situacao = document.getElementById('situacao')

const vitorias = {
    'Papel': 'Pedra',
    'Tesoura': 'Papel',
    'Pedra':'Tesoura'
}

opcoes.forEach(jogada => {
    jogada.addEventListener('click', () => {
        resetarOpacidade()
        aumentarOpacidade(jogada)
        let jogadaPlayer = jogada.alt;
        let jogadaEnemy = inimigoJogar(opcoesInimigo)
        if(vitorias[jogadaPlayer] === jogadaEnemy){
            pontos.innerHTML++
            situacao.innerHTML = 'Ganhou!!!'
        }else if(jogadaPlayer === jogadaEnemy){
            situacao.innerHTML = 'Empate!!'
        }else{
            pontos.innerHTML--
            situacao.innerHTML = 'Perdeu!!'
        }
    })
});

function resetarOpacidade(){
    document.querySelectorAll('.jogador img')
    .forEach(img => {
        img.classList.remove('visivel')
    })
}

function aumentarOpacidade(img){
    img.classList.add('visivel')
}

function inimigoJogar(jogadasInimigo){
    let randomIndex = parseInt(Math.random() * 3)
    let jogada = jogadasInimigo[randomIndex]
    aumentarOpacidade(jogada)
    return jogada.alt
}