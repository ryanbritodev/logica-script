// Documentação Oficial do Javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

alert("Boas vindas ao Jogo do Número Secreto!");
let numeroMaximo = 5000;
// Gerando um número aleatório de 0 a 100 usando o método Math.random() e em seguida convertendo para inteiro
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// console.log("Valor do Número Secreto: " + numeroSecreto);
// espaço na memória para armazenarmos o nosso chute
let palpite;
let tentativas = 1; 

// enquanto chute não for igual ao número secreto
while (palpite != numeroSecreto) {
    palpite = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log("Valor do Palpite: " + palpite);
    // retorna true ou false
    console.log("Resultado da Comparação:", palpite == numeroSecreto);
    // se número secreto for igual ao palpite
    if (numeroSecreto == palpite) {
        // parar
        break;
    }
    // se não
    else {
        // tentativas = tentativas + 1
        // ou
        tentativas++
        if (palpite > numeroSecreto) {
            alert(`O número secreto é MENOR que ${palpite}!`);
        } else {
            alert(`O número secreto é MAIOR que ${palpite}!`);
        }
    };
};

// Template String
alert(`Isso aí! Você descobriu o número secreto! (${numeroSecreto})`);

// Operador Ternário
let palavraTentativa = tentativas > 1 ? "tentativas!" : "tentativa!";
console.log(`Parabéns! Você acertou o número secreto ${palpite} com ${tentativas} ${palavraTentativa}`);

// if (tentativas == 1) {
//     console.log(`Parabéns! Você acertou o número secreto ${palpite} de primeira!`);
// } else {
//     console.log(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas!`)
// };
