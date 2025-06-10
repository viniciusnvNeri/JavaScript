// stack = pilha em inglês
// Pilha (Stack) é uma estrutura de dados LIFO (Last In, First Out)
// Ou seja, o último elemento inserido é o primeiro a ser removido

function Stack() {
    var items = [];

    this.push = function(element) {
        // Adiciona um novo elemento no topo da pilha
        items.push(element);
    }

    this.pop = function() {
        // Remove o elemento do topo da pilha
        return items.pop();
    }

    this.peek = function() {
        // Retorna o elemento do topo sem removê-lo
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        // Retorna true se a pilha estiver vazia
        return items.length === 0;
    }

    this.clear = function() {
        // Remove todos os elementos da pilha
        items = [];
    }

    this.size = function() {
        // Retorna o número de elementos na pilha
        return items.length;
    }

    this.print = function() {
        // Imprime os elementos da pilha
        console.log(items.toString());
    }
}

// Exemplo de uso da pilha
var pilha = new Stack();

// Adiciona elementos de 1 a 5
for (var i = 1; i <= 5; i++) {
    pilha.push(i);
    pilha.print();
}

// Remove os elementos da pilha (do topo para base)
for (var i = 1; i <= 5; i++) {
    pilha.pop();
    pilha.print();
}

// Testando outras funções
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

pilha.clear(); // esvazia a pilha

console.log(pilha.isEmpty()); // true

// ----------------------------------------
// Conversão de número decimal para binário usando pilha
// ----------------------------------------

function dec2Bin(decNumber) {
    var restStack = [], 
        rest, 
        binaryString = '';

    // Divide o número por 2 e armazena os restos na pilha
    while (decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }

    // Retira os restos da pilha formando o número binário
    while (restStack.length > 0) {
        binaryString += restStack.pop().toString();
    }

    return binaryString;
}

console.log(dec2Bin(23)); // Saída esperada: 10111

// ----------------------------------------
// Conversor de base genérico usando pilha
// (decimal → qualquer base até 16)
// ----------------------------------------

function baseConverter(decNumber, base) {
    var restStack = [], 
        rest, 
        baseString = '',
        digits = '0123456789ABCDEF'; // para converter para bases como hexadecimal

    while (decNumber > 0) {
        rest = Math.floor(decNumber % base);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / base);
    }

    while (restStack.length > 0) {
        baseString += digits[restStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(123, 2));  // Binário: 1111011
console.log(baseConverter(123, 8));  // Octal: 173
console.log(baseConverter(123, 16)); // Hexadecimal: 7B
