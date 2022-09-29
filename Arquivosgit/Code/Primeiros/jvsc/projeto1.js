var prompt = require("prompt-sync")();


let espadaEspecial = false

function dado() {
    min = Math.ceil(7);
    max = Math.floor(1);
    return Math.floor(Math.random() * (max - min) + min);
  }

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffle(s) {
    var arr = s.split('');          
    var n = arr.length;              
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       
      
      var temp = arr[i];            
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                
    return s;                        
  }

var nome = prompt("Digite seu nome: ")

  nome = shuffle(nome);
  console.log("Seu nome élfico é: " + nome);

let b = prompt("Você quer lutar com o boss opcional? ").toLowerCase();

if ( b == "sim" || b == "s" || b == "SIM" || b == "Sim") {
    console.log("Você lutará com o grande feiticeiro branco.")
    console.log("Para isso, você precisará rodar o dado, se seu número for maior que 3, você ganhará a espada especial do feiticeiro. ")
console.log("A espada lhe dará uma vagatagem no começo do jogo.")
prompt("aperte enter para girar o dado")
let dados = dado();
console.log("Você tirou o número: " + dados)
        if(dados >= 3) {
            console.log('Você protagonizou uma luta incrível e derrotou o Mago Branco. PARABÉNS! Você possuí a espada especal.')
            espadaEspecial = true
        }
        else {
            console.log("Você deu o melhor, mas o Mago Branco te derrotou. " + nome + " Fugiu por muito pouco!")
            console.log(nome + " ganhou uma cicatriz de queimadura do lado direito do rosto...9 Resultado de sua aventura.")
        
        }
}





let resposta1 = prompt("Você fez a primeira? ").toLowerCase();
let resposta2 = prompt("Você fez a segunda? ").toLowerCase();
let resposta3 = prompt("Você fez a terceira?! ").toLowerCase();
let resposta4 = prompt("Você fez a quarta?! ").toLowerCase();
let resposta5 = prompt("Você fez a quinta?! ").toLowerCase();
let numeroFinal = 5;



if (
  resposta1 === "n" ||
  resposta1 === "no" ||
  resposta1 === "não"
) {
  numeroFinal = numeroFinal - 1;
}

if (
    resposta2 === "n" ||
    resposta2 === "no" ||
    resposta2 === "não"
) {
  numeroFinal = numeroFinal - 1;
}

if (
    resposta3 === "n" ||
    resposta3 === "no" ||
    resposta3 === "não"
) {
  numeroFinal = numeroFinal - 1;
}

if (
    resposta4 === "n" ||
    resposta4 === "no" ||
    resposta4 === "não"
) {
  numeroFinal = numeroFinal - 1;
}

if (
    resposta5 === "n" ||
    resposta5 === "no" ||
    resposta5 === "não"
) {
  numeroFinal = numeroFinal - 1;
}

console.log(numeroFinal)

if (numeroFinal == 5) {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
} else if (numeroFinal == 4) {
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
} else if (numeroFinal == 3) {
  console.log(
    "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
  );
} else if (numeroFinal == 2 || 1) {
  console.log("Você falha, mas ainda consegue fugir da situação.");
} else if (numeroFinal == 0) {
  console.log("Você falha miseravelmente.");
}



