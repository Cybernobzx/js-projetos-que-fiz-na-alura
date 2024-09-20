//toy story, LIVRE, Animação, Aventura, Comedia, Familia

//Vingadores Ultimato, 12, ação, aventura, ficçao cientifica, Super-Heroi

//Minha Mãe é uma peça, 12, Comedia, Nacional

//Coraline, 10, animação, fantasia, suspense

//Mãos Talentosas, 12, biografia, drama

let campoIdade;
let campoFantasia
let campoAção

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes")
  createSpan("Sua idade?")
  campoIdade = createInput("12");
  campoFantasia = createCheckbox("Gosta de Fantasia")
  campoAção = createCheckbox("Gosta de ação ?")
}

function draw() {
  background(220);
  let idade = campoIdade.value()
  let gostaDeFantasia = campoFantasia.checked()
  let gostaDeAção = campoAção.checked()
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAção);
  text(recomendacao, width / 2, height / 2);
  
  fill(75, 0, 115) // um tom de roxo escuro, sla
  textAlign(CENTER, CENTER)
  textSize(38)
  text(recomendacao, width / 2, height / 2)
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAção) {
    if(idade >= 10) {
        if(idade >= 12) {
            return "Mãos Talentosas";
        } else {
            if(gostaDeAção || gostaDeFantasia){
                return "Vingadores Ultimato";
            } else {
                return "Minha mãe é uma peça";
            }
        }
    } else {
        if(gostaDeFantasia) {
            return "Coraline";
        } else {
            return "ToyStory";
        }
    }
}
