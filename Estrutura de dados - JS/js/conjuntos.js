// Conjunto (Set) é uma estrutura que armazena valores únicos, sem repetição
// Ideal para operações como união, interseção, diferença e verificação de subconjunto

function Set() {
    var items = {};

    this.add = function(value) {
        // Adiciona um novo valor ao conjunto, se ainda não existir
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }

    this.delete = function(value) {
        // Remove um valor do conjunto, se existir
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    this.has = function(value) {
        // Verifica se o valor existe no conjunto
        return items.hasOwnProperty(value);
    }

    this.clear = function() {
        // Remove todos os elementos do conjunto
        items = {};
    }

    this.size = function() {
        // Retorna o número de elementos no conjunto
        return Object.keys(items).length;
    }

    this.values = function() {
        // Retorna todos os valores do conjunto em um array
        var values = [],
            keys = Object.keys(items);

        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);
        }

        return values;
    }

    this.union = function(otherSet) {
        // Retorna um novo conjunto contendo a união dos dois conjuntos
        var unionSet = new Set(),
            values = this.values();

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    this.intersection = function(otherSet) {
        // Retorna um novo conjunto contendo os valores em comum entre os conjuntos
        var intersectionSet = new Set(),
            values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    }

    this.difference = function(otherSet) {
        // Retorna um novo conjunto com os valores presentes neste conjunto
        // mas não no outro
        var differenceSet = new Set(),
            values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    }

    this.subset = function(otherSet) {
        // Verifica se este conjunto é subconjunto do outro
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }
}

// Exemplo de uso:
var setA = new Set();
setA.add(1);
setA.add(2);

var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

// Verifica se setA é subconjunto de setB e setC
console.log(setA.subset(setB)); // true
console.log(setA.subset(setC)); // false

// Exemplos adicionais (descomente para testar):
// var differenceSet = setA.difference(setB);
// console.log(differenceSet.values()); // []

// var intersectionSet = setA.intersection(setB);
// console.log(intersectionSet.values()); // [1, 2]

// var unionSet = setA.union(setC);
// console.log(unionSet.values()); // [1, 2, 3, 4]
