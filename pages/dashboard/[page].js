import React from "react";
import { useRouter } from "next/router";
import Home from "../dashboard-routes/home";
import Layout from "../../components/Layout";
import Aside from "../../components/Aside";
import Papers from "../dashboard-routes/papers";
import Conferences from "../dashboard-routes/conferences";
import Articles from "../dashboard-routes/articles";
import Settings from "../dashboard-routes/settings";
import AddConference from "../dashboard-routes/add-conference";
import AddPaper from "../dashboard-routes/add-paper";
import AddArticle from "../dashboard-routes/add-article";
import EditArticle from "../dashboard-routes/edit-article";
import Canvas from "../../components/Canvas";
import SecondaryHeader from "../../components/SecondaryHeader";
import Payments from "../dashboard-routes/payments";
import { useUser } from "../../hooks/useUser";
import EditConference from "../dashboard-routes/edit-conference";

const routes = [
  { name: "home", page: <Home /> },
  { name: "papers", page: <Papers /> },
  { name: "conferences", page: <Conferences /> },
  { name: "articles", page: <Articles /> },
  { name: "settings", page: <Settings /> },
  { name: "payments", page: <Payments /> },
  { name: "add-conference", page: <AddConference /> },
  { name: "edit-conference", page: <EditConference /> },
  { name: "add-paper", page: <AddPaper /> },
  { name: "add-article", page: <AddArticle /> },
  { name: "edit-article", page: <EditArticle /> },
];

function DashBoard() {
  const router = useRouter();
  const { userData, user } = useUser("user");
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-3 col-lg-2 d-none d-md-block vh-100 bg-dark "
            style={{ position: "sticky", top: 0 }}>
            <div className="text-white-50 my-3 ms-lg-3">
              <h6>{userData?.name}</h6>
              <h6>{userData?.role}</h6>
            </div>
            <Aside router={router} user={userData} signOut={user?.signOut} />
          </div>
          <div className="col-md-9 col-lg-10 px-0">
            <SecondaryHeader />
            <div className="px-4">
              {routes.map((route) => (
                <div key={route?.name}>{router?.query.page == route?.name && route?.page}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Canvas router={router} />
    </Layout>
  );
}

export default DashBoard;
