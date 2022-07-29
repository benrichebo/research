import React from "react";
import Spinner from "../../components/ui/Spinner";
import { useFetch } from "../../hooks/useFetch";

function Account() {
  const { data, loading, error, oneData, id } = useFetch(`/api/members`);

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
              onClick={() => data.getOneData(`/api/members/${id}`)}>
              Reload
            </button>
          </div>
        </div>
      )}
      {oneData?.name && (
        <div className="my-3">
          <h5 className="d-flex justify-content-between">
            <span>Name:</span>
            <span>{oneData?.name}</span>
          </h5>
          <h5 className="d-flex justify-content-between">
            <span>Email:</span>
            <span>{oneData?.email}</span>
          </h5>
          <h5 className="d-flex justify-content-between">
            <span>City:</span>
            <span>{oneData?.city}</span>
          </h5>
          <h5 className="d-flex justify-content-between">
            <span>Role:</span>
            <span>{oneData?.role}</span>
          </h5>
        </div>
      )}
    </>
  );
}

export default Account;
