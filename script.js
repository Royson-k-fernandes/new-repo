console.log(`Hello Lord Jesus Christ ❤️ `);

let x = 10;
if(true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
console.log(x + z);


function salute(name) {
    return `Hello ${name}`
}

let result = salute('Roy');
if(result === 'Hello Roy') {
    console.log('PASS')
}
else {
    console.log('FAIL')
}


function greet(who) {
    console.log('Hello ' + who)
}
greet('RJ')
console.log('bye')