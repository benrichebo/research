import React, { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { MdPictureAsPdf, MdEdit, MdDelete } from "react-icons/md";
import { useRouter } from "next/router";
import { useStorage } from "../../hooks/useStorage";

function Papers() {
  const { data, loading, allData, error } = useCrud(
    "all-papers",
    "/api/papers"
  );
  const [show, setShow] = useState(false);

  const { sessionStorage } = useStorage();

  const router = useRouter();

  //clear detail data
  useEffect(() => {
    sessionStorage.clearItem("url");
  }, []);

  const deletePaper = async (id) => {
    console.log(id);
    await data.deleteData(`/api/papers/${id}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Papers</h5>
        <Link href={`/dashboard/add-paper/${router?.query?.slug[0]}`}>
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
                    <th>Publisher</th>
                    <th>Date</th>
                    <th>File</th>
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
                              {data?.title}
                            </label>
                            <span className="ms-3">
                              <Link
                                href={`/dashboard/edit-paper/${router?.query?.slug[0]}/${data?._id}`}>
                                <a className="">
                                  <MdEdit size={20} className="text-muted" />
                                </a>
                              </Link>
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
                              <a href="#" onClick={() => setShow(false)}>
                                Edit
                              </a>
                              <a
                                class="ms-4"
                                href="#"
                                onClick={() => deletePaper(data?._id)}>
                                Delete
                              </a>
                            </div>
                          )}
                        </td>
                        <td className="text-nowrap">{data?.publisher}</td>
                        <td className="text-nowrap">{data?.createdAt}</td>
                        <td className="text-nowrap">
                          <a
                            href={`https://localhost:3000/papers/${data?._id}`}>
                            https://localhost:3000/papers/{data?._id}
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
              <MdPictureAsPdf className="fs-1 text-muted" />
              <p>There is no paper</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Papers;
