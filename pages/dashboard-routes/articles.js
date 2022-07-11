import React from "react";
import Link from "next/link";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdPictureAsPdf } from "react-icons/md";

function Articles() {
  const { data, loading, allData, error } = useCrud(
    "all-articles",
    "/api/articles"
  );
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Articles</h5>
        <Link href="/dashboard/add-article">
          <a className="btn btn-primary">Add article</a>
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
              onClick={() => data.getAllData("/api/articles")}>
              Reload
            </button>
          </div>
        </div>
      )}
      {!error && (
        <div className="row my-4">
          {allData?.map((data) => (
            <div className="col-sm-6 col-lg-4">
              <div className="d-flex justify-content-start">
                <div>
                  <img
                    className="img-fluid"
                    width="250"
                    height="250"
                    src={data?.image?.url}
                    alt={data?.image?.name}
                  />
                </div>
                <div className="ms-3">
                  <h6>{data?.title}</h6>
                  <h6 className="text-muted mb-2">Date: {data?.createdAt}</h6>
                  <a className="fs-6 text-decoration-none" href="#">
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {allData?.length == 0 && (
        <div className="row mb-4">
          <div
            className="col d-flex justify-content-center align-items-center bg-light"
            style={{ height: 300 }}>
            <div className="text-center">
              <MdPictureAsPdf className="fs-1 text-muted" />
              <p>There is no article</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Articles;
