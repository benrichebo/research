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
          <p className="card-text">Recently payed accounts</p>
          <ul class="list-unstyled">
            <li class="list-item d-flex justify-content-between fw-bold mb-2">
              <span>Date</span>
              <span>$Amount</span>
            </li>
            {allData &&
              allData?.length > 0 &&
              allData.slice(0, 3).map((payment) => (
                <li class="list-item d-flex justify-content-between mb-2">
                  <span>{payment?.email}</span>
                  <span>{payment?.status}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Payments;
