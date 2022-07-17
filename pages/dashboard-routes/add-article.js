import React, { useEffect, useState } from "react";
import { useCrud } from "../../hooks/useCrud";
import { MdOutlineInsertPhoto } from "react-icons/md";
import UploadModal from "../../components/media/UploadModal";
import Spinner from "../../components/ui/Spinner";
import CategorySelect from "../../components/ui/CategorySelect";
import TextEditor from "../../components/Editor";

function AddArticle({ article }) {
  const { data, postLoading, postError, message } = useCrud(
    "all-articles",
    "/api/articles"
  );

  const [title, setTitle] = useState(article?.title || "");
  const [author, setAuthor] = useState(article?.author || "");
  const [textContent, setTextContent] = useState(article?.textContent || "");
  const [category, setCategory] = useState(article?.category || "");
  const [status, setStatus] = useState(article?.status || "");

  const [image, setImage] = useState(article?.image);

  useEffect(() => {
    console.log(title, author, textContent, category, status, image);
  }, [title, author, textContent, category, status, image]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      author,
      image,
      textContent,
      category,
      status,
    };

    article?.title
      ? await data.updateData(body, `/api/articles/${article?._id}`)
      : await data.addData(body, "/api/articles/create");
  };

  console.log(article);
  return (
    <>
      <h5>{article?.title ? "Edit article" : "Add article"}</h5>
      <div className="mb-4">
        {message && <p className="text-success">{message}</p>}
        {postError && <p className="text-danger">{postError}</p>}
        <form className="row" onSubmit={handleSubmit}>
          <div className="col col-md-8 col-lg-9">
            <div className="col-12 mb-4">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className="form-control form-control-lg rounded-0"
              />
            </div>
            <div className="mb-3">
              <h5 className="fw-normal text-muted my-4"></h5>
              <div className="row">
                <div className="col-12 mb-4">
                  <label className="form-label" htmlFor="author">
                    Author
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    id="author"
                    className="form-control form-control-lg rounded-0"
                  />
                </div>
                <div className="col-12 mb-4">
                  <label className="form-label" htmlFor="content">
                    Content
                  </label>
                  <TextEditor
                    content={textContent}
                    setContent={setTextContent}
                  />
                </div>
                <div className="my-3 d-grid">
                  <button
                    className="btn btn-primary btn-lg"
                    type="submit"
                    disabled={
                      postLoading ||
                      !title ||
                      !textContent ||
                      !category ||
                      !status ||
                      !image ||
                      !author
                    }>
                    {postLoading ? (
                      <Spinner className="ms-2" />
                    ) : (
                      <span className="">
                        {article?.title ? "Save article" : "Add article"}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-lg-3">
            <div className="col-12 mb-4">
              <label className="form-label" htmlFor="category">
                Category
              </label>
              <CategorySelect setCategory={setCategory} category={category} />
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
                  onChange={(e) => setStatus(e.target.value)}
                  checked={status == "draft"}
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
                  checked={status == "publish"}
                  onChange={(e) => setStatus(e.target.value)}
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
                    width="150"
                    height="150"
                    className="img-fluid"
                    style={{ objectFit: "fill" }}
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
