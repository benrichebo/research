import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AllData from "../../components/dashboard-home/AllData";
import Categories from "../../components/dashboard-home/Categories";
import Papers from "../../components/dashboard-home/Papers";
import Payments from "../../components/dashboard-home/Payments";
import { useUser } from "../../hooks/useUser";

function Home() {
  const { userData } = useUser("user");
  const [routeId, setRouteId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setRouteId(router?.query && router?.query?.slug[0]);
    }
  }, [router.isReady]);

  return (
    <>
      <div>
        <h5>Welcome {userData?.name}</h5>
      </div>
      <div className="row my-4">
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-white border-0">
              <h6 className="mb-0 fw-bold">Getting started</h6>
            </div>
            <div className="card-body">
              {(userData?.role == "admin" || userData?.role == "manager") ? (
                  <>
                    <p className="card-text">
                      Get started links. you can make a post or post a
                      conference
                    </p>
                    <Link href={`/dashboard/add-article/${routeId}`}>
                      <a className="btn btn-secondary me-3 mb-3" href="#">
                        Post an article
                      </a>
                    </Link>
                    <Link href={`/dashboard/add-conference/${routeId}`}>
                      <a className="btn btn-info me-3 mb-3" href="#">
                        Add a conference
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="card-text">
                      Get started links. You can submit a paper
                    </p>
                    <Link href={`/dashboard/add-paper/${routeId}`}>
                      <a className="btn btn-light mb-3" href="#">
                        Submit a paper
                      </a>
                    </Link>
                  </>
                )}
            </div>
          </div>
        </div>
        {(userData?.role == "admin" || userData?.role == "manager") && (
          <>
            <div className="col-sm-12 col-md-6 mb-4">
              <AllData />
            </div>
            <div className="col-sm-12 col-md-6 mb-4">
              <Payments user={userData} />
            </div>
          </>
        )}

        {(userData?.role == "admin" || userData?.role == "manager") && (
          <div className="col-sm-12 col-md-6 mb-4">
            <Categories id={routeId} />
          </div>
        )}
        <div className="col-sm-12 col-md-6 mb-4">
          <Papers id={routeId} />
        </div>
      </div>
    </>
  );
}

export default Home;
