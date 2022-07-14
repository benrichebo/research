import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useStorage } from "../../hooks/useStorage";
import AddArticle from "./add-article";

function EditArticle() {
  const { sessionStorage } = useStorage();
  const { data, loading, error, oneData } = useCrud(
    "one-article",
    sessionStorage.getItem("url")
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
            <h6 className="text-muted">There was an error loading papers</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getAllData(sessionStorage.getItem("url"))}>
              Reload
            </button>
          </div>
        </div>
      )}
      {oneData && <AddArticle article={oneData} />}
    </>
  );
}

export default EditArticle;
