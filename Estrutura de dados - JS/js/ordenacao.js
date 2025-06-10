/**
 * Implementação de um ArrayList com algoritmos de ordenação
 * 
 * Este arquivo contém a implementação de um ArrayList com os seguintes algoritmos:
 * - Bubble Sort
 * - Selection Sort
 * - Insertion Sort
 * - Merge Sort
 * - Quick Sort
 */

function ArrayList() {
    var array = []; // Array interno para armazenar os elementos

    /**
     * Insere um item no array
     * @param {*} item - Item a ser inserido
     */
    this.insert = function(item) {
        array.push(item);
    }

    /**
     * Retorna uma representação em string do array
     * @returns {string} - String com os elementos separados por vírgula
     */
    this.toString = function() {
        return array.join();
    }

    /**
     * Implementação do Bubble Sort
     * Complexidade: O(n²)
     */
    this.bubbleSort = function() {
        for(var i = 0; i < array.length - 1; i++) {
            for(var j = 0; j < array.length - 1; j++) {
                if(array[j] > array[j + 1]) {
                    swap(array, j, j + 1); // Troca elementos adjacentes se estiverem na ordem errada
                    console.log(array); // Log para visualização do processo
                }
            }
        }
    }

    /**
     * Implementação do Selection Sort
     * Complexidade: O(n²)
     */
    this.selectionSort = function() {
        var indexMin;
        for(var i = 0; i < array.length - 1; i++) {
            indexMin = i;
            // Encontra o índice do menor elemento no subarray não ordenado
            for(var j = i; j < array.length; j++) {
                if(array[j] < array[indexMin]) {
                    indexMin = j;
                    console.log(array); // Log para visualização do processo
                }
            }
            // Troca o menor elemento encontrado com o primeiro elemento não ordenado
            if(indexMin !== i) {
                swap(array, i, indexMin);
                console.log(array); // Log para visualização do processo
            }
        }
    }

    /**
     * Implementação do Insertion Sort
     * Complexidade: O(n²) no pior caso, O(n) no melhor caso
     */
    this.insertionSort = function() {
        var j, temp;
        for(var i = 0; i < array.length; i++) {
            j = i;
            temp = array[i];
            // Move os elementos maiores que temp para uma posição à frente
            while(j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp; // Insere temp na posição correta
            console.log(array); // Log para visualização do processo
        }
    }

    /**
     * Implementação do Merge Sort
     * Complexidade: O(n log n)
     */
    this.mergeSort = function() {
        array = mergeSortRec(array);
    }

    /**
     * Função recursiva para o Merge Sort
     * @param {Array} array - Array a ser ordenado
     * @returns {Array} - Array ordenado
     */
    var mergeSortRec = function(array) {
        var length = array.length;
        // Caso base: array com um único elemento já está ordenado
        if(length === 1) {
            return array;
        }
        // Divide o array em duas metades
        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);
            console.log(array); // Log para visualização do processo

        // Combina as metades ordenadas
        return merge(mergeSortRec(left), mergeSortRec(right));
    }

    /**
     * Função para mesclar dois arrays ordenados
     * @param {Array} left - Primeiro array ordenado
     * @param {Array} right - Segundo array ordenado
     * @returns {Array} - Array resultante da mesclagem
     */
    var merge = function(left, right) {
        var result = [],
            il = 0,
            ir = 0;

        // Mescla os arrays comparando os elementos
        while (il < left.length && ir < right.length) {
            if(left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        // Adiciona os elementos restantes do array left
        while(il < left.length) {
            result.push(left[il++]);
        }

        // Adiciona os elementos restantes do array right
        while(ir < right.length) {
            result.push(right[ir++]);
        }

        return result;
    }

    /**
     * Implementação do Quick Sort
     * Complexidade: O(n log n) no caso médio, O(n²) no pior caso
     */
    this.quickSort = function() {
        quick(array, 0, array.length - 1);
    }

    /**
     * Função principal do Quick Sort
     * @param {Array} array - Array a ser ordenado
     * @param {number} left - Índice inicial
     * @param {number} right - Índice final
     */
    var quick = function(array, left, right) {
        var index;
        if(array.length > 1) {
            index = partition(array, left, right); // Obtém o índice da partição
            // Ordena a partição esquerda
            if(left < index - 1) {
                quick(array, left, index - 1);
            }
            // Ordena a partição direita
            if(index < right) {
                quick(array, index, right);
            }
        }
    }

    /**
     * Função de partição para o Quick Sort
     * @param {Array} array - Array a ser particionado
     * @param {number} left - Índice inicial
     * @param {number} right - Índice final
     * @returns {number} - Índice da partição
     */
    var partition = function(array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)], // Escolhe o pivô (elemento do meio)
            i = left,
            j = right;

        while(i <= j) {
            // Encontra elemento maior que o pivô na parte esquerda
            while(array[i] < pivot) {
                i++;
            }
            // Encontra elemento menor que o pivô na parte direita
            while(array[j] > pivot) {
                j--;
            }
            // Troca os elementos e move os índices
            if(i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    /**
     * Função auxiliar para trocar dois elementos de posição no array
     * @param {Array} array - Array onde a troca será feita
     * @param {number} index1 - Índice do primeiro elemento
     * @param {number} index2 - Índice do segundo elemento
     */
    var swap = function(array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }
}

/**
 * Gera um valor aleatório entre 0 e 99
 * @param {number} min - Valor mínimo (não utilizado na implementação atual)
 * @returns {number} - Valor aleatório
 */
function randomValue(min) {
    return Math.floor(Math.random() * 100);
}

// Exemplo de uso
var al = new ArrayList();
al.insert(8);
al.insert(7);
// ... (outras inserções)
// al.bubbleSort();
// al.selectionSort();
// al.insertionSort();
// al.mergeSort();
al.quickSort();
console.log(al.toString());
