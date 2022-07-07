import React, { useState, useRef } from "react";
import { useCrud } from "../../hooks/useCrud";

function AddArticle() {
  const { data, loading, postError, message } = useCrud();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      author,
      file,
      content,
      category,
      status,
    };
    await data.addData(body, "/api/articles/create");
  };
  return (
    <>
      <h5>Add article</h5>
      <div className="mb-4">
        {message && <p className="text-success">{message}</p>}
        {postError && <p className="text-danger">{postError}</p>}
        <form className="row" onSubmit={handleSubmit}>
          <div className="col col-md-8 col-lg-9">
            <div className="col-12 mb-4">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <Text setText={setTitle} id="title" />
            </div>
            <div className="mb-3">
              <h5 className="fw-normal text-muted my-4"></h5>
              <div className="row">
                <div className="col-12 mb-4">
                  <label className="form-label" htmlFor="author">
                    Author
                  </label>
                  <Text setText={setAuthor} id="author" />
                </div>
                <div className="col-12 mb-4">
                  <label className="form-label">Content</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className="my-3 d-grid">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={
                      loading ||
                      !title ||
                      !content ||
                      !category ||
                      !status ||
                      !file ||
                      !author
                    }>
                    Add article
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-lg-3">
            <div className="col-12 mb-4">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                onChange={(e) => setCategory(e.target.value)}>
                <option value="12" selected="">
                  This is item 1
                </option>
                <option value="13">This is item 2</option>
                <option value="14">This is item 3</option>
              </select>
            </div>
            <div className="col-12 mb-4">
              <label className="form-label" htmlFor="draft">
                Make available
              </label>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  id="draft"
                  name="status"
                  value="draft"
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="publish">
                  As Draft
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="publish"
                  name="status"
                  value="publish"
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <label className="form-check-label" for="formCheck-2">
                  Publish
                </label>
              </div>
            </div>
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
      </div>
    </>
  );
}

export default AddArticle;
