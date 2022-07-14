import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdEdit, MdDelete, MdGroup, MdRefresh } from "react-icons/md";

function Conferences() {
  const { data, loading, allData, error } = useCrud(
    "all-conferences",
    "/api/conferences"
  );

  const [routeId, setRouteId] = useState();

  const [show, setShow] = useState();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setRouteId(router?.query?.slug[0]);
    }
  }, [router.isReady]);

  const deleteConference = (id) => {
    console.log(id);
    data.deleteData(`/api/conferences/${id}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Conferences</h5>
        <div>
          <Link href={`/dashboard/add-conference/${routeId}`}>
            <a className="btn btn-primary">Add conference</a>
          </Link>
          <button
            className="btn btn-light my-3 ms-3"
            onClick={() => data.getAllData("/api/conferences")}>
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
              There was an error loading conferences
            </h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getAllData("/api/conferences")}>
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
                    <th>Country</th>
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
                                src={data?.image?.url}
                              />
                            </label>
                            <span className="ms-3">
                              <Link
                                href={`/dashboard/edit-conference/${routeId}/${data?._id}`}>
                                {" "}
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
                          {show && (
                            <div class="mt-3">
                              <a
                                href="#"
                                onClick={() => setShow()}
                                className="btn btn-light btn-sm">
                                Edit
                              </a>
                              <a
                                className="btn btn-light btn-sm"
                                href="#"
                                onClick={() => deleteConference(data?._id)}>
                                Delete
                              </a>
                            </div>
                          )}
                        </td>
                        <td className="text-nowrap">{data?.title}</td>
                        <td className="text-nowrap">{data?.country}</td>
                        <td className="text-nowrap">
                          {data?.startDate} - {data?.endDate}
                        </td>
                        <td className="text-nowrap">
                          <a
                            href={`https://localhost:3000/conferences/${data?._id}`}>
                            https://localhost:3000/conferences/{data?._id}
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
              <MdGroup className="fs-1 text-muted" />
              <p>There is no conference</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Conferences;
