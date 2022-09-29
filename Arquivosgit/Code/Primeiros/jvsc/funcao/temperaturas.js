const prompt = require("prompt-sync")();

let userTemp = +prompt("quantos graus");
let userMed = prompt("qual a escala?!");

let tempC;
let tempF;
let tempK;

function convert(temp, escala) {
    escala = userMed;
    temp = userTemp;

    if (escala == "c") {
        tempC = temp;
        tempK = temp + 273;
        tempF = (temp * 9) / 5 + 32;
        console.log("em celcius = " + tempC);
        console.log("em farenheit = " + tempF);
        console.log("em Kelvin = " + tempK);
    } else if (escala == "f") {
        tempF = temp;
        tempC = ((temp - 32) * 5) / 9;
        tempK = ((temp - 32) * 5) / 9 + 273.15;
        console.log("em celcius = " + tempC);
        console.log("em farenheit = " + tempF);
        console.log("em Kelvin = " + tempK);
    } else if (escala == "k") {
        tempK = temp;
        tempC = (temp - 32) / 1.8;
        tempF = ((temp - 273.15) * 9) / 5 + 32;

        console.log("em celcius = " + tempC);
        console.log("em farenheit = " + tempF);
        console.log("em Kelvin = " + tempK);
    }
}

convert(userTemp, userMed);
