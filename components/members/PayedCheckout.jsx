import React, { useState } from "react";
import Spinner from "../ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdRefresh, MdPayments } from "react-icons/md";
import { useUser } from "../../hooks/useUser";
import Search from "../ui/Search";

function PayedCheckout() {
  const { userData } = useUser("user");
  const [show, setShow] = useState();
  const { data, loading, allData, error, postError, postLoading } = useCrud(
    "all-payments",
    "/api/payments/stripe/payments"
  );
   const [keyword, setKeyword] = useState("");

  console.log(allData, error);

  const handleApproval = async (id) => {
    await data.updateData({ verified: true }, `/api/payments/approve/${id}`);
  };

  return (
    <>
      {loading && !error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && !loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading members</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getAllData("/api/payments/stripe/payments")}>
              Reload
            </button>
          </div>
        </div>
      )}
      {!error && allData?.length > 0 && (
        <div className="row">
          {postError && <p className="text-danger">{postError}</p>}
          <div className="col-12 d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-lg-0">Members</h4>
            <div className="d-flex justify-content-start align-items-center">
              <Search
                items={allData}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <button
                className="btn btn-light ms-3"
                onClick={() =>
                  data.getAllData("/api/payments/stripe/payments")
                }>
                <MdRefresh />
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Email</th>
                    {userData?.role == "admin" && <th>Approval status</th>}
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <>
                      <tr>
                        <td className="align-middle text-nowrap">
                          {data?.name}
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
                              <span className="badge bg-secondary">
                                Unapproved
                              </span>
                              <a
                                type="button"
                                className="btn btn-light btn-sm ms-3"
                                onClick={() => setShow(data?.id)}>
                                {data?.userId && postLoading ? (
                                  <Spinner className="ms-2" />
                                ) : (
                                  <span className="">Approve</span>
                                )}
                              </a>
                            </>
                          ) : (
                            <>
                              {data?.verified && (
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              )}
                            </>
                          )}
                        </td>
                        <td className="align-middle text-nowrap"></td>
                      </tr>
                      {show == data?.id && (
                        <tr className="mt-3 bg-light">
                          <td className="text-nowrap align-middle">
                            <span>Are you sure</span>
                            <a
                              className="text-decoration-none ms-3"
                              type="button"
                              onClick={() => setShow()}>
                              No
                            </a>
                            <a
                              className="ms-3 text-decoration-none text-danger"
                              type="button"
                              disabled={postLoading}
                              onClick={() => handleApproval(data?.id)}>
                              {postLoading ? (
                                <Spinner className="ms-2" />
                              ) : (
                                <span className="">Yes</span>
                              )}
                            </a>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      )}
                    </>
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
