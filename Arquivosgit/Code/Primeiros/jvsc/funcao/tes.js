/*function soma(a, b) {
    console.log(arguments);
    return a + b;
}
soma(2, 3);
soma(1, 2);

console.log(soma(2, 3));

console.log(soma.arguments);*/
//let a = "drone";

//console.log(/^drone$/.test(a));
function likes(names) {
    if (names.length == 0) {
        console.log("no one likes this");
    } else if (names.length == 1) {
        console.log(names[0] + " likes this");
    } else if (names.length == 2) {
        console.log(names[0] + " and " + names[1] + " like this");
    } else if (names.length == 3) {
        console.log(
            names[0] + ", " + names[1] + " and" + names[2] + " like this"
        );
    } else if (names.length > 3) {
        let size = names.length - 1 - 2;
        console.log(
            names[0] + ", " + names[1] + " and " + size + " others like this"
        );
    }
}

const teste = ["peter"];

likes(teste);
