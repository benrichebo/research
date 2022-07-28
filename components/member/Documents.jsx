import React from "react";
import { MdGroup, MdInsertDriveFile } from "react-icons/md";
import Spinner from "../../components/ui/Spinner";
import { useMedia } from "../../hooks/useMedia";

function Documents() {
  const { loading, medias, media, error } = useMedia("medias");
console.log(medias);
  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading articles</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => media.getOneData(`/api/medias/${id}`)}>
              Reload
            </button>
          </div>
        </div>
      )}
      {medias?.length > 0 && (
        <div className="my-3 row">
          {medias?.map((data) => (
            <div className="col-md-3 mb-3" key={data?._id}>
              <a type="button" className="text-decoration-none" download>
                {data?.type == "document" ? (
                  <MdInsertDriveFile size={70} className="" />
                ) : (
                  <img
                    className=""
                    src={data?.url}
                    width="70"
                    height="70"
                    style={{ objectFit: "cover" }}
                    alt={data?.name}
                  />
                )}
              </a>
            </div>
          ))}
        </div>
      )}
      {medias?.length == 0 && (
        <div className="row mb-4">
          <div
            className="col d-flex justify-content-center align-items-center bg-light"
            style={{ height: 300 }}>
            <div className="text-center">
              <MdGroup className="text-muted" />
              <p>There is no media</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Documents;
