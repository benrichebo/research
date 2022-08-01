import React from "react";
import Link from "next/link";
import {
  MdDashboard,
  MdReceiptLong,
  MdLibraryBooks,
  MdPerson,
  MdPictureAsPdf,
  MdOutlinePermMedia,
  MdCategory,
  MdGroup,
  MdPayments,
} from "react-icons/md";

const Aside = ({ router, user, signOut }) => {
  return (
    <>
      <div className="d-flex align-items-center ms-lg-3">
        <ul className="list-unstyled">
          <li className="mb-4">
            <Link href={`/dashboard/home/${user?._id}`}>
              <a
                className={`text-decoration-none d-flex justify-content-start align-items-center ${
                  router?.query?.page == "home"
                    ? "fw-bold text-black"
                    : "text-black-50"
                }`}>
                <MdDashboard className="" />
                <span className="ms-3">Home</span>
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href={`/dashboard/papers/${user?._id}`}>
              <a
                className={`text-decoration-none d-flex justify-content-start align-items-center ${
                  router?.query?.page == "papers"
                    ? "fw-bold text-black"
                    : "text-black-50"
                }`}>
                <MdPictureAsPdf className="" />
                <span className="ms-3">Papers</span>
              </a>
            </Link>
          </li>
          {(user?.role == "admin" || user?.role == "manager") && (
            <>
              <li className="mb-4">
                <Link href={`/dashboard/articles/${user?._id}`}>
                  <a
                    className={`text-decoration-none d-flex justify-content-start align-items-center ${
                      router?.query?.page == "articles"
                        ? "fw-bold text-black"
                        : "text-black-50"
                    }`}>
                    <MdLibraryBooks className="" />
                    <span className="ms-3">Articles</span>
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href={`/dashboard/conferences/${user?._id}`}>
                  <a
                    className={`text-decoration-none d-flex justify-content-start align-items-center ${
                      router?.query?.page == "conferences"
                        ? "fw-bold text-black"
                        : "text-black-50"
                    }`}>
                    <MdReceiptLong className="" />
                    <span className="ms-3">Conferences</span>
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href={`/dashboard/members/${user?._id}`}>
                  <a
                    className={`text-decoration-none d-flex justify-content-start align-items-center ${
                      router?.query?.page == "members"
                        ? "fw-bold text-black"
                        : "text-black-50"
                    }`}>
                    <MdGroup className="" />
                    <span className="ms-3">Members</span>
                  </a>
                </Link>
              </li>
              {user?.role == "admin" && (
                <>
                <li className="mb-4">
                  <Link href={`/dashboard/admins/${user?._id}`}>
                    <a
                      className={`text-decoration-none d-flex justify-content-start align-items-center ${
                        router?.query?.page == "admins"
                          ? "fw-bold text-black"
                          : "text-black-50"
                      }`}>
                      <MdGroup className="" />
                      <span className="ms-3">Admins</span>
                    </a>
                  </Link>
                </li>
                 <li className="mb-4">
                  <Link href={`/dashboard/payments/${user?._id}`}>
                    <a
                      className={`text-decoration-none d-flex justify-content-start align-items-center ${
                        router?.query?.page == "payments"
                          ? "fw-bold text-black"
                          : "text-black-50"
                      }`}>
                      <MdPayments className="" />
                      <span className="ms-3">Payments</span>
                    </a>
                  </Link>
                </li>
                </>
              )}

              <li className="mb-4">
                <Link href={`/dashboard/categories/${user?._id}`}>
                  <a
                    className={`text-decoration-none d-flex justify-content-start align-items-center ${
                      router?.query?.page == "categories"
                        ? "fw-bold text-black"
                        : "text-black-50"
                    }`}>
                    <MdCategory className="" />
                    <span className="ms-3">Categories</span>
                  </a>
                </Link>
              </li>
            </>
          )}

          <li className="mb-4">
            <Link href={`/dashboard/media/${user?._id}`}>
              <a
                className={`text-decoration-none d-flex justify-content-start align-items-center ${
                  router?.query?.page == "media"
                    ? "fw-bold text-black"
                    : "text-black-50"
                }`}>
                <MdOutlinePermMedia className="" />
                <span className="ms-3">Media</span>
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href={`/dashboard/settings/${user?._id}`}>
              <a
                className={`text-decoration-none d-flex justify-content-start align-items-center ${
                  router?.query?.page == "settings"
                    ? "fw-bold text-black"
                    : "text-black-50"
                }`}>
                <MdPerson className="" />
                <span className="ms-3">Settings</span>
              </a>
            </Link>
          </li>
          <li className=" mb-4">
            <a
              className="text-black text-decoration-none d-flex justify-content-start align-items-center text-black-50"
              type="button"
              onClick={signOut}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Aside;
