import React from "react";
import { ObjectID } from "bson";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { connectToDatabase } from "../../lib/mongodb";
import { renderMarkup } from "react-render-markup";
import moment from "moment";

function Article({ article }) {
  console.log(article);
  return (
    <>
      <Layout title="Articles">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div className="col-md-12 col-lg-10 col-xl-9 mx-auto">
                <p className="small"> {article?.category}</p>
                <h3
                  className="pulse animated my-3"
                  data-bss-disabled-mobile="true">
                  {article?.title}
                </h3>
                <h6>AUTHOR: {article?.author}</h6>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <img className="img-fluid" src={article?.image?.url} />
            </div>
          </div>
        </div>
        <div className="container py-4 py-xl-5">
          <div className="d-flex justify-content-center">
            <div className="col-md-10">
              <p className="">{renderMarkup(article?.textContent)}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  try {
    const { db } = await connectToDatabase();
    const article = await db
      .collection("articles")
      .findOne({ _id: ObjectID(context.params.id) });

    //calculate posted at
    const date = article?.startDate?.split("-");
    const fromNow = moment(date, "YYYYMMDD").fromNow();

    console.log("article", article);
    const data = JSON.stringify({ ...article, fromNow });
    return {
      props: { article: JSON.parse(data) },
    };
  } catch (error) {
    console.log(error.message);
    return {
      notFound: true,
    };
  }
};

export default Article;
