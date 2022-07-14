import React, { useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { MdDelete, MdGroup, MdRefresh } from "react-icons/md";
import { useMedia } from "../../hooks/useMedia";

function Media() {
  const { loading, medias, media, uploadError, error, uploadLoading } = useMedia("medias");
  const [show, setShow] = useState();

  const deleteMedia = async (id) => {
    console.log(id);
    await media.deleteMedia(id);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Media</h5>
        <div>
          <button
            className="btn btn-light my-3 ms-3"
            onClick={() => media.getMedias()}>
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
            <h6 className="text-muted">There was an error loading medias</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => media.getMedias()}>
              Reload
            </button>
          </div>
        </div>
      )}
      {uploadError && <p className="text-danger">{uploadError}</p>}
      {medias?.length > 0 && (
        <div className="row">
          <div className="col-12 d-flex justify-content-end align-items-center mb-3">
            <input
              type="search"
              className="form-control w-auto"
              placeholder="Search for an item"
              autocomplete="on"
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
                        <option value="delete">--select--</option>
                        <option value="delete" selected="">
                          Delete
                        </option>
                      </select>
                    </th>
                    <th>Name</th>
                    <th>Url</th>
                  </tr>
                </thead>
                <tbody>
                  {medias?.map((data) => (
                    <>
                      <tr>
                        <td className="text-nowrap">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={data?.name}
                              value={data?._id}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={data?.name}>
                              <img
                                className="ms-4"
                                width="70"
                                height="50"
                                style={{ objectFit: "cover" }}
                                src={data?.image?.url}
                              />
                            </label>
                            <span className="ms-3">
                              <a
                                className="ms-4"
                                type="button"
                                onClick={() => setShow(data?._id)}>
                                <MdDelete size={20} className="text-muted" />
                              </a>
                            </span>
                          </div>
                          {show == data?._id && (
                            <div className="mt-3">
                              <a
                                className="btn btn-light btn-sm"
                                href="#"
                                onClick={() => setShow()}>
                                Cancel
                              </a>
                              <a
                                className="ms-4 btn btn-light btn-sm"
                                onClick={() => deleteMedia(data?._id)}>
                                {uploadLoading ? (
                                  <Spinner className="ms-2" />
                                ) : (
                                  <span className="">Delete</span>
                                )}
                              </a>
                            </div>
                          )}
                        </td>
                        <td className="text-nowrap">{data?.name}</td>
                        <td className="text-nowrap">
                          <a href="#">{data?.url}</a>
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
      {medias?.length == 0 && (
        <div className="row mb-4">
          <div
            className="col d-flex justify-content-center align-items-center bg-light"
            style={{ height: 300 }}>
            <div className="text-center">
              <MdGroup className="fs-1 text-muted" />
              <p>There is no media</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Media;
