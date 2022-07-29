import Link from "next/link";
import React from "react";
import { useCrud } from "../../hooks/useCrud";

function Payments({user}) {
  const { allData } = useCrud(
    "all-payments",
    "/api/payments/stripe/payments"
  );
  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between border-0 bg-white pb-0">
          <h6 className="card-title mb-0 fw-bold">Members</h6>
          <Link href={`/dashboard/members/${user?.id}`}>
            <a className="text-decoration-none text-info" href="#">
              See more
            </a>
          </Link>
        </div>
        <div className="card-body">
          {allData &&
            allData?.length > 0 &&
            allData.slice(0, 3).map((payment) => (
              <p
                class="list-item d-flex justify-content-between mb-0 card-text"
                key={payment?.name}>
                <span>{payment?.email}</span>
                <span>{payment?.status}</span>
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

export default Payments;
