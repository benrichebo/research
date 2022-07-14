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
    uploadForm?.current?.reset();
  };

  return (
    <>
      <div class="modal" tabindex="-1" id="mediaModal">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header border-0 px-md-3 px-md-5">
              <h5 className="modal-title">Choose an image</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body px-md-3 px-md-5">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search image"
                />
              </div>
              <p>Images</p>
              <MediaList
                mediaUploaded={mediaUploaded}
                setMediaUploaded={setMediaUploaded}
                setSelectedImage={setSelectedImage}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between px-md-5 w-100">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadModal;
