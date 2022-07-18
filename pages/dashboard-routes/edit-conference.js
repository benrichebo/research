import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useFindOne } from "../../hooks/useFindOne";
import AddConference from "./add-conference";

function EditConference() {
  const { data, loading, error, oneData, id } = useFindOne(
    "one-conference",
    `/api/conferences`
  );

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
            <h6 className="text-muted">
              There was an error loading conference
            </h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getOneData(`/api/conferences/${id}`)}>
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
