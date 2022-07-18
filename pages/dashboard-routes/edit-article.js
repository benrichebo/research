import React, { useEffect, useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useRouter } from "next/router";
import AddArticle from "./add-article";

function EditArticle() {
  const router = useRouter();

  const { data, loading, error, oneData } = useCrud(
    "one-article",
    `/api/articles/${router?.query?.slug[1]}`
  );

  useEffect(() => {
    if (router.isReady) {
    }
  }, [router.isReady]);

  return (
    <>
      {loading && !error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}
      {error && !loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading article</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() =>
                data.getOneData(
                  `/api/articles/${
                    (router?.query && router?.query?.slug[1]) || null
                  }`
                )
              }>
              Reload
            </button>
          </div>
        </div>
      )}
      {oneData && !error && !loading && <AddArticle article={oneData} />}
    </>
  );
}

export default EditArticle;
