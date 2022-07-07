import React from "react";
import { useRouter } from "next/router";
import Home from "../screens/home";
import Layout from "../../components/Layout";
import Aside from "../../components/Aside";
import Orders from "../screens/orders";
import Products from "../screens/products";
import Payments from "../screens/payments";
import Settings from "../screens/settings";
import Canvas from "../../components/Canvas";
import AddProduct from "../screens/add-product";
import Categories from "../screens/categories";
import YourProducts from "../screens/dashboard-products";

const routes = [
  { name: "home", page: <Home /> },
  { name: "orders", page: <Orders /> },
  { name: "products", page: <Products /> },
  { name: "payments", page: <Payments /> },
  { name: "settings", page: <Settings /> },
  { name: "add-your-products", page: <AddProduct /> },
  { name: "your-products", page: <YourProducts /> },
  { name: "add-category", page: <Categories /> },
];

function DashBoard() {
  const router = useRouter();

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <Aside router={router} />
          <div className="col-12 col-lg-10 py-3 mx-auto">
            {routes.map((route) => (
              <>{router?.query.page == route?.name && route?.page}</>
            ))}
          </div>
        </div>
      </div>
      <Canvas router={router} />
    </Layout>
  );
}

export default DashBoard;
