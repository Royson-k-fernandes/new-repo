console.log(`Hello Lord Jesus Christ ❤️ `);

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
console.log(x + z);

function sayHello() {
  return`Hello`;
}

function greet() {
    const message = sayHello();
    console.log(message + ", my world");
}

greet();

function countdown(num) {
    if (num <= 0) {
        console.log('Done!');
        return;
    }
    console.log(num);
    countdown(num - 1)
}
countdown(5);