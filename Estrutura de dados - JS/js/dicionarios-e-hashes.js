function linkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element){
        // Adiciona um novo elemento ao final da lista
        var node = new Node(element),
            current
        if(head === null){
            head = node
        } else {
            current = head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        length++
    }

    this.insert = function(position, element){
        // Insere um novo elemento na posição especificada
        if(position >= 0 && position <= length){
            var node = new Node(element),
                current = head,
                previous,
                index = 0
            
            if(position === 0){
                node.next = current
                head = node
            } else {
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }   


    this.removeAt = function(position){
        // Remove o elemento na posição especificada
        if(position > - 1 && position < length){
            var current = head,
                previous,
                index = 0
            
            if(position === 0){
                head = current.next
            } else {
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
        
    }

    this.remove = function(element){
        // Remove o elemento element
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element){
        // Retorna a posição do elemento
        var current = head,
        index = 0

        while(current){
            if(element === current.element){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    this.isEmpty = function(){
        // Verifica se a lista está vazia
        return length === 0
    }

    this.size = function(){
        // Retorna o tamanho da lista
        return length
    }

    this.getHead = function(){
        // Retorna o primeiro elemento da lista(head)
        return head
    }

    this.toString = function(){
        // retorna uma string
        var current = head,
            string = ''
        
        while(current){
            string += current.element + ' '
            current = current.next
        }
        return string
    }

    this.print = function(){
        // imprime a lista
        console.log(this.toString())
    }

}

function Dictionary() {
  var items = {}

  this.set = function(key, value) {
    //adiciona um novo item ao dicionário
    items[key] = value
  }

  this.delete = function(key) {
    //remove um item do dicionário
    if(this.has(key)) {
        delete items[key]
        return true
    }
    return false
  }

  this.get = function(key) {
    //devolve um valor especifico a partir da chave
    return this.has(key) ? items[key] : undefined
  }

  this.has = function(key) {
    //verifica se a chave existe e retorna um booleano
    return items.hasOwnProperty(key)
  }

  this.clear = function() {
    //remove todos os itens do dicionário
    items = {}
  }

  this.size = function() {
    //retorna a quantidade de elementos contidos no dicionário
    return Object.keys(items).length
  }

  this.keys = function() {
    //devolve um array com todas as chaves do dicionário
    return Object.keys(items)
  }

  this.values = function() {
    //devolve um array com todos os valores do dicionário
    var values =[],
    keys = Object.keys(items)

    for(var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }

    this.getItems = function() {
        //devolve todos os itens do dicionário
        return items
    }
}

function HashTable() {
  var table = []

   var ValuePair = function(key, value) {
    //classe auxiliar para armazenar chave e valor
    this.key = key
    this.value = value

    this.toString = function() {
      //devolve uma string com a chave e o valor
      return '[' + this.key + ' - ' + this.value + ']'
    }
  }

  this.put = function(key, value) {
    //adiciona um novo item ao hash
    var position = loseloseHashCode(key)
    
    if(table[position] === undefined) {
      table[position] = new linkedList()
    }
    table[position].append(new ValuePair(key, value))
  }

//   this.put = function(key, value) { metodo antigo sem tratamento de colisões
//     //adiciona um novo item ao hash
//     var position = loseloseHashCode(key)
//     // console.log(position + ' ' + key)
//     table[position] = value
//   }

  
  this.remove = function(key) {
    //remove um item do hash
    var position = loseloseHashCode(key)
    if(table[position] !== undefined) {
      var current = table[position].getHead()

      while(current.next) {
        if(current.element.key === key) {
          table[position].remove(current.element)
          if(table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      } if(current.element.key === key) {
        table[position].remove(current.element)
        if(table[position].isEmpty()) {
          table[position] = undefined
        }
        return true
      }
    }
    return false
  }

//   this.remove = function(key) {
//     //remove um item do hash
//     table[loseloseHashCode(key)] = undefined
//   }

  this.get = function(key) {
    //devolve um valor especifico a partir da chave
    var position = loseloseHashCode(key)
    if(table[position] !== undefined) {
      var current = table[position].getHead()

      while(current.next) {
        if(current.element.key === key) {
          return current.element.value
        }
        current = current.next
      } if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

//   this.get = function(key) {
//     //devolve um valor especifico a partir da chave
//     return table[loseloseHashCode(key)]
//   }
  var loseloseHashCode = function(key) {
    //retorna hash(valor numerico)
    var hash = 0
    for(var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37 //modulo 37 para evitar numeros muito grandes
  }

  this.print = function() {
    //imprime o hash impedindo o repetimento de chaves
    //e imprimindo apenas os valores que não são undefined
    for(var i = 0; i < table.length; i++) {
      if(table[i] !== undefined) {
        console.log(i + ' : ' + table[i])
      }
    }
  }
}