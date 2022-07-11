import React, { useRef, useState } from "react";
import MediaList from "./MediaList";
import Uploader from "./Uploader";

function UploadModal({ selectedImage, setSelectedImage }) {
  const [mediaUploaded, setMediaUploaded] = useState("");
  const uploadForm = useRef();

  const clearForm = () => {
    setSelectedImage("");
    resetForm();
  };

   const resetForm = () => {
     uploadForm?.current.reset();
   };

  return (
    <div className="modal fade" role="dialog" tabindex="-1" id="mediaModal">
      <div
        className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen modal-dialog-scrollable"
        role="document">
        <div className="modal-content">
          <form ref={uploadForm}>
            <div className="modal-header border-0 px-md-3 px-md-5">
              <h5 className="modal-title">Choose an image</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body px-md-5 pb-md-4">
              <div className="mb-3">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search image"
                  />
                </div>
              </div>
              <p>Images</p>
              <MediaList
                mediaUploaded={mediaUploaded}
                setMediaUploaded={setMediaUploaded}
                setSelectedImage={setSelectedImage}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between px-md-5 position-absolute bottom-0 w-100">
              <div className="pb-2 d-flex justify-content-start">
                <button
                  className="btn btn-primary me-3 rounded-pill px-3 px-md-4"
                  type="button"
                  disabled={!selectedImage?.name}
                  data-bs-dismiss="modal"
                  onClick={resetForm}>
                  Ok
                </button>
                <button
                  className="btn btn-light px-3 d-none d-md-block"
                  type="button"
                  data-bs-dismiss="modal"
                  onClick={clearForm}>
                  Cancel
                </button>
              </div>
              <Uploader setMediaUploaded={setMediaUploaded} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
