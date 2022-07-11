import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

function Articles() {
  return (
    <>
      <Layout title="Articles">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div className="col-md-12 col-lg-10 col-xl-9 mx-auto">
                <h6 className="mb-4">ARTICLES</h6>
                <h1
                  className="display-5 pulse animated"
                  data-bss-disabled-mobile="true">
                  Published articles or great authors
                </h1>
              </div>
            </div>
            <div className="col-md-5 px-0">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/images/conference.jpg"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col px-0">
              <div className="card rounded-0 border-0"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card rounded-0">
                <img
                  className="img-fluid card-img-top w-100 d-block w-100"
                  src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                  style={{ objectFit: "scale-down" }}
                />
                <div className="card-body">
                  <div className="p-3">
                    <span className="fs-6 my-3 my-lg-0">ARCHITECTURE</span>
                    <div className="d-lg-flex justify-content-lg-between">
                      <h4 className="my-2">Built environment conference</h4>
                    </div>
                    <span className="fs-6 text-muted my-3 my-lg-0">
                      24th July 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-0">
                <img
                  className="img-fluid card-img-top w-100 d-block w-100"
                  src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                  style={{ objectFit: "scale-down" }}
                />
                <div className="card-body">
                  <div className="p-3">
                    <span className="fs-6 my-3 my-lg-0">ARCHITECTURE</span>
                    <div className="d-lg-flex justify-content-lg-between">
                      <h4 className="my-2">Built environment conference</h4>
                    </div>
                    <span className="fs-6 text-muted my-3 my-lg-0">
                      24th July 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-0">
                <img
                  className="img-fluid card-img-top w-100 d-block w-100"
                  src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                  style={{ objectFit: "scale-down" }}
                />
                <div className="card-body">
                  <div className="p-3">
                    <span className="fs-6 my-3 my-lg-0">ARCHITECTURE</span>
                    <div className="d-lg-flex justify-content-lg-between">
                      <h4 className="my-2">Built environment conference</h4>
                    </div>
                    <span className="fs-6 text-muted my-3 my-lg-0">
                      24th July 2022
                    </span>
                  </div>
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
