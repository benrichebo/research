import React from "react";
import Link from "next/link";
import { useCrud } from "../../hooks/useCrud";
import { MdAdd } from "react-icons/md";

function Papers({ id }) {
  const { allData, error, loading, message } = useCrud(
    "all-papers",
    "/api/papers"
  );
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6 className="card-title">Papers</h6>
            <Link href={`/dashboard/add-paper/${id}`}>
              <a className="text-decoration-none" href="#">
                <MdAdd /> Add paper
              </a>
            </Link>
          </div>
          <p className="card-text text-muted">Recently uploaded papers</p>
          {allData?.length == 0 && (
            <p className="my-3">There are no published papers</p>
          )}
          {allData?.length > 0 && (
            <ul class="list-unstyled">
              <li class="list-item d-flex justify-content-between fw-bold mb-2">
                <span>Title</span>
                <span>Status</span>
              </li>
              {allData &&
                allData?.length > 0 &&
                allData.slice(0, 3).map((paper) => (
                  <li
                    class="list-item d-flex justify-content-between mb-2"
                    key={paper?.title}>
                    <span>{paper?.title}</span>
                    <span>{paper?.status}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Papers;
