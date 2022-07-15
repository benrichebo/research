import React, { useState } from "react";
import { useCrud } from "../../hooks/useCrud";
import Spinner from "../../components/ui/Spinner";

function Categories({ category }) {
  const { data, allData, postLoading, postError, error, loading, message } =
    useCrud("all-categories", "/api/categories");

  const [name, setName] = useState(category?.name || "");
  const [type, setType] = useState(category?.type || "");
  const [parent, setParent] = useState(category?.parent || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      type,
      parent,
    };
    category?.title
      ? await data.updateData(body, `/api/categories/${category?._id}`)
      : await data.addData(body, "/api/categories/create");
  };

  return (
    <>
      <h5>{category?.title ? "Edit category" : "Add category"}</h5>
      {message && <p className="text-success">{message}</p>}
      {postError && <p className="text-danger">{postError}</p>}
      <div className="row">
        <div className="col-md-7">
          <form className="row mb-4" onSubmit={handleSubmit}>
            <div className="">
              <div className="form-group mb-4">
                <label htmlFor="name" className="mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="email"
                  id="email"
                  aria-describedBy="helpId"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="type">Type</label>
                <select
                  className="form-control rounded-0"
                  name="type"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}>
                  <option value="main">Main</option>
                  <option value="sub">Sub</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="">Parent</label>
                <select
                  className="form-control rounded-0"
                  name="parent"
                  id="parent"
                  value={parent}
                  onChange={(e) => setParent(e.target.value)}>
                  <option value="">--Select category--</option>
                  {allData &&
                    allData.length > 0 &&
                    allData?.map((category) => (
                      <option value={category?.name}>{category?.name}</option>
                    ))}
                </select>
              </div>
              <div className="my-3 d-grid">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={postLoading || !name || !type || !parent}>
                  {postLoading ? (
                    <Spinner className="ms-2" />
                  ) : (
                    <span className="">
                      {" "}
                      {category?.title ? "Save category" : "Add category"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Categories</h4>
              <p class="card-text">Added categories</p>
              {allData?.length == 0 && (
                <p className="my-3">There are no published categories</p>
              )}
              {allData?.length > 0 && (
                <ul class="list-unstyled mt-3">
                  <li class="list-item d-flex justify-content-between fw-bold mb-2">
                    <span>Category</span>
                    <span>Type</span>
                  </li>
                  {allData?.length > 0 &&
                    allData.map((category) => (
                      <li class="list-item d-flex justify-content-between mb-2">
                        <span>{category?.name}</span>
                        <span>{category?.type}</span>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
