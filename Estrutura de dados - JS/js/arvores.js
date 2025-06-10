function BinarySearchTree(){
    var node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    this.insert = function(key){
        //insere uma chave
        var newNode = new node(key);

        if(root === null){
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    var insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null){
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    this.search = function(key){
        //busca uma chave
        return searchNode(root, key);
    }

    var searchNode = function(node, key){
        if(node === null){
            return false;
        }
        if(key < node.key){
            return searchNode(node.left, key);
        } else if(key > node.key){
            return searchNode(node.right, key);
        } else {
            return true; // chave encontrada
        }
    }

    this.remove = function(key){
        //remove uma chave
        root = removeNode(root, key);
    }

    var removeNode = function(node, key){
        if(node === null){
            return null; // chave não encontrada
        }
        if(key < node.key){
            node.left = removeNode(node.left, key);
            return node;
        } else if(key > node.key){
            node.right = removeNode(node.right, key);
            return node;
        } else {
            // chave encontrada
            if(node.left === null && node.right === null){
                node = null // nó folha
                return node
            }
            if(node.left === null){
                node = node.right // nó com apenas filho direito
                return node
            }
            if(node.right === null){
                node = node.left // nó com apenas filho esquerdo
                return node;
            }
            // nó com dois filhos
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }

    var findMinNode = function(node){
        while(node && node.left !== null){
            node = node.left
        }
        return node // retorna o nó com a menor chave
    }

    this.min = function(){
        //retorna a menor chave
        return minNode(root);
    }

    var minNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node.key // retorna a menor chave
        }
        return null // árvore vazia
    }


    this.max = function(){
        //retorna a maior chave
        return maxNode(root)
    }

    var maxNode = function(node){
        if(node){
            while(node && node.right !== null){
                node = node.right
            }
            return node.key // retorna a maior chave
        }
        return null // árvore vazia
    }

    this.inOrderTraverse = function(callback){
        //retorna as chaves em ordem crescente
        inOrderTraverseNode(root, callback);
    }

    //retorna os valores mostrando em ordem crescente
    var inOrderTraverseNode = function(node, callback){
        if(node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    this.preOrderTraverse = function(callback){
        //retorna as chaves em ordem crescente
        preOrderTraverseNode(root, callback);
    }

    //retorna os valores mostrando primeiros os nodos e depois os descendentes
    var preOrderTraverseNode = function(node, callback){
        if(node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback);
    }

    //retorna os valores mostrando primeiros os descendentes e depois os nodos
    var postOrderTraverseNode = function(node, callback){
        if(node !== null){
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
}

function printNode(value){
    console.log(value);
}

var tree = new BinarySearchTree();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(17);
tree.insert(25);
tree.insert(6);
tree.insert(9);
tree.insert(11);
tree.insert(13);
tree.insert(16);
tree.insert(18);
tree.insert(22);
tree.insert(27);
tree.insert(5);
tree.insert(2);

// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);