// functions Demo
function avg(a, b) {
  return (a + b) / 2;
}

var c = avg(6, 4);
console.log(c); // 5

// Date demo
let myDate = new Date();
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getMinutes());

// DOM manipulation
let elem1 = document.getElementById('click');
console.log(elem1);

let elem2 = document.getElementsByClassName('container');
console.log(elem2);

let elem3 = document.getElementsByTagName('div');
console.log(elem3);

let createdElement = document.createElement('p');
createdElement.innerText = 'Op boys !!';
elem3[0].appendChild(createdElement);