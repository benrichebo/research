import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import AllData from "../../components/dashboard-home/AllData";
import Categories from "../../components/dashboard-home/Categories";
import Payments from "../../components/dashboard-home/Payments";

function Home() {
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
        <h5>Welcome Richard</h5>
      </div>
      <div className="row my-4">
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Getting started</h6>
              <p className="card-text">
                Available get started links. you can make a post or post a
                conference
              </p>
              <Link href={`/dashboard/add-article/${routeId}`}>
                <a className="btn btn-primary" href="#">
                  Post an article
                </a>
              </Link>
              <Link href={`/dashboard/add-paper/${routeId}`}>
                <a className="btn btn-primary ms-3" href="#">
                  Submit a paper
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-4">
        <AllData />
        </div>
        <div className="col-sm-12 col-md-6">
          <Payments />
        </div>
        <div className="col-sm-12 col-md-6">
          <Categories id={routeId} />
        </div>
      </div>
    </>
  );
}

export default Home;
