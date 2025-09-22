//exercicio 1-mostrar nome
function mostrarNome(){
  let nome = prompt("qual é seu nome ?");
  document.getElementById("mensagem").innerText = "Olá," + nome + ".seja bem-vindo!";
}
window.onload = function(){
   let nome = prompt("qual é seu nome ?");
   document.getElementById("mensagem").innerText = "Olá," + nome + ".seja bem-vindo!";
}
//exercicio 2-somador
function somarNumeros(){
  let N1 = Number(prompt("digite o primeiro numero"));
  let N2 = Number(prompt("digite o segundo numero"));
  let soma = N1 + N2
  document.getElementById("mensagem2").innerText = "a soma é" + soma;
}
function subtrairNumeros(){
  let N1 = Number(prompt("digite o primeiro numero"));
  let N2 = Number(prompt("digite o segundo numero"));
  let sub = N1 - N2
  document.getElementById("mensagem3").innerText = "a subtrator é " + sub;
}
function multiplicarNumeros(){
  let N1 = Number(prompt("digite o primeiro numero"));
  let N2 = Number(prompt("digite o segundo numero"));
  let mul = N1 * N2
  document.getElementById("mensagem4").innerText = "a multiplicação é " + mul;
}
function dividirNumeros(){
  let N1 = Number(prompt("digite o primeiro numero"));
  let N2 = Number(prompt("digite o segundo numero"));
  let div = N1 / N2
  document.getElementById("mensagem5").innerText = "a divisão é " + div;
}
//Exercício Modo Escuro/
function modoEscuro(){
let sections = document.querySelectorAll("section");
sections.forEach(function(sec){
  sec.style.backgroundColor = "grey";
  sec.style.color = "white";
});
let buttons = document.querySelectorAll("button")
buttons.forEach(function(but){
  but.style.backgroundColor = "Navy";
});
}
//Exercício Modo Claro
function modoClaro(){
let sections = document.querySelectorAll("section");
sections.forEach(function(sec){
  sec.style.backgroundColor = "lightGrey";
  sec.style.color = "black";
});
let buttons = document.querySelectorAll("button");
buttons.forEach(function(but){
  but.style.backgroundColor = "#007FFF";
});
}
let imagens = ["https://s2-autoesporte.glbimg.com/BbMHbbaPGZuED0jNnqzzdcblqPo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/w/u/IdrYamScesimMuxFmjNg/2017-03-07-2017-honda-civic-type-r.jpg","https://s2-autoesporte.glbimg.com/3rBtn8EC1ftYhtPKbVOJ9jNvBNU=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/k/W/sDAbvPSEuwTma0BzX3hQ/2020-02-26-civic.jpg","https://someacessorios.com.br/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/0/3/03._copiar_1.jpg","https://s2-autoesporte.glbimg.com/3so1CfmC8-FC78EU4rJswSzrcPE=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/w/O/B3pudESKC7AikMri3JiA/2020-02-26-painelcivic.jpg"];
let indice=0;
let intervalo;

function trocarImagem(){
  indice++;
  if (indice >= imagens.length){
    indice =0;
  }
  document.getElementById("imagem").src = imagens[indice];
}
function iniciarTroca(){
  if(!intervalo){
    intervalo = setInterval(trocarImagem, 1000);
  }
}