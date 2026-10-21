export function getDiscount(total) {
  if (total >= 5000) return 20;
  if (total >= 2000) return 10;
  if (total >= 1000) return 5;

  return 0;
}

module.exports = { getDiscount };