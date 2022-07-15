import React from "react";
import { useCrud } from "../../hooks/useCrud";

function Payments() {
  const { allData, error, loading, message } = useCrud(
    "all-payments",
    "/api/payments/stripe/payments"
  );
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">Payments</h6>
          {allData &&
            allData?.length > 0 &&
            allData.slice(0, 3).map((payment) => (
              <p
                class="list-item d-flex justify-content-between mb-0 card-text"
                key={payment?.name}>
                <span>{payment?.email}</span>
                <span>{payment?.status}</span>
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

export default Payments;
