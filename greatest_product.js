function product(sequencial, quantity) {
  let products = [];
  for (let index = 0; index < sequencial.length - (quantity - 1); index++) {
    products.push(
      [...sequencial.substr(index, quantity)].reduce((N1, N2) => N1 * N2, 1)
    );
  }
  return Math.max(...products);
}
