const prompt = require("prompt-sync")({ sigint: true });

function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldo, nivel };
}

let nomeJogador = prompt("Digite o nome do jogador: ");
let vitorias = parseInt(prompt("Digite o número de vitórias: "));
let derrotas = parseInt(prompt("Digite o número de derrotas: "));

let resultado = calcularRank(vitorias, derrotas);

console.log(`O Herói ${nomeJogador} tem saldo de ${resultado.saldo} e está no nível ${resultado.nivel}`);
