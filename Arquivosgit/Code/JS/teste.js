function solution(number) {
    let resposta = '';
    const m = { numero: Math.trunc(number / 1000), letra: 'M' };
    const d = { numero: Math.trunc((number % 1000) / 500), letra: 'D' };
    const c = { numero: Math.trunc(((number % 1000) % 500) / 100), letra: 'C' };
    const l = {
        numero: Math.trunc((((number % 1000) % 500) % 100) / 50),
        letra: 'L',
    };
    const x = {
        numero: Math.trunc(((((number % 1000) % 500) % 100) % 50) / 10),
        letra: 'X',
    };
    const v = {
        numero: Math.trunc((((((number % 1000) % 500) % 100) % 50) % 10) / 5),
        letra: 'V',
    };
    const i = {
        numero: Math.trunc(
            ((((((number % 1000) % 500) % 100) % 50) % 10) % 5) / 1
        ),
        letra: 'I',
    };

    const arr = [m, d, c, l, x, v, i];
    arr.forEach((element) => {
        if (element.numero > 3) {
            if (element.letra === 'C') {
                resposta = resposta.concat('DC');
            }
            if (element.letra === 'L') {
                resposta = resposta.concat('CL');
            }

            if (element.letra === 'X') {
                resposta = resposta.concat('LX');
            }
            if (
                element.letra === 'I' &&
                arr[5].numero == 1 &&
                arr[4].numero == 0
            ) {
                resposta = resposta.concat('IX');
            }
            if (element.letra === 'I' && arr[5].numero == 0) {
             resposta = resposta.concat('IV');
                
            }
        } else {
            for (j = 0; j < element.numero; j++) {
                resposta = resposta.concat(element.letra);
            }
        }
    });
    console.log(resposta);
}

solution(9);
