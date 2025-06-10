//stack = pilha em inglês
// Pilha (Stack) é uma estrutura de dados que segue o princípio LIFO (Last In, First Out),
// ou seja, o último elemento adicionado é o primeiro a ser removido.
function Stack() { 
    var items = [];

    this.push = function(element) {
        // Adiciona um novo elemento apilha
        items.push(element);
    }

    this.pop = function() {
        // Remove o último elemento da pilha
        return items.pop();
    }

    this.peek = function() {
        // Retorna o último elemento da pilha sem removê-lo
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        // Verifica se a pilha está vazia
        return items.length === 0;
    }

    this.clear = function() {
        // Limpa todos os elementos da pilha
        items = [];
    }

    this.size = function() {
        // Retorna o tamanho da pilha
        return items.length;
    }

    this.print = function() {
        // Imprime os elementos da pilha
        console.log(items.toString());
    }

}
// Exemplo de uso da pilha
var pilha = new Stack();

for (var i = 1; i <= 5; i++) {
    pilha.push(i);
    pilha.print();
}

for (var i = 1; i <= 5; i++) {
    pilha.pop();
    pilha.print();
}
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

pilha.clear();

console.log(pilha.isEmpty());


// Conversão de decimal para binário usando pilha
function dec2Bin(decNumber) {
    var restStack = [], 
    rest, 
    binaryString = '';
    while (decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }
    while (restStack.length > 0) {
        binaryString += restStack.pop().toString(); // binaryString recebe o valor do resto e concatenamos com o valor atual de binaryString
    }
    return binaryString;
}

console.log(dec2Bin(23));


// Conversão de decimal para binário usando pilha
function baseConverter(decNumber, base) {
    var restStack = [], 
    rest, 
    baseString = '',
    digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rest = Math.floor(decNumber % base);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / base);
    }
    while (restStack.length > 0) {
        baseString += restStack.pop().toString();
    }
    return baseString;
}

console.log(baseConverter(123, 2)); // Binário
console.log(baseConverter(123, 8)); // Octal
console.log(baseConverter(123, 16)); // Hexadecimal
