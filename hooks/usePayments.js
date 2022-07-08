import {useState } from "react";
import { useRouter } from "next/router";
import { STRIPE } from "../functions/STRIPE";

export const usePayments = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const payment = {
    async addPaymentInfo(credentials) {
      setError("");
      setLoading(true);
      try {
        const data = await STRIPE(credentials, "/api/payments/stripe");
        if (data?.url) {
          //redirect to success
          router.push(data?.url);
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
  };

  return { payment, loading, error };
};
