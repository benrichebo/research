import React from "react";
import { MdArrowForward, MdArrowDownward } from "react-icons/md";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticlesComponent from "../components/pages/Articles";
import CarouselConferencesComponent from "../components/pages/CarouselConferences";
import PapersComponent from "../components/pages/Papers";

function Home() {
  return (
    <>
      <Layout>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-11 col-lg-8 col-xl-7 d-flex align-items-center py-3">
              <div className="col-md-12 col-lg-10">
                <p className="mb-2 small">RESEARCH INSTITUTE</p>
                <h3
                  className="display-6 fs-3 pulse animated"
                  data-bss-disabled-mobile="true">
                  Home to research prospect individuals from various
                  backgrounds. Weekly publications and articles
                </h3>
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
        <div className="card bg-primary rounded-0 border-0">
          <img
            className="img-fluid card-img w-100 d-block hero-image"
            src="/images/arlington-research-Kz8nHVg_tGI-unsplash.jpg"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <div className="card-img-overlay container">
            <a
              href="#fields"
              className="d-flex justify-content-start align-items-center mt-2 text-decoration-none">
              <span className="border rounded-circle p-1 p-md-2 border-2 border-dark">
                <MdArrowDownward className="fs-3 text-dark" />
              </span>
              <h6 className="ms-2 mb-0 text-dark">LEARN MORE</h6>
            </a>
          </div>
        </div>

        <section>
          <div className="container px-md-0 py-3 py-md-5">
            <div className="row">
              <div className="col-md-5">
                <h1 className="display-6 fs-3 pulse animated border-top border-3 border-primary w-50 pt-3 heading">
                  About us
                </h1>
              </div>
              <div className="col-md-7 d-flex align-items-center pt-1 pt-lg-3">
                <div className="mt-md-1 mt-lg-2">
                  <p className="fs-5 fw-light pulse animated">
                    Association of researches and planners is US largest
                    Non-profitable professional association registered under
                    India Trust Act(1882) meant for research development and
                    promotion in the field of engineering and technology. ASAR
                    is a paramount body which has brought technical revolution
                    and sustainable development of science and technology. The
                    ASAR-forum constitutes of professional wizards and overseas
                    technical leaders who have left no stones unturned to
                    reinforce the field of science, engineering and technology.
                    The Institute conduct technical conferences, seminars and
                    workshop at different parts of country to reduce the gap
                    between curriculum and their practical implementation among
                    students and research scholars. Today IIERD is one of the
                    leading publisher of research papers in its high quality
                    peer reviewed journals, proceeding and research magazine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container pb-4 pb-xl-5 my-5" id="papers">
          <div className="d-md-flex justify-content-md-between align-items-baseline">
            <h1 className="display-6 fs-3 pulse animated border-top border-3 border-primary w-25 pt-3 heading">
              Papers
            </h1>
            <Link href="/papers">
              <a
                data-bss-hover-animate="pulse"
                className="btn btn-outline-primary rounded-0 h-100 my-3 my-lg-0">
                <span className="d-flex align-items-center">
                  <span>View all papers</span>
                  <MdArrowForward className="ms-3" />
                </span>
              </a>
            </Link>
          </div>
          <div className="py-1 py-lg-3 mt-5">
            <PapersComponent limit={4} />
          </div>
        </div>
        <div className="container mb-5" id="fields">
          <div className="mt-5">
            <a
              data-bss-hover-animate="pulse"
              className="btn btn-outline-primary rounded-0"
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
                      className="fs-4 fw-light text-white-50 mb-2 mb-lg-4"
                      data-bss-hover-animate="pulse">
                      Architecture
                    </li>
                    <li
                      className="fs-4 fw-light text-white-50 mb-2 mb-lg-4"
                      data-bss-hover-animate="pulse">
                      Real Estate
                    </li>
                    <li
                      className="fs-4 fw-light text-white-50 mb-2 mb-lg-4"
                      data-bss-hover-animate="pulse">
                      Interior design
                    </li>
                    <li
                      className="fs-4 fw-light text-white-50 mb-2 mb-lg-4"
                      data-bss-hover-animate="pulse">
                      Surveying
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7 order-first order-sm-first order-md-last d-flex justify-content-center px-0 px-md-3">
                <div
                  className="col-md-8 col-lg-7 col-xl-6"
                  style={{ marginTop: -120 }}>
                  <img
                    className="img-fluid pulse animated"
                    src="/images/annie-spratt-vGgn0xLdy8s-unsplash.jpg"
                  />
                  <h6 className="fw-light text-white-50 swing animated border-top border-3 border-primary pt-3 text-white mt-3 px-3 px-md-0">
                    Members are of different expertise in architecture, real
                    estate, interior design, surveying who contribute to the
                    built environment
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-3 mt-4">
          <div className="container px-md-0 py-1 py-md-3">
            <div className="row py-1 py-lg-3">
              <div className="col-md-5">
                <div className="mb-4">
                  <h1 className="display-6 fs-3 pulse animated border-top border-3 border-primary w-50 pt-3 heading">
                    Upcoming conferences
                  </h1>
                  <Link href="/conferences">
                    <a
                      data-bss-hover-animate="pulse"
                      className="btn btn-outline-primary rounded-0 my-1 mt-lg-3">
                      <span className="d-flex align-items-center">
                        <span>View all conferences</span>
                        <MdArrowForward className="ms-3" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-7 d-flex justify-content-center">
                <CarouselConferencesComponent />
              </div>
            </div>
          </div>
          <div className="container px-md-0 py-1 py-md-3 my-5">
            <div className="d-md-flex justify-content-md-between align-items-baseline">
              <h1 className="display-6 fs-3 pulse animated border-top border-3 border-primary w-25 pt-3 heading">
                Latest Articles
              </h1>
              <Link href="/articles">
                <a
                  data-bss-hover-animate="pulse"
                  className="btn btn-outline-primary rounded-0 h-100 my-3 my-lg-0">
                  <span className="d-flex align-items-center">
                    <span>View all articles</span>
                    <MdArrowForward className="ms-3" />
                  </span>
                </a>
              </Link>
            </div>
            <div className="py-1 py-lg-3 mt-5">
              <ArticlesComponent limit={4} />
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
