function dartChallenge(x, y) {
  const radiusSquared = x * x + y * y;
  const radius = Math.sqrt(radiusSquared);
  let points = 0;
  if (radius >= 0 && radius <= 1) {
    points = 10;
  } else if (radius > 1 && radius <= 5) {
    points = 5;
  } else if (radius > 5 && radius <= 10) {
    points = 1;
  } else {
    points = 0;
  }
  return points;
}
