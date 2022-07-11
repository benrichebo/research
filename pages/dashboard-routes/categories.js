import React, { useState } from "react";
import Name from "../../components/ui/Name";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function Categories() {
  const { data, loading, allData, error, postError, message } = useCrud(
    "all-categories",
    "/api/categories"
  );

  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      type,
    };
    await data.addData(body, "/api/categories/create");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Categories</h5>
        {!error && (
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#contentId"
            aria-expanded="false"
            aria-controls="contentId">
            Add category
          </button>
        )}
      </div>
      <div className="collapse px-0" id="contentId">
        {message && <p className="text-success">{message}</p>}
        {postError && <p className="text-danger">{postError}</p>}
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-5">
            <label className="form-label">Name</label>
            <Name setName={setName} />
          </div>
          <div className="col-md-5">
            <label className="form-label">Type</label>
            <select
              className="form-select"
              onChange={(e) => setType(e.target.value)}>
              <option value="main-category" selected="">
                Main
              </option>
              <option value="sub-category">Sub</option>
            </select>
          </div>
          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!loading || !name || !type}>
              {loading ? (
                <Spinner className="ms-2" />
              ) : (
                <span className="">Submit</span>
              )}
            </button>
          </div>
        </form>
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
              onClick={() => data.getAllData("/api/categories")}>
              Reload
            </button>
          </div>
        </div>
      )}
      {!error && (
        <div className="row my-3">
          {allData?.map((data) => (
            <div className="col-6 col-md-3">
              <div className="card">
                <div className="card-body py-2">
                  <h6 className="card-title">{data?.name}</h6>
                  <h6 className="text-muted card-subtitle">{data?.type}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Categories;
