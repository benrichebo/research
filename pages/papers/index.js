import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { MdInsertDriveFile } from "react-icons/md";

function Papers() {
  return (
    <>
      <Layout>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div className="col-md-12 col-lg-10 col-xl-9 mx-auto">
                <h6 className="mb-4">CONFERENCES</h6>
                <h1
                  className="display-5 pulse animated"
                  data-bss-disabled-mobile="true">
                  Research Papers&nbsp;
                </h1>
              </div>
            </div>
            <div className="col-md-5 px-0">
              <div>
                <img className="img-fluid" src="/images/conference.jpg" />
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
            <div className="col-md-3">
              <div className="card mb-0 rounded-0">
                <div className="card-body p-md-2 p-xl-3 p-xxl-5">
                  <MdInsertDriveFile className="text-muted mb-2" />
                  <h5 className="card-title">
                    ESG Investment and private real estate returns
                  </h5>
                  <h6 className="text-muted card-subtitle my-3">
                    Publisher: Michael Gates
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-0 rounded-0">
                <div className="card-body p-md-2 p-xl-3 p-xxl-5">
                  <MdInsertDriveFile className="text-muted mb-2" />
                  <h5 className="card-title">
                    ESG Investment and private real estate returns
                  </h5>
                  <h6 className="text-muted card-subtitle my-3">
                    Publisher: Michael Gates
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-0 rounded-0">
                <div className="card-body p-md-2 p-xl-3 p-xxl-5">
                  <MdInsertDriveFile className="text-muted mb-2" />
                  <h5 className="card-title">
                    ESG Investment and private real estate returns
                  </h5>
                  <h6 className="text-muted card-subtitle my-3">
                    Publisher: Michael Gates
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-0 rounded-0">
                <div className="card-body p-md-2 p-xl-3 p-xxl-5">
                  <MdInsertDriveFile className="text-muted mb-2" />
                  <h5 className="card-title">
                    ESG Investment and private real estate returns
                  </h5>
                  <h6 className="text-muted card-subtitle my-3">
                    Publisher: Michael Gates
                  </h6>
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

export default Papers;
