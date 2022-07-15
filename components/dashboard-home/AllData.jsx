import React from "react";
import { useCrud } from "../../hooks/useCrud";

const Members = () => {
  const { allData, error, loading, message } = useCrud(
    "all-members",
    "/api/members"
  );
  return (
    <>
      <h1 className="display-5 mt-3">{allData?.length || 0}</h1>
    </>
  );
};

const Conferences = () => {
  const { allData, error, loading, message } = useCrud(
    "all-conferences",
    "/api/conferences"
  );
  return (
    <>
      <h1 className="display-5 mt-3">{allData?.length || 0}</h1>
    </>
  );
};

const Papers = () => {
  const { allData, error, loading, message } = useCrud(
    "all-papers",
    "/api/papers"
  );
  return (
    <>
      <h1 className="display-5 mt-3">{allData?.length || 0}</h1>
    </>
  );
};

function AllData() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-6 col-sm-4">
              <h6 className="text-muted">Members</h6>
              <Members />
            </div>
            <div className="col-6 col-sm-4">
              <h6 className="text-muted">Conference</h6>
              <Conferences />
            </div>
            <div className="col-6 col-sm-4">
              <h6 className="text-muted">Papers</h6>
              <Papers />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllData;
