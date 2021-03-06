// e = 1/0! + 1/1! + 1/2! + 1/3! + ... 
function factorial(n) {
    if (n < 2) return 1;
    return factorial(n - 1) * n;
}

function computeE(numberOfTerms) {
    let currentFactorial = 1;
    let sum = 0;
    for(let i = 0; i < numberOfTerms; i++) {
        // Lo siguiente se puede reemplazar con sum += factorial(i); pero sería menos eficiente
        sum += 1/currentFactorial;
        currentFactorial *= (i + 1);
    }
    return sum;    
}

// s = 4 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11 + ...
function kthOddNumber(k) {
    return 2*k - 1;
}

function computeS(numberOfTerms) {
    let sign = 1;
    let sum = 0;
    for(let i = 1; i <= numberOfTerms; i++) {
        sum += sign * 4/kthOddNumber(i);
        sign *= -1;
    }
    return sum;
}

// Otra forma es creando una función que reciba como parámetro otra 
// función para determinar el enésimo número de la serie
function computeSum(auxiliarFunction, numberOfTerms) {
    let sum = 0;
    for (let i = 1; i <= numberOfTerms; i++) {
        sum += auxiliarFunction(i);
    }
    return sum;
}

// La función que nos da los términos de la serie del número e es
function nthTermE(n) {
    return 1/factorial(n - 1); // Restamos uno porque el primer término es 1/0! 
}

// La función que nos da los términos de la serie del número S es
function nthTermS(n) {
    let sign = n % 2 ? 1 : -1; // Solo los términos en posiciones impares tienen signo positivo
    return sign * 4/kthOddNumber(n);
}

const numberOfTerms = 1000000;

console.log(`Una aproximación para el número e es: ${computeE(numberOfTerms)}`);
console.log(`Una aproximación para la suma S es: ${computeS(numberOfTerms)}`);