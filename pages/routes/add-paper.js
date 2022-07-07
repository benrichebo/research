import React from "react";

function AddPaper() {
  return (
    <>
      <h5>Add paper</h5>
      <div class="row mb-4">
        <div class="col">
          <div class="col-12 mb-4">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <h5 class="fw-normal text-muted my-4"></h5>
            <div class="row">
              <div class="col-12 col-md-6 mb-4">
                <label class="form-label">Publisher</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-12 col-md-6 mb-4">
                <label class="form-label">File</label>
                <div>
                  <input type="file" />
                </div>
              </div>
              <div class="col-12 mb-4">
                <label class="form-label">Description</label>
                <textarea class="form-control" rows="4"></textarea>
              </div>
              <div class="my-3 d-grid">
                <button class="btn btn-primary" type="button">
                  Add conference
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPaper;
