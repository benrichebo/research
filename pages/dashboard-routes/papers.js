import React, { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdPictureAsPdf, MdEdit, MdDelete, MdRefresh } from "react-icons/md";
import { useRouter } from "next/router";
import { useUser } from "../../hooks/useUser";

function Papers() {
  const { userData } = useUser("user");
  const { data, loading, postLoading, allData, error } = useCrud(
    "all-papers",
    "/api/papers"
  );
  const [show, setShow] = useState();

  const [routeId, setRouteId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setRouteId(router?.query && router?.query?.slug[0]);
    }
  }, [router.isReady]);

  const deletePaper = async (id) => {
    await data.deleteData(`/api/papers/${id}`);
  };

  const handleApproval = async (id) => {
    await data.updateData({ status: "Approved" }, `/api/papers/${id}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Papers</h5>
        <Link href={`/dashboard/add-paper/${routeId}`}>
          <a className="btn btn-primary">Add paper</a>
        </Link>
      </div>
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading papers</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getAllData("/api/papers")}>
              Reload
            </button>
          </div>
        </div>
      )}
      {allData?.length > 0 && (
        <div class="row">
          <div class="col-12 d-flex justify-content-end align-items-center mb-3">
            <input
              type="search"
              class="form-control w-auto d-none"
              placeholder="Search for an item"
              autoComplete="on"
            />
            <button
              className="btn btn-light ms-3"
              onClick={() => data.getAllData("/api/papers")}>
              <MdRefresh />
            </button>
          </div>
          <div class="col">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th class="d-flex justify-content-start align-items-center text-nowrap">
                      <span class="fw-normal">Bulk Actions</span>
                      <select class="form-select-sm form-select w-auto ms-3">
                        <option value="">--select--</option>
                        <option value="delete">Delete</option>
                      </select>
                    </th>
                    <th>Publisher</th>
                    <th>Status</th>
                    <th>File</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <>
                      <tr key={data?._id}>
                        <td className="text-nowrap align-middle">
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
                              {data?.title}
                            </label>
                            <span className="ms-3">
                              <Link
                                href={`/dashboard/edit-paper/${routeId}/${data?._id}`}>
                                <a className="">
                                  <MdEdit size={16} className="text-muted" />
                                </a>
                              </Link>
                              <a
                                className="ms-3"
                                type="button"
                                onClick={() => setShow(data?._id)}>
                                <MdDelete size={16} className="text-muted" />
                              </a>
                            </span>
                          </div>
                        </td>
                        <td className="text-nowrap align-middle">
                          {data?.publisher}
                        </td>
                        <td className="text-nowrap align-middle">
                          {(data?.status != "approved" &&
                            userData?.role == "admin") ||
                          userData?.role == "manager" ? (
                            <>
                              {data?.status != "Approved" ? (
                                <span class="badge badge-sm bg-secondary">
                                  {data?.status}
                                </span>
                              ) : (
                                <span class="badge badge-sm bg-success">
                                  {data?.status}
                                </span>
                              )}

                              {data?.status != "Approved" && (
                                <a
                                  type="button"
                                  className="btn btn-light btn-sm ms-3"
                                  disabled={postLoading}
                                  onClick={() => setShow(data?._id)}>
                                  {show == data?._id && postLoading ? (
                                    <Spinner className="ms-2" />
                                  ) : (
                                    <span className="">Approve</span>
                                  )}
                                </a>
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="text-nowrap align-middle">
                          <a
                            href={data?.file?.name}
                            download
                            className="text-decoration-none">
                            Download
                          </a>
                        </td>
                      </tr>
                      {show == data?._id && (
                        <tr className="mt-3 bg-light small">
                          <td className="text-nowrap">
                            <span>Are you sure</span>
                            <a
                              className="text-decoration-none ms-4"
                              type="button"
                              onClick={() => setShow()}>
                              Cancel
                            </a>
                            {show == data?._id && data?.status != "Approved" && (
                              <a
                                className="ms-4 text-decoration-none text-success"
                                type="button"
                                onClick={() => handleApproval(data?._id)}>
                                Approve
                              </a>
                            )}

                            <a
                              className="ms-4 text-decoration-none text-danger"
                              type="button"
                              onClick={() => deletePaper(data?._id)}>
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
      {allData?.length == 0 && (
        <div className="row mb-4">
          <div
            className="col d-flex justify-content-center align-items-center bg-light"
            style={{ height: 300 }}>
            <div className="text-center">
              <MdPictureAsPdf className="text-muted" />
              <p>There is no paper</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Papers;
