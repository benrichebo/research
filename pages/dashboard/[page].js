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
