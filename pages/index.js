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
        <div className="container py-3">
          <div className="row">
            <div className="col-md-11 col-lg-8 col-xl-7 d-flex align-items-center py-3">
              <div className="col-md-12 col-lg-10">
                <p className="mb-2 small">RESEARCH INSTITUTE</p>
                <h3 className="pulse animated" data-bss-disabled-mobile="true">
                  Home to research prospect individuals from various
                  backgrounds. Weekly publications and articles
                </h3>
              </div>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <div className="w-100 h-100 d-flex justify-content-xl-center align-items-center">
                <ul className="list-unstyled w-50">
                  <li className=" mb-5">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li className="text-uppercase h6 mb-0">Papers</li>
                      <li className="text-uppercase ms-4 h6 mb-0">
                        Conferences
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li className="text-uppercase h6 mb-0">Articles</li>
                      <li className="text-uppercase ms-md-4 ms-lg-5 h6 mb-0">
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
              <span className="border rounded-circle p-1 px-2 border-2 border-dark">
                <MdArrowDownward className=" text-dark" />
              </span>
              <h6 className="ms-2 mb-0 text-dark">LEARN MORE</h6>
            </a>
          </div>
        </div>

        <section>
          <div className="container px-md-0 py-3 py-md-5">
            <div className="row">
              <div className="col-md-5">
                <h3 className=" pulse animated border-top border-3 border-primary w-50 pt-3 heading">
                  About us
                </h3>
              </div>
              <div className="col-md-7 d-flex align-items-center pt-1 pt-lg-3">
                <div className="mt-md-1 mt-lg-2">
                  <p className="pulse animated">
                    The Association for Researcher & Planners exists to nurture
                    a community of researchers interested in advancing knowledge
                    and teachable skills in matters relating to Health,
                    Engineering and Information Communication Technologies. We
                    provide the platform and singular voice of direction to
                    enthusiastic intellectuals willing to change the world
                    through research and findings. The association is strictly
                    member-based, and each member focuses on original research
                    and journal publications in our professional disciplines.
                    Our yearly mega-meetings assemble hundreds of academics,
                    researchers, graduates, students, industrial researchers and
                    heads of organizations. Our conferences aim to facilitate
                    inter-disciplinary research among participants and scholars
                    and direct research energies with and in collaboration with
                    Standards, Best practices of macrocosmic research globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container pb-4 pb-xl-5 my-5" id="papers">
          <div className="d-md-flex justify-content-md-between align-items-baseline">
            <h3 className=" pulse animated border-top border-3 border-primary w-25 pt-3 heading">
              Papers
            </h3>
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
        <div className="bg-primary">
          <div className="container position-relative mt-5">
            <div className="row pb-5">
              <div className="col-md-7 py-3 py-lg px-lg-3">
                <div>
                  <h6 className="my-4 fw-bold">OUR GOALS AND ASSURANCE</h6>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <p className="fw-bold mb-0">Skills and development</p>
                      <p>We commit to research and skills development</p>
                    </div>
                    <div className="col-md-6 mb-2">
                      <p className="fw-bold mb-0">Market analyses</p>
                      <p>
                        We commit to engaging in market analysis and early-stage
                        commercialization of innovative ideas.
                      </p>
                    </div>
                    <div className="col-md-6 mb-2">
                      <p className="fw-bold mb-0">Research partners</p>
                      <p>
                        We commit to bringing together research scientists and
                        industry partners on projects with commercial potential
                        to enhance livelihood
                      </p>
                    </div>
                    <div className="col-md-6 mb-2">
                      <p className="fw-bold mb-0">Improve businesses</p>
                      <p>
                        We seek to improve business and industrial performance
                        and reliability and develop whole-life strategies,
                        including recycling and reuse.
                      </p>
                    </div>
                    <div className="col-md-6 mb-2">
                      <p className="fw-bold mb-0">Conferences</p>
                      <p>
                        Every quarter, we select a minimum of five (5) committed
                        members from African countries to represent the
                        association in European scientific conferences to help
                        them grow and better develop their careers in research
                        while expanding their network of comrades
                      </p>
                    </div>
                    <div className="col-md-6 mb-2">
                      <p className="fw-bold mb-0">Career growth</p>
                      <p>
                        We recommend our members for various career improvement
                        endeavors, e.g. research jobs, travels, and innovative
                        business investments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 order-first order-sm-first order-md-last d-flex justify-content-start px-0 px-md-3">
                <div className="col-md-9" style={{ marginTop: -120 }}>
                  <img
                    className="img-fluid pulse animated"
                    src="/images/annie-spratt-vGgn0xLdy8s-unsplash.jpg"
                  />
                  <h6 className="swing animated border-top border-3 border-primary pt-3 mt-3 px-3 px-md-0">
                    Our members perform in the multiplicity of many cultures and
                    perspectives. We are supported by the exclusive talents and
                    insights of our members who work collectively to offer
                    intellectual, integrated information and an appropriate
                    platform.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-3 mt-4">
          <div className="container px-md-0 py-1 py-md-3">
            <div className="row py-1 py-lg-3">
              <div className="col-md-6">
                <div className="mb-4">
                  <h3 className="pulse animated border-top border-3 border-primary w-50 pt-3 heading">
                    Upcoming conferences
                  </h3>
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
              <div className="col-md-6 d-flex justify-content-center">
                <CarouselConferencesComponent />
              </div>
            </div>
          </div>
          <div className="container px-md-0 py-1 py-md-3 my-5">
            <div className="d-md-flex justify-content-md-between align-items-baseline">
              <h3 className=" pulse animated border-top border-3 border-primary w-25 pt-3 heading">
                Latest Articles
              </h3>
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
