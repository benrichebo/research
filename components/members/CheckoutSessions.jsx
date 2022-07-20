import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdRefresh, MdPayments } from "react-icons/md";

function PaymentAttempts() {
  const { data, loading, allData, error } = useCrud(
    "all-checkout",
    "/api/payments/stripe/checkout-sessions"
  );

  console.log(allData, error);

  return (
    <>
      <div className="d-flex justify-content-end align-items-center">
        <button
          className="btn btn-light my-3 ms-3"
          onClick={() =>
            data.getAllData("/api/payments/stripe/checkout-sessions")
          }>
          <MdRefresh />
        </button>
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
              onClick={() =>
                data.getAllData("/api/payments/stripe/checkout-sessions")
              }>
              Reload
            </button>
          </div>
        </div>
      )}
      {!error && allData?.length > 0 && (
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center mb-3">
            <h4>Payment attempts</h4>
            <input
              type="search"
              className="form-control w-auto"
              placeholder="Search for an item"
              autocomplete="on"
            />
          </div>
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th># ID</th>
                    <th>Payment Status</th>
                    <th>Amount</th>
                    <th>User</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <tr>
                      <td className="text-truncate">
                        {data?.id.slice(0, 12)}...
                      </td>
                      <td>{data?.paymentStatus}</td>
                      <td>{data?.amount}</td>
                      <td>
                        <a className="text-decoration-none" href="#">
                          {data?.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {allData?.length == 0 && (
        <div className="row mb-4">
          <div
            className="col d-flex justify-content-center align-items-center bg-light"
            style={{ height: 300 }}>
            <div className="text-center">
              <MdPayments className="text-muted" />
              <p>There is no payments</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentAttempts;
