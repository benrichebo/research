import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

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
                    className="display-6 fs-3 pulse animated"
                    data-bss-disabled-mobile="true">
                    Articles
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
          <div className="row">
            <div className="col-6 col-md-4 mb-3">
              <div className="">
                <img
                  className="img-fluid card-img-top w-100 d-block w-100"
                  src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                  style={{ objectFit: "scale-down" }}
                />

                <div className="my-3">
                  <span className="my-3 small">ARCHITECTURE</span>
                  <div className="d-lg-flex justify-content-lg-between">
                    <h5 className="my-2">Built environment conference</h5>
                  </div>
                  <span className="text-muted my-3 my-lg-0 small">
                    24th July 2022
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3">
              <div className="">
                <img
                  className="img-fluid card-img-top w-100 d-block w-100"
                  src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                  style={{ objectFit: "scale-down" }}
                />

                <div className="my-3">
                  <span className="my-3 small">ARCHITECTURE</span>
                  <div className="d-lg-flex justify-content-lg-between">
                    <h5 className="my-2">Built environment conference</h5>
                  </div>
                  <span className="text-muted my-3 my-lg-0 small">
                    24th July 2022
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3">
              <div className="">
                <img
                  className="img-fluid card-img-top w-100 d-block w-100"
                  src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                  style={{ objectFit: "scale-down" }}
                />

                <div className="my-3">
                  <span className="my-3 small">ARCHITECTURE</span>
                  <div className="d-lg-flex justify-content-lg-between">
                    <h5 className="my-2">Built environment conference</h5>
                  </div>
                  <span className="text-muted my-3 my-lg-0 small">
                    24th July 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default Articles;
