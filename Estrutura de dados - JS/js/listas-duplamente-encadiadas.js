// Lista Duplamente Encadeada (Doubly Linked List)
// Cada elemento (nó) tem ponteiro para o próximo e o anterior
// Permite navegação em ambas direções

function doubluyLinkedList() {
    // Estrutura do nó com elemento, ponteiro para o próximo e o anterior
    var Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    var length = 0; // Tamanho da lista
    var head = null; // Primeiro elemento
    var tail = null; // Último elemento

    this.append = function(element) {
        // Adiciona um novo elemento ao final da lista
        var node = new Node(element),
            current;

        if (head === null) {
            // Lista vazia
            head = node;
            tail = node;
        } else {
            // Lista já possui elementos
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
            tail = node;
        }
        length++;
    }

    this.insert = function(position, element) {
        // Insere um elemento na posição desejada
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
                // Inserção no início
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                // Inserção no final
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                // Inserção no meio
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function(position) {
        // Remove elemento de uma posição específica
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            if (position === 0) {
                // Remove o primeiro
                head = current.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                // Remove o último
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                // Remove do meio
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }

    this.remove = function(element) {
        // Remove elemento específico (por valor)
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.indexOf = function(element) {
        // Retorna a posição de um elemento
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
        // Retorna o primeiro nó da lista
        return head;
    }

    this.toString = function() {
        // Concatena todos os elementos numa string
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
var list = new doubluyLinkedList();
list.append('João');
list.append('Maria');
list.append('José');
list.print(); // João Maria José

list.insert(0, 'Ana');
list.print(); // Ana João Maria José

list.insert(2, 'Pedro');
list.print(); // Ana João Pedro Maria José

list.removeAt(2); // Remove Pedro
list.print(); // Ana João Maria José
