import Link from "next/link";
import React from "react";
import { useCount } from "../../hooks/useCount";
import { useCrud } from "../../hooks/useCrud";

const Members = () => {
  const { allData } = useCrud("all-payments", "/api/payments/stripe/payments");
  return (
    <>
      <Link href={`/membership`}>
          <a className="text-decoration-none text-info h1">
            {allData?.length || 0}
          </a>
      </Link>
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
      <Link href={`/conferences`}>
        <a className="text-decoration-none text-info h1">
          {oneData?.count || 0}
        </a>
      </Link>
    </>
  );
};

const Papers = () => {
  const { oneData } = useCount("one-count-papers", "/api/count/papers");
  return (
    <>
        <Link href={`/papers`}>
          <a className="text-decoration-none text-info h1">
            {oneData?.count || 0}
          </a>
        </Link>
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
