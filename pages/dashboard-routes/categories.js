import React, { useEffect, useState } from "react";
import { useCrud } from "../../hooks/useCrud";
import Spinner from "../../components/ui/Spinner";
import { MdDelete, MdEdit, MdRefresh } from "react-icons/md";

function Categories() {
  const { data, allData, postLoading, postError, error, loading, message } =
    useCrud("all-categories", "/api/categories");

  const [category, setCategory] = useState(null);

  const [show, setShow] = useState();
   const [action, setAction] = useState(false); //set to prevent form spinner on delete


  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [parent, setParent] = useState("");

  useEffect(() => {
    console.log(category);
    if (category?.name) {
      setName(category?.name);
      setType(category?.type);
      setParent(category?.parent);
    } else {
      setName("");
      setType("");
      setParent("");
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      type,
      parent,
    };
    category?.name
      ? await data.updateData(body, `/api/categories/${category?._id}`)
      : await data.addData(body, "/api/categories/create");
  };

  const deleteCategory = async (id) => {
    setAction(true)
    console.log(id);
    await data.deleteData(`/api/category/${id}`);
  };

  return (
    <>
      <h5>{category?.title ? "Edit category" : "Add category"}</h5>
      {message && <p className="text-success">{message}</p>}
      {postError && <p className="text-danger">{postError}</p>}
      <div className="row">
        <div className="col-lg-5">
          <form className="row mb-4" onSubmit={handleSubmit}>
            <div className="">
              <div className="form-group mb-4">
                <label htmlFor="name" className="mb-2" id="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="text"
                  id="name"
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
                  <option value="">--Select type--</option>
                  <option value="main">Main</option>
                  <option value="sub">Sub</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="parent" className="mb-2" id="parent">
                  Parent
                </label>
                <select
                  className="form-select rounded-0"
                  name="parent"
                  id="parent"
                  value={parent}
                  onChange={(e) => setParent(e.target.value)}>
                  <option value="">--Select parent--</option>
                  <option value="none">None</option>
                  {allData?.length > 0 &&
                    allData?.map((category) => (
                      <option value={category?.name}>{category?.name}</option>
                    ))}
                </select>
              </div>
              <div className="my-3 mt-4 d-flex justify-content-between">
                {category?.name && (
                  <button
                    className="btn btn-light"
                    onClick={() => setCategory(null)}>
                    Cancel
                  </button>
                )}

                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={postLoading || !name || !type || !parent}>
                  {postLoading && !action ? (
                    <Spinner className="ms-2" />
                  ) : (
                    <span className="">
                      {category?.name ? "Save category" : "Add category"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-7">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">Categories</h5>
                <button
                  className="btn btn-light my-3 ms-3"
                  onClick={() => data.getAllData("/api/categories")}>
                  <MdRefresh />
                </button>
              </div>

              <p className="card-text">Added categories</p>
              {allData?.length == 0 && (
                <p className="my-3">There are no categories</p>
              )}
              {allData?.length > 0 && (
                <div className="row">
                  <div className="col">
                    <div className="table-responsive">
                      <table className="table">
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
                                <td className="text-nowrap">
                                  <a
                                    href="#"
                                    onClick={() => setCategory(data)}
                                    className="text-decoration-none">
                                    <MdEdit size={20} className="text-muted" />
                                  </a>
                                  <a
                                    className="ms-4"
                                    type="button"
                                    onClick={() => setShow(data?._id)}>
                                    <MdDelete
                                      size={20}
                                      className="text-muted"
                                    />
                                  </a>
                                </td>
                              </tr>
                              {show == data?._id && (
                                <tr className="mt-3 bg-light">
                                  <td className="text-nowrap">
                                    <span>Are you sure</span>
                                    <a
                                      className="text-decoration-none ms-3"
                                      type="button"
                                      onClick={() => setShow()}>
                                      Cancel
                                    </a>
                                    <a
                                      className="ms-3 text-decoration-none text-danger"
                                      type="button"
                                      onClick={() => deleteCategory(data?._id)}>
                                      Delete
                                    </a>
                                  </td>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
