// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = Object.entries(objeto)

  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const caracter ={
    vacio : 0
  }

  for (let i = 0; i < string.length; i++) {
      for (let key in caracter) {
          if (key !== string.charAt(i)){
            caracter[string.charAt(i)] = 0;  
          }
      }
  }
  delete caracter.vacio;
  for(let k in caracter){
    for (let j = 0; j < string.length; j++) {
      if (k === string.charAt(j)){
        caracter[k]=caracter[k]+1;
      }
    }
  }

  return caracter
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var newString = ''
  var originalString = ''
  for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === s.charAt(i).toUpperCase()) {
        newString=newString+s.charAt(i)
      }else{
        originalString=originalString+s.charAt(i)
      }
  }
  
  return newString+originalString
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var stringMirror = ''
  let temp = ''
  for(let i=0; i < str.length; i++){
    
    if(str.charAt(i) !== ' '){
      temp= str.charAt(i)+temp
    }if(str.charAt(i) === ' '){
      stringMirror=stringMirror+temp+str.charAt(i)
      temp=''
    }if(i === str.length-1){
      stringMirror=stringMirror+temp
    }
  }

  return stringMirror
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroString = numero.toString()
  var newnumero = ''
  for (var i = numeroString.length - 1; i >= 0; i--) {
    newnumero = newnumero+numeroString.charAt(i)
  }
  if(newnumero === numeroString){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = cadena.replace(/[a-c\.]/g,"");
  return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function compare(a,b){
    if (a.length < b.length) {
      return -1;
    }if(a.length > b.length){
      return 1;
    }
    return 0;
  }

  return arr.sort(compare)
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var interseccion = []
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        interseccion.push(arreglo1[i])
      }
    }
  }
  return interseccion  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

