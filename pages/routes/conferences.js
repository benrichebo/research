import React from "react";
import Spinner from "../../components/ui/Spinner";

function Conferences() {
  const { data, loading, allData, error } = useCrud("all-conferences");
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
              onClick={() => data.getAllData("/api/categories")}>
              Reload
            </button>
          </div>
        </div>
      )}
      <h5>Conferences</h5>
      {!error && (
        <div className="row my-4">
          {allData?.map((data) => (
            <div className="col-sm-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{data?.country}</h5>
                  <h6 className="text-muted card-subtitle mb-2">
                    {data?.startDate}
                  </h6>
                  <p className="card-text">{data?.description}</p>
                  <a className="text-decoration-none" href="#">
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Conferences;
