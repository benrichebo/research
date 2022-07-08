import React from "react";
import Link from "next/link";
import SecondaryLayout from "../components/SecondaryLayout";

function Home() {
  return (
    <>
      <SecondaryLayout>
        <section>
          <div className="intro" data-bss-parallax-bg="true">
            <div className="container h-100">
              <div className="row h-100">
                <div
                  className="col-md-6 text-center text-md-start text-white d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center"
                  style={{ background: "rgba(102,16,242,0.82)" }}>
                  <div style={{ maxWidth: 350 }}>
                    <h1 className="text-uppercase fw-bold">
                      REAL ESTATE RESEARCH INSTITUTE
                    </h1>
                    <h6 className="my-3 fw-normal">
                      Our members have access to reaerch articles that help them
                      to execute for their clients
                    </h6>
                    <Link href="/register">
                      <a
                        className="btn btn-primary btn-lg link-primary bg-white border-white shadow-lg me-2 text-black"
                        role="button">
                        Join as a member
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div style={{ maxWidth: 350 }}>
                <h2 className="text-uppercase fw-bold">
                  We are commited to bringing out the best research
                </h2>
                <h5 className="my-3 fw-light">
                  Tincidunt laoreet leo, adipiscing taciti tempor. Primis
                  senectus sapien, risus donec ad fusce augue interdum.
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-xl-5 m-xl-5">
                <div className="position-relative">
                  <div
                    className="position-absolute bottom-0 p-2"
                    style={{ background: "#6610f2d1" }}>
                    <h4 className="text-white">Research</h4>
                  </div>
                  <img
                    className="rounded img-fluid w-100 fit-cover"
                    style={{ minHeight: 300 }}
                    src="/images/ben-kolde-cpLsWmMEa1Q-unsplash.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container-fluid px-0">
            <div className="border rounded border-0 d-flex flex-column justify-content-center align-items-center about">
              <div className="row g-0">
                <div className="col text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                  <div>
                    <h2 className="text-uppercase fw-bold text-white mb-3">
                      Join our qualified practitioners
                    </h2>
                    <button
                      className="btn btn-light fs-5 py-2 px-4"
                      type="button">
                      Join as a member
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container py-4 py-xl-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Read some</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4">Publications</h3>
              <div className="col-md-9">
                <div className="card mb-4">
                  <div className="card-body">
                    <h6 className="card-title">
                      ESG Investment and private real estate returns
                    </h6>
                    <h6 className="text-muted card-subtitle mb-2">
                      Publisher: Michael Gates
                    </h6>
                    <p className="card-text">
                      International conference on business management and social
                      innovation
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h6 className="card-title">
                      ESG Investment and private real estate returns
                    </h6>
                    <h6 className="text-muted card-subtitle mb-2">
                      Publisher: Michael Gates
                    </h6>
                    <p className="card-text">
                      International conference on business management and social
                      innovation
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h6 className="card-title">
                      ESG Investment and private real estate returns
                    </h6>
                    <h6 className="text-muted card-subtitle mb-2">
                      Publisher: Michael Gates
                    </h6>
                    <p className="card-text">
                      International conference on business management and social
                      innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="mb-4">Articles</h3>
              <div class="d-flex justify-content-start mb-4">
                <div>
                  <img
                    class="img-fluid"
                    width="150"
                    height="150"
                    src="/images/139855119_1100169067091999_8429686186357152647_n.jpg"
                    alt="image"
                  />
                </div>
                <div class="ms-3">
                  <h6>ESG Investment and private real estate returns</h6>
                  <p class="text-muted mb-2">Date: 24th July, 2022</p>
                  <a class="fs-6 text-decoration-none" href="#">
                    Read more...
                  </a>
                </div>
              </div>
              <div class="d-flex justify-content-start mb-4">
                <div>
                  <img
                    class="img-fluid"
                    width="150"
                    height="150"
                    src="/images/139855119_1100169067091999_8429686186357152647_n.jpg"
                    alt="image"
                  />
                </div>
                <div class="ms-3">
                  <h6>ESG Investment and private real estate returns</h6>
                  <p class="text-muted mb-2">Date: 24th July, 2022</p>
                  <a class="fs-6 text-decoration-none" href="#">
                    Read more...
                  </a>
                </div>
              </div>
              <div class="d-flex justify-content-start mb-4">
                <div>
                  <img
                    class="img-fluid"
                    width="150"
                    height="150"
                    src="/images/139855119_1100169067091999_8429686186357152647_n.jpg"
                    alt="image"
                  />
                </div>
                <div class="ms-3">
                  <h6>ESG Investment and private real estate returns</h6>
                  <p class="text-muted mb-2">Date: 24th July, 2022</p>
                  <a class="fs-6 text-decoration-none" href="#">
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecondaryLayout>
    </>
  );
}

export default Home;
