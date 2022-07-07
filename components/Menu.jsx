import React from "react";
import Link from "next/link";
import {
  MdDashboard,
  MdReceiptLong,
  MdShoppingBag,
  MdPayments,
  MdPerson,
  MdViewList,
} from "react-icons/md";

const routes = [
  { name: "home", icon: <MdDashboard className="fs-2" /> },
  { name: "orders", icon: <MdShoppingBag className="fs-2" /> },
  { name: "products", icon: <MdViewList className="fs-2" /> },
  { name: "your-products", icon: <MdReceiptLong className="fs-2" /> },
  { name: "payments", icon: <MdPayments className="fs-2" /> },
  { name: "settings", icon: <MdPerson className="fs-2" /> },
];

const Menu = ({ router }) => {
  return (
    <div className="mb-4 mt-2">
      {routes.map((route) => (
        <>
        <div
          key={route.name}
          data-bs-dismiss="offcanvas"
          className={`d-lg-none d-flex justify-content-center align-items-center p-4 ${
            router?.query?.page?.includes(route.name) && "bg-light"
          }`}>
          <Link href={`/dashboard/${route?.name}`}>
            <a className={router?.query.page != route.name && "text-black"}>
              {route.icon}
            </a>
          </Link>
        </div>
        <div
          key={route.name}
          className={`d-none d-lg-block d-flex justify-content-center align-items-center p-4 ${
            router?.query.page == route.name && "bg-light"
          }`}>
          <Link href={`/dashboard/${route?.name}`}>
            <a className={router?.query.page != route.name && "text-black"}>
              {route.icon}
            </a>
          </Link>
        </div>
        </>
      ))}
    </div>
  );
};

export default Menu;
