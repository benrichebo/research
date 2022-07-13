import React, { useState } from "react";
import Link from "next/link";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdPictureAsPdf, MdEdit, MdDelete, MdArticle } from "react-icons/md";

function Articles() {
  const { data, loading, allData, error } = useCrud(
    "all-articles",
    "/api/articles"
  );
  const [show, setShow] = useState(false);

  const deleteArticle = (id) => {
    console.log(id);
    data.deleteData(`/api/articles/${id}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
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
                    <th class="d-flex justify-content-start align-items-center text-nowrap">
                      <span class="fw-normal">Bulk Actions</span>
                      <select class="form-select-sm form-select w-auto ms-3">
                        <option value="delete">--select--</option>
                        <option value="delete" selected="">
                          Delete
                        </option>
                      </select>
                    </th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Url</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <>
                      <tr>
                        <td className="text-nowrap">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id={data?.title}
                              value={data?._id}
                            />
                            <label
                              class="form-check-label"
                              htmlFor={data?.title}>
                              <img
                                class="ms-4"
                                width="70"
                                height="50"
                                style={{ objectFit: "cover" }}
                                src="/images/151778155_1117320482043524_2277621920688018616_n.jpg"
                              />
                            </label>
                            <span className="ms-3">
                              <a className="" type="button">
                                <MdEdit size={20} className="text-muted" />
                              </a>
                              <a
                                className="ms-4"
                                type="button"
                                onClick={() => setShow(true)}>
                                <MdDelete size={20} className="text-muted" />
                              </a>
                            </span>
                          </div>
                          {show && (
                            <div class="mt-3">
                              <a className="btn" href="#" onClick={() => setShow(false)}>
                                Edit
                              </a>
                              <a
                                className="ms-4 btn"
                                href="#"
                                onClick={() => deleteArticle(data?._id)}>
                                Delete
                              </a>
                            </div>
                          )}
                        </td>
                        <td className="text-nowrap">{data?.title}</td>
                        <td className="text-nowrap">Architecture</td>
                        <td className="text-nowrap">{data?.createdAt}</td>
                        <td className="text-nowrap">
                          <a
                            href={`https://localhost:3000/articles/${data?._id}`}>
                            https://localhost:3000/articles/{data?._id}
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
      {allData?.length == 0 && (
        <div className="row mb-4">
          <div
            className="col d-flex justify-content-center align-items-center bg-light"
            style={{ height: 300 }}>
            <div className="text-center">
              <MdArticle className="fs-1 text-muted" />
              <p>There is no article</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Articles;
