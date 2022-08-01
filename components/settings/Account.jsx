import React, { useEffect, useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useUser } from "../../hooks/useUser";

function Account() {
  //1. get user
  const { user, loading, error, postError, postLoading, message, userData } =
    useUser("user");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [city, setCity] = useState("");

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
    </>
  );
}

export default Account;
