import Link from "next/link";
import React from "react";
import { MdAdd } from "react-icons/md";
import { useCrud } from "../../hooks/useCrud";

function Categories({ id }) {
  const { allData, error, loading, message } = useCrud(
    "all-categories",
    "/api/categories"
  );
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6 className="card-title">Categories</h6>
            <Link href={`/dashboard/categories/${id}`}>
              <a className="text-decoration-none" href="#">
                <MdAdd /> Add category
              </a>
            </Link>
          </div>
          {allData?.length == 0 && (
            <p className="my-3">There are no published categories</p>
          )}
          {allData?.length > 0 && (
            <>
              {allData &&
                allData?.length > 0 &&
                allData.slice(0, 3).map((category) => (
                  <p
                    class="list-item d-flex justify-content-between mb-0 card-text"
                    key={category?.name}>
                    <span>{category?.name}</span>
                    <span>{category?.type}</span>
                  </p>
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Categories;
