import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useStorage } from "../../hooks/useStorage";
import AddConference from "./add-conference";

function EditConference() {
  const { sessionStorage } = useStorage();
  const { data, loading, error, oneData } = useCrud(
    "one-conference",
    sessionStorage.getItem("url")
  );

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
            <h6 className="text-muted">There was an error loading conference</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getAllData(sessionStorage.getItem("url"))}>
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
