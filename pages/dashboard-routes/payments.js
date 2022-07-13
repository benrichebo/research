import React from "react";
import Link from "next/link";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function Payments() {
  const { data, loading, allData, error } = useCrud(
    "all-payments",
    "/api/payments"
  );

  return (
    <>
      <div className="d-flex justify-content-end align-items-center">
        <Link href="/make-payment">
          <a className="btn btn-primary">Make payment</a>
        </Link>
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
        <div class="row">
          <div class="col-12 d-flex justify-content-between align-items-center mb-3">
            <h4>Payments</h4>
            <input
              type="search"
              class="form-control w-auto"
              placeholder="Search for an item"
              autocomplete="on"
            />
          </div>
          <div class="col">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th class="d-flex justify-content-start align-items-center">
                      <span># ID</span>
                    </th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>User ID</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <tr>
                      <td>
                        <p>{data?.paymentId}</p>
                        <div class="mt-3">
                          <a href="#">Approve</a>
                        </div>
                      </td>
                      <td>{data?.createdAt}</td>
                      <td>{data?.status}</td>
                      <td>150 usd</td>
                      <td>
                        <a class="text-decoration-none" href="#">
                          {data?.userId}
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
          {allData?.length == 0 && "There is no data"}
        </div>
      )}
    </>
  );
}

export default Payments;
