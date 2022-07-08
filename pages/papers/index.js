import React from "react";
import PagesIntro from "../../components/PagesIntro";
import SecondaryLayout from "../../components/SecondaryLayout";

function Papers() {
  return (
    <>
      <SecondaryLayout title="Papers">
        <PagesIntro h1="Papers" p="from our experts" />
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-4 text-center text-md-start d-flex d-sm-flex d-md-flex">
              <div style={{ maxWidth: 350 }}>
                <h5 className="text-uppercase fw-bold">TOPICS</h5>
                <div className="my-3">
                  <div className="form-check fs-6">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="formCheck-1"
                      name="topics"
                    />
                    <label className="form-check-label" for="formCheck-1">
                      Architecture
                    </label>
                  </div>
                </div>
                <div className="my-3">
                  <div className="form-check fs-6">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="formCheck-2"
                      name="topics"
                    />
                    <label className="form-check-label" for="formCheck-2">
                      Interior designs
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5>All</h5>
                  <div className="d-flex justify-content-start align-items-center">
                    <label className="form-label fs-6 mb-0 text-nowrap">
                      Filter by
                    </label>
                    <select className="ms-2 form-select">
                      <option value="undefined" selected="">
                        Month
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        ESG Investment and private real estate returns
                      </h5>
                      <h6 className="text-muted card-subtitle mb-2">
                        Publisher: Michael Gates
                      </h6>
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

export default Papers;
