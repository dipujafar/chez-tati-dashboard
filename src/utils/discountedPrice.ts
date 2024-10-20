// @ts-ignore
export default function discountedPrice(price, discount) {
  const newPrice = Number(price) - Number(discount);
  return newPrice;
}
