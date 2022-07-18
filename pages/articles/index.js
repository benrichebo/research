import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import ArticlesComponent from "../../components/pages/Articles";

function Articles() {
  return (
    <>
      <Layout title="Articles">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center pt-3 pb-1 pb-md-3">
              <div className="col-sm-10 col-xl-9">
                <div className="">
                  <p className="mb-2 small">ARTICLES</p>
                  <h3
                    className=" pulse animated"
                    data-bss-disabled-mobile="true">
                    Weekly Articles
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <div>
                <img className="img-fluid" src="/images/articles.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 py-5">
          <ArticlesComponent limit={20} />
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default Articles;
