const digitize = (n) => {
  const array = n.toString().split('').reverse()
  let response = []
  for (const i of array) {
    response.push(parseInt(i))
  }
  return response
}

console.log(digitize(12345))