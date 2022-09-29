const prompt = require("prompt-sync")();

let res;

while (true) {
    let historia = +prompt(
        "Escolha 1 para jogar a história 'O Palhaço', e 2 para 'Não Apague a Luz'. "
    );

    if (historia == 1) {
        Palhaço();
    } else if (historia == 2) {
        Luz();
    }
    res = true;
    if (res == true) {
        break;
    }
}

function Palhaço() {
    console.log("O Palhaço");
    console.log();
    let personagem = { vida: 10, itens: ["celular"] };
    const nome = prompt("Qual seu nome? ");
    console.clear();
    console.log("21h34");
    console.log(`${nome} está com ${personagem.vida} de vida`);
    console.log(
        `${nome} chegou pontualmente na casa da família Smith, onde cuidaria de duas crianças.`
    );
    console.log(
        `A mãe das crianças o recebe educadamente, e informa que as crianças já estavam na cama. ${nome} deseja boa noite ao casal e eles partem.`
    );
    console.log("Ao olhar em volta, se encontra só na sala.");
    let res = prompt("Você vai ao quarto das crianças checar se estão bem? ");
    console.clear();

    if (res == "sim" || res == "s" || res == "y" || res == "yes") {
        res = true;
        console.log(
            `${nome} observa as duas irmãs dormindo calmamente em suas camas. Uma brisa fria entra pela janela aberta.`
        );
        console.log(
            `${nome} fecha a janela, assumindo que os pais haviam esquecido de averiguar o quarto antes de sair.`
        );
        console.log("21h40");
        prompt("aperte enter para continuar");
        console.clear();
    } else {
        console.log(
            `${nome} estava assistindo televisão enquanto mexia em seu celular em mãos. Estava frio, então puxa uma coberta em seus ombos.`
        );
        var a = true;
        personagem.itens.push = "lençol";
        console.log("Agora você possuí o lençol em seu inventário.");
    }
    console.log("22h02");
    console.log(
        "Estava quase caindo no sono quando escuta o choro da criança no andar de cima..."
    );
    prompt("aperte enter para continuar");
    console.clear();
    if (a === true) {
        console.log(
            `${nome}, nota o ar gelado no quarto, fecha a janela correndo e então pergunta:`
        );
        console.log("Qual o problema?");
        console.log("Eu não gosto desse palhaço, tio!");
        console.log(
            "ao olhar onde as crianças estão apontando, nota um estranho e assurtador palhaço, pouco maior que você"
        );

        console.log(
            `${nome} cobre o palhaço com o lençol que usava para se cobrir`
        );
        personagem.itens = "celular";
        prompt("aperte enter para continuar");
        console.clear();
    } else {
        console.log(
            `${nome}, estranha o ar gelado no quarto, nota a janela aberta novamente, mas a fecha mesmo assim e então pergunta:`
        );
        console.log("Qual o problema?");
        console.log("Eu não gosto desse palhaço, tio!");
        console.log(
            "ao olhar onde as crianças estão apontando, nota um estranho e assurtador palhaço, pouco maior que você"
        );
        console.log(
            "Estranha pois passou exatamente onde estava e não havia palhaço algum no lugar."
        );
    }

    console.log(
        `${nome} coloca as crianças para dormir com certa dificuldade... canta canções e contos infantis.`
    );
    console.log(
        "não os culpa, ninguém conseguiria dormir olhando para o enorme palhaço parado em seus pés."
    );

    let resposta = prompt(
        "Você quer checar os status de seu personagem? "
    ).toLowerCase();
    console.clear();

    if (
        resposta == "sim" ||
        resposta == "s" ||
        resposta == "y" ||
        resposta == "yes"
    ) {
        console.log(personagem);
    }

    console.log("23h07");
    console.log(
        `${nome} escuta algo no andar de cima, tudo fica quieto por um instante. Um gemido pode ser ouvido pela casa toda logo após.`
    );
    let res1 = prompt("Você quer checar o barulho?? ").toLowerCase();
    console.clear();

    if (res1 == "sim" || res1 == "s" || res1 == "y" || res1 == "yes") {
        console.log(
            `${nome} vê um vulto correndo de um quarto para o outro enquanto subia as escadas.`
        );
        console.log(
            "Ao se assustar acaba caindo e batendo a cabeça com força no corrimão... tudo pareceu muito escuro por um tempo."
        );
        personagem.vida = 8;
        console.log(`${nome} agora tem ${personagem.vida} de vida`);
        console.log(
            `${nome} se levanta rapidamente. Temendo que algo acontecerá com as crianças.`
        );
        prompt("aperte enter para continuar");
        console.clear();
        if (a === true) {
            console.log(
                "Ao chegar, o lençol estava jogado no  chão, e o palhaço havia sumido. Imediatamente nota o que estava acontecendo."
            );
            console.log(
                "as crianças estavam tremendo em suas camas. Rapidamente busca pelo seu celular e puxa as crianças."
            );
            console.log(
                `${nome} tenta contatar a polícia, enquanto corria pelas escadas com uma criança em seu colo e a outra correndo em sua frente.`
            );
            prompt("aperte enter para continuar");
            console.clear();
            console.log(
                `A porta estava trancada, em suas costas, uma risada medonha soa alto. ${nome} solta a criança mais nova`
            );
            console.log(
                `"Corra até os vizinhos" grita para as crianças, enquanto o palhaço corria para tentar impedir.`
            );
            console.log("Você o segura...");
            prompt("aperte enter para continuar");
            console.clear();
            console.log("03h06");
            console.log(
                "Os policiais tiram o seu corpo da casa... A causa da morte? Asfixia."
            );
            console.log(
                "As autoridades encontraram seu corpo na cozinha, seu rosto estava pintado como de um palhaço."
            );
            console.log(
                "Você lutou com todas suas forças... Ao menos, as crianças estão bem."
            );
            personagem.vida = 0;
            console.log(`${nome} agora tem ${personagem.vida} de vida`);
        } else {
            console.log("o palhaço havia sumido");
            console.log(
                "Você não entende bem o quê estava acontecendo. Talvez fosse o sono... ou o tombo."
            );
            console.log(
                "novamente, você acalma as crianças e as bota para dormir."
            );
            console.log(
                "Você também acaba caindo no sono na poltrona do quarto..."
            );
            prompt("Aperte enter para continuar");
            console.clear();
            console.log("8h15");
            console.log(
                `Na manhã seguinte, os pais encontram os filhos e ${nome} mortos.`
            );
            console.log(
                `Foram asfixiados, seus rostos foram pintados como palhaços, a corda de um balão foi amarrada em seus pescoços.`
            );
            personagem.vida = 0;
            console.log(`${nome} agora tem ${personagem.vida} de vida`);
        }
    } else {
        console.log(
            `${nome} decide continuar vendo televisão. Assumindo que as crianças estavam apenas tendo problemas para dormir novamente.`
        );
        console.log(
            `Tudo ficou quieto após pouco menos de 5 minutos. ${nome} acaba por pegar no sono.`
        );
        prompt("Aperte enter para continuar");
        console.clear();
        console.log("8h15");
        console.log(
            "Quando os pais chegaram e subiram para ver as crianças em suas camas, acabaram por encontra-las mortas"
        );
        console.log(
            "Elas foram asfixiadas e tiveram seus rostos pintados como palhaços."
        );
        console.log(`na parede, havia escrito "você podia tê-las salvo.`);
        console.log("...");
        console.log("Você vive... mas assombrado pela culpa.");
        console.log(`${nome} agora tem ${personagem.vida} de vida`);
    }
}

function Luz() {
    console.log("Não Apague A Luz");

    const personagem = {
        hipoglicemia: 5,

        acucar: function () {
            this.hipoglicemia--;
        },
    };
    console.log();
    let nome = prompt("Qual seu nome? ");
    console.clear();
    console.log(
        `ATENÇÃO! Seu personagem sofre de hipoglicemia. De tempos em tempos, você vai precisar comer algo.`
    );
    console.log();
    prompt("aperte enter para iniciar");
    console.clear();
    console.log("9h34");
    console.log(
        `${nome} estava cuidadando de seu irmão hoje. Assistia o jogo de basquete enquanto o mais novo brincava em seu quarto.`
    );
    console.log(
        "Seu irmão o chama para brincar de esconde. Apesar de negar, a insistência da criança o convence."
    );
    console.log(`${nome} se senta no sofá e começa a contar...`);
    prompt("aperte enter");
    for (let i = 0; i < 11; i++) {
        console.log(i);
    }
    prompt("aperte enter");
    console.clear();

    console.log(
        "Enquanto conta, escuta os passos pesados do menino correndo pela casa."
    );
    console.log(`"LÁ VOU EU" grita.`);
    personagem.acucar();

    let resp1 = prompt("Você vai brincar com seu irmão? ").toLowerCase();

    if (resp1 == "sim" || resp1 == "s" || resp1 == "y" || resp1 == "yes") {
        console.log("10h07");
        console.log(`${nome} procura por seu irmão pela casa.`);
        console.log(
            `Quando o encontra escondido no quarto dos pais, encolhido atrás das cortinas, joga uma almofada no outro.`
        );
        console.log(`"Te achei!"`);
        console.log(
            "Grita, puxando a cortina com força para assustar o menino."
        );
        console.log(
            `${nome} e seu irmão ficam para brincar mais um pouco. Até que ${nome} decide assustar a criança.`
        );
        personagem.acucar();
        personagem.acucar();
        prompt("aperte enter");
        console.clear();
    } else {
        console.log("10h07");
        console.log(`${nome} encontra o irmão escondido atrás das cortinas`);
        console.log(
            "Então decide assustar o menino... assim, quem sabe, o deixaria ver o jogo em paz."
        );
        personagem.acucar();
        personagem.acucar();
        prompt("aperte enter");
        console.clear();
    }

    let resp2 = prompt(
        `O nível de açúcar no sangue do seu personagem está em: ${personagem.hipoglicemia}. Você quer comer algo? `
    );

    if (resp2 == "sim" || resp2 == "s" || resp2 == "y" || resp2 == "yes") {
        var x = true;
        console.log(
            "Você come uma barra de serial que estava em seu bolso. Já se sente muito melhor."
        );
        console.log("10h10");
        prompt("aperte enter");
        console.clear();
        personagem.hipoglicemia = 5;
    } else {
        console.log("Você se sente um pouco cansado, mas continua seus planos");
        console.log("10h10");
        prompt("aperte enter");
        console.clear();
    }
    console.log(
        `${nome} aproveita o minuto de distração do mais novo para apagar todas as luzes e fechar a porta. Grudou o ouvido na porta para ouvir o menino se assustar.`
    );
    console.log(
        "estranhamente... nada aconteceu por alguns segundos. Pela porta, é possível o ouvir dizer: "
    );
    console.log(`"${nome}, o quê está fazendo? "`);
    console.log(
        "Então ri internamente. Ele ainda achava que o irmão mais velho estava no quarto."
    );
    prompt("aperte enter");
    console.clear();
    console.log(`"${nome} Se afaste e acenda as luzes!"`);
    console.log(
        `"${nome}, pare! Você está me assustando, por favor! O quê está fazendo? Afaste-se de mim! Vou contar para a mãe!"`
    );
    console.log(
        `"Mano, eu não estou aí! O quê você está fazendo?" ${nome} diz rindo, enquanto ainda segurava a porta para o mais novo não abrir.`
    );
    console.log(
        "Então, seu irmão grita alto. Como se tivesse se machucado seriamente. Todos os pelos de seu corpo se arrepiam."
    );
    console.log(
        `${nome} Tenta abrir a porta, mas estava trancada. Por mais que tivesse certeza que não havia trancado, Tenta empurrar a porta com toda sua força.`
    );
    prompt("aperte enter");
    console.clear();
    if (x === true) {
        console.log("10h30");
        console.log(
            `${nome} ainda escutava o irmão gritar e implorar por ajuda.`
        );
        console.log(
            `De repente, ${nome} consegue abrir a porta. Acende as luzes rapidamente e procura desesperado por seu irmão pelo quarto.`
        );
        console.log(`Ele estava no canto, aos plantos.`);
        console.log(
            "Depois de tentar o acalmar e pedir milhões de desculpas, tenta entender o quê havia acontecido."
        );
        console.log("Seu irmão então lhe conta: ");
        prompt("aperte enter");
        console.clear();
        console.log(
            `Ele disse que após as luzes se apagarem e sua visão se acostumar, ele havia visto ${nome} ao lado da cama...`
        );
        console.log(
            `Mas estava diferente... ${nome} sorria sem parar... Como se suas bocas estivessem costuradas daquele jeito. Seus olhos estavam arregalados e nunca piscavam`
        );
        console.log(
            "Cada vez que se aproximava, o cheiro podre ficava mais forte..."
        );
        console.log(
            "Ao abrir a porta e acender as luzes... Aquela versão sumiu."
        );
    } else {
        console.log("10h30");
        console.log(
            `${nome} ainda escutava o irmão gritar e implorar por ajuda.`
        );
        console.log("Apesar de todos esforços, não consegue abrir a porta...");
        console.log(
            "De repente, lutando para não desmaiar, você para de ouvir seu irmão berrar e a porta se abre."
        );
        console.log(
            "Ele estava desmaiado ao lado do guarda-roupa. Pálido e gelado..."
        );
        prompt("aperte enter");
        console.clear();
        console.log("Seu irmão nunca te contou o quê aconteceu.")
        console.log("Ele nunca mais o chamou pra brincar...")
    }
    console.log("Após aquele dia, seu irmãozinho nunca mais foi o mesmo.")
    console.log("ele ainda tem pesadelos...")
    console.log("Frequentemente se assusta com a sua presença.")
    console.log("Você sente a culpa enorme te perseguir por aquela manhã.")

}
