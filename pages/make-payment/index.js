import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useStorage } from "../../hooks/useStorage";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCrud } from "../../hooks/useCrud";

const CheckoutForm = () => {
  const { sessionStorage } = useStorage();
  const { clientSecret, loading, error } = useStripe("get-data");
  const [message, setMessage] = useState("");
  const { data } = useCrud();

  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    try {
      const user = sessionStorage.getItem("user");
      //2. confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
        receipt_email: user?.email,
      });
      if (result?.error) {
        console.log(result?.error);
      } else {
        console.log(result);

        //if payment successful
        //1. keep result in session
        sessionStorage.setItem("payment-success", result);

        data.addData(result, "/api/payments/create");

        //2. and redirect
        router.push("/dashboard/payments");
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {message && <p>{message}</p>}
      <h4>As a member, you are to make a USD 150 in order to join</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-element" className="mb-4">
          Pay for USD 150
        </label>
        <CardElement id="card-element" style={{ base: { fontSize: 18 } }} />
        <div className="text-end me-2 mt-5">
          <Link href="/dashboard/payments">
            <a className="btn btn-light" type="button">
              Pay later
            </a>
          </Link>
          <button
            type="submit"
            disabled={!stripe || !elements}
            className="btn btn-primary px-4 text-end">
            Pay
          </button>
        </div>
      </form>
    </>
  );
};

let stripePromise;
const getStripe = function () {
  if (!stripePromise) stripePromise = loadStripe(process.env.STRIPE_PUBLISHED);

  return stripePromise;
};

const StripePay = () => {
  return (
    <Elements stripe={getStripe()}>
      <CheckoutForm />
    </Elements>
  );
};
export default StripePay;
