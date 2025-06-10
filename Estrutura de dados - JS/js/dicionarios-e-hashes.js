// Lista encadeada simples, usada aqui como estrutura de apoio para o HashTable
function linkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) {
        // Adiciona um novo elemento ao final da lista
        var node = new Node(element),
            current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    this.insert = function(position, element) {
        // Insere um novo elemento na posição desejada
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
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
        // Remove um elemento na posição informada
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }

    this.remove = function(element) {
        // Remove um elemento por valor
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
        return length === 0;
    }

    this.size = function() {
        return length;
    }

    this.getHead = function() {
        return head;
    }

    this.toString = function() {
        var current = head,
            string = '';

        while (current) {
            string += current.element + ' ';
            current = current.next;
        }
        return string;
    }

    this.print = function() {
        console.log(this.toString());
    }
}

// ---------------------
// DICIONÁRIO
// ---------------------

function Dictionary() {
    var items = {};

    this.set = function(key, value) {
        // Adiciona chave e valor
        items[key] = value;
    }

    this.delete = function(key) {
        // Remove uma chave, se existir
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function(key) {
        // Retorna o valor da chave, se existir
        return this.has(key) ? items[key] : undefined;
    }

    this.has = function(key) {
        // Verifica se a chave existe
        return items.hasOwnProperty(key);
    }

    this.clear = function() {
        // Limpa todo o dicionário
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.keys = function() {
        return Object.keys(items);
    }

    this.values = function() {
        var values = [],
            keys = Object.keys(items);

        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);
        }

        return values;
    }

    this.getItems = function() {
        return items;
    }
}

// ---------------------
// TABELA HASH (com tratamento de colisão usando lista encadeada)
// ---------------------

function HashTable() {
    var table = [];

    var ValuePair = function(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }

    this.put = function(key, value) {
        // Insere chave e valor na tabela
        var position = loseloseHashCode(key);

        if (table[position] === undefined) {
            table[position] = new linkedList(); // inicia a lista encadeada
        }

        table[position].append(new ValuePair(key, value)); // adiciona o par na posição
    }

    this.remove = function(key) {
        // Remove item pela chave
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }

            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }

    this.get = function(key) {
        // Retorna o valor pela chave
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }

            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    }

    var loseloseHashCode = function(key) {
        // Função de hash simples: soma dos códigos dos caracteres % 37
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    this.print = function() {
        // Imprime todos os valores válidos da tabela
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ' : ' + table[i].toString());
            }
        }
    }
}
