// 1 variaveis
let nome = "joao";

console.log(nome);

nome = "joao Vitor";

console.log(nome);

// 2 mais sobres variaveis

let a = 10, b = 20, c = 30;

console.log(a, b, c,); 

const nomecompleto = "Joao Vitor"
const nomeCompleto = "Simone Maria"

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok"

let $teste = "ok"

console.log(_teste, $teste);

//3 - prompt
// const age = prompt("digite a sua idade:");

// console.log(`voce tem ${age} anos.`);

// 4 alert 
// alert("obrigado");

// 5 - math
console.log(Math.max(5, 2, 3, 10));

console.log(Math.floor(5,14));

console.log(Math.ceil(5,14))

//6 erro console
console.log("teste!");

console.error("erro!");

console.warn("aviso!");

// usando o IF

const user = "João"

if(user === "João") {
    console.log("olá João!");
}

// usando o else
const loggedin = false

if(loggedin) {
    console.log("Esta autenticado");
} else {
    console.log("Não esta autenticado!");
}

// else if
if(1 > 2) {
    console.log("teste");
} else if (2 > 3) {
    console.log("teste 2");
} else if (5 > 1);{
    console.log("agora sim");
}

const username = "João Vitor"
const userAge   = 22

if(username === "José") {
    console.log("bem vindo jose!")
} else if(userName === "João Vitor" && userAge === 22) {
    console.log("olá João Vitor, você tem 22 anos!");
} else {
    console.log("Nenhuma condição aceita!");
}