// /* 

// var avgTemp = []    
//  var media = 0;

//  avgTemp [0] = 31.9
//  avgTemp [1] = 35.3
//  avgTemp [2] = 42
//  avgTemp [3] = 38
//  avgTemp [4] = 25.5

//  for (var i = 0; i < avgTemp.length; i++) {
//      console.log('Temperatura foi de: ' + avgTemp[i] + '°C');
//      media += avgTemp[i];
//  }

//  media = media / avgTemp.length;
//  console.log('A temperatura média foi de: ' + media + '°C');

//   console.log('Temperatura foi de: ' + avgTemp[0] + '°C');
//   console.log('Temperatura foi de: ' + avgTemp[1] + '°C');
//   console.log('Temperatura foi de: ' + avgTemp[2] + '°C');
//   console.log('Temperatura foi de: ' + avgTemp[3] + '°C');
//   console.log('Temperatura foi de: ' + avgTemp[4] + '°C'); 

//   console.log('A temp media foi de ' + (avgTemp[0] + avgTemp[1] + avgTemp[2] + avgTemp[3] + avgTemp[4]) / 5); */


// /* COMANDOS PARA INSERIR, REMOVER E ACESSAR VALORES DO ARRAY
// para inserir valores no array pode-se usar o método push (ele inclui o valor no final do array)
//  para remover valores do array pode-se usar o método unshift (ele inclui o valor no início do array)
//  para remover o último valor do array pode-se usar o método pop (ele remove o último valor do array)
//  para remover o primeiro valor do array pode-se usar o método shift (ele remove o primeiro valor do array)
//  para remover um valor específico do array pode-se usar o método splice (ele remove o valor específico do array(.splice(índice, quantidade a ser removida))
//  para inserir um valor específico no array pode-se usar o método splice (ele insere o valor específico no array(.splice(índice, 0, valor a ser inserido))
//  */
 
//  // EXEMPLO DE ARRAY Bidimensional vulgo matriz
// var month = [];

// var firstWeeks = [];
// var lastWeeks = [];


// var avgTempWeekk1 = [31.9, 35.3, 42, 38, 25.5, 28.7, 34.2];
// var avgTempWeekk2 = [30.1, 33.5, 40, 36, 24.5, 27.7, 32.2];
// var avgTempWeekk3 = [29.9, 32.3, 39, 37, 23.5, 26.7, 31.2];
// var avgTempWeekk4 = [28.9, 31.3, 38, 36, 22.5, 25.7, 30.2];

// firstWeeks = [avgTempWeekk1, avgTempWeekk2];
// lastWeeks = [avgTempWeekk3, avgTempWeekk4];

// month = [firstWeeks, lastWeeks]; // array bidimensional

// //console.log(month[1][1][1]); // imprime o valor da posição 0 do array 0 do array 0 (31.9)

// for (var i = 0; i < month.length; i++) { // for que imprime todos os valores do array bidimensional
//     for (var j = 0; j < month[i].length; j++) {
//         for (var k = 0; k < month[i][j].length; k++) {
//             console.log(month[i][j][k]);
//         }
//     }
// }

// //console.log(avgTempWeekk[1][2]); // imprime o valor da posição 2 do array 1 (40)

// //  for (var i = 0; i < avgTempWeekk.length; i++) { // for que imprime todos os valores do array bidimensional
// //      for (var j = 0; j < avgTempWeekk[i].length; j++) {
// //          console.log(avgTempWeekk[i][j]);
// //      }
// //  }














