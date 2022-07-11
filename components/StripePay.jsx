import React from "react";
import { STRIPE } from "../functions/STRIPE";
import { getStripe } from "../lib/get-stripe";

const CheckoutForm = () => {
  let message, id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await STRIPE("/api/payments/stripe");
    console.log("response", response);
    if (response?.id) {
      id = response?.id;
    } else {
      message = response.msg;
    }

    const stripe = await getStripe();
    /* 
    if (stripe?.includes("error")) {
      message = "There was an error loading stripe";
      return;
    } */

    try {
      // Redirect to Checkout.
      const { error } = await stripe?.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: id,
      });

      console.warn(error.message);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
     {/*  {loading && <Spinner />}
      {error && "there was an error loading stripe payments"}
      {message && "there was an error"} */}
      <form onSubmit={handleSubmit}>
        <div className="test-card-notice">
          Use any of the{" "}
          <a
            href="https://stripe.com/docs/testing#cards"
            target="_blank"
            rel="noopener noreferrer">
            Stripe test cards
          </a>{" "}
          for this demo, e.g.{" "}
          <div className="card-number">
            4242<span></span>4242<span></span>4242<span></span>4242
          </div>
          .
        </div>
        <button type="submit" className="btn btn-primary">
          Pay membership fee
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
