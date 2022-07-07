import React from "react";
import Menu from "./Menu";

const Aside = ({ router }) => {
  return (
    <>
      <h1></h1>
      <div class="d-flex align-items-center ms-lg-3 h-75">
        <ul class="list-unstyled">
          <li class="fs-6 mb-4">
            <a
              class="text-white text-decoration-none d-flex justify-content-start align-items-center fw-bold"
              href="#">
              <i class="material-icons">dashboard</i>
              <span class="ms-3">Dashboard</span>
            </a>
          </li>
          <li class="fs-6 mb-4">
            <a
              class="text-white text-decoration-none d-flex justify-content-start align-items-center"
              href="#">
              <i class="material-icons">picture_as_pdf</i>
              <span class="ms-3">Papers</span>
            </a>
          </li>
          <li class="fs-5 mb-4">
            <a
              class="fs-6 text-white text-decoration-none d-flex justify-content-start align-items-center"
              href="#">
              <i class="material-icons">library_books</i>
              <span class="ms-3">Articles</span>
            </a>
          </li>
          <li class="fs-6 mb-4">
            <a
              class="text-white text-decoration-none d-flex justify-content-start align-items-center"
              href="#">
              <i class="material-icons">store_mall_directory</i>
              <span class="ms-3">Conferences</span>
            </a>
          </li>
          <li class="fs-6 mb-4">
            <a
              class="text-white text-decoration-none d-flex justify-content-start align-items-center"
              href="#">
              <i class="material-icons">person</i>
              <span class="ms-3">Setttings</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Aside;
