
// 1. IMPORTAÇÃO E CONFIGURAÇÃO DO READLINE (Essas linhas estavam faltando ou foram removidas)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ------------------------------------------------------------------
// CLASSE HEROI
// ------------------------------------------------------------------

class Heroi {
    constructor (nome, idade, tipoPersonagem) {
        this.nome = nome;
        this.idade = idade;
        this.tipoPersonagem = tipoPersonagem.toLowerCase();
    }

    _obterAtaque() { 
        let ataque = "";

        switch (this.tipoPersonagem){
            case "guerreiro":
                ataque = "espada";
                break;
            case "mago":
                ataque = "magia";
                break;
            case "arqueiro":
                ataque = "arco e flecha";
                break; 
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }
        return ataque;
    }

    // Método principal ATACAR (Exibe a mensagem final)
    atacar() {
        const ataqueUsado = this._obterAtaque();
        
        // Saída Requerida
        console.log(`O ${this.tipoPersonagem} atacou usando ${ataqueUsado}`);
    }
}

// ------------------------------------------------------------------
// FUNÇÃO DE CONTROLE PARA CAPTURAR O INPUT (Substitui o 'input()')
// ------------------------------------------------------------------

function iniciarAventura() {
    // 1. Pergunta o Nome
    rl.question("Digite o nome do seu herói: ", (nome) => {
        
        // 2. Pergunta a Idade
        rl.question("Digite a idade do seu herói: ", (idadeStr) => {
            
            // 3. Pergunta o Tipo
            rl.question("Escolha o tipo do seu herói (guerreiro, mago, arqueiro, monge, ninja): ", (tipo) => {
                
                const idade = parseInt(idadeStr);
                
                // Cria o Objeto Heroi com os dados obtidos
                const heroiCriado = new Heroi(nome, idade, tipo);

                console.log(`\nHerói criado: ${heroiCriado.nome}, Idade: ${heroiCriado.idade}, Tipo: ${heroiCriado.tipoPersonagem}`);
                
                // Chama o método principal
                heroiCriado.atacar();

                rl.close();
            });
        });
    });
}

// 4. Inicia a execução do programa
iniciarAventura();