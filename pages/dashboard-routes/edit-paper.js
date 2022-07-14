import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useStorage } from "../../hooks/useStorage";
import AddPaper from "./add-paper";

function EditPaper() {
  const { sessionStorage } = useStorage();
  const { data, loading, error, oneData } = useCrud(
    "one-paper",
    sessionStorage.getItem("url")
  );

  console.log("one", oneData);

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
              onClick={() => data.getAllData(sessionStorage.getItem("url"))}>
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