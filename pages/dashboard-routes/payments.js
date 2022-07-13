import React, { useState } from "react";
import PaymentAttempts from "../../components/payments/CheckoutSessions";
import PayedCheckout from "../../components/payments/PayedCheckout";

function Payments() {
  const [page, setPage] = useState("checkout");
  return (
    <>
      <h5>Settings</h5>
      <div className="d-flex justify-content-start my-3">
        <a
          type="button"
          className={`fs-6 text-decoration-none text-black ${
            page != "checkout" && "text-muted"
          }`}
          onClick={() => setPage("checkout")}>
          Payed Checkouts
        </a>
        <a
          type="button"
          className={`ms-4 fs-6 text-decoration-none text-black ${
            page != "attempted" && "text-muted"
          }`}
          onClick={() => setPage("attempted")}>
          Attempted checkouts
        </a>
      </div>

      <div className="row mb-4">
        {page == "checkout" ? <PayedCheckout /> : <PaymentAttempts />}
      </div>
    </>
  );
}

export default Payments;
