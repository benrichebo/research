import Link from "next/link";
import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

const Payment = ({ userData }) => {
  const { data, loading, oneData, error } = useCrud(
    "one-payment",
    `/api/payments/stripe/payments/${userData?.id}`
  );

  console.log("payments", oneData);

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && error?.includes("no payments") && !loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">{error}</h6>
            <Link href={`/make-payment`}>
              <a className="btn btn-primary my-3">Make fee payment</a>
            </Link>
          </div>
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
                data.getOneData(`/api/payments/stripe/payments/${userData?.id}`)
              }>
              Reload
            </button>
          </div>
        </div>
      )}
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
