import Link from "next/link";
import React, { useEffect, useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";
import { useUser } from "../../hooks/useUser";

const Payment = ({ userData }) => {
  const { data, loading, oneData, error } = useCrud(
    "one-payment",
    `/api/payments/stripe/payments/${userData?.id}`
  );

  return (
    <>
      <h4>Payment</h4>
      {loading && !error && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner />
        </div>
      )}

      {error && !loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading payment details</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() =>
                data.getOneData(`/api/payments/stripe/payments/${userData?.id}`)
              }>
              Reload
            </button>
          </div>
        </div>
      )}
      {oneData && oneData?.status != "paid" && (
        <>
          <p>You have not payed your dues</p>
          <Link href="/make-payment">
            <a className="btn btn-primary my-3">Make payment</a>
          </Link>
        </>
      )}
      {oneData && oneData?.status == "paid" && (
        <>
          <p>You have payed your dues</p>
          <p>{oneData?.amount}</p>
        </>
      )}
    </>
  );
};

function Settings() {
  //1. get user
  const { user, loading, error, postError, postLoading, message, userData } =
    useUser("user");

  const [name, setName] = useState(userData?.name || "");

  const [email, setEmail] = useState(userData?.email || "");

  const [city, setCity] = useState(userData?.city || "");

  useEffect(() => {
    setName(userData?.name);
    setEmail(userData?.email);
    setCity(userData?.city);
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.updateUser({ name, email, city });
  };

  const deleteAccount = async (e) => {
    e.preventDefault();
    await user.updateUser({ name, email, city });
  };

  if (loading) return "loading...";

  if (error) return "There is an error";

  return (
    <>
      <div className="col-md-9 col-lg-7">
        <h4>Account</h4>
        {postError && <p className="text-danger">{postError}</p>}
        {message && <p className="text-success">{message}</p>}
        <form className="row mb-4" onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              name="name"
              id="name"
              aria-describedby="helpId"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              name="email"
              id="email"
              aria-describedby="helpId"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="city" className="mb-2">
              City
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              name="city"
              id="city"
              aria-describedby="helpId"
              placeholder=""
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="d-grid my-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={postLoading || !email || !name || !city}>
              {postLoading ? <Spinner /> : <span className="ms-3">Save</span>}
            </button>
          </div>
        </form>
        {userData?.id && <Payment userData={userData} />}
      </div>
    </>
  );
}

export default Settings;
