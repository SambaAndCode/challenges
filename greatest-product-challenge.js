function greatestProductChallenge(S, N) {
  const numArray = [];
  for (let i = 0; i < S.length; i++) {
    const sliceStr = S.slice(i, N + i);
    numArray.push(sliceStr);
    if (N + i >= S.length) {
      break;
    }
  }

  let greatestProduct = [];
  numArray.forEach((numStr) => {
    const splitString = numStr.split('');
    const toNum = splitString.map((eachNum) => parseInt(eachNum));
    const multiply = toNum.reduce((acc, cur) => acc * cur);

    greatestProduct = [multiply, ...greatestProduct];
  });

  greatestProduct = greatestProduct.sort((a, b) => b - a).slice(0, 1);
  console.log(greatestProduct);
  return greatestProduct;
}
