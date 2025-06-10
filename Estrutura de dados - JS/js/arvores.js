/**
 * Implementação de uma Árvore Binária de Busca (Binary Search Tree - BST)
 * 
 * Este arquivo contém a implementação de uma BST com operações básicas:
 * - Inserção
 * - Busca
 * - Remoção
 * - Travessias (in-order, pre-order, post-order)
 * - Encontrar mínimo e máximo
 */

function BinarySearchTree() {
    // Definição da estrutura de um nó da árvore
    var node = function(key) {
        this.key = key;    // Valor/chave do nó
        this.left = null;  // Referência para o filho esquerdo
        this.right = null; // Referência para o filho direito
    }

    var root = null; // Raiz da árvore

    /**
     * Insere uma nova chave na árvore
     * @param {*} key - Chave a ser inserida
     */
    this.insert = function(key) {
        var newNode = new node(key);

        // Se a árvore está vazia, o novo nó se torna a raiz
        if(root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode); // Caso contrário, insere na posição correta
        }
    }

    /**
     * Função auxiliar para inserir um nó na posição correta
     * @param {Object} node - Nó atual sendo comparado
     * @param {Object} newNode - Novo nó a ser inserido
     */
    var insertNode = function(node, newNode) {
        // Se a chave é menor, vai para a esquerda
        if(newNode.key < node.key) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode); // Continua procurando na subárvore esquerda
            }
        } else { // Se a chave é maior ou igual, vai para a direita
            if(node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode); // Continua procurando na subárvore direita
            }
        }
    }

    /**
     * Busca uma chave na árvore
     * @param {*} key - Chave a ser buscada
     * @returns {boolean} - True se a chave existe, False caso contrário
     */
    this.search = function(key) {
        return searchNode(root, key);
    }

    /**
     * Função auxiliar para buscar uma chave
     * @param {Object} node - Nó atual sendo verificado
     * @param {*} key - Chave sendo buscada
     * @returns {boolean} - True se encontrou, False caso contrário
     */
    var searchNode = function(node, key) {
        if(node === null) {
            return false; // Chave não encontrada
        }
        if(key < node.key) {
            return searchNode(node.left, key); // Busca na esquerda
        } else if(key > node.key) {
            return searchNode(node.right, key); // Busca na direita
        } else {
            return true; // Chave encontrada
        }
    }

    /**
     * Remove uma chave da árvore
     * @param {*} key - Chave a ser removida
     */
    this.remove = function(key) {
        root = removeNode(root, key);
    }

    /**
     * Função auxiliar para remover um nó
     * @param {Object} node - Nó atual sendo verificado
     * @param {*} key - Chave a ser removida
     * @returns {Object|null} - O nó modificado ou null
     */
    var removeNode = function(node, key) {
        if(node === null) {
            return null; // Chave não encontrada
        }
        if(key < node.key) {
            node.left = removeNode(node.left, key); // Procura na esquerda
            return node;
        } else if(key > node.key) {
            node.right = removeNode(node.right, key); // Procura na direita
            return node;
        } else {
            // Caso 1: Nó folha (sem filhos)
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // Caso 2: Nó com apenas um filho (direito)
            if(node.left === null) {
                node = node.right;
                return node;
            }
            // Caso 2: Nó com apenas um filho (esquerdo)
            if(node.right === null) {
                node = node.left;
                return node;
            }
            // Caso 3: Nó com dois filhos
            var aux = findMinNode(node.right); // Encontra o menor nó da subárvore direita
            node.key = aux.key; // Substitui a chave
            node.right = removeNode(node.right, aux.key); // Remove o nó que foi movido
            return node;
        }
    }

    /**
     * Encontra o nó com a menor chave a partir de um nó
     * @param {Object} node - Nó inicial
     * @returns {Object} - Nó com a menor chave
     */
    var findMinNode = function(node) {
        while(node && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    /**
     * Retorna a menor chave da árvore
     * @returns {*} - Menor chave ou null se a árvore estiver vazia
     */
    this.min = function() {
        return minNode(root);
    }

    /**
     * Função auxiliar para encontrar a menor chave
     * @param {Object} node - Nó atual
     * @returns {*} - Menor chave ou null
     */
    var minNode = function(node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    /**
     * Retorna a maior chave da árvore
     * @returns {*} - Maior chave ou null se a árvore estiver vazia
     */
    this.max = function() {
        return maxNode(root);
    }

    /**
     * Função auxiliar para encontrar a maior chave
     * @param {Object} node - Nó atual
     * @returns {*} - Maior chave ou null
     */
    var maxNode = function(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    /**
     * Travessia in-order (esquerda, raiz, direita)
     * @param {Function} callback - Função chamada para cada nó visitado
     */
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    }

    /**
     * Função auxiliar para travessia in-order
     * @param {Object} node - Nó atual
     * @param {Function} callback - Função de callback
     */
    var inOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    /**
     * Travessia pre-order (raiz, esquerda, direita)
     * @param {Function} callback - Função chamada para cada nó visitado
     */
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    }

    /**
     * Função auxiliar para travessia pre-order
     * @param {Object} node - Nó atual
     * @param {Function} callback - Função de callback
     */
    var preOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    /**
     * Travessia post-order (esquerda, direita, raiz)
     * @param {Function} callback - Função chamada para cada nó visitado
     */
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    }

    /**
     * Função auxiliar para travessia post-order
     * @param {Object} node - Nó atual
     * @param {Function} callback - Função de callback
     */
    var postOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
}

/**
 * Função auxiliar para imprimir valores
 * @param {*} value - Valor a ser impresso
 */
function printNode(value) {
    console.log(value);
}

// Exemplo de uso
var tree = new BinarySearchTree();
tree.insert(15);
tree.insert(10);
// ... (outras inserções)
