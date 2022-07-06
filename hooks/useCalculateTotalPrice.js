import { useCart } from "./useCart";

export const useCalculateTotalPrice = () => {
  let { items } = useCart("cart");

  const subTotal =
    items?.length > 0 ? items?.reduce((a, c) => a + c.qty * c.price, 0) : 0;
  const tax = subTotal * 0.14;
  const total = subTotal + tax;

  return {
    subTotal: subTotal?.toFixed(2),
    tax: tax?.toFixed(2),
    total: total?.toFixed(2),
  };
};
