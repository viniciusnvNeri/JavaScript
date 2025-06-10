// Exemplo de uso de array simples para armazenar temperaturas e calcular a média

var avgTemp = [31.9, 35.3, 42, 38, 25.5]; // array com temperaturas
var media = 0;

// Percorre o array somando os valores
for (var i = 0; i < avgTemp.length; i++) {
    console.log('Temperatura foi de: ' + avgTemp[i] + '°C');
    media += avgTemp[i];
}

// Calcula a média
media = media / avgTemp.length;
console.log('A temperatura média foi de: ' + media + '°C');

// --------------------------------------
// Comandos úteis com arrays:
// --------------------------------------
// push()       → adiciona no fim
// unshift()    → adiciona no início
// pop()        → remove o último
// shift()      → remove o primeiro
// splice()     → insere ou remove em uma posição específica

// Exemplo de array bidimensional (matriz)
var avgTempWeekk1 = [31.9, 35.3, 42, 38, 25.5, 28.7, 34.2];
var avgTempWeekk2 = [30.1, 33.5, 40, 36, 24.5, 27.7, 32.2];
var avgTempWeekk3 = [29.9, 32.3, 39, 37, 23.5, 26.7, 31.2];
var avgTempWeekk4 = [28.9, 31.3, 38, 36, 22.5, 25.7, 30.2];

// Organizando as semanas em dois grupos
var firstWeeks = [avgTempWeekk1, avgTempWeekk2];
var lastWeeks = [avgTempWeekk3, avgTempWeekk4];

// Array tridimensional representando o mês
var month = [firstWeeks, lastWeeks];

// Percorre toda a estrutura para imprimir todas as temperaturas
for (var i = 0; i < month.length; i++) {
    for (var j = 0; j < month[i].length; j++) {
        for (var k = 0; k < month[i][j].length; k++) {
            console.log(month[i][j][k]);
        }
    }
}
