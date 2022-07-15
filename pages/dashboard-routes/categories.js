import React, { useState } from "react";
import { useCrud } from "../../hooks/useCrud";
import Spinner from "../../components/ui/Spinner";

function Categories() {
  const { data, allData, postLoading, postError, error, loading, message } =
    useCrud("all-categories", "/api/categories");

    const [category, setCategory] = useState()

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

  const deleteCategory = async (id) => {
    console.log(id);
    await data.deleteData(`/api/papers/${id}`);
  };

  return (
    <>
      <h5>{category?.title ? "Edit category" : "Add category"}</h5>
      {message && <p className="text-success">{message}</p>}
      {postError && <p className="text-danger">{postError}</p>}
      <div className="row">
        <div className="col-md-6">
          <form className="row mb-4" onSubmit={handleSubmit}>
            <div className="">
              <div className="form-group mb-4">
                <label htmlFor="name" className="mb-2" id="email">
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
                <label htmlFor="type" className="mb-2" id="type">
                  Type
                </label>
                <select
                  className="form-select rounded-0"
                  name="type"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}>
                  <option value="main">Main</option>
                  <option value="sub">Sub</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="parent" className="mb-2">
                  Parent
                </label>
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
              <div className="my-3 d-grid mt-4">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={postLoading || !name || !type || !parent}>
                  {postLoading ? (
                    <Spinner className="ms-2" />
                  ) : (
                    <span className="">
                      {category?.title ? "Save category" : "Add category"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Categories</h4>
              <p class="card-text">Added categories</p>
              {allData?.length == 0 && (
                <p className="my-3">There are no categories</p>
              )}
              {allData?.length > 0 && (
                <div class="row">
                  <div class="col-12 d-flex justify-content-end align-items-center mb-3">
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
                            <th>Name</th>
                            <th>Type</th>
                            <th>Parent</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {allData?.map((data) => (
                            <>
                              <tr>
                                <td className="text-nowrap">{data?.name}</td>
                                <td className="text-nowrap">{data?.type}</td>
                                <td className="text-nowrap">{data?.parent}</td>
                                <td>
                                  <a
                                    href="#"
                                    onClick={() => setCategory(data)}
                                    className="btn btn-light btn-sm">
                                    Edit
                                  </a>
                                  <a
                                    className=""
                                    href="#"
                                    onClick={() => deleteCategory(data?._id)}>
                                    <MdDelete className="text-muted" />
                                  </a>
                                </td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
