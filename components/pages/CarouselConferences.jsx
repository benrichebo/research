import React from "react";
import Spinner from "../ui/Spinner";
import Link from "next/link";
import { useCrud } from "../../hooks/useCrud";

function CarouselConferencesComponent() {
  const { allData, error, loading } = useCrud(
    "all-conferences",
    "/api/conferences"
  );
  console.log(allData);
  return (
    <>
      <div className="row">
        {loading && (
          <div className="d-flex justify-content-center align-items-center my-5">
            <Spinner />
          </div>
        )}

        <div
          className="carousel slide col-lg-9 mx-auto"
          data-bs-ride="carousel"
          id="carousel-1">
          <div className="carousel-inner">
            {allData?.length > 0 &&
              allData?.slice(0, 20).map((conference) => (
                <Link href={`/conference/${conference?._id}`}>
                  <a
                    className="carousel-item active text-decoration-none"
                    key={conference?._id}>
                    <div className="bg-light">
                      <div className="card bg-light border-0 rounded-0">
                        <img
                          className="img-fluid card-img-top d-block w-100"
                          src={conference?.image?.url}
                        />
                        <div className="p-3">
                          <div className="d-lg-flex justify-content-lg-between">
                            <h6 className="mb-0">{conference?.title}</h6>
                            <h6 className="text-muted mb-0">
                              {conference?.startDate}
                            </h6>
                          </div>
                          <p className="d-none d-lg-block small mb-0">
                            {conference?.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carousel-1"
              role="button"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-1"
              role="button"
              data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carousel-1"
              data-bs-slide-to="0"
              className="active"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default CarouselConferencesComponent;
