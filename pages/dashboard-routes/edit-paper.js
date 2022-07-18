import React, { useEffect, useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useFindOne } from "../../hooks/useFindOne";
import AddPaper from "./add-paper";

function EditPaper() {
  const { data, loading, error, oneData, id } = useFindOne(
    "one-paper",
    `/api/papers`
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
            <h6 className="text-muted">There was an error loading paper</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getOneData(`/api/papers/${id}`)}>
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
