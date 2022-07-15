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
            <Link href={`/dashboard/add-category/${id}`}>
              <a className="text-decoration-none" href="#">
                <MdAdd /> Add category
              </a>
            </Link>
          </div>
          <p className="card-text mb-3">Added categories</p>
          <ul class="list-unstyled">
            <li class="list-item d-flex justify-content-between fw-bold mb-2">
              <span>Category</span>
              <span>Type</span>
            </li>
            {allData &&
              allData?.length > 0 &&
              allData.slice(0, 3).map((category) => (
                <li class="list-item d-flex justify-content-between mb-2">
                  <span>{category?.name}</span>
                  <span>{category?.type}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Categories;
