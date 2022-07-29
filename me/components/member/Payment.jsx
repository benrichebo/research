import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../ui/Spinner";

const Payment = () => {
  const { data, loading, error, oneData, id } = useFetch(
    `/api/payments/stripe/payments`
  );

  return (
    <>
      {loading && !error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}

      {error && !error?.includes("no payments") && !loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">
              There was an error loading payment details
            </h6>
            <button
              className="btn btn-primary my-3"
              onClick={() =>
                data.getOneData(`/api/payments/stripe/payments/${id}`)
              }>
              Reload
            </button>
          </div>
        </div>
      )}
      {(oneData?.msg.includes("There is no payments") ||
        oneData?.status != "paid") &&
        !loading && <p>You have not payed your dues</p>}
      {oneData?.status && oneData?.status == "paid" && (
        <>
          <h5>You have payed your dues</h5>
          <p>Amount: {oneData?.amount}</p>
        </>
      )}
    </>
  );
};

export default Payment;
