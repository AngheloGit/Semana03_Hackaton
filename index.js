// EJERCICIO 0

function unique() { 
    let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
let uniques = [... new Set(values)];
return uniques;
}

//alert(unique());

// EJERCICIO 01

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // dividir la palabra por letras, ordenarlas y volver a unir
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  //alert( aclean(arr) );

  //EJERCICIO 02

  let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

// alert(keys);

// REPUESTA: PODEMOS USAR ARRAY.FROM PARA CONVERTIRLO EN UNA MATRIZ.

//Ejercicio 03

let i = 3;
while (i) {

     alert( i-- );
     }
// El ultimo valor alertado es 1, por que el valor va disminuyendo de 1 en 1 

// Ejercicio 04

// La forma de prefijo ++ i:

/*
let i = 0;
while (++i < 5){
   alert( i );
} 

*/

// La forma sufijo i ++

/*
let i = 0;
while (i++ < 5){
 alert( i );
}

*/

// RESPUESTA:
// No son los mismos valores: la forma de prefijo ++ i , devuelve el valor de i. (del 1 al 4)
// la forma de prefijo i++, devuelve el valor de i + 1, (del 1 al 5)


// Ejercicio 05
/*

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  */

  // Ejercicio 06


  function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }

  let counter = makeCounter();
//alert( counter() ); 
//alert( counter() ); 
//alert( counter() );



// EJERCICIO 07


    /*
    let val;

    do {
      val = prompt("Ingresa un número mayor a 100", 0);
    } while (val <= 100 && val)


    */

 // EJERCICIO 08

    let list = {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: null
            }
          }
        }
      };
      
      function printList(list) {
        let val = list;
      
        while (val) {
          alert(val.value);
          val = val.next;
        }
      
      }
      
    //  printList(list);





