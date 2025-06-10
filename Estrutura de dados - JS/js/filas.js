function Queue() {
  var items = []

  this.enqueue = function(element) {
    //Adiciona um elemento ao final da fila
    items.push(element);
  }

  this.dequeue = function() {
    //Remove o primeiro elemento da fila
    return items.shift();
  }

  this.front = function() {
    //Retorna o primeiro elemento da fila sem removê-lo
    return items[0];
  }

  this.isEmpty = function() {
    //Verifica se a fila está vazia
    return items.length === 0;
  }

  this.size = function() {
    //Retorna o tamanho da fila
    return items.length;
  }

  this.print = function() {
    //Imprime os elementos da fila
    console.log(items.toString());
  }
} 

// Exemplo de uso de uma fila

// var fila = new Queue();

// fila.enqueue('Vinicius');
// fila.enqueue('João');
// fila.enqueue('Maria');


// fila.print(); // Imprime: Vinicius,João,Maria
// console.log(fila.size());

// fila.dequeue(); // Remove 'Vinicius'
// fila.print(); // Imprime: João,Maria
// console.log(fila.size());

// fila.dequeue();
// fila.print(); 
// console.log(fila.size());




// Exemplo de uso de uma fila com prioridade

// function PriorityQueue(){
//     var items = []

//     function QueueElement (element, priority) {
//         this.element = element;
//         this.priority = priority;
//     }

//     this.enqueue = function(element, priority) {
//         //Adiciona um elemento com prioridade
//         var queueElement = new QueueElement(element, priority);
//         var added = false;

//         for(var i = 0; i < items.length; i++) {
//             if (queueElement.priority < items[i].priority) {
//                 items.splice(i, 0, queueElement);
//                 added = true;
//                 break;
//             }
//         }

//         if (!added) {
//             items.push(queueElement);
//         }

//     }


//     this.dequeue = function() {
//         //Remove o elemento com maior prioridade
//         return items.shift()
//     }

//     this.print = function() {
//         //Imprime os elementos da fila com prioridade
//         for (var i = 0; i < items.length; i++) {
//             console.log(items[i].element + ' ' + items[i].priority);    
//         } 
//     }

// }

// var pqueue = new PriorityQueue();
// pqueue.enqueue('Vinicius', 2);
// pqueue.enqueue('João', 1);
// pqueue.enqueue('Maria', 1);

// pqueue.print(); // Imprime: João 1, Maria 1, Vinicius 2

// exemplo de fila circular

function hotPotato(nameList, num) {
  var queue = new Queue();
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + ' foi eliminado da batata quente.');
  }

  return queue.dequeue();
}

var names = ['Vinicius', 'João', 'Maria', 'Ana', 'Pedro'];
var winner = hotPotato(names, 7);
console.log('O vencedor é: ' + winner);

