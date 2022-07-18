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
          <h4 className="text-primary">Who we are</h4>
          <article className="mb-4">
            <p class="">
              Association For Scientific And Academic Research (ASAR) its South
              Asia largest professional association registered under Indian
              Trust Act (1882) meet for research development and promotion in
              the field of engineering and technology. The organisation welcomes
              applications and professional cv's to be a part and members in its
              committees,boardand professional societies . ASAR membership
              offers access to technical innovations, cutting edge information
              networking opportunities and exclusive membership benefits. Our
              members supports ASAR to bring a revolution in research and
              innovation in field of engineering and technology. Members have
              left no stones unturned to build a platform for academic
              achievement and research development of our students. ASAR members
              are engaged in various research development activities and are
              playing a pioneer role to review the research papers and to make
              the technical events and conference successful.
            </p>
          </article>
          <h4 className="text-primary">What members do</h4>
          <article className="mb-4">
            <p class="">
              ASAR members are playing a active role by being in the organizing
              committee of its conferences and events. The professionals having
              ASAR professional membership have extended full support to the
              organization by being a activist in the organising committees of
              our international conferences. ASAR consist of an international
              advisory board to render best support and guidance to make it an
              successful and established organisation.
            </p>
          </article>
        </div>

        <Footer />
      </Layout>
    </>
  );
}

export default Members;
