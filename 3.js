// problem: why is it logging out 0? it should be 12
// since 4 * 4 is 16, 2 * 2 is 4 and 16 - 4 is 12
// fix it to log out 12!

function square(num) {
  result1 = num * num//changed the name of the variable
  return result1
}

result = square(4)
result2 = square(2)
var subtracted = result - result2
console.log(subtracted)

