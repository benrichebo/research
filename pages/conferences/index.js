import React from "react";
import PagesIntro from "../../components/PagesIntro";
import SecondaryLayout from "../../components/SecondaryLayout";

function Conferences() {
  return (
    <>
      <SecondaryLayout title="Conferences">
        <PagesIntro h1="Conferences" p="from our experts" />
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-4 text-center text-md-start d-flex d-sm-flex d-md-flex">
              <div style={{maxWidth: 350}}>
                <h5 className="text-uppercase fw-bold">conference cities</h5>
                <ul className="list-unstyled">
                  <li className="fs-6 mb-2">
                    <a className="text-decoration-none text-black" href="#">
                      Albania
                    </a>
                  </li>
                  <li className="fs-6 mb-2">
                    <a className="text-decoration-none text-black" href="#">
                      Lagos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5>All</h5>
                    <div className="d-flex justify-content-start align-items-center">
                      <label className="form-label text-nowrap mb-0">Filter by</label>
                      <select className="ms-2 form-select">
                        <option value="undefined" selected="">
                          Month
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Albania</h5>
                      <h6 className="text-muted card-subtitle mb-2">24th July</h6>
                      <p className="card-text">
                        International conference on business management and
                        social innovation
                      </p>
                      <a className="text-decoration-none" href="#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecondaryLayout>
    </>
  );
}

export default Conferences;
