import React, { useState } from "react";
import Text from "../../components/ui/Text";
import { useCrud } from "../../hooks/useCrud";
import { MdOutlineInsertPhoto } from "react-icons/md";
import UploadModal from "../../components/media/UploadModal";
import Spinner from "../../components/ui/Spinner";

function AddArticle() {
  const { data, loading, postError, message } = useCrud();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      author,
      image,
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
                    className="form-control form-control-lg rounded-0"
                    rows="4"
                    onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className="my-3 d-grid">
                  <button
                    className="btn btn-primary btn-lg"
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
                    {loading ? (
                      <Spinner className="ms-2" />
                    ) : (
                      <span className="">Add article</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-lg-3">
            <div className="col-12 mb-4">
              <label className="form-label">Category</label>
              <select
                className="form-select form-select-lg rounded-0"
                onChange={(e) => setCategory(e.target.value)}>
                <option value="12" selected="">
                  This is item 1
                </option>
                <option value="13">This is item 2</option>
                <option value="14">This is item 3</option>
              </select>
            </div>
            <div className="col-12 mb-4">
              <p className="form-label" htmlFor="draft">
                Make available
              </p>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  id="draft"
                  name="status"
                  value="draft"
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="draft">
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
                <label className="form-check-label" htmlFor="publish">
                  or publish
                </label>
              </div>
            </div>
            <p>Pick a photo</p>
            <a
              className="form-label w-100"
              data-bs-target="#mediaModal"
              data-bs-toggle="modal"
              type="button">
              <div
                className="card d-flex justify-content-center align-items-center bg-light"
                style={{ height: 200, border: "1px dashed #b5b4b4" }}>
                {image?.name && (
                  <img
                    src={image?.url}
                    alt={image?.name}
                    width="100"
                    height="100"
                    className="img-fluid"
                    style={{ objectFit: "contain" }}
                  />
                )}
                {!image?.name && (
                  <MdOutlineInsertPhoto className="fs-1 text-muted" />
                )}
              </div>
            </a>
          </div>
        </form>
      </div>
      <UploadModal selectedImage={image} setSelectedImage={setImage} />
    </>
  );
}

export default AddArticle;
