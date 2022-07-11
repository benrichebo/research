import React, { useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { useCrud } from "../hooks/useCrud";
import { useStripePay } from "../hooks/useStripePay";

const CheckoutForm = ({ email, name, handleSignUp, signUpError }) => {
  const { clientSecret, loading, error } = useStripePay("get-secret");
  const [message, setMessage] = useState("");
  const { data } = useCrud();

  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!elements || !stripe) {
      setMessage("There was an error loading stripe");
      return;
    }

    try {
      await handleSignUp();

      if (!signUpError) {
        //2. confirm payment
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: name,
              email: email,
            },
          },
          receipt_email: email,
        });
        if (result?.error) {
          console.log(result?.error);
        } else {
          console.log(result);

          //if payment successful
          data.addData(result, "/api/payments/create");

          //2. and redirect
          router.push("/dashboard/payments");
        }
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-element" className="mb-4">
          Pay for USD 150
        </label>
        <CardElement id="card-element" style={{ base: { fontSize: 18 } }} />
        <div className="text-end me-2 mt-5">
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



const StripePay = ({ email, name, handleSignUp, error }) => {
  return (
    <Elements stripe={getStripe()}>
      <CheckoutForm
        email={email}
        name={name}
        handleSignUp={handleSignUp}
        signUpError={error}
      />
    </Elements>
  );
};
export default StripePay;
