import { useEffect, useState } from "react";
import { STRIPE } from "../functions/STRIPE";

export const useStripePay = async (data) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [id, setId] = useState("");

  const stripe = {
    async getPaymentId() {
      setLoading(true);
      try {
        const response = await STRIPE("/api/payments/stripe");
        console.log("response", response);
        if (response?.id) {
          setId(response?.id);
        } else {
          setError(response?.msg);
          console.log("error, " + response.msg);
        }
      } catch (error) {
        setError(error.message);
        console.log("error, " + error.message);
      }
      setLoading(false);
    },
  };

  useEffect(() => {
    if (data == "get-id") {
      stripe.getPaymentId();
    }
  }, []);
  console.log(loading, id, error);
  return { loading, id, error };
};
