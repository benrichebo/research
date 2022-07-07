import React from "react";

function AddConference() {
  return (
    <>
      <h5>Add conference</h5>
      <div className="row mb-4">
        <div className="col-12 col-md-7">
          <div className="col-12 mb-4">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <h5 className="fw-normal text-muted my-4"></h5>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label">Country</label>
                <select className="form-select">
                  <optgroup label="This is a group">
                    <option value="12" selected="">
                      This is item 1
                    </option>
                    <option value="13">This is item 2</option>
                    <option value="14">This is item 3</option>
                  </optgroup>
                </select>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label">Date</label>
                <input className="form-control" type="date" />
              </div>
              <div className="col-12 mb-4">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
              <div className="my-3 d-grid">
                <button className="btn btn-primary" type="button">
                  Add conference
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <label className="form-label">Image</label>
          <div
            className="card d-flex justify-content-center align-items-center bg-light"
            style="height: 200px;border: 1px dashed #b5b4b4;">
            <i className="material-icons fs-1 text-muted">insert_photo</i>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddConference;
