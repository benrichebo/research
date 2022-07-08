import { useEffect, useState } from "react";
import { STRIPE } from "../functions/STRIPE";

export const useStripe = (data) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const getPaymentIntent = async () => {
    setLoading(true);
    try {
      const response = await STRIPE("/api/payments/stripe");
      if (response.clientSecret) {
        setClientSecret(response.clientSecret);
      } else {
        setError(data?.msg);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (data == "get secret") {
      getPaymentIntent();
    }
  }, []);

  return { loading, clientSecret, error };
};
