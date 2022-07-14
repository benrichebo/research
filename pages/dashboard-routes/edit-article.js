import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useRouter } from "next/router";
import AddArticle from "./add-article";

function EditArticle() {
  const router = useRouter()
  const { data, loading, error, oneData } = useCrud(
    "one-article",
    `/api/articles/${router?.query?.slug[1]}`
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
              onClick={() =>
                data.getOneData(`/api/articles/${router?.query?.slug[1]}`)
              }>
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
