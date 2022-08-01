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
  { name: "Home", icon: <MdDashboard className="" /> },
  { name: "Papers", icon: <MdPictureAsPdf className="" /> },
  { name: "Articles", icon: <MdLibraryBooks className="" /> },
  { name: "Conferences", icon: <MdReceiptLong className="" /> },
  { name: "Members", icon: <MdPayments className="" /> },
  { name: "Settings", icon: <MdPerson className="" /> },
  { name: "Media", icon: <MdOutlinePermMedia className="" /> },
];

const memberRoutes = [
  { name: "Home", icon: <MdDashboard className="" /> },
  { name: "Papers", icon: <MdPictureAsPdf className="" /> },
  { name: "Members", icon: <MdPayments className="" /> },
  { name: "Settings", icon: <MdPerson className="" /> },
];

function SecondaryHeader({ user, signOut }) {
  return (
    <>
      <nav className="navbar navbar-light bg-white py-2 border-bottom">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand " href="#">
              <img
                src="/images/logo.jpeg"
                width={100}
                alt="logo"
                className="img-fluid"
              />
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
                    <li className="nav-item" key={route.name}>
                      <Link
                        href={`/dashboard/${route?.name?.toLocaleLowerCase()}/${
                          user?.id
                        }`}>
                        <a className="nav-link ">{route?.name}</a>
                      </Link>
                    </li>
                  ))}
                </>
              )}
              {user?.role == "admin" && (
                <>
                  {routes?.map((route) => (
                    <li className="nav-item" key={route.name}>
                      <Link
                        href={`/dashboard/${route?.name?.toLocaleLowerCase()}/${
                          user?.id
                        }`}>
                        <a className="nav-link ">{route?.name}</a>
                      </Link>
                    </li>
                  ))}
                </>
              )}
              <li className="nav-item">
                <a className="nav-link" type="button" onClick={signOut}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {!user?.verified && (
        <div className="d-md-flex justify-content-md-center align-items-md--center bg-light px-4 py-1">
          <div>
            <p className="small mb-0">You haven't payed the membership fee</p>
          </div>
          <div>
            <Link href={`/make-payment`}>
              <a className="text-decoration-none small ms-md-2">Make payment</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default SecondaryHeader;
