import React, { useState } from "react";
import Email from "../../components/ui/Email";
import Spinner from "../../components/ui/Spinner";
import Text from "../../components/ui/Text";
import Name from "../../components/ui/";
import { useUser } from "../../hooks/useUser";

function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const { user, loading, error } = useUser();
  const [page, setPage] = useState("account");

   const handleSubmit = async (e) => {
     e.preventDefault();
     //put user data in storage
     const data = {
       name,
       email,
       city
     };

     //go to stripe
     await user.updateUser(data);
   };

  return (
    <>
      <h5>Settings</h5>
      <div className="d-flex justify-content-start my-3">
        <a
          type="button"
          className={`fs-6 text-decoration-none text-black ${
            page != "account" && "text-muted"
          }`}
          onClick={() => setPage("account")}>
          Account
        </a>
        <a
          type="button"
          className={`ms-4 fs-6 text-decoration-none text-black ${
            page != "payment" && "text-muted"
          }`}
          onClick={() => setPage("payment")}>
          Subscription
        </a>
      </div>

      <div className="row mb-4">
        {page == "account" ? (
          <form className="col-md-6" onSubmit={handleSubmit}>
            <div className="col-12 mb-4">
              <label className="form-label" htmlFor="name">
                Full name
              </label>
              <Name setText={setName} id="name" />
            </div>
            <div className="mb-3">
              <h5 className="fw-normal text-muted my-4"></h5>
              <div className="row">
                <div className="col-12 col-md-6 mb-4">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <Email setEmail={setEmail} id="email" />
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <label className="form-label" htmlFor="city">
                    City
                  </label>

                  <Text setText={setCity} id="city" />
                </div>
                {error && <p className="text-danger my-2">{error}</p>}
                <div className="my-3 d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">
                    {loading ? <Spinner /> : <span className="">Save</span>}
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <>
            <div className="col-sm-6 col-lg-4">
              <div className="card rounded-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="card-title">Membership</h6>
                    <h6 className="card-title text-muted">July 26, 2022</h6>
                  </div>
                  <h6>Amount: USD 150</h6>
                  <h6 className="text-muted card-subtitle mb-2">
                    Method: Card
                  </h6>
                  <span className="badge rounded-pill bg-primary">Pending</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card rounded-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="card-title">Membership</h6>
                    <h6 className="card-title text-muted">July 26, 2022</h6>
                  </div>

                  <h6>Amount: USD 150</h6>
                  <h6 className="text-muted card-subtitle mb-2">
                    Method: Card
                  </h6>
                  <span className="badge rounded-pill bg-success">
                    Approved
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Settings;
