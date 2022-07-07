import React from "react";

function AddArticle() {
  return (
    <>
      <h5>Add article</h5>
      <div class="row mb-4">
        <div class="col">
          <div class="row">
            <div class="col col-md-8 col-lg-9">
              <div class="col-12 mb-4">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <h5 class="fw-normal text-muted my-4"></h5>
                <div class="row">
                  <div class="col-12 mb-4">
                    <label class="form-label">Author</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-12 mb-4">
                    <label class="form-label">Content</label>
                    <textarea class="form-control" rows="4"></textarea>
                  </div>
                  <div class="my-3 d-grid">
                    <button class="btn btn-primary" type="button">
                      Add article
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-md-4 col-lg-3">
              <div class="col-12 mb-4">
                <label class="form-label">Category</label>
                <select class="form-select">
                  <optgroup label="This is a group">
                    <option value="12" selected="">
                      This is item 1
                    </option>
                    <option value="13">This is item 2</option>
                    <option value="14">This is item 3</option>
                  </optgroup>
                </select>
              </div>
              <div class="col-12 mb-4">
                <label class="form-label">Make available</label>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="formCheck-1"
                    name="publish"
                  />
                  <label class="form-check-label" for="formCheck-1">
                    As Draft
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="formCheck-2"
                    name="publish"
                  />
                  <label class="form-check-label" for="formCheck-2">
                    Publish
                  </label>
                </div>
              </div>
              <label class="form-label">Image</label>
              <div
                class="card d-flex justify-content-center align-items-center bg-light"
                style={{ height: 200, border: "1px dashed #b5b4b4" }}>
                <i class="material-icons fs-1 text-muted">insert_photo</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArticle;
