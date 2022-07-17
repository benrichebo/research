import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function Articles() {
  const { allData, error, loading } = useCrud("all-articles", "/api/articles");
  console.log(allData);
  return (
    <>
      <Layout title="Articles">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center pt-3 pb-1 pb-md-3">
              <div className="col-sm-10 col-xl-9">
                <div className="">
                  <p className="mb-2 small">ARTICLES</p>
                  <h3
                    className="display-6 fs-3 pulse animated"
                    data-bss-disabled-mobile="true">
                    Articles
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <div>
                <img className="img-fluid" src="/images/articles.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 py-5">
          <div className="row">
            {loading && (
              <div className="d-flex justify-content-center align-items-center my-5">
                <Spinner />
              </div>
            )}

            {allData?.length > 0 &&
              allData?.slice(0, 20).map((article) => (
                <div className="col-6 col-md-4 mb-3" key={article?._id}>
                  <Link href={`/article/${article?._id}`}>
                    <a className="text-decoration-none">
                      <img
                        className="img-fluid card-img-top w-100 d-block"
                        src={article?.image?.url}
                        width="200"
                        style={{ objectFit: "fit" }}
                      />

                      <div className="my-3">
                        <span className="my-3 small">{article?.category}</span>
                        <div className="d-lg-flex justify-content-lg-between">
                          <h5 className="my-2">{article?.title}</h5>
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
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default Articles;
