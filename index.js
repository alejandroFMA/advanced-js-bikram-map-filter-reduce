//RESUELVE LOS EJERCICIOS AQUI
//1.
let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados () {
    return numbers.map(num => num**num);
}


//2.
/*
let foodList=['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let paises=['talia, Japon, Valencia']

function (foodList, paises){

    if( foodList == 'Entrecot'){
        return 
    }


}
*/

//4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers2.filter(num => {
    return num % 2 !=0;
});



// 5
const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

let result5 = foodList2.filter(([isVeggie, true]) => `Que rico ${name} me voy a comer!`)



// 6

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

let result6 = inventory.filter(item => 
    item.price > 300);

let numeros3 = [39, 2, 4, 25, 62]
let result7= numeros3.reduce((anterior, actual) => anterior * actual);

  


const sentenceElements = [
    'Me',
    'llamo',
    'Elena',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

  let result8= sentenceElements.reduce((anterior, actual) => anterior + ' ' + actual);

//8
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  const total = books.filter(function filterCategory(x) {
    if (x["category"] === 'code') {
        return true;
    }
})

let precio1= total[0].price;
let precio2=total[1].price;
let result9 = precio1 + precio2


