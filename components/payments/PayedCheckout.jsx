import React from "react";
import Spinner from "../ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdRefresh, MdPayments } from "react-icons/md";
import { useUser } from "../../hooks/useUser";

function PayedCheckout() {
  const { userData } = useUser("user");
  const { data, loading, allData, error, postError, postLoading } = useCrud(
    "all-payments",
    "/api/payments/stripe/payments"
  );

  console.log(allData, error);

  const handleApproval = async () => {
    await data.updateData({ verified: true }, `/api/payments/approve`);
  };

  return (
    <>
      <div className="d-flex justify-content-end align-items-center">
        <button
          className="btn btn-light my-3 ms-3"
          onClick={() => data.getAllData("/api/payments/stripe/payments")}>
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
              onClick={() => data.getAllData("/api/payments/stripe/payments")}>
              Reload
            </button>
          </div>
        </div>
      )}
      {!error && allData?.length > 0 && (
        <div class="row">
          {postError && <p className="text-danger">{postError}</p>}
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
                    <th># ID</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Email</th>
                    {userData?.role == "admin" && <th>Approval status</th>}
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <tr>
                      <td className="align-middle text-nowrap">
                        {data?.id.slice(0, 12)}
                      </td>
                      <td className="align-middle text-nowrap">
                        {data?.status}
                      </td>
                      <td className="align-middle text-nowrap">
                        ${data?.amount / 100}
                      </td>
                      <td className="align-middle text-nowrap">
                        {data?.email}
                      </td>
                      <td className="text-nowrap align-middle">
                        {!data?.verified && userData?.role == "admin" ? (
                          <>
                            <span class="badge bg-secondary">Unapproved</span>
                            <a
                              type="button"
                              className="btn btn-light btn-sm ms-3"
                              disabled={postLoading}
                              onClick={handleApproval}>
                              {postLoading ? (
                                <Spinner className="ms-2" />
                              ) : (
                                <span className="">Approve</span>
                              )}
                            </a>
                          </>
                        ) : (
                          ""
                        )}
                      </td>
                      <td className="align-middle text-nowrap"></td>
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

export default PayedCheckout;
