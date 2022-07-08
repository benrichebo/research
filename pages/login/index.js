import React, { useState } from "react";
import Layout from "../../components/Layout";
import TertiaryHeader from "../../components/TertiaryHeader";
import Email from "../../components/ui/Email";
import Password from "../../components/ui/Password";
import Spinner from "../../components/ui/Spinner";
import { useUser } from "../../hooks/useUser";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, message, user, error } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.loginWithEmailAndPassword({ email, password });
  };
  
  return (
    <Layout>
      <TertiaryHeader />
      <div className="container py-5 py-xl-5 my-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-6 col-lg-4 text-md-start d-sm-flex d-md-flex mx-auto">
            <div className="my-3 mx-auto">
              <h4 className="text-uppercase fw-bold">Welcome back</h4>
              <h5 className="fw-normal text-muted my-4">
                Ready for another experience
              </h5>
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-12 mb-4">
                  <label className="form-label" htmlFor="email">
                    Enter an email address
                  </label>
                  <Email setEmail={setEmail} />
                </div>
                <div className="col-12 mb-4">
                  <label className="form-label" htmlFor="password">
                    Enter your phone number
                  </label>
                  <Password setPassword={setPassword} />
                </div>
                {error && <p className="text-danger my-2">{error}</p>}
                <div className="my-3 d-grid">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading || !email || !password}>
                    {loading ? (
                      <Spinner className="ms-2" />
                    ) : (
                      <span className="">Submit</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
