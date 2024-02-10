console.log(`Hello Lord Jesus Christ ❤️ `);

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
console.log(x + z);

function sayHello() {
  return `Hello`;
}

function greet() {
  const message = sayHello();
  console.log(message + ", my world");
}

greet();

function countdown(num) {
  if (num <= 0) {
    console.log("Done!");
    return;
  }
  console.log(num);
  countdown(num - 1);
}
countdown(5);

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));

console.log(power(4, 4));

console.log("C", "O", 2);


function wrapValue(n) {
  let local = n;
  return ()=> local;
}

let wrap1  = wrapValue(1)
let wrap2 = wrapValue(2)

console.log(wrap1())
console.log(wrap2())