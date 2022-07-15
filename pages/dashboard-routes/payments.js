import React, { useState } from "react";
import PayedCheckout from "../../components/payments/PayedCheckout";

function Payments() {
  return (
    <>
      <div className="row mb-4">
        <PayedCheckout />
      </div>
    </>
  );
}

export default Payments;
