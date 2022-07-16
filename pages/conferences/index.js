import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

function Conferences() {
  return (
    <>
      <Layout title="Conferences">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center pt-3 pb-1 pb-md-3">
              <div className="col-sm-10 col-xl-9">
                <div className="">
                  <p className="mb-2 small">CONFERENCES</p>
                  <h1 className="display-6 fs-3 pulse animated">
                    Monthly and yearly conferences organized for our members
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <div>
                <img className="img-fluid" src="/images/conference.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 py-5">
          <div className="card-group row">
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div className="card-body p-md-1 p-xl-2 p-xxl-3">
                <h6 className="text-primary card-title pb-2">01</h6>
                <h5 className="card-title">
                  ESG Investment and private real estate returns
                </h5>
                <h6 className="text-muted card-subtitle my-2 small">
                  Publisher: Michael Gates
                </h6>
                <p className="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div className="card-body p-md-1 p-xl-2 p-xxl-3">
                <h6 className="text-primary card-title pb-2">02</h6>
                <h5 className="card-title">
                  ESG Investment and private real estate returns
                </h5>
                <h6 className="text-muted card-subtitle my-2 small">
                  Publisher: Michael Gates
                </h6>
                <p className="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div className="card-body p-md-1 p-xl-2 p-xxl-3">
                <h6 className="text-primary card-title pb-2">03</h6>
                <h5 className="card-title">
                  ESG Investment and private real estate returns
                </h5>
                <h6 className="text-muted card-subtitle my-2 small">
                  Publisher: Michael Gates
                </h6>
                <p className="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div className="card-body p-md-1 p-xl-2 p-xxl-3">
                <h6 className="text-primary card-title pb-2">04</h6>
                <h5 className="card-title">
                  ESG Investment and private real estate returns
                </h5>
                <h6 className="text-muted card-subtitle my-2 small">
                  Publisher: Michael Gates
                </h6>
                <p className="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default Conferences;
