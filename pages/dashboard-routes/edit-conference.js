import React, { useEffect, useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useRouter } from "next/router";
import AddConference from "./add-conference";
import { ObjectID } from "bson";
import { connectToDatabase } from "../../lib/mongodb";

function EditConference() {
  const router = useRouter();

  const { data, loading, error, oneData } = useCrud(
    "one-conference",
    `/api/conferences/${router?.query?.slug[1]}`
  );

  useEffect(() => {
    if (router.isReady) {
    }
  }, [router.isReady]);

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
            <h6 className="text-muted">
              There was an error loading conference
            </h6>
            <button
              className="btn btn-primary my-3"
              onClick={() =>
                data.getOneData(
                  `/api/conferences/${
                    (router?.query && router?.query?.slug[1]) || null
                  }`
                )
              }>
              Reload
            </button>
          </div>
        </div>
      )}
      {oneData && <AddConference conference={oneData} />}
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

export default EditConference;
