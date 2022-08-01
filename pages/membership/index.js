import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { MdArrowForward, MdInsertDriveFile } from "react-icons/md";
import Link from "next/link";

function Members() {
  return (
    <>
      <Layout>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center pt-3 pb-1 pb-md-3">
              <div className="col-sm-10 col-xl-9">
                <div className="">
                  <p className="mb-2 small">Members</p>
                  <h3
                    className="pulse animated mb-3"
                    data-bss-disabled-mobile="true">
                    Become a Member
                  </h3>
                  <Link href="register">
                    <a
                      data-bss-hover-animate="pulse"
                      className="btn btn-outline-primary rounded-0"
                      href="#">
                      <span className="d-flex align-items-center">
                        <span>Register and join us</span>
                        <MdArrowForward className="ms-3" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <div>
                <img className="img-fluid" src="/images/members.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5 py-5">
          <h4 className="text-primary">What ARP does</h4>
          <article className="mb-4">
            <p class="">
              We ensure ethical research, including opportunities to promote
              integrity in your members' research and the association's
              research. Thus our members' research;-
            </p>
            <ul>
              <li>Alignment with mission and strategy</li>
              <li>Market demand for resources</li>
              <li>Program benefits and liabilities</li>
              <li>Existing resources provided by external sources</li>
              <li>
                Resource requirements (financial and staff resources, expertise,
                information technology)
              </li>
            </ul>
          </article>
          <h4 className="text-primary">What members do</h4>
          <article className="mb-4">
            <p class="">
              As data becomes easier to collect and share, businesses,
              professionals, and consumers count on data-based research to
              inform all kinds of decisions. But how can a research user know
              whether it was performed responsibly and produced reliable
              results? Education is key to good data management, and
              associations are uniquely positioned to support that effort. Many
              associations in the study created resources to address data
              management issues, including guidelines, standards, and
              educational programs that provide direct assistance to members
            </p>
          </article>
          <h4 className="text-primary">Diversity</h4>
          <article className="mb-4">
            <p class="">
              We aim to place it as a central concern to assist in publishing,
              reviewing and quantifying members' performance. Our members
              perform in the multiplicity of many cultures and perspectives. We
              are supported by the exclusive talents and insights of our members
              who work collectively to offer intellectual, integrated
              information and an appropriate platform. We also consider
              multiplicity a core driver for modern business systems and
              research purposes.
            </p>
          </article>
        </div>

        <Footer />
      </Layout>
    </>
  );
}

export default Members;
