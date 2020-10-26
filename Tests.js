const positiveSum = (arr) => {
  let response = 0
  for (const i of arr) {
    if(i < 0) { return }
    response += i
  }
  return response
}