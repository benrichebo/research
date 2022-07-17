import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { useCrud } from "../../hooks/useCrud";
import ConferencesComponent from "../../components/pages/Conferences";

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
          <ConferencesComponent limit={20} />
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default Conferences;
