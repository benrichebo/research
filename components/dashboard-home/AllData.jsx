import React from "react";
import { useCount } from "../../hooks/useCount";

const Members = () => {
  const { oneData, error, loading, message } = useCount(
    "one-count-members",
    "/api/count/members"
  );
  console.log("members", oneData)
  return (
    <>
      <h1 className="display-5 mt-3">{oneData?.count || 0}</h1>
    </>
  );
};

const Conferences = () => {
  const { oneData, error, loading, message } = useCount(
    "one-count-conferences",
    "/api/count/conferences"
  );
  return (
    <>
      <h1 className="display-5 mt-3">{oneData?.length || 0}</h1>
    </>
  );
};

const Papers = () => {
  const { oneData, error, loading, message } = useCount(
    "one-count-conferences",
    "/api/count/conferences"
  );
  return (
    <>
      <h1 className="display-5 mt-3">{oneData?.count || 0}</h1>
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
