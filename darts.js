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
