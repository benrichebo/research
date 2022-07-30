import React from "react";
import { useRouter } from "next/router";
import { MdError, MdInfo } from "react-icons/md";

function Error() {
  const router = useRouter();
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="fw-normal">There was an error loading content</h1>
        <div className="my-4">
          <MdError size={100} className="text-danger" />
        </div>
        <button className="btn btn-light btn-lg" onClick={() => router?.back()}>Go back</button>
      </div>
    </div>
  );
}

export default Error;
