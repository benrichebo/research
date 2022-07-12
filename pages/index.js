import React from "react";
import { MdArrowForward, MdArrowDownward } from "react-icons/md";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Layout>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-11 col-lg-8 col-xl-7 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div className="col-md-12 col-lg-10">
                <p className="mb-4 fs-6">RESEARCH INSTITUTE</p>
                <h1
                  className="display-6 pulse animated"
                  data-bss-disabled-mobile="true">
                  Home to research prospect individuals from various
                  backgrounds. Weekly publications and articles
                </h1>
              </div>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <div className="w-100 h-100 d-flex justify-content-xl-center align-items-center">
                <ul className="list-unstyled w-50">
                  <li className="fs-3 mb-5">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li className="text-uppercase fs-6">Papers</li>
                      <li className="text-uppercase fs-6 ms-4">Conferences</li>
                    </ul>
                  </li>
                  <li className="fs-3">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li className="text-uppercase fs-6">Articles</li>
                      <li className="text-uppercase fs-6 ms-md-4 ms-lg-5">
                        Members
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="card bg-primary rounded-0 border-0">
          <img
            className="img-fluid card-img w-100 d-block"
            src="/images/arlington-research-Kz8nHVg_tGI-unsplash.jpg"
            loading="lazy"
          />
          <div class="card-img-overlay container">
            <a
              type="button"
              className="d-flex justify-content-start align-items-center mt-3 text-decoration-none">
              <span className="border rounded-circle p-2 p-md-3 border-2 border-dark">
                <MdArrowDownward className="fs-3 text-dark" />
              </span>
              <h6 className="ms-3 mb-0 text-dark">LEARN MORE</h6>
            </a>
          </div>
        </div>
      
        <section>
          <div className="container px-md-0 py-3 py-md-5">
            <div className="row">
              <div className="col-md-5">
                <h1 className="display-6 pulse animated border-top border-3 border-primary w-50 pt-5 heading">
                  About us
                </h1>
              </div>
              <div className="col-md-7 d-flex align-items-center pt-3 pt-lg-5">
                <div className="mt-md-3 mt-lg-4">
                  <p className="fs-5 fw-light pulse animated">
                    We are a research real estate agency&nbsp; who are made of
                    professionals from the build environment, specifically,
                    architects, contractors, surveyors, interior designers etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid py-4 py-xl-5 mb-5">
          <div className="card-group row my-5">
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div className="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 className="text-primary pb-4">01</h6>
                <h6 className="">
                  ESG Investment and private real estate returns
                </h6>
                <h6 className="text-muted my-3">
                  Publisher: Michael Gates
                </h6>
                <p className="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div className="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 className="text-primary pb-3">02</h6>
                <h6 className="">
                  ESG Investment and private real estate returns
                </h6>
                <h6 className="text-muted my-3">
                  Publisher: Michael Gates
                </h6>
                <p className="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div className="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 className="text-primary card-title pb-3">03</h6>
                <h6 className="card-title">
                  ESG Investment and private real estate returns
                </h6>
                <h6 className="text-muted my-3">
                  Publisher: Michael Gates
                </h6>
                <p className="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div className="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div className="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 className="text-primary card-title pb-4">04</h6>
                <h6 className="card-title">
                  ESG Investment and private real estate returns
                </h6>
                <h6 className="text-muted my-3">
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
        <div className="container mb-5">
          <div className="mt-5">
            <a
              data-bss-hover-animate="pulse"
              className="btn btn-outline-primary rounded-0 btn-lg"
              href="#">
              <span className="d-flex align-items-center">
                <span>Various research fields</span>
                <MdArrowForward className="ms-3" />
              </span>
            </a>
          </div>
        </div>
        <div className="bg-dark">
          <div className="container position-relative mt-5">
            <div className="row pb-5">
              <div className="col-md-5 py-3 py-lg">
                <div>
                  <h6 className="text-white my-4">OUR EXPERTISE</h6>
                  <ul className="list-unstyled">
                    <li
                      className="fs-2 fw-light text-white-50 mb-3"
                      data-bss-hover-animate="pulse">
                      Architecture
                    </li>
                    <li
                      className="fs-2 fw-light text-white-50 mb-3"
                      data-bss-hover-animate="pulse">
                      Real Estate
                    </li>
                    <li
                      className="fs-2 fw-light text-white-50 mb-3"
                      data-bss-hover-animate="pulse">
                      Interior design
                    </li>
                    <li
                      className="fs-2 fw-light text-white-50 mb-3"
                      data-bss-hover-animate="pulse">
                      Surveying
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7 order-first order-sm-first order-md-last d-flex justify-content-center px-0 px-md-3">
                <div
                  className="col-md-8 col-lg-7 col-xl-6"
                  style={{ marginTop: -150 }}>
                  <img
                    className="img-fluid pulse animated"
                    src="/images/annie-spratt-vGgn0xLdy8s-unsplash.jpg"
                  />
                  <h5 className="fw-light text-white-50 swing animated border-top border-3 border-primary pt-5 text-white mt-5 px-3 px-md-0">
                    Members are of different expertise in architecture, real
                    estate, interior design, surveying who contribute to the
                    built environment
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-5">
          <div className="container px-md-0 py-3 py-md-5">
            <div className="row py-3 py-lg-5">
              <div className="col-md-5">
                <div className="mb-4">
                  <h1 className="display-6 pulse animated border-top border-3 border-primary w-50 pt-5 heading">
                    Upcoming conferences
                  </h1>
                  <a
                    data-bss-hover-animate="pulse"
                    className="btn btn-outline-primary rounded-0 btn-lg my-3 mt-lg-5"
                    href="#">
                    <span className="d-flex align-items-center">
                      <span>View all conferences</span>
                      <MdArrowForward className="ms-3" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-7 d-flex justify-content-center">
                <div
                  className="carousel slide col-lg-9"
                  data-bs-ride="carousel"
                  id="carousel-1">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="bg-light">
                        <div className="card bg-light border-0 rounded-0">
                          <img
                            className="img-fluid card-img-top w-100 d-block w-100"
                            src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                          />
                          <div className="p-4">
                            <div className="d-lg-flex justify-content-lg-between">
                              <h5 className="mb-0">
                                Built environment conference
                              </h5>
                              <span className="fs-6 text-muted my-3 my-lg-0">
                                24th July 2022
                              </span>
                            </div>
                            <p className="d-none d-lg-block my-2">Albania</p>
                            <p className="fs-6 d-none d-lg-block mb-4">
                              International conference on business management
                              and social innovation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="bg-light">
                        <div className="card bg-light  border-0 rounded-0">
                          <img
                            className="img-fluid card-img-top w-100 d-block w-100"
                            src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                          />
                          <div className="p-4">
                            <div className="d-lg-flex justify-content-lg-between">
                              <h5 className="mb-0">
                                Built environment conference
                              </h5>
                              <span className="fs-6 text-muted my-3 my-lg-0">
                                24th July 2022
                              </span>
                            </div>
                            <p className="d-none d-lg-block my-2">Albania</p>
                            <p className="fs-6 d-none d-lg-block mb-4">
                              International conference on business management
                              and social innovation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="bg-light">
                        <div className="card bg-light border-0 rounded-0">
                          <img
                            className="img-fluid card-img-top w-100 d-block w-100"
                            src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                          />
                          <div className="p-4">
                            <div className="d-lg-flex justify-content-lg-between">
                              <h5 className="mb-0">
                                Built environment conference
                              </h5>
                              <span className="fs-6 text-muted my-3 my-lg-0">
                                24th July 2022
                              </span>
                            </div>
                            <p className="d-none d-lg-block my-2">Albania</p>
                            <p className="fs-6 d-none d-lg-block mb-4">
                              International conference on business management
                              and social innovation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      className="carousel-control-prev"
                      href="#carousel-1"
                      role="button"
                      data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carousel-1"
                      role="button"
                      data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                  <ol className="carousel-indicators">
                    <li
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="0"
                      className="active"></li>
                    <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-md-0 py-3 py-md-5">
            <div className="d-md-flex justify-content-md-between align-items-baseline">
              <h1 className="display-6 pulse animated border-top border-3 border-primary w-25 pt-5 heading">
                Latest Articles
              </h1>
              <a
                data-bss-hover-animate="pulse"
                className="btn btn-outline-primary rounded-0 btn-lg h-100 my-3 my-lg-0"
                href="#">
                <span className="d-flex align-items-center">
                  <span>View all articles</span>
                  <MdArrowForward className="ms-3" />
                </span>
              </a>
            </div>
            <div className="row py-3 py-lg-5">
              <div className="col-md-6">
                <div className="bg-light">
                  <div>
                    <img
                      className="img-fluid w-100"
                      src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                      style={{ objectFit: "scale-down" }}
                    />
                  </div>
                  <div className="p-4 p-lg-5">
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
        </section>
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
