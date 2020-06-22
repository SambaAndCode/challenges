module.exports = {
  greatestProduct: (str, num) => {
    // Validations
    if (str.length < num) {
      throw new Error(
        "Length of the string of numbers must not be less than the number."
      );
    }

    if (num < 1) {
      throw new Error("Number must not be less than one.");
    }

    if (str === "" || num === undefined) {
      throw new Error("String of numbers and number must be provided");
    }

    // Check Product
    const arr = [...str].map(Number);

    let result = 1;
    let current = 1;

    for (let i = 0; i < str.length; i++) {
      current = 1;

      for (let j = 0; j < num; j++) {
        current *= arr[i + j];
      }

      if (current > result) {
        result = current;
      }
    }

    return result;
  },
};
