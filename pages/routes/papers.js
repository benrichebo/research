import React from 'react'

function Papers() {
  return (
    <>
      <div>
        <h5>Papers</h5>
      </div>
      <div class="row my-4">
        <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">
                ESG Investment and private real estate returns
              </h6>
              <h6 class="text-muted card-subtitle mb-2">
                Publisher: Michael Gates
              </h6>
              <p class="card-text">
                International conference on business management and social
                innovation
              </p>
              <span class="badge rounded-pill bg-primary">
                Pending approval
              </span>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">
                ESG Investment and private real estate returns
              </h6>
              <h6 class="text-muted card-subtitle mb-2">
                Publisher: Michael Gates
              </h6>
              <p class="card-text">
                International conference on business management and social
                innovation
              </p>
              <span class="badge rounded-pill bg-success">Approved</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Papers