import React from "react";
import { useCrud } from "../../hooks/useCrud";
import Spinner from "../ui/Spinner";
import Link from "next/link";

function ArticlesComponent({ limit }) {
  const { allData, error, loading } = useCrud("all-articles", "/api/articles");
  console.log(allData);
  return (
    <>
      <div className="row">
        {loading && (
          <div className="d-flex justify-content-center align-items-center my-5">
            <Spinner />
          </div>
        )}
        {allData?.length > 0 &&
          allData?.slice(0, limit).map((article) => (
            <div className="col-6 col-md-4 mb-3" key={article?._id}>
              <Link href={`/article/${article?._id}`}>
                <a className="text-decoration-none">
                  <img
                    className="img-fluid card-img-top w-100 d-block"
                    src={article?.image?.url}
                    width="200"
                    style={{ objectFit: "fit" }}
                  />

                  <div className="my-2">
                    <span className="small">{article?.category}</span>
                    <div className="d-lg-flex justify-content-lg-between my-2">
                      <h6 className="mb-0">{article?.title}</h6>
                    </div>
                    <span className="text-muted my-3 my-lg-0 small">
                      {article?.createdAt}
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default ArticlesComponent;
