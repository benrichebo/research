import React, { useEffect } from "react";
import { MdInsertDriveFile, MdPictureAsPdf } from "react-icons/md";
import { useMedia } from "../../hooks/useMedia";
import Spinner from "../ui/Spinner";

function MediaList({ mediaUploaded, setSelectedImage }) {
  const { loading, error, media, medias } = useMedia("medias");

  //push media uploaded to media
  useEffect(() => {
    if (mediaUploaded?.url) {
      medias.push(mediaUploaded);
      console.log("mediaUploaded", mediaUploaded);
    }
  }, [mediaUploaded]);

  return (
    <div className="row mb-2 mb-md-5">
      {loading && !error && (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      )}
      {error && !loading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading media</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => media.getMedias()}>
              Reload
            </button>
          </div>
        </div>
      )}
      {medias?.length == 0 && (
        <div className="d-flex justify-content-center align-items-center">
          There are no media
        </div>
      )}
      {medias?.length > 0 &&
        medias?.map((media) => (
          <div className="col-6 col-md-4 col-lg-3 mb-3" key={media?.url}>
            <input
              className="form-check-input"
              type="radio"
              name="media"
              id={media?.name}
              value={media}
              hidden
            />
            <label
              className="card d-flex justify-content-center align-items-center pt-0 pb-0 px-2"
              style={{ cursor: "pointer" }}
              htmlFor={media?.name}
              onClick={() => setSelectedImage(media)}>
              <div className="px-2 uploadedImage">
                {media?.type == "document" ? (
                  <MdInsertDriveFile />
                ) : (
                  <img
                    className="img-fluid h-100 my-3"
                    src={media?.url}
                    style={{ objectFit: "contain" }}
                    alt={media?.name}
                  />
                )}
              </div>
              <div className="card-body pb-2 mt-2 d-none d-md-block">
                <h5 className="mb-0 text-truncate">{media?.name}</h5>
                <h6 className="mb-0">
                  {media?.width} X {media?.width}
                </h6>
              </div>
            </label>
          </div>
        ))}
    </div>
  );
}

export default MediaList;
