import React, { useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdRefresh, MdGroup } from "react-icons/md";
import { useUser } from "../../hooks/useUser";
import Search from "../../components/ui/Search";

function Members() {
  const { userData } = useUser("user");
  const [show, setShow] = useState();
  const { data, loading, allData, error, postError, postLoading } = useCrud(
    "all-members",
    "/api/members"
  );
  const [keyword, setKeyword] = useState("");

  console.log("allData", allData);

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
              onClick={() => data.getAllData("/api/members")}>
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
                onClick={() => data.getAllData("/api/members")}>
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
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <tr key={data?.id}>
                      <td className="align-middle text-nowrap">{data?.name}</td>
                      <td className="align-middle text-nowrap">
                        {data?.verified ? (
                          <span className="badge bg-success">Approved</span>
                        ) : (
                          <span className="badge bg-secondary">Unapproved</span>
                        )}
                      </td>
                      <td className="align-middle text-nowrap">
                        {data?.email}
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
              <MdGroup className="text-muted" />
              <p>There is no members</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Members;
