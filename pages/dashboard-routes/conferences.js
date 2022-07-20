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

  const [routeId, setRouteId] = useState(null);

  const [show, setShow] = useState();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setRouteId(router?.query && router?.query?.slug[0]);
    }
  }, [router.isReady]);

  const deleteConference = (id) => {
    console.log(id);
    data.deleteData(`/api/conferences/${id}`);
  };

  return (
    <>
      <div className="d-md-flex justify-content-md-between align-items-md-center mb-4">
        <h5>Conferences</h5>
        <div>
          <div className="d-sm-flex justify-content-sm-start align-items-sm-center">
            <input
              type="search"
              className="form-control w-auto h-100"
              placeholder="Search for an item"
              autocomplete="on"
            />
            <Link href={`/dashboard/add-conference/${routeId}`}>
              <a className="btn btn-primary ms-sm-3">Add conference</a>
            </Link>
            <button
              className="btn btn-light my-3 ms-3"
              onClick={() => data.getAllData("/api/conferences")}>
              <MdRefresh />
            </button>
          </div>
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
        <div className="row">
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
                    <th>Country</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map((data) => (
                    <tr key={data?._id}>
                      <td className="text-nowrap align-middle">
                        <div className="form-check">
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
                              href={`/dashboard/edit-conference/${routeId}/${data?._id}`}>
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
                          <div className="mt-3">
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
                      <td className="text-nowrap align-middle">
                        {data?.title}
                      </td>
                      <td className="text-nowrap align-middle">
                        {data?.country}
                      </td>
                      <td className="text-nowrap align-middle">
                        {data?.startDate} - {data?.endDate}
                      </td>
                    </tr>
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
              <MdGroup className="text-muted" />
              <p>There is no conference</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Conferences;
