import React from 'react'
import Spinner from '../ui/Spinner';
import Link from "next/link";
import { useCrud } from '../../hooks/useCrud';

function ConferencesComponent({limit}) {
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

        {allData?.length > 0 &&
          allData?.slice(0, limit).map((conference) => (
            <div className="col-sm-6 col-md-4 mb-0" key={conference?._id}>
              <Link href={`/conference/${conference?._id}`}>
                <a className="card rounded-0 text-decoration-none">
                  <div className="card-body p-2 p-xxl-3">
                    <h6 className="text-primary card-title pb-1">
                      0{allData?.indexOf(conference) + 1}
                    </h6>
                    <h5 className="card-title">{conference?.title}</h5>
                    <h6 className="text-muted card-subtitle my-2">
                      Country: {conference?.country}
                    </h6>
                    <h6 className="text-muted card-subtitle">
                      Date: {conference?.startDate}
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

export default ConferencesComponent;