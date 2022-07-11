import React, { useState } from "react";
import { STRIPE } from "../functions/STRIPE";
import { getStripe } from "../lib/get-stripe";
import Spinner from "./ui/Spinner";

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
   const [error, setError] = useState(null);
  const [id, setId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await STRIPE("/api/payments/stripe");
      console.log("response", response);
      if (response?.id) {
        setId(response?.id);
      } else {
        setMessage(response.msg);
      }
      setLoading(false);

      const stripe = await getStripe();

      // Redirect to Checkout.
      const { error } = await stripe?.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: id,
      });

      setError(error.message);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      {message && <p className="my-3 text-info">{message.includes("stripe") ? "there was an error, try again": message}</p>}
      {error && <p className="my-3 text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <h3>Members are suppose to pay a 150 USD membership fee</h3>
        <button type="submit" className="btn btn-primary btn-lg my-4">
          {loading ? <Spinner /> : " Pay membership fee"}
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
