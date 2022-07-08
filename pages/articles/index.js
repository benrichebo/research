import React from "react";
import PagesIntro from "../../components/PagesIntro";
import SecondaryLayout from "../../components/SecondaryLayout";

function Articles() {
  return (
    <>
      <SecondaryLayout title="Articles">
        <PagesIntro h1="Articles" p="from our experts" />
        <div class="container py-4 py-xl-5">
          <div class="row gy-4 gy-md-0">
            <div class="col-md-4 text-center text-md-start d-flex d-sm-flex d-md-flex">
              <div style={{ maxWidth: 350 }}>
                <h5 class="text-uppercase fw-bold">TOPICS</h5>
                <div class="my-3">
                  <div class="form-check fs-6">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="formCheck-1"
                      name="topics"
                    />
                    <label class="form-check-label" for="formCheck-1">
                      Architecture
                    </label>
                  </div>
                </div>
                <div class="my-3">
                  <div class="form-check fs-6">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="formCheck-2"
                      name="topics"
                    />
                    <label class="form-check-label" for="formCheck-2">
                      Interior designs
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-12 mb-5">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="fs-5">All</h5>
                    <div class="d-flex justify-content-start align-items-center">
                      <label class="form-label mb-0 text-nowrap">
                        Filter by
                      </label>
                      <select class="ms-2 form-select">
                        <option value="undefined" selected="">
                          Month
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="d-flex justify-content-start">
                    <div>
                      <img
                        class="img-fluid"
                        width="250"
                        height="250"
                        src="/images/139855119_1100169067091999_8429686186357152647_n.jpg"
                        alt="image"
                      />
                    </div>
                    <div class="ms-3">
                      <h5>ESG Investment and private real estate returns</h5>
                      <h6 class="text-muted mb-2">Date: 24th July, 2022</h6>
                      <a class="fs-5 text-decoration-none" href="#">
                        Read more...
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

export default Articles;
