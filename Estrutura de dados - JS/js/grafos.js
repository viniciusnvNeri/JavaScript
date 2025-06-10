// Estrutura de dicionário (chave-valor), usada para guardar os vértices e suas conexões
function Dictionary() {
    var items = {};

    this.set = function(key, value) {
        // Adiciona item ao dicionário
        items[key] = value;
    }

    this.delete = function(key) {
        // Remove item, se existir
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function(key) {
        // Retorna o valor associado à chave
        return this.has(key) ? items[key] : undefined;
    }

    this.has = function(key) {
        // Verifica se a chave existe
        return items.hasOwnProperty(key);
    }

    this.clear = function() {
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

// Estrutura de fila (queue), usada em BFS
function Queue() {
    var items = [];

    this.enqueue = function(element) {
        items.push(element);
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

// Estrutura de Grafo com lista de adjacência
function Graph() {
    var vertices = [];            // Lista de vértices
    var adjList = new Dictionary(); // Lista de adjacência

    this.addVertex = function(v) {
        // Adiciona um novo vértice
        vertices.push(v);
        adjList.set(v, []);
    }

    this.addEdge = function(v, w) {
        // Adiciona uma aresta entre v e w (grafo não direcionado)
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function() {
        // Representação do grafo como string
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }

    var initializeColor = function() {
        // Inicializa as cores dos vértices para 'white' (não visitado)
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    this.bfs = function(v, callback) {
        // Busca em Largura (BFS)
        var color = initializeColor(),
            queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neighbors = adjList.get(u);
            color[u] = 'grey'; // visitando

            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }

            color[u] = 'black'; // totalmente visitado
            callback(u);
        }
    }

    this.dfs = function(callback) {
        // Busca em Profundidade (DFS)
        var color = initializeColor();
        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    }

    var dfsVisit = function(u, color, callback) {
        // Função recursiva auxiliar da DFS
        color[u] = 'grey';
        callback(u);

        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }

        color[u] = 'black';
    }
}

// Função usada nos percursos para imprimir os vértices
function printNode(value) {
    console.log('Visitado: ' + value);
}

// ---------------------------
// Exemplo de uso do grafo
// ---------------------------

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

// Adiciona as conexões (arestas)
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// Execução do percurso em profundidade (DFS)
graph.dfs(printNode);

// Para usar BFS, descomente a linha abaixo:
// graph.bfs(myVertices[0], printNode);

// Para ver o grafo como string, descomente a linha abaixo:
// console.log(graph.toString());
