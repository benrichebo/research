import React from "react";
import Link from "next/link";
import {
  MdDashboard,
  MdReceiptLong,
  MdLibraryBooks,
  MdPerson,
  MdPictureAsPdf,
  MdPayments
} from "react-icons/md";

const routes = [
  { name: "Home", icon: <MdDashboard className="fs-5" /> },
  { name: "Papers", icon: <MdPictureAsPdf className="fs-5" /> },
  { name: "Articles", icon: <MdLibraryBooks className="fs-5" /> },
  { name: "Conferences", icon: <MdReceiptLong className="fs-5" /> },
  { name: "Payments", icon: <MdPayments className="fs-5" /> },
  { name: "Settings", icon: <MdPerson className="fs-5" /> },
];

const Aside = ({ router }) => {
  return (
    <>
      <h1></h1>
      <div className="d-flex align-items-center ms-lg-3 h-75">
        <ul className="list-unstyled">
          {routes?.map((route) => (
            <li className="fs-6 mb-4" key={route.name}>
              <Link href={`/dashboard/${route?.name?.toLocaleLowerCase()}`}>
                <a
                  className={`text-white text-decoration-none d-flex justify-content-start align-items-center ${
                    router?.query?.page == route.name.toLocaleLowerCase() && "fw-bold"
                  }`}
                  href="#">
                  {route?.icon}
                  <span className="ms-3">
                    {route?.name}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Aside;
