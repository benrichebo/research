import Link from "next/link";
import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

const Documents = ({ userData }) => {
  const { data, loading, oneData, error } = useCrud(
    "one-documents",
    `/api/documents/${userData?.id}`
  );

  return (
    <>
      <h4>Documents</h4>
      {loading && !error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}

      {error && !loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">
              There was an error loading Documents details
            </h6>
            <button
              className="btn btn-primary my-3"
              onClick={() =>
                data.getOneData(`/api/Documentss/stripe/Documentss/${userData?.id}`)
              }>
              Reload
            </button>
          </div>
        </div>
      )}
      {oneData && oneData?.status != "paid" && (
        <>
          <p>You have not payed your dues</p>
          <Link href="/make-Documents">
            <a className="btn btn-primary my-3">Make Documents</a>
          </Link>
        </>
      )}
      {oneData?.status == "paid" && (
        <>
          <h5>You have payed your dues</h5>
          <p>Amount: {oneData?.amount}</p>
        </>
      )}
    </>
  );
};

export default Documents;
