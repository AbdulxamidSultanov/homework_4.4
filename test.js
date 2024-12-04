let firstNumber49 = +prompt("son kriting")
let multi49 = 1
for (let i = 1; i <= firstNumber49; i++) {
  if (i % 7 == 0){
    multi49 = multi49 * i
  }
}

console.log(multi49)