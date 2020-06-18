function dartChallenge(x, y) {
  const radiusSquared = x * x + y * y;
  const radius = Math.sqrt(radiusSquared);

  const points =
    radius >= 0 && radius <= 1
      ? 10
      : radius > 1 && radius <= 5
      ? 5
      : radius > 5 && radius <= 10
      ? 1
      : 0;
  return points;
}
