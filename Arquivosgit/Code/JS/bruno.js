function solution(number) {
    const m = { numero: Math.trunc(number / 1000), letra: "M" };
    const d = { numero: Math.trunc((number % 1000) / 500), letra: "D" };
    const c = { numero: Math.trunc(((number % 1000) % 500) / 100), letra: "C" };
    const l = {
        numero: Math.trunc((((number % 1000) % 500) % 100) / 50),
        letra: "L",
    };
    const x = {
        numero: Math.trunc(((((number % 1000) % 500) % 100) % 50) / 10),
        letra: "X",
    };
    const v = {
        numero: Math.trunc((((((number % 1000) % 500) % 100) % 50) % 10) / 5),
        letra: "V",
    };
    const i = {
        numero: Math.trunc(
            ((((((number % 1000) % 500) % 100) % 50) % 10) % 5) / 1
        ),
        letra: "I",
    };

    const arr = [m, d, c, l, x, v, i];

    arr.forEach((element) => {
        for (i = 0; i < element.numero; i++) {
            console.log(element.letra);
        }
    });

    function printRoman(num) {
        console.log(num);
    }

    arr.forEach((element) => {
        printRoman(element.letra);
    });
}

solution(2999);
