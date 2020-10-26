const differenceInAges = (ages) =>{
  let maxAge = -Infinity
  let minAge = Infinity
  for (const i of ages) {
    if(i > maxAge){ maxAge = i}
    if(i < minAge){ minAge = i}
  }
  return [maxAge, minAge, maxAge - minAge]
}

console.log(differenceInAges([1,56,22,76,55]))