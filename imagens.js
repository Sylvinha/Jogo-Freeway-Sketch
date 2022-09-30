//imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarroB;
let imagemCarroC;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemDoAtor = loadImage("Imagens/gato.png")
  imagemCarro = loadImage("Imagens/carro-a.png")
  imagemCarroB = loadImage("Imagens/carro-b.png")
  imagemCarroC = loadImage("Imagens/carro-c.png")
  imagemCarros = [imagemCarro, imagemCarroB, imagemCarroC, imagemCarro, imagemCarroB, imagemCarroC]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}