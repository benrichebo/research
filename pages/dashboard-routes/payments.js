import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function Payments() {
  const { data, loading, allData, error } = useCrud(
    "all-payments",
    "/api/payments"
  );

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Payments</h5>
      </div>
      {loading && !error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && !loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading Payments</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getAllData("/api/Payments")}>
              Reload
            </button>
          </div>
        </div>
      )}
      {!error && (
        <div className="row my-3">
          {allData?.map((data) => (
            <div className="my-2">
              <div className="card">
                <div className="card-body py-2">
                  <h6 className="card-title">{data?.method}</h6>
                  <h6 className="text-muted card-subtitle">{data?.status}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Payments;
