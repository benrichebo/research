import React from "react";
import { ObjectID } from "bson";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { connectToDatabase } from "../../lib/mongodb";
import { renderMarkup } from "react-render-markup";

function Conference({ conference }) {
  console.log(conference);

  return (
    <>
      <Layout title="Conferences">
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-md-8 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div class="col-md-12 col-lg-10 col-xl-9 mx-auto">
                <h6>CONFERENCE</h6>
                <h1
                  class="display-5 pulse animated my-3"
                  data-bss-disabled-mobile="true">
                  {conference?.title}
                </h1>
                <h5>Country: {conference?.country}</h5>
                <h5>Venue: {conference?.venue}</h5>
                <div className="d-flex justify-content-start">
                  <h5 class="text-muted">
                    Start date: {conference?.startDate}
                  </h5>
                  <h5 class="text-muted ms-3">
                    End date: {conference?.endDate}
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <img class="img-fluid" src={conference?.image?.url} />
            </div>
          </div>
        </div>
        <div class="container py-4 py-xl-5">
          <div class="d-flex justify-content-center">
            <div class="col-md-10">
              <h3>Overview</h3>
              <div className="fs-4 lead mb-4">
                {renderMarkup(conference?.overview)}
              </div>
              <h3>Objective</h3>
              <div className="fs-4 lead mb-4">
                {renderMarkup(conference?.objective)}
              </div>
              <h3>Why attend</h3>
              <div className="fs-4 lead mb-4">
                {renderMarkup(conference?.whyAttend)}
              </div>
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
    const conference = await db
      .collection("conferences")
      .findOne({ _id: ObjectID(context.params.id) });

    console.log("conference", conference);
    const data = JSON.stringify(conference);
    return {
      props: { conference: JSON.parse(data) },
    };
  } catch (error) {
    console.log(error.message);
    return {
      notFound: true,
    };
  }
};

export default Conference;
