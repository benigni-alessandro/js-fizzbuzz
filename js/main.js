var numeri_array = []
for (var i = 1; i < 101; i++) {
  var numero = i;
  if (i%3 === 0 && i%5 === 0) {
    numeri_array.push("FizzBuzz")
  } else if (i%5 ===0) {
    numeri_array.push("Buzz")
  } else if (i%3 === 0) {
    numeri_array.push("Fizz")
  } else {
    numeri_array.push(i)
  }
}
console.log(numeri_array);
