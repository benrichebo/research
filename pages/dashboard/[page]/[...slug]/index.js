import React from "react";
import { useRouter } from "next/router";
import Home from "../../../dashboard-routes/home";
import Layout from "../../../../components/Layout";
import Aside from "../../../../components/Aside";
import Papers from "../../../dashboard-routes/papers";
import Conferences from "../../../dashboard-routes/conferences";
import Articles from "../../../dashboard-routes/articles";
import Settings from "../../../dashboard-routes/settings";
import AddConference from "../../../dashboard-routes/add-conference";
import AddPaper from "../../../dashboard-routes/add-paper";
import AddArticle from "../../../dashboard-routes/add-article";
import EditArticle from "../../../dashboard-routes/edit-article";
import Canvas from "../../../../components/Canvas";
import SecondaryHeader from "../../../../components/SecondaryHeader";
import Members from "../../../dashboard-routes/members";
import { useUser } from "../../../../hooks/useUser";
import EditConference from "../../../dashboard-routes/edit-conference";
import EditPaper from "../../../dashboard-routes/edit-paper";
import Media from "../../../dashboard-routes/media";
import Categories from "../../../dashboard-routes/categories";
import Admins from "../../../dashboard-routes/admins";
import Link from "next/link";

const routes = [
  { name: "home", page: <Home /> },
  { name: "papers", page: <Papers /> },
  { name: "conferences", page: <Conferences /> },
  { name: "categories", page: <Categories /> },
  { name: "articles", page: <Articles /> },
  { name: "settings", page: <Settings /> },
  { name: "members", page: <Members /> },
  { name: "admins", page: <Admins /> },
  { name: "add-conference", page: <AddConference /> },
  { name: "edit-conference", page: <EditConference /> },
  { name: "add-paper", page: <AddPaper /> },
  { name: "edit-paper", page: <EditPaper /> },
  { name: "add-article", page: <AddArticle /> },
  { name: "edit-article", page: <EditArticle /> },
  { name: "media", page: <Media /> },
];

function DashBoard() {
  const router = useRouter();
  const { userData, user } = useUser("user");

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          {!userData?.verified && (
            <div className="bg-warning container-md py-2 d-md-flex justify-content-start">
              <p className="mb-1 mb-md-0">
                You haven't made the membership payment
              </p>
              <Link href="/make-payment">
                <a className="btn btn-primary btn-sm ms-md-4 bg-opacity-50">
                  make payment
                </a>
              </Link>
            </div>
          )}
          <div
            className="col-md-3 col-lg-2 d-none d-md-block vh-100 bg-dark "
            style={{ position: "sticky", top: 0 }}>
            <div className="text-white-50 my-3 ms-lg-3">
              <h6>{userData?.name}</h6>
              <h6>Role: {userData?.role}</h6>
            </div>
            <Aside router={router} user={userData} signOut={user?.signOut} />
          </div>
          <div className="col-md-9 col-lg-10 px-0">
            <SecondaryHeader user={userData} signOut={user?.signOut} />

            <div className="px-4 mt-3">
              {routes.map((route) => (
                <div key={route?.name}>
                  {router?.query.page == route?.name && route?.page}
                </div>
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
