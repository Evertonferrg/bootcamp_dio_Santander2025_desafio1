// 1. IMPORTAÇÃO: Instale com 'npm install prompt-sync' e use 'require'
const prompt = require('prompt-sync')({sigint: true});

// 2. ENTRADA DE DADOS: Agora usando o prompt importado
let nome = prompt("Digite seu nome: ");
let xpInput = prompt("Digite sua experiência (XP): ");

// 3. CONVERSÃO: Converte a string de XP para um número
let xp = Number(xpInput);

let nivel;

if (xp < 1000) {
    nivel = "Ferro";
} 
// Otimização: Se a primeira condição falhou, sabemos que xp é >= 1000. 
// Basta checar o limite superior em cada if-else if.
else if (xp <= 2000) { 
    nivel = "Bronze";
} else if (xp <= 5000) { 
    nivel = "Prata";
} else if (xp <= 7000) { 
    nivel = "Ouro";
} else if (xp <= 8000) { 
    nivel = "Platina";
} else if (xp <= 9000) { 
    nivel = "Ascendente";
} 
// 4. CORREÇÃO DA FAIXA: xp tem que ser <= 10000
else if (xp <= 10000) { 
    nivel = "Imortal";
} else { // Cobre todos os valores > 10000
    nivel = "Radiante";
}

// 5. SAÍDA DE DADOS: Usando console.log em vez de return fora de uma função
console.log(`O Herói de nome ${nome} - está no nivel de ${nivel}`);