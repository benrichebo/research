import React, { useState } from "react";
import { useCrud } from "../../hooks/useCrud";
import { MdOutlineInsertPhoto } from "react-icons/md";
import UploadModal from "../../components/media/UploadModal";
import Spinner from "../../components/ui/Spinner";
import TextEditor from "../../components/Editor";

function AddConference({ conference }) {
  const { data, postLoading, postError, message } = useCrud(
    "all-conferences",
    "/api/conferences"
  );

  const [title, setTitle] = useState(conference?.title || "");
  const [overview, setOverView] = useState(conference?.overview || "");
  const [objective, setObjective] = useState(conference?.objective || "");
  const [whyAttend, setWhyAttend] = useState(conference?.whyAttend || "");
  const [startDate, setStartDate] = useState(conference?.startDate || "");
  const [endDate, setEndDate] = useState(conference?.endDate || "");
  const [country, setCountry] = useState(conference?.country || "");
  const [venue, setVenue] = useState(conference?.venue || "");

  const [image, setImage] = useState(conference?.image || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      image,
      whyAttend,
      country,
      overview,
      venue,
      objective,
      startDate,
      endDate,
    };
    console.log(body);
    conference?.title
      ? await data.updateData(body, `/api/conferences/${conference?._id}`)
      : await data.addData(body, "/api/conferences/create");
  };
  return (
    <>
      <h5>{conference?.title ? "Edit conference" : "Add conference"}</h5>
      {message && <p className="text-success">{message}</p>}
      {postError && <p className="text-danger">{postError}</p>}
      <form className="row mb-4" onSubmit={handleSubmit}>
        <div className="col-12 col-md-7">
          <div className="col-12 mb-4">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              className="form-control form-control-lg rounded-0"
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="mb-3">
            <h5 className="fw-normal text-muted my-4"></h5>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="startDate">
                  Start Date
                </label>
                <input
                  className="form-control form-control-lg rounded-0"
                  type="date"
                  id="startDate"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="endDate">
                  End Date
                </label>
                <input
                  className="form-control form-control-lg rounded-0"
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="country">
                  Country
                </label>
                <input
                  className="form-control form-control-lg rounded-0"
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label" htmlFor="venue">
                  Venue
                </label>
                <input
                  className="form-control form-control-lg rounded-0"
                  type="text"
                  id="venue"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                />
              </div>{" "}
              <div className="col-12 mb-4">
                <label className="form-label" htmlFor="overview">
                  Conference overview
                </label>
                <TextEditor content={overview} setContent={setOverView} />
              </div>
              <div className="col-12 mb-4">
                <label className="form-label" htmlFor="objective">
                  Conference objective
                </label>
                <TextEditor content={objective} setContent={setObjective} />
              </div>
              <div className="col-12 mb-4">
                <label className="form-label" htmlFor="description">
                  Why attend
                </label>
                <TextEditor content={whyAttend} setContent={setWhyAttend} />
              </div>
              <div className="my-3 d-grid">
                <button
                  className="btn btn-primary btn-lg"
                  type="submit"
                  disabled={
                    postLoading ||
                    !title ||
                    !startDate ||
                    !endDate ||
                    !overview ||
                    !whyAttend ||
                    !venue ||
                    !image ||
                    !country
                  }>
                  {postLoading ? (
                    <Spinner className="ms-2" />
                  ) : (
                    <span className="">
                      {" "}
                      {conference?.title ? "Save conference" : "Add conference"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <p>Pick a photo</p>
          <a
            className="form-label w-100"
            htmlFor="file"
            data-bs-target="#mediaModal"
            data-bs-toggle="modal"
            type="button">
            <div
              className="card d-flex justify-content-center align-items-center bg-light p-2"
              style={{ height: 250, border: "1px dashed #b5b4b4" }}>
              {image?.name && (
                <img
                  src={image?.url}
                  alt={image?.name}
                  width="300"
                  height="200"
                  className="img-fluid"
                  style={{ objectFit: "fit" }}
                />
              )}
              {!image?.name && <MdOutlineInsertPhoto className="text-muted" />}
            </div>
          </a>
        </div>
      </form>
      <UploadModal selectedImage={image} setSelectedImage={setImage} />
    </>
  );
}

export default AddConference;
