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
} from "react-icons/md";

const routes = [
  { name: "Home", icon: <MdDashboard className="fs-5" /> },
  { name: "Papers", icon: <MdPictureAsPdf className="fs-5" /> },
  { name: "Articles", icon: <MdLibraryBooks className="fs-5" /> },
  { name: "Conferences", icon: <MdReceiptLong className="fs-5" /> },
  { name: "Payments", icon: <MdPayments className="fs-5" /> },
  { name: "Settings", icon: <MdPerson className="fs-5" /> },
  { name: "Media", icon: <MdOutlinePermMedia className="fs-5" /> },
];

const memberRoutes = [
  { name: "Home", icon: <MdDashboard className="fs-5" /> },
  { name: "Papers", icon: <MdPictureAsPdf className="fs-5" /> },
  { name: "Payments", icon: <MdPayments className="fs-5" /> },
  { name: "Settings", icon: <MdPerson className="fs-5" /> },
];

function SecondaryHeader({user}) {
  return (
    <>
      <nav className="navbar navbar-light bg-white py-3 border-bottom">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand fs-6" href="#">
              <span className="d-none d-md-block">
                Association of researches and planners
              </span>
              <span className="d-md-none">Logo</span>
            </a>
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler border-0 d-md-none"
            data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav d-flex mx-auto ms-auto list-group-horizontal-md">
              {user?.role == "member" && (
                <>
                  {memberRoutes?.map((route) => (
                    <li className="nav-item">
                      <Link
                        href={`/dashboard/${route?.name?.toLocaleLowerCase()}/${
                          user?.id
                        }`}>
                        <a className="nav-link fs-6">{route?.name}</a>
                      </Link>
                    </li>
                  ))}
                </>
              )}
              {user?.role == "admin" && (
                <>
                  {routes?.map((route) => (
                    <li className="nav-item">
                      <Link
                        href={`/dashboard/${route?.name?.toLocaleLowerCase()}/${
                          user?.id
                        }`}>
                        <a className="nav-link fs-6">{route?.name}</a>
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SecondaryHeader;
