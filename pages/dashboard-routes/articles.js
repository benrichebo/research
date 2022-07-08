import React from "react";
import { useCrud } from "../../hooks/useCrud";

function Articles() {
  const { data, loading, allData, error } = useCrud(
    "all-articles",
    "/api/articles"
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
              onClick={() => data.getAllData("/api/articles")}>
              Reload
            </button>
          </div>
        </div>
      )}
      <h5>Articles</h5>
      {!error && (
        <div class="row my-4">
          {allData?.map((data) => (
            <div class="col-sm-6 col-lg-4">
              <div class="d-flex justify-content-start">
                <div>
                  <img
                    class="img-fluid"
                    width="250"
                    height="250"
                    src={data?.image?.url}
                    alt={data?.image?.name}
                  />
                </div>
                <div class="ms-3">
                  <h6>{data?.title}</h6>
                  <h6 class="text-muted mb-2">Date: {data?.createdAt}</h6>
                  <a class="fs-6 text-decoration-none" href="#">
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div class="row mb-4">
        <div
          class="col d-flex justify-content-center align-items-center bg-light"
          style={{ height: 300 }}>
          <div class="text-center">
            <i class="material-icons fs-1 text-muted text-muted">
              picture_as_pdf
            </i>
            <p>There is no article</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
