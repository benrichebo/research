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
        <div class="container">
          <div class="row">
            <div class="col-md-11 col-lg-8 col-xl-7 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div class="col-md-12 col-lg-10 col-xl-9">
                <h6 class="mb-4">RESEARCH INSTITUTE</h6>
                <h1
                  class="display-5 pulse animated"
                  data-bss-disabled-mobile="true">
                  Home to research prospect individuals from various
                  backgrounds. Weekly publications and articles
                </h1>
              </div>
            </div>
            <div class="col-md-4 d-none d-lg-block">
              <div class="w-100 h-100 d-flex justify-content-xl-center align-items-center">
                <ul class="list-unstyled w-50">
                  <li class="fs-3 mb-5">
                    <ul class="list-unstyled d-flex justify-content-between">
                      <li class="text-uppercase fs-5">Papers</li>
                      <li class="text-uppercase fs-5 ms-4">Conferences</li>
                    </ul>
                  </li>
                  <li class="fs-3">
                    <ul class="list-unstyled d-flex justify-content-between">
                      <li class="text-uppercase fs-5">Articles</li>
                      <li class="text-uppercase fs-5 ms-md-4 ms-lg-5">
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
        <div class="container-fluid py-4 py-xl-5">
          <div class="row gy-4 gy-md-0">
            <div class="col px-0">
              <div class="card rounded-0 border-0">
                <img
                  class="img-fluid card-img w-100 d-block"
                  src="/images/arlington-research-Kz8nHVg_tGI-unsplash.jpg"
                  loading="lazy"
                  style={{ objectFit: "cover", height: 600 }}
                />
                <div class="card-img-overlay container">
                  <div class="d-flex justify-content-start align-items-center mt-3">
                    <span class="border rounded-circle p-3 border-2 border-dark">
                      <MdArrowDownward className="fs-3 text-dark" />
                    </span>
                    <h6 class="ms-3 mb-0">LEARN MORE</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div class="container px-md-0 py-3 py-md-5">
            <div class="row">
              <div class="col-md-5">
                <h1 class="display-5 pulse animated border-top border-3 border-primary w-50 pt-5 heading">
                  About us
                </h1>
              </div>
              <div class="col-md-7 d-flex align-items-center pt-3 pt-lg-5">
                <div class="mt-md-3 mt-lg-4">
                  <p class="fs-3 fw-light pulse animated">
                    We are a research real estate agency&nbsp; who are made of
                    professionals from the build environment, specifically,
                    architects, contractors, surveyors, interior designers etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="container-fluid py-4 py-xl-5 mb-5">
          <div class="card-group row my-5">
            <div class="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div class="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 class="text-primary card-title pb-4">01</h6>
                <h5 class="card-title">
                  ESG Investment and private real estate returns
                </h5>
                <h6 class="text-muted card-subtitle my-3">
                  Publisher: Michael Gates
                </h6>
                <p class="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div class="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div class="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 class="text-primary card-title pb-4">02</h6>
                <h5 class="card-title">
                  ESG Investment and private real estate returns
                </h5>
                <h6 class="text-muted card-subtitle my-3">
                  Publisher: Michael Gates
                </h6>
                <p class="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div class="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div class="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 class="text-primary card-title pb-4">03</h6>
                <h5 class="card-title">
                  ESG Investment and private real estate returns
                </h5>
                <h6 class="text-muted card-subtitle my-3">
                  Publisher: Michael Gates
                </h6>
                <p class="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
            <div class="card col-sm-6 col-md-3 mb-0 rounded-0">
              <div class="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 class="text-primary card-title pb-4">04</h6>
                <h5 class="card-title">
                  ESG Investment and private real estate returns
                </h5>
                <h6 class="text-muted card-subtitle my-3">
                  Publisher: Michael Gates
                </h6>
                <p class="card-text d-none d-lg-block">
                  International conference on business management and social
                  innovation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container mb-5">
          <div class="mt-5">
            <a
              data-bss-hover-animate="pulse"
              class="btn btn-outline-primary rounded-0 btn-lg"
              href="#">
              <span class="d-flex align-items-center">
                <span>Various research fileds</span>
                <MdArrowForward className="ms-3" />
              </span>
            </a>
          </div>
        </div>
        <div class="bg-dark">
          <div class="container position-relative mt-5">
            <div class="row pb-5">
              <div class="col-md-5 py-3 py-lg">
                <div>
                  <h6 class="text-white my-4">OUR EXPERTISE</h6>
                  <ul class="list-unstyled">
                    <li
                      class="fs-1 fw-light text-white-50 mb-3"
                      data-bss-hover-animate="pulse">
                      Architecture
                    </li>
                    <li
                      class="fs-1 fw-light text-white-50 mb-3"
                      data-bss-hover-animate="pulse">
                      Real Estate
                    </li>
                    <li
                      class="fs-1 fw-light text-white-50 mb-3"
                      data-bss-hover-animate="pulse">
                      Interior design
                    </li>
                    <li
                      class="fs-1 fw-light text-white-50 mb-3"
                      data-bss-hover-animate="pulse">
                      Surveying
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-7 order-first order-sm-first order-md-last d-flex justify-content-center px-0 px-md-3">
                <div
                  class="col-md-8 col-lg-7 col-xl-6"
                  style={{ marginTop: -150 }}>
                  <img
                    class="img-fluid pulse animated"
                    src="/images/annie-spratt-vGgn0xLdy8s-unsplash.jpg"
                  />
                  <h5 class="fw-light text-white-50 swing animated border-top border-3 border-primary pt-5 text-white mt-5">
                    Members are of different expertise in architecture, real
                    estate, interior design, surveying who contribute to the
                    built environment
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="py-5">
          <div class="container px-md-0 py-3 py-md-5">
            <div class="row py-3 py-lg-5">
              <div class="col-md-5">
                <div class="mb-4">
                  <h1 class="display-5 pulse animated border-top border-3 border-primary w-50 pt-5 heading">
                    Upcoming conferences
                  </h1>
                  <a
                    data-bss-hover-animate="pulse"
                    class="btn btn-outline-primary rounded-0 btn-lg my-3 mt-lg-5"
                    href="#">
                    <span class="d-flex align-items-center">
                      <span>View all conferences</span>
                      <MdArrowForward className="ms-3" />
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-md-7 d-flex justify-content-center">
                <div
                  class="carousel slide col-lg-9"
                  data-bs-ride="carousel"
                  id="carousel-1">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="bg-light">
                        <div class="card bg-light">
                          <img
                            class="img-fluid card-img-top w-100 d-block w-100"
                            src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                          />
                          <div class="p-4">
                            <div class="d-lg-flex justify-content-lg-between">
                              <h5 class="mb-0">Built environment conference</h5>
                              <span class="fs-6 text-muted my-3 my-lg-0">
                                24th July 2022
                              </span>
                            </div>
                            <p class="d-none d-lg-block my-2">Albania</p>
                            <p class="fs-5 d-none d-lg-block mb-4">
                              International conference on business management
                              and social innovation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="bg-light">
                        <div class="card bg-light">
                          <img
                            class="img-fluid card-img-top w-100 d-block w-100"
                            src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                          />
                          <div class="p-4">
                            <div class="d-lg-flex justify-content-lg-between">
                              <h5 class="mb-0">Built environment conference</h5>
                              <span class="fs-6 text-muted my-3 my-lg-0">
                                24th July 2022
                              </span>
                            </div>
                            <p class="d-none d-lg-block my-2">Albania</p>
                            <p class="fs-5 d-none d-lg-block mb-4">
                              International conference on business management
                              and social innovation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="bg-light">
                        <div class="card bg-light">
                          <img
                            class="img-fluid card-img-top w-100 d-block w-100"
                            src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                          />
                          <div class="p-4">
                            <div class="d-lg-flex justify-content-lg-between">
                              <h5 class="mb-0">Built environment conference</h5>
                              <span class="fs-6 text-muted my-3 my-lg-0">
                                24th July 2022
                              </span>
                            </div>
                            <p class="d-none d-lg-block my-2">Albania</p>
                            <p class="fs-5 d-none d-lg-block mb-4">
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
                      class="carousel-control-prev"
                      href="#carousel-1"
                      role="button"
                      data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                      <span class="visually-hidden">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carousel-1"
                      role="button"
                      data-bs-slide="next">
                      <span class="carousel-control-next-icon"></span>
                      <span class="visually-hidden">Next</span>
                    </a>
                  </div>
                  <ol class="carousel-indicators">
                    <li
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="0"
                      class="active"></li>
                    <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="container px-md-0 py-3 py-md-5">
            <div class="d-md-flex justify-content-md-between align-items-baseline">
              <h1 class="display-5 pulse animated border-top border-3 border-primary w-25 pt-5 heading">
                Latest Articles
              </h1>
              <a
                data-bss-hover-animate="pulse"
                class="btn btn-outline-primary rounded-0 btn-lg h-100 my-3 my-lg-0"
                href="#">
                <span class="d-flex align-items-center">
                  <span>View all articles</span>
                  <MdArrowForward className="ms-3" />
                </span>
              </a>
            </div>
            <div class="row py-3 py-lg-5">
              <div class="col-md-6">
                <div class="bg-light">
                  <div>
                    <img
                      class="img-fluid w-100"
                      src="/images/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg"
                      style={{ objectFit: "scale-down" }}
                    />
                  </div>
                  <div class="p-4 p-lg-5">
                    <span class="fs-6 my-3 my-lg-0">ARCHITECTURE</span>
                    <div class="d-lg-flex justify-content-lg-between">
                      <h4 class="my-2">Built environment conference</h4>
                    </div>
                    <span class="fs-6 text-muted my-3 my-lg-0">
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
