function dart(x, y) {
  const targets = [
    { radius: 1, point: 10 },
    { radius: 5, point: 5 },
    { radius: 10, point: 1 },
  ];
  for (const target of targets) {
    const value = Math.hypot(x, y);
    if (value <= target.radius) return target.point;
  }
  return 0;
}

console.log(dart(3, 2));
console.log(dart(1, 2));
console.log(dart(13, 0));
console.log(dart(7, 2));
console.log(dart(2, 10));
console.log(dart(4, 2));
console.log(dart(0, 0));
console.log(dart(9, 4));
