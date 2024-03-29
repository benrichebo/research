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

  const [show, setShow] = useState();

  const deleteConference = (id) => {
    console.log(id);
    data.deleteData(`/api/conferences/${id}`);
  };

  const [routeId, setRouteId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setRouteId(router?.query && router?.query?.slug[0]);
    }
  }, [router.isReady]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Conferences</h5>
        <div className="d-flex justify-content-start align-items-center">
          <Link href={`/dashboard/add-conference/${routeId}`}>
            <a className="btn btn-primary w-100">
              Add <span className="d-none d-sm-block">conference</span>
            </a>
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
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="">
                  {/*  <span className="fw-normal">Bulk Actions</span>
                      <select className="form-select-sm form-select w-auto ms-3">
                        <option value="">--select--</option>
                        <option value="delete">Delete</option>
                      </select> */}
                  #
                </th>
                <th>Title</th>
                <th>Country</th>
                <th>Date</th>
                <th>Days left</th>
              </tr>
            </thead>
            <tbody>
              {allData?.map((data) => (
                <tr key={data?._id}>
                  <td className="text-nowrap align-middle">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id={data?.title}
                        value={data?._id}
                      />
                      <label className="form-check-label" htmlFor={data?.title}>
                        <img
                          className=""
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
                            <MdEdit size={16} className="text-muted" />
                          </a>
                        </Link>

                        <a
                          className="ms-4"
                          type="button"
                          onClick={() => setShow(data?._id)}>
                          <MdDelete size={16} className="text-muted" />
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
                    {data?.title?.slice(0, 40)}
                  </td>
                  <td className="text-nowrap align-middle">{data?.country}</td>
                  <td className="text-nowrap align-middle">
                    Start date: {data?.startDate} <br /> End date:{" "}
                    {data?.endDate}
                  </td>
                  <td className="text-nowrap align-middle">{data?.daysLeft}</td>
                </tr>
              ))}
              {/* 
                  {filteredData &&
                    allData
                      ?.filter(searched(keyword))
                      .map((data) => (
                        <TableRow data={data} routeId={routeId} />
                      ))} */}
            </tbody>
          </table>
        </div>
      )}
      {allData?.length == 0 && !loading && (
        <div className="mb-4">
          <div
            className="col d-flex justify-content-center align-items-center bg-light"
            style={{ height: 300 }}>
            <div className="text-center">
              <MdGroup className="text-muted" />
              <p>There is no conferences</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Conferences;
