import React, { useState } from "react";
import Text from "../../components/ui/Text";
import { useCrud } from "../../hooks/useCrud";

function AddConference() {
  const { data, loading, postError, message } = useCrud();

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      file,
      description,
      country,
      startDate,
      endDate,
    };
    await data.addData(body, "/api/conferences/create");
  };
  return (
    <>
      <h5>Add conference</h5>
      {message && <p className="text-success">{message}</p>}
      {postError && <p className="text-danger">{postError}</p>}
      <form className="row mb-4" onSubmit={handleSubmit}>
        <div className="col-12 col-md-7">
          <div className="col-12 mb-4">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" htmlFor="title" />
            <Text setText={setTitle} id="title" />
          </div>
          <div className="mb-3">
            <h5 className="fw-normal text-muted my-4"></h5>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label">Country</label>
                <select
                  className="form-select"
                  onChange={(e) => setCountry(e.target.value)}>
                  <option value="12" selected="">
                    This is item 1
                  </option>
                  <option value="13">This is item 2</option>
                  <option value="14">This is item 3</option>
                </select>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="startDate">
                  Start Date
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="startDate"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="endDate">
                  End Date
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="endDate"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="col-12 mb-4">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className="my-3 d-grid">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={
                    loading ||
                    !title ||
                    !startDate ||
                    !endDate ||
                    !description ||
                    !file ||
                    !country
                  }>
                  Add conference
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <p>Pick a photo</p>
          <label className="form-label" htmlFor="file">
            <div
              className="card d-flex justify-content-center align-items-center bg-light"
              style={{ height: 200, border: "1px dashed #b5b4b4" }}>
              <i className="material-icons fs-1 text-muted">insert_photo</i>
              <input
                type="file"
                hidden
                ref={fileRef}
                value="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </label>
        </div>
      </form>
    </>
  );
}

export default AddConference;
