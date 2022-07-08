import React, { useState, useRef } from "react";
import Spinner from "../../components/ui/Spinner";

function AddPaper() {
  const { data, loading, postError, message } = useCrud();

  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      publisher,
      file,
      description,
    };
    await data.addData(body, "/api/papers/create");
  };
  return (
    <>
      <h5>Add paper</h5>

      <div className="mb-4">
        {message && <p className="text-success">{message}</p>}
        {postError && <p className="text-danger">{postError}</p>}
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-12 mb-4">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <Text setText={setTitle} id="title" />
          </div>
          <div className="mb-3">
            <h5 className="fw-normal text-muted my-4"></h5>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="publisher">
                  Publisher
                </label>
                <Text setText={setPublisher} id="publisher" />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="file">
                  File
                </label>
                <div>
                  <input
                    id="file"
                    type="file"
                    ref={fileRef}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="col-12 mb-4">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows="4"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className="my-3 d-grid">
                <button
                  className="btn btn-primary"
                  type="button"
                  disabled={
                    loading || !title || !publisher || !description || !file
                  }>
                  {loading ? (
                    <Spinner className="ms-2" />
                  ) : (
                    <span className="">Submit</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddPaper;
