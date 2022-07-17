import React from "react";
import Spinner from "../ui/Spinner";
import Link from "next/link";
import { MdInsertDriveFile } from "react-icons/md";
import { useCrud } from "../../hooks/useCrud";

function PapersComponent({limit}) {
  const { allData, error, loading } = useCrud(
    "all-papers-public",
    "/api/papers/public"
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

        {allData?.length > 0 &&
          allData?.slice(0, limit).map((paper) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={paper?._id}>
              <Link href={`/paper/${paper?._id}`}>
                <a className="card mb-0 rounded-0 text-decoration-none">
                  <div className="card-body p-md-2 p-xl-1 p-xxl-3">
                    <MdInsertDriveFile className="text-muted mb-2" />
                    <h5 className="card-title">{paper?.title}</h5>
                    <h6 className="text-muted card-subtitle my-3">
                      Publisher: {paper?.publisher}
                    </h6>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default PapersComponent;
