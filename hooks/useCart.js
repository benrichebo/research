import { useEffect, useState } from "react";
import { useStorage } from "./useStorage";

export const useCart = (type) => {
  const { sessionStorage } = useStorage("session");

  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const cart = {
    total: null,

    getCartItems() {
      //get items in session storage
      const data = sessionStorage.getItem("cart");
      setItems(data);

      //calculateTotalInCart
      this.calculateTotalInCart();
    },

    addProductToCart(product) {
      //filter for the product
      let exist = items?.find((x) => x.id === product?.id);
      //1. if item is already in cart
      if (exist) {
        items = items?.map((x) =>
          x.id === product?.id ? { ...exist, qty: exist.qty + 1 } : x
        );
      } else {
        //3. if item is not in cart
        if (items?.length > 0) {
          items = [...items, { ...product, qty: 1 }];
        } else {
          items = [{ ...product, qty: 1 }];
        }
      }
      sessionStorage.setItem("cart", items);
      this.getCartItems();
    },

    removeProductFromCart(product) {
      items = items?.filter((x) => x.id !== product?.id);

      sessionStorage.setItem("cart", items);
      this.getCartItems();
    },

    increaseProductCountInCart(product) {
      //filter for the product
      let exist = cart?.find((x) => x.id === product?.id);

      //1. if it exists in cart, increment
      if (exist)
        items = cart?.map((x) =>
          x.id === product?.id ? { ...exist, qty: exist.qty + 1 } : x
        );

      sessionStorage.setItem("cart", items);

      this.getCartItems();
    },

    reduceProductCountInCart(product) {
      //filter for the product
      let exist = cart?.find((x) => x.id === product?.id);

      const newQty = exist?.qty - 1;
      items = cart?.map((x) =>
        x.id === product?.id ? { ...exist, qty: newQty } : x
      );

      sessionStorage.setItem("cart", items);

      this.getCartItems();
    },

    calculateTotalInCart() {
      const subTotal =
        items?.length > 0 ? items?.reduce((a, c) => a + c.qty * c.price, 0) : 0;
      const tax = subTotal * 0.14;
      const total = subTotal + tax;

      return {
        subTotal: subTotal?.toFixed(2),
        tax: tax?.toFixed(2),
        total: total?.toFixed(2),
      };
    },
  };

  useEffect(() => {
    if (type == "cart") {
      cart.getCartItems();
    }
  }, []);

  return { cart, loading, items, error };
};
