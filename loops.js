function forLoop(array) {
  const n = array;
  const t = n + 25;
  newArray = [array, forLoop(array)]
  for (var i = 0; i < 25; i++) {
    console.log(i === 1 ?
    `I am ${i} strange loop.` :
    `I am ${i} strange loops.`)
  }
  return newArray;
}
