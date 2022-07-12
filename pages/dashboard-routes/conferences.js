import React from "react";
import Link from "next/link";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function Conferences() {
  const { data, loading, allData, error } = useCrud(
    "all-conferences",
    "/api/conferences"
  );
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Conferences</h5>
        <Link href="/dashboard/add-conference">
          <a className="btn btn-primary">Add conference</a>
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
            <h6 className="text-muted">
              There was an error loading categories
            </h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getAllData("/api/conferences")}>
              Reload
            </button>
          </div>
        </div>
      )}

      {!error && (
        <div className="row my-4">
          {allData?.length > 0 ? allData?.map((data) => (
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
          )) : "There is no conference"}
        </div>
      )}
    </>
  );
}

export default Conferences;
