import React from "react";
import Link from "next/link";
import {
  MdDashboard,
  MdReceiptLong,
  MdLibraryBooks,
  MdPerson,
  MdPictureAsPdf,
  MdPayments,
  MdOutlinePermMedia,
  MdCategory
} from "react-icons/md";

const routes = [
  { name: "Home", icon: <MdDashboard className="fs-5" /> },
  { name: "Papers", icon: <MdPictureAsPdf className="fs-5" /> },
  { name: "Articles", icon: <MdLibraryBooks className="fs-5" /> },
  { name: "Conferences", icon: <MdReceiptLong className="fs-5" /> },
  { name: "Payments", icon: <MdPayments className="fs-5" /> },
  { name: "Settings", icon: <MdPerson className="fs-5" /> },
  { name: "Categories", icon: <MdCategory className="fs-5" /> },
  { name: "Media", icon: <MdOutlinePermMedia className="fs-5" /> },
];

const memberRoutes = [
  { name: "Home", icon: <MdDashboard className="fs-5" /> },
  { name: "Papers", icon: <MdPictureAsPdf className="fs-5" /> },
  { name: "Payments", icon: <MdPayments className="fs-5" /> },
  { name: "Settings", icon: <MdPerson className="fs-5" /> },
];
const Aside = ({ router, user, signOut }) => {
  
  return (
    <>
      <div className="d-flex align-items-center ms-lg-3 h-75">
        <ul className="list-unstyled">
          {user?.role == "member" && (
            <>
              {memberRoutes?.map((route) => (
                <li className="fs-6 mb-4" key={route.name}>
                  <Link
                    href={`/dashboard/${route?.name?.toLocaleLowerCase()}/${
                      user?._id
                    }`}>
                    <a
                      className={`text-white text-decoration-none d-flex justify-content-start align-items-center text-white-50 ${
                        router?.query?.page == route.name.toLocaleLowerCase()
                          ? "fw-bold text-white"
                          : "text-white-50"
                      }`}
                      href="#">
                      {route?.icon}
                      <span className="ms-3">{route?.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </>
          )}

          {user?.role == "admin" && (
            <>
              {routes?.map((route) => (
                <li className="fs-6 mb-4" key={route.name}>
                  <Link
                    href={`/dashboard/${route?.name?.toLocaleLowerCase()}/${
                      user?._id
                    }`}>
                    <a
                      className={`text-white text-decoration-none d-flex justify-content-start align-items-center text-white-50 ${
                        router?.query?.page == route.name.toLocaleLowerCase()
                          ? "fw-bold text-white"
                          : "text-white-50"
                      }`}
                      href="#">
                      {route?.icon}
                      <span className="ms-3">{route?.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </>
          )}
          <li className="fs-6 mb-4">
            <a
              className="text-white text-decoration-none d-flex justify-content-start align-items-center text-white-50 text-white-50"
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
