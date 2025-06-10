// Fila (Queue) é uma estrutura de dados FIFO (First In, First Out)
// Ou seja, o primeiro elemento a entrar é o primeiro a sair

function Queue() {
  var items = [];

  this.enqueue = function(element) {
    // Adiciona um elemento no final da fila
    items.push(element);
  }

  this.dequeue = function() {
    // Remove o primeiro elemento da fila
    return items.shift();
  }

  this.front = function() {
    // Retorna o primeiro elemento da fila sem removê-lo
    return items[0];
  }

  this.isEmpty = function() {
    // Retorna true se a fila estiver vazia
    return items.length === 0;
  }

  this.size = function() {
    // Retorna a quantidade de elementos da fila
    return items.length;
  }

  this.print = function() {
    // Imprime os elementos da fila
    console.log(items.toString());
  }
}

// Exemplo de uso da fila comum
// var fila = new Queue();
// fila.enqueue('Vinicius');
// fila.enqueue('João');
// fila.enqueue('Maria');
// fila.print();        // Vinicius,João,Maria
// fila.dequeue();      // Remove 'Vinicius'
// fila.print();        // João,Maria
// console.log(fila.size()); // 2

// ----------------------------------------
// Fila de Prioridade
// ----------------------------------------

function PriorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    // Adiciona elemento com prioridade (menor número = mais prioridade)
    var queueElement = new QueueElement(element, priority);
    var added = false;

    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement);
    }
  }

  this.dequeue = function() {
    // Remove o elemento com maior prioridade (menor número)
    return items.shift();
  }

  this.print = function() {
    // Imprime os elementos com suas prioridades
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].element + ' ' + items[i].priority);
    }
  }
}

// var pqueue = new PriorityQueue();
// pqueue.enqueue('Vinicius', 2);
// pqueue.enqueue('João', 1);
// pqueue.enqueue('Maria', 1);
// pqueue.print(); // João 1, Maria 1, Vinicius 2

// ----------------------------------------
// Exemplo de Fila Circular - Jogo da Batata Quente
// ----------------------------------------

function hotPotato(nameList, num) {
  var queue = new Queue();

  // Enfileira todos os nomes
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';

  // Enquanto tiver mais de uma pessoa
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      // Passa a batata quente
      queue.enqueue(queue.dequeue());
    }

    // Elimina o próximo com a batata
    eliminated = queue.dequeue();
    console.log(eliminated + ' foi eliminado da batata quente.');
  }

  // Retorna o vencedor
  return queue.dequeue();
}

var names = ['Vinicius', 'João', 'Maria', 'Ana', 'Pedro'];
var winner = hotPotato(names, 7);
console.log('O vencedor é: ' + winner);
