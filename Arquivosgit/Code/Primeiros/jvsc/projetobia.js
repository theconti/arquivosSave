var prompt = require("prompt-sync")();

let espadaEspecial = false;
let cicatriz = false;
let numeroFinal = 0;
let resposta6;
let tentativas = 0;
let tunicaAzul = false;

function dado() {
  min = Math.ceil(7);
  max = Math.floor(1);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function shuffle(s) {
  var arr = s.split("");
  var n = arr.length;

  for (var i = 0; i < n - 1; ++i) {
    var j = getRandomInt(n);

    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  l = arr.join("");
  return l;
}

var nome = prompt("Digite seu nome: ");
console.log();
9;

nome = shuffle(nome);
console.log("Agora você é um Elfo da Lua. Seu nome élfico é: " + nome);
console.log();
console.log(
  "Você está em um mundo dominado pela maldade dos elfos da Luz. \nOs elfos da Lua procuram pelos 5 Critais Lunares para libertarem seu povo da escravidão."
);
console.log(
  "No inicio da sua busca pelos cristais da lua, você vê, de longe, o grande e cruel Mago Branco..."
);
console.log();
let b = prompt(
  "Você quer ir até lá e lutar contra ele (Boss opcional)? "
).toLowerCase();

if (b == "sim" || b == "s") {
  console.log("Você lutará com o grande feiticeiro branco.");
  console.log();
  console.log(
    "Para isso, você precisará rodar o dado. Se seu número for maior que 3, você vencerá e ganhará a espada especial do feiticeiro. "
  );
  console.log();
  console.log("A espada lhe dará uma vagatagem em algum momento do jogo.");
  console.log();
  prompt("aperte enter para girar o dado");
  console.log();
  let dados = dado();
  console.log("Você tirou o número: " + dados);
  console.log();
  if (dados >= 3) {
    console.log(
      "Você protagonizou uma luta incrível e derrotou o Mago Branco. PARABÉNS! Você possuí a espada especial."
    );
    espadaEspecial = true;
  } else {
    console.log(
      "Você deu o melhor, mas o Mago Branco te derrotou. " +
        nome +
        " Fugiu por muito pouco!"
    );
    console.log(
      nome +
        " ganhou uma cicatriz de queimadura do lado direito do rosto... Resultado de sua aventura."
    );
    cicatriz = true;
  }
}

console.log();
prompt("Aperte enter para continuar sua jornada heróica.");
console.log();

console.log(
  nome +
    " e seus companheiros inciciam a pelo primeiro pedaço do cristal. Boatos indicam que o cristal encontra-se na Grande Rocha Branca."
);
console.log(
  "Ao chegar, a Rocha estava sendo guardada por um enorme Ogro Troglodita. O Ogro lança seu olhar enfurecido em direção a você e seus amigos. "
);
console.log();

let resposta1 = prompt(" Você hesita e espera para atacar!? ").toLowerCase();
console.log();
if (resposta1 == "s" || resposta1 == "sim") {
  console.log(`Você espera para atacar e nota que o primeiro cristal estava preso na boca do grande Ogro. Essa era a causa da sua fúria!
Você ordena que todos largem suas armas e, num esforço coletivo, conseguem persuadir o Ogro a receber ajuda.`);
  console.log();
  console.log("PARABÉNS! Você consegue o cristal lunar rochoso!!");
  console.log();
  numeroFinal = numeroFinal + 1;
} else if (resposta1 === "n" || resposta1 === "no" || resposta1 === "não") {
} else if (resposta1 === "n" || resposta1 === "no" || resposta1 === "não") {
}
console.log();
prompt("Aperte enter para continuar sua jornada heróica.");
console.log();
console.log(
  "Após meses de caminhada, sua companhia inicia a travessia do mar de Ingvar. "
);
console.log(
  "No caminho da busca uma bela sereia encosta no barco, chamando a atenção de todos seus companheiros."
);
console.log(
  "A sereia procura por " +
    nome +
    " no qual julgou ser o alvo mais fácil da tripulação. E você começa a escutar a doce melodia da sereia."
);
console.log();

let resposta2 = prompt(
  "Desesperado, você quer furar o timpano para não ouvir o canto da sereia?"
).toLowerCase();
console.log();

if (resposta2 == "s" || resposta2 == "sim") {
  console.log(
    "Você espanta a sereia com sua indiferença, fazendo com que a mesma berre maldições. "
  );
  console.log(
    "poucos metrôs dali, você e seus companheiros avistam uma ilha dividida em duas."
  );
  console.log(
    "Vocês passam pelo meio, encontrando diversos cadáveres e barcos destruídos ao longo."
  );
  console.log(
    "Na mão de um esqueleto você encontra um objeto que brilha ao ponto de quase lhe deixar cego."
  );
  console.log();
  console.log("E ASSIM VOCÊ RECUPERA O SEGUNDO CRISTAL!! ");
  console.log(
    "A força misteriosa que emana do cristal regenera a sua audição!!"
  );
  numeroFinal = numeroFinal + 1;
}
if (resposta2 === "n" || resposta2 === "no" || resposta2 === "não") {
  console.log(
    "A Sereia te hipnotiza, rouba todos seus pertences e mata alguns de seus homens."
  );
}

prompt("Aperte enter para continuar sua jornada heróica.");

console.log();
console.log(
  "Vocês chegam ao Antigo Continente. Em busca do terceiro cristal, entram na floresta das ilusões."
);
console.log();
console.log(
  "A floresta é densa e cheia de ruínas antigas. Depois de algumas horas, você começa a achar que anda em círculos."
);
console.log();
console.log(
  "De repente, você avista um brilho em um dos caminhos a sua frente. Você acha que pode ser o brilho de um cristal."
);

let resposta3 = prompt(
  "Quer seguir o caminho rumo ao brilho misterioso?!"
).toLowerCase();

if (resposta3 === "s" || resposta3 === "sim" || resposta3 === "y") {
  console.log(
    "Você corre em direção ao brilho e chega numa clareira com várias pilastras quebradas em forma de círculo."
  );
  console.log("No meio do círculo você encontra um baú com um criptograma!");
  let senha = "cristal";

  do {
    if (tentativas == 3) {
      console.log("O baú desaparece subitamente!!");
      console.log(
        "Você e seus amigos decidem procurar a saída da floresta. Infelizmente não encontram o cristal lunar que havia ali."
      );
      break;
    }

    senha = prompt("Digite a palavra mágica: ").toLowerCase();
    tentativas++;
  } while (senha != "cristal");
}
if (resposta3 === "n" || resposta3 === "nao" || resposta3 === "não") {
  console.log(
    'Você vai em outra direção e encontra um pedaço de pergaminho no chão com a palavra "cristal". Parece uma pista de algo.'
  );
  console.log();
  console.log(
    "Após caminhar mais um pouco, vocês chegam a numa clareira com várias pilastras quebradas em forma de círculo."
  );
  console.log("No meio do círculo você encontra um baú com um criptograma!");
  let senha = "cristal";

  do {
    if (tentativas == 3) {
      console.log("O baú desaparece subitamente!!");
      console.log(
        "Você e seus amigos decidem sair da floresta. Infelizmente não encontram o cristal lunar que havia ali."
      );
      break;
    }

    senha = prompt("Digite a senha de acesso: ").toLowerCase();
    tentativas++;
  } while (senha != "cristal");
}
console.log();
if (tentativas < 3) {
  console.log('Você escuta um "click"');
  prompt("aperte para abrir o baú");
  console.log(
    "Você abre o baú e vê o cristal lunar florido e uma túnica azul!!"
  );
  tunicaAzul = true;
  numeroFinal = numeroFinal + 1;
}

prompt("Aperte enter para continuar sua jornada heróica.");

console.log();
console.log(
  "A companhia chega à Vila Proibida. Há rumores que dizem que o Grande Líder dos Elfos da Luz, Thranduil, o Branco, usou um de seus feitiçõs mais podereosos nos moradores do vilarejo."
);
console.log();
console.log(
  "Para demonstrar seu incrível poder, ele retirou os sentimentos de todos os moradores. viviam todos como robôs programados para fazer somente o que o Thranduil os ordenava."
);
console.log();
console.log(
  "Você entra na vila e nota que um dos moradores se contorse estranhamente. Ele faz movimentos estranhos. Alguns de seus amigos até começam a rir."
);

let resposta4 = prompt(
  "Você vai investigar o comportamento do jovem?!"
).toLowerCase();

if (resposta4 === "s" || resposta4 === "sim" || resposta4 === "y") {
  numeroFinal = numeroFinal + 1;
  console.log(
    "Você nota que há um padrão no seu comportamento. Ele parece apontar para um local."
  );
  console.log(
    "Você segue na direção que o jovem apontava e avisa um poço. Quando chega ao poço nota que há, no fundo deste, um brilho opaco!"
  );
  console.log(
    "Você desce com ajuda de seus amigos e recupera o cristal lunar das almas! A magia deste é tão forte que quebra o feitiço e a vila retorna à normalidade"
  );
}

if (resposta4 === "n" || resposta4 === "no" || resposta4 === "não") {
  console.log(
    "Você não encontra salvação para as pobres almas da vila. Desolado, você deixa a vila borbulhando de raiva de Thranduil!"
  );
}

console.log();
prompt("Aperte enter para continuar sua jornada heróica.");

console.log();
console.log(
  "A companhia chega à Torre de Marfim. Lar de Thranduil, o Branco. "
);
console.log();
console.log(
  "Sem delongas, Thranduil te olha e parte para o ataque. O combate final mal começa e o mago junta toda sua força num golpe!"
);
let dadoBoss = dado() * 100;
let dadoHero = dado() * 100;
if (espadaEspecial) {
  dadoHero = dadoHero + 200;
}
prompt("Aperte uma tecla para saber o poder do golpe.");
console.log("O valor do golpe de Thranduil é de " + dadoBoss);
prompt("Aperte para saber o poder do seu golpe.");
console.log("O poder de seu golpe é de " + dadoHero);

if (dadoHero > dadoBoss) {
  console.log("Você derrota o vilão com suas próprias maõs!");
  resposta6 = prompt(
    "Vocè quer vasculhar a torre em busca do último cristal?!"
  );
  if (resposta6 === "s" || resposta6 === "sim" || resposta6 === "y") {
    console.log(
      "Você gasta 10 noites procurando pelo cristal, mas o encontra!!"
    );
    numeroFinal = numeroFinal + 1;
  } else {
    console.log(
      "Você não encontra o cristal que Thranduil guardou nos confins da Torre de Mármore."
    );
  }
}

if (dadoHero <= dadoBoss) {
  let resposta5 = prompt(
    "Vocè quer ajuda de uma entidade superior para extirpar o mal?!"
  ).toLowerCase();
  if (resposta5 === "n" || resposta5 === "no" || resposta5 === "não") {
    console.log(
      "O poder do mago é mais forte que o seu. No último instante, você percebe que só há uma alternativa para salvar o mundo."
    );
    numeroFinal = -1;
    console.log(
      "Para sobrepujar a força do golpe você se sacrifica para derrotar Thranduil. Os cristais espalham-se pelo mundo novamente."
    );
  } else {
    console.log();
    console.log(
      "A entidade superior aparece e derrota Thranduil em seu lugar. Porèm, leva consigo o último cristal."
    );
    numeroFinal = numeroFinal - 1;
  }
}

console.log(numeroFinal);

if (numeroFinal == 5) {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações. Você liberta todos da escravidão! "
  );
} else if (numeroFinal == 4) {
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita... Os elfos da luz ainda procuram uma \nde triunfar sobre todos."
  );
} else if (numeroFinal == 3) {
  console.log(
    "Você chega perto de conseguir alcançar seu objetivo, mas perde os cristais e não consegue salvar seu povo... foi por pouco, " +
      nome
  );
} else if (numeroFinal == 2 || 1) {
  console.log(
    "Você falha, mas ainda consegue fugir da situação com vida... Sua vila te isola para sempre."
  );
} else if (numeroFinal == 0) {
  console.log("Você falha miseravelmente.");
} else if (numeroFinal < 0) {
  console.log(
    "Vocé vira um mártir na luta dos Elfos da lua. Que sua lenda inspire seus companhreios a encontrar os critais perdidos."
  );
} else if (numeroFinal < 0) {
  cicatriz = true;
  console.log(
    "Vocé vira um mártir na luta dos Elfos da lua. Que sua lenda inspire seus companhreios a encontrar os critais perdidos. \nSua cicatriz vira um símbolo para seu povo."
  );
}
