import React from "react";
import { MdFileDownload } from "react-icons/md";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { renderMarkup } from "react-render-markup";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectID } from "bson";
import Footer from "../../components/Footer";

function Paper({ paper }) {
  return (
    <>
      <Layout title="Paper">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div className="col-md-12 col-lg-10 col-xl-9 mx-md-auto">
                <p className="small">PAPER</p>
                <h3
                  className="pulse animated mb-3"
                  data-bss-disabled-mobile="true">
                  {paper?.title}
                </h3>
                <h6>PUBLISHER: {paper?.publisher}</h6>
              </div>
            </div>
            <div className="col-lg-2 col-xl-3 my-3"></div>
          </div>
        </div>
        <div className="container py-4 py-xl-5">
          <div className="d-flex justify-content-center">
            <div className="col-md-10">
              <div className="mb-5">{renderMarkup(paper?.abstract)}</div>
              <div className="my-5">
                <a
                  href={paper?.file?.name}
                  download
                  className="btn btn-outline-primary rounded-0 btn-lg px-4">
                  <span className="d-flex justify-content-center align-items-center">
                    <span>Download</span>
                    <MdFileDownload className="ms-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
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
    const paper = await db
      .collection("papers")
      .findOne({ _id: ObjectID(context.params.id) });

    console.log("paper", paper);
    const data = JSON.stringify(paper);
    return {
      props: { paper: JSON.parse(data) },
    };
  } catch (error) {
    console.log(error.message);
    return {
      notFound: true,
    };
  }
};

export default Paper;
