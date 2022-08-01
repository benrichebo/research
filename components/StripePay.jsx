import Link from "next/link";
import React, { useEffect, useState } from "react";
import { STRIPE } from "../functions/STRIPE";
import { useUser } from "../hooks/useUser";
import { getStripe } from "../lib/get-stripe";
import Spinner from "./ui/Spinner";

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState("");

  //1. get user
  const { userData } = useUser("user");

  const getStripeId = async () => {
    const response = await STRIPE("/api/payments/stripe");
    console.log("response", response);
    if (response?.id) {
      setId(response?.id);
    } else {
      setMessage(response.msg);
    }
  };

  useEffect(() => {
    getStripeId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!id) {
        await getStripeId();
        return;
      }

      const stripe = await getStripe();

      setLoading(false);

      // Redirect to Checkout.
      const { error } = await stripe?.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: id,
      });

      if (error?.message) setError(error.message);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      {message && (
        <p className="my-3 text-info">
          {message.includes("stripe")
            ? "There was an error, try again"
            : message}
        </p>
      )}
      {error && <p className="my-3 text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <h3 className="fw-light">
          ARP members are engaged in various research development activities and
          are playing a pioneer role to review the research papers and to make
          the technical events and conference successful. Making a 100 Euros fee
          payment will help us organize these conferences
        </h3>
        <div>
          <Link href={`dashboard/home/${userData?._id}`}>
            <a className="btn btn-light me-3">Go to dashboard</a>
          </Link>
          <button type="submit" className="btn btn-primary my-4">
            {loading ? <Spinner /> : " Pay membership fee"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
