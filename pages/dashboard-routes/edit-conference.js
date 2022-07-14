import React, { useEffect, useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useRouter } from "next/router";
import AddConference from "./add-conference";

function EditConference() {
 const router = useRouter();

  const [routeId, setRouteId] = useState(null);

  const { data, loading, error, oneData } = useCrud(
    "one-conference",
    `/api/conferences/${(router?.query && routeId) || null}`
  );

  useEffect(() => {
    if (router.isReady) {
      setRouteId(router?.query && router?.query?.slug[0]);
    }
  }, [router.isReady]);

  return (
    <>
      {loading && !error && !oneData?.title && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && !loading && !oneData?.title && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">
              There was an error loading conference
            </h6>
            <button
              className="btn btn-primary my-3"
              onClick={() =>
                data.getOneData(
                  `/api/conferences/${
                    (router?.query && router?.query?.slug[1]) || null
                  }`
                )
              }>
              Reload
            </button>
          </div>
        </div>
      )}
      {oneData && <AddConference conference={oneData} />}
    </>
  );
}

export default EditConference;
