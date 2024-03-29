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
        <div className="card-header border-0 bg-white d-flex justify-content-between align-items-center pb-0">
          <h6 className="card-title fw-bold">Categories</h6>
          <Link href={`/dashboard/categories/${id}`}>
            <a
              className="text-decoration-none text-info d-flex justify-content-between align-items-center"
              href="#">
              <MdAdd /> <span>Add category</span>
            </a>
          </Link>
        </div>
        <div className="card-body">
          {allData?.length == 0 && (
            <p className="">There are no published categories</p>
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
