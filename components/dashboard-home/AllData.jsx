import React from "react";
import { useCount } from "../../hooks/useCount";
import { useCrud } from "../../hooks/useCrud";

const Members = () => {
   const { allData } = useCrud(
     "all-payments",
     "/api/payments/stripe/payments"
   );
  return (
    <>
      <h1 className=" mt-3">{allData?.length || 0}</h1>
    </>
  );
};

const Conferences = () => {
  const { oneData } = useCount(
    "one-count-conferences",
    "/api/count/conferences"
  );
  return (
    <>
      <h1 className=" mt-3">{oneData?.count || 0}</h1>
    </>
  );
};

const Papers = () => {
  const { oneData } = useCount(
    "one-count-papers",
    "/api/count/papers"
  );
  return (
    <>
      <h1 className=" mt-3">{oneData?.count || 0}</h1>
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
              <h6 className="text-muted fw-bold">Members</h6>
              <Members />
            </div>
            <div className="col-6 col-sm-4">
              <h6 className="text-muted fw-bold">Conference</h6>
              <Conferences />
            </div>
            <div className="col-6 col-sm-4">
              <h6 className="text-muted fw-bold">Papers</h6>
              <Papers />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllData;
