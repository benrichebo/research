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
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center pt-3 pb-1 pb-md-3">
              <div className="col-sm-10 col-xl-9">
                <div className="">
                  <p className="mb-2 small">PAPERS</p>
                  <h3
                    className="display-6 fs-3 pulse animated"
                    data-bss-disabled-mobile="true">
                    Research Papers&nbsp;
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <div>
                <img className="img-fluid" src="/images/papers.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="row gy-4 gy-md-0">
            <div className="col px-0">
              <div className="card rounded-0 border-0"></div>
            </div>
          </div>
        </div>
        <div className="container mb-5 pb-5">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card mb-0 rounded-0">
                <div className="card-body p-md-2 p-xl-1 p-xxl-3">
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
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card mb-0 rounded-0">
                <div className="card-body p-md-2 p-xl-1 p-xxl-3">
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
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card mb-0 rounded-0">
                <div className="card-body p-md-2 p-xl-1 p-xxl-3">
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
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card mb-0 rounded-0">
                <div className="card-body p-md-2 p-xl-1 p-xxl-3">
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
        <div className="container mb-5 pb-5">
          <h4 className="text-primary"> White Papers and Reports </h4>
          <article className="mb-4">
            <p class="lead fs-5">
              Email Print Cite Share This Page A number of white papers,
              position statements, reports from ACRL and ALA units, and the like
              have been produced over the years and published online. Below is a
              list of these items, which will continue to grow to reflect the
              work of the association and its members. Official ACRL Guidelines,
              Standards, and Frameworks can be found in the Guidelines,
              Standards, and Frameworks area of this site.
            </p>
          </article>
          <h4 className="text-primary">Intellectual Freedom</h4>
          <article className="mb-4">
            <p class="lead fs-5">
              Intellectual Freedom Principles for Academic Libraries: An
              Interpretation of the Library Bill of Rights (June 1999) This
              statement was created to provide an interpretation of general
              intellectual freedom principles in an academic library setting
              and, in the process, raise consciousness of the intellectual
              freedom context within which academic librarians work.
            </p>
          </article>
          <h4 className="text-primary">
            Scholarly Communication and Copyright
          </h4>
          <article className="mb-4">
            <p class="lead fs-5">
              Open and Equitable Scholarly Communications: Creating a More
              Inclusive Future (June 2019) On June 12, 2019, ACRL released “Open
              and Equitable Scholarly Communications: Creating a More Inclusive
              Future.” Developed over the course of a year with leadership from
              the Research and Scholarly Environment Committee (ReSEC) and with
              a high degree of community involvement, this powerful new
              action-oriented research agenda encourages the community to make
              the scholarly communications system more open, inclusive, and
              equitable by outlining trends, encouraging practical actions, and
              clearly identifying the most strategic research questions to
              pursue. This report is an important contribution to ACRL’s core
              commitment to equity, diversity and inclusion which includes
              valuing different ways of knowing and identifying and working to
              eliminate barriers to equitable services, spaces, resources, and
              scholarship. The full research agenda is freely available on the
              ACRL website as a PDF and for purchase in print in the ALA store.
              Learn more in an American Libraries feature, Choice Authority File
              podcast, or Scholarly Kitchen blog post. Watch the recording of a
              free ACRLPresents Webcast from Monday, July 15, 2019.
            </p>
          </article>
        </div>

        <Footer />
      </Layout>
    </>
  );
}

export default Papers;
