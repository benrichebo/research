import React from "react";

function Settings() {
  return (
    <>
      <h5>Settings</h5>
      <div class="d-flex justify-content-start my-3">
        <h6>Account</h6>
        <h6 class="text-muted ms-4">Subscription</h6>
      </div>
      <div class="row mb-4">
        <div class="col">
          <div class="col-12 mb-4">
            <label class="form-label">Full name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <h5 class="fw-normal text-muted my-4"></h5>
            <div class="row">
              <div class="col-12 col-md-6 mb-4">
                <label class="form-label">Email address</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-12 col-md-6 mb-4">
                <label class="form-label">Phone number</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-12 col-md-6 mb-4">
                <label class="form-label">Country</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-12 col-md-6 mb-4">
                <label class="form-label">City</label>
                <input type="text" class="form-control" />
              </div>
              <div class="my-3 d-grid">
                <button class="btn btn-primary" type="button">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Membership</h6>
              <h6 class="text-muted card-subtitle mb-2">Method: Card</h6>
              <span class="badge rounded-pill bg-primary">
                Pending approval
              </span>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Membership</h6>
              <h6 class="text-muted card-subtitle mb-2">Method: Card</h6>
              <span class="badge rounded-pill bg-success">
                Pending approval
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
