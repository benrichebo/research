import React, { useEffect, useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useRouter } from "next/router";
import AddPaper from "./add-paper";

function EditPaper() {
  const router = useRouter();

  const [routeId, setRouteId] = useState(null);

  const { data, loading, error, oneData } = useCrud(
    "one-paper",
    `/api/papers/${(router?.query && routeId) || null}`
  );

  useEffect(() => {
    if (router.isReady) {
      setRouteId(router?.query && router?.query?.slug[1]);
    }
  }, [router.isReady]);

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading paper</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() =>
                data.getOneData(
                  `/api/papers/${
                    (router?.query && router?.query?.slug[1]) || null
                  }`
                )
              }>
              Reload
            </button>
          </div>
        </div>
      )}
      {oneData && <AddPaper paper={oneData} />}
    </>
  );
}

export default EditPaper;
