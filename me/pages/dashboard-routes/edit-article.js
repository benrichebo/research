import React from "react";
import Spinner from "../../components/ui/Spinner";
import AddArticle from "./add-article";
import { useFindOne } from "../../hooks/useFindOne";

function EditArticle() {
  const { data, loading, error, oneData, id } = useFindOne(
    "one-article",
    `/api/articles`
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
            <h6 className="text-muted">There was an error loading articles</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => data.getOneData(`/api/articles/${id}`)}>
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
