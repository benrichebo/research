import React, { useEffect, useState } from "react";
import TextEditor from "../../components/Editor";
import UploadModal from "../../components/media/UploadModal";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function AddPaper({ paper }) {
  const { data, postLoading, postError, message } = useCrud(
    "all-papers",
    "/api/papers"
  );

  const [abstract, setAbstract] = useState(paper?.abstract || "");
  const [publisher, setPublisher] = useState(paper?.publisher || "");
  const [fileToUpload, setFileToUpload] = useState(paper?.file || "");
  const [description, setDescription] = useState(paper?.description || "");

  const [fileTypeError, setFileTypeError] = useState(null);

  useEffect(() => {
    console.log(fileToUpload);
    if (fileToUpload && fileToUpload?.type != "document") {
      setFileTypeError("Pick a word/pdf document rather");
    } else {
      setFileTypeError(null);
    }
  }, [fileToUpload]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      abstract,
      publisher,
      file: fileToUpload,
      description,
    };

    paper?.abstract
      ? await data.updateData(body, `/api/papers/${paper?._id}`)
      : await data.addData(body, "/api/papers/create");
  };

  return (
    <>
      <h5>{paper?.abstract ? "Edit paper" : "Add paper"}</h5>

      <div className="mb-4">
        {message && <p className="text-success">{message}</p>}
        {postError && <p className="text-danger">{postError}</p>}
        {fileTypeError && <p className="text-danger">{fileTypeError}</p>}
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-12 mb-4">
            <label className="form-label" htmlFor="abstract">
              Abstract
            </label>
            <input
              type="text"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              id="abstract"
              className="form-control form-control-lg rounded-0"
            />
          </div>
          <div className="mb-3">
            <h5 className="fw-normal text-muted my-4"></h5>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="publisher">
                  Publisher
                </label>
                <input
                  type="text"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                  id="publisher"
                  className="form-control form-control-lg rounded-0"
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label">File</label>
                <div>
                  <a
                    type="button"
                    data-bs-target="#mediaModal"
                    data-bs-toggle="modal"
                    className="btn btn-light btn-lg rounded-0">
                    Upload file
                  </a>
                  {fileToUpload?.type == "document" && (
                    <span>{fileToUpload?.name}</span>
                  )}
                </div>
              </div>
              <div className="col-12 mb-4">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <TextEditor content={description} setContent={setDescription} />
              </div>
              <div className="my-3 d-grid">
                <button
                  className="btn btn-primary btn-lg"
                  type="submit"
                  disabled={
                    postLoading ||
                    !abstract ||
                    !publisher ||
                    !description ||
                    !fileToUpload ||
                    fileTypeError
                  }>
                  {postLoading ? (
                    <Spinner className="ms-2" />
                  ) : (
                    <span className="">
                      {" "}
                      {paper?.abstract ? "Save paper" : "Add paper"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <UploadModal
        selectedImage={fileToUpload}
        setSelectedImage={setFileToUpload}
      />
    </>
  );
}

export default AddPaper;
