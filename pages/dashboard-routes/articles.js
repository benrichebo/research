import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdEdit, MdDelete, MdArticle, MdRefresh } from "react-icons/md";

function Articles() {
  const { data, loading, allData, error } = useCrud(
    "all-articles",
    "/api/articles"
  );
  const [show, setShow] = useState();

  const [routeId, setRouteId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setRouteId(router?.query && router?.query?.slug[0]);
    }
  }, [router.isReady]);

  const deleteArticle = async (id) => {
    await data.deleteData(`/api/articles/${id}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Articles</h5>
        <div>
          <Link href={`/dashboard/add-article/${routeId}`}>
            <a className="btn btn-primary">Add article</a>
          </Link>
          <button
            className="btn btn-light my-3 ms-3"
            onClick={() => data.getAllData("/api/articles")}>
            <MdRefresh />
          </button>
        </div>
      </div>
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && (
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
      {allData?.length > 0 && (
        <div className="row">
          <div className="col-12 d-flex justify-content-end align-items-center mb-3">
            <input
              type="search"
              className="form-control w-auto"
              placeholder="Search for an item"
              autoComplete="on"
            />
          </div>
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="d-flex justify-content-start align-items-center text-nowrap">
                      <span className="fw-normal">Bulk Actions</span>
                      <select className="form-select-sm form-select w-auto ms-3">
                        <option value="">--select--</option>
                        <option value="delete">Delete</option>
                      </select>
                    </th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <>
                      <tr className="post" key={data?._id}>
                        <td className="text-nowrap align-middle">
                          <div className="form-check d-flex align-items-center">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={data?.title}
                              value={data?._id}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={data?.title}>
                              <img
                                className="ms-4"
                                width="70"
                                height="50"
                                style={{ objectFit: "cover" }}
                                src={data?.image?.url}
                              />
                            </label>
                            <span className="ms-3">
                              <Link
                                href={`/dashboard/edit-article/${routeId}/${data?._id}`}>
                                <a className="">
                                  <MdEdit size={20} className="text-muted" />
                                </a>
                              </Link>
                              <a
                                className="ms-4"
                                type="button"
                                onClick={() => setShow(data?._id)}>
                                <MdDelete size={20} className="text-muted" />
                              </a>
                            </span>
                          </div>
                        </td>
                        <td className="text-nowrap align-middle">
                          {data?.title}
                        </td>
                        <td className="text-nowrap align-middle">
                          Architecture
                        </td>
                        <td className="text-nowrap align-middle">
                          {data?.createdAt}
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
                              onClick={() => deleteArticle(data?._id)}>
                              Delete
                            </a>
                          </td>
                          <td></td>
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
      {allData?.length == 0 && (
        <div className="row mb-4">
          <div
            className="col d-flex justify-content-center align-items-center bg-light"
            style={{ height: 300 }}>
            <div className="text-center">
              <MdArticle className="text-muted" />
              <p>There is no article</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Articles;
