import React from "react";
import { useRouter } from "next/router";
import Home from "../routes/home";
import Layout from "../../components/Layout";
import Aside from "../../components/Aside";
import Papers from "../routes/papers";
import Conferences from "../routes/conferences";
import Articles from "../routes/articles";
import Settings from "../routes/settings";
import AddConference from "../routes/add-conference";
import AddPaper from "../routes/add-paper";
import AddArticle from "../routes/add-article";
import Canvas from "../../components/Canvas";
import SecondaryHeader from "../../components/SecondaryHeader";

const routes = [
  { name: "home", page: <Home /> },
  { name: "papers", page: <Papers /> },
  { name: "conferences", page: <Conferences /> },
  { name: "articles", page: <Articles /> },
  { name: "settings", page: <Settings /> },
  { name: "add-conference", page: <AddConference /> },
  { name: "add-paper", page: <AddPaper /> },
  { name: "add-article", page: <AddArticle /> },
];

function DashBoard() {
  const router = useRouter();

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-3 col-lg-2 d-none d-md-block vh-100 bg-primary"
            style={{ position: "sticky", top: 0 }}>
            <Aside router={router} />
          </div>
          <div className="col-md-9 col-lg-10 px-0">
            <SecondaryHeader />
            <div className="px-4">
              {routes.map((route) => (
                <>{router?.query.page == route?.name && route?.page}</>
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
