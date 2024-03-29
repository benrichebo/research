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
        <div className="card-header bg-white border-0 pb-0 d-flex justify-content-between">
          <h6 className="card-title fw-bold">Papers</h6>
          <Link href={`/dashboard/add-paper/${id}`}>
            <a
              className="text-decoration-none text-info d-flex justify-content-between align-items-center"
              href="#">
              <MdAdd /> Add paper
            </a>
          </Link>
        </div>
        <div className="card-body">
          {allData?.length == 0 && (
            <p className="mb-3">There are no published papers</p>
          )}

          {allData?.length > 0 &&
            allData.slice(0, 3).map((paper) => (
              <p
                class="list-item d-flex justify-content-between mb-0 card-text"
                key={paper?.title}>
                <span>{paper?.title}</span>
                <span>{paper?.status}</span>
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

export default Papers;
