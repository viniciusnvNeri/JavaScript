// Lista Encadeada (Linked List) é uma estrutura de dados linear
// onde cada elemento aponta para o próximo. É útil para inserções/remoções rápidas.

function linkedList() {
    // Cada nó da lista guarda um elemento e a referência para o próximo
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0; // Tamanho da lista
    var head = null; // Primeiro nó da lista

    this.append = function(element) {
        // Adiciona um novo elemento ao final da lista
        var node = new Node(element),
            current;

        if (head === null) {
            head = node; // se a lista estiver vazia, o primeiro nó vira o head
        } else {
            current = head;
            while (current.next) {
                current = current.next; // percorre até o último
            }
            current.next = node; // adiciona no final
        }
        length++;
    }

    this.insert = function(position, element) {
        // Insere um novo elemento na posição especificada
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
                // inserção no início
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function(position) {
        // Remove o elemento na posição especificada
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            if (position === 0) {
                head = current.next; // remove do início
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next; // remove do meio/fim
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }

    this.remove = function(element) {
        // Remove um elemento específico (por valor)
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.indexOf = function(element) {
        // Retorna a posição do elemento
        var current = head,
            index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    this.isEmpty = function() {
        // Verifica se a lista está vazia
        return length === 0;
    }

    this.size = function() {
        // Retorna o tamanho da lista
        return length;
    }

    this.getHead = function() {
        // Retorna o primeiro nó
        return head;
    }

    this.toString = function() {
        // Concatena todos os elementos da lista numa string
        var current = head,
            string = '';

        while (current) {
            string += current.element + ' ';
            current = current.next;
        }
        return string;
    }

    this.print = function() {
        // Imprime os elementos da lista
        console.log(this.toString());
    }
}

// Exemplos de uso
var list = new linkedList();
list.append('João');
list.append('Maria');
list.append('José');
list.print(); // João Maria José

list.insert(0, 'Ana');
list.print(); // Ana João Maria José

list.insert(2, 'Pedro');
list.print(); // Ana João Pedro Maria José

console.log(list.indexOf('Maria')); // 3

list.remove('José');
list.print(); // Ana João Pedro Maria

list.removeAt(1); // Remove João
list.print(); // Ana Pedro Maria
