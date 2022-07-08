import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function Papers() {
  const { data, loading, allData, error } = useCrud(
    "all-papers",
    "/api/papers"
  );
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
            <h6 className="text-muted">
              There was an error loading categories
            </h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getAllData("/api/papers")}>
              Reload
            </button>
          </div>
        </div>
      )}
      <div>
        <h5>Papers</h5>
      </div>
      {!error && (
        <div className="row my-4">
          {allData?.map((data) => (
            <div className="col-sm-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">{data?.title}</h6>
                  <h6 className="text-muted card-subtitle mb-2">
                    Publisher: {data?.publisher}
                  </h6>
                  <p className="card-text text-truncate">{data?.description}</p>
                  <span className="badge rounded-pill bg-primary">
                    Pending approval
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Papers;
