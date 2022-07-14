import React, { useEffect, useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useStorage } from "../../hooks/useStorage";
import { useUser } from "../../hooks/useUser";

function Settings() {
  //1. get user
  const { user, loading, error, postError, postLoading, message } = useUser("user");

  const { sessionStorage } = useStorage();

  //2.fetch user in session
  const userData = sessionStorage.getItem("user");

  const [name, setName] = useState(userData?.name || "");

  const [email, setEmail] = useState(userData?.email || "");

  const [city, setCity] = useState(userData?.city || "");

  //3. update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.updateUser({name, email, city})
  };

  if (loading) return "loading...";

  if (error) return "There is an error";

  return (
    <div className="col-md-9 col-lg-7">
      {postError && <p className="text-danger">{postError}</p>}
      {message && <p className="text-danger">{message}</p>}
      <form className="row" onSubmit={handleSubmit}>
        <div class="form-group mb-4">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            type="text"
            class="form-control rounded-0"
            name="email"
            id="email"
            aria-describedby="helpId"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group mb-4">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            class="form-control rounded-0"
            name="email"
            id="email"
            aria-describedby="helpId"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group mb-4">
          <label htmlFor="city" className="mb-2">
            City
          </label>
          <input
            type="text"
            class="form-control rounded-0"
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
    </div>
  );
}

export default Settings;
