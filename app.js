alert("Boas vindas ao jogo do mundo secreto!");
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 ); 
console.log(numeroSecreto);
let tentativas = 1;

// enquanto não for o número secreto
while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {

        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }// tentativas = tentativas + 1
         tentativas++;

    }
}
// operador termário
 let palavraTentativa = tentativas > 1 ? "tentativas" : "tenativa"
 alert(`Isso aí! Você descobriu o número ${numeroSecreto} com ${tentativas} Tentativas.`);


 
// if (tentativas > 1){
//alert(`Isso aí! Você descobriu o número ${numeroSecreto} com ${tentativas} Tentativas`);
//} else {
// alert(`Isso aí! Você descobriu o número ${numeroSecreto} com ${tentativas} Tentativa.`);





