import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { useStorage } from "./useStorage";

export const useOrder = (type) => {
  const { sessionStorage } = useStorage("session");

  const [orderData, setOrderData] = useState(null);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const order = {
    async getOrder(id) {
      setLoading(true);

      try {
        setLoading(true);
        const data = await GET(`/api/orders/${id}`);
        if (data.msg) {
          setError(data.msg);
        } else {
          setOrderData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async getOrders() {
      try {
        setLoading(true);
        const data = await GET("/api/orders");
        if (data.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("orders", data);
          setOrders(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async placeOrder(credentials) {
      setError("");
      setLoading(true);
      setMessage("");
      try {
        //order placed in session storage
        const placedOrder = sessionStorage.getItem("placed-order");

        //place the order again
        const placeOrderAgain = async (count, error) => {
          //when order fails
          //send order again if order has been placed not more than 2 times
          count = sessionStorage.getItem("order-count");
          if (count < 3) {
            //if place order contains payment details
            await this.placeOrder();
          } else {
            setError(error);
            sessionStorage.clearItem("order-count");
          }
        };

        //for order failures
        //keep track of order placing
        let count = 0;
        sessionStorage.setItem("order-count", count++);

        //if Momo pay goes through, then use placed-order
        const data = await POST(
          placedOrder ? placedOrder : credentials,
          "/api/orders/create"
        );
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          sessionStorage.clearItem("placed-order");
          sessionStorage.clearItem("order-count");
          this.getOrders()
        } else {
          const error = data.msg;
          await placeOrderAgain(count, error);
        }
      } catch (error) {
        const err = error.message;
        await placeOrderAgain(count, err);
      } finally {
        setLoading(false);
      }
    },

    async sendPayStackInfo(credentials) {
      try {
        setLoading(true);
        const data = await POST(credentials, "/api/orders/paystack");

        if (data.msg.includes("successfully")) {
          setMessage();
        } else {
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
  };

  useEffect(() => {
    if (type == "order") {
      const data = sessionStorage.getItem("order");
      if (!data) {
        order.getOrderItem();
      } else {
        setOrderData(data);
      }
    }

    if (type == "orders") {
      const data = sessionStorage.getItem("orders");
      if (!data) {
        order.getOrders();
      } else {
        setOrders(data);
      }
    }
  }, []);

  return {
    order,
    orders,
    loading,
    orderData,
    error,
    message,
    setMessage,
  };
};
