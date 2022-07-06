import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GET } from "../functions/GET";
import { useStorage } from "./useStorage";

export const usePayments = (dataToFetch) => {
  const router = useRouter();
  const { sessionStorage } = useStorage();

  const [payments, setPayments] = useState(null);
  const [paymentData, setPaymentData] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const payment = {
    async getPayments() {
      setLoading(true);
      try {
        const data = await GET("/api/payments");
        if (!data?.payments) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("payments", data?.payments);
          setPayments(data?.payments);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async getPayment(id) {
      setLoading(true);
      try {
        const data = await GET(`/api/payments/${id}`);
        if (!data.id) {
          setError(data.msg);
        } else {
          setPaymentData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async addPaymentInfo(credentials) {
      setError("");
      setLoading(true);
      try {
        const data = await POST(credentials, "/api/payments/create");
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);

          //redirect to success
          router.push("/dashboard/payments")
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async updatePayment(id, credentials) {
      setLoading(true);
      try {
        const data = await PUT(credentials, `/api/payments/${id}`);
        if (data.msg.includes("successfully")) {
          setMessage(data.msg);
          this.getPayment(id);
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async deletePayment(id) {
      setLoading(true);
      const data = await DELETE(`/api/payments/${id}`);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
        const newPayments = payments.filter((payment) => payment.id !== id);
        setPayments(newPayments);
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },
  };

  //check to see data to fetch
  useEffect(() => {
    //if data to fetch is shops
    if (dataToFetch == "payments") {
      const data = sessionStorage.getItem("payments");
      if (!data) {
        payment.getPayments();
      } else {
        setPayments(data);
      }
    }
  }, []);

  return { payment, paymentData, payments, loading, error, message };
};
