const { greatestProduct } = require("./greatestProduct");

describe("Validation", () => {
  it("should throw an error when string length is less than the number", () => {
    expect(() => greatestProduct("2", 2)).toThrowError(
      "Length of the string of numbers must not be less than the number."
    );
  });

  it("should throw an error when number is less than one", () => {
    expect(() => greatestProduct("2", 0)).toThrowError(
      "Number must not be less than one."
    );
  });

  it("should throw an error when string or number are not provided", () => {
    expect(() => greatestProduct("")).toThrowError(
      "String of numbers and number must be provided"
    );
  });
});

describe("Greatest Product", () => {
  it('should return 270 when string is "1027839564" and number is 3', () => {
    expect(greatestProduct("1027839564", 3)).toEqual(270);
  });

  it('should return 7560 when string is "1027839564" and number is 5', () => {
    expect(greatestProduct("1027839564", 5)).toEqual(7560);
  });
});
