import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { useCrud } from "../../hooks/useCrud";
import Spinner from "../../components/ui/Spinner";

function Conferences() {
  const { allData, error, loading } = useCrud(
    "all-conferences",
    "/api/conferences"
  );
  console.log(allData);
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
          <div className="row">
            {loading && (
              <div className="d-flex justify-content-center align-items-center my-5">
                <Spinner />
              </div>
            )}

            {allData?.length > 0 &&
              allData?.slice(0, 20).map((conference) => (
                <div className="col-sm-6 col-md-4 mb-0" key={conference?._id}>
                  <Link href={`/conference/${conference?._id}`}>
                    <a className="card rounded-0 text-decoration-none">
                      <div className="card-body p-2 p-xxl-3">
                        <h6 className="text-primary card-title pb-1">
                          0{allData?.indexOf(conference) + 1}
                        </h6>
                        <h5 className="card-title">{conference?.title}</h5>
                        <h6 className="text-muted card-subtitle my-2">
                          Country: {conference?.country}
                        </h6>
                        <h6 className="text-muted card-subtitle">
                          Date: {conference?.startDate}
                        </h6>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default Conferences;
