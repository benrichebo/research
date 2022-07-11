import React, { useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Email from "../../components/ui/Email";
import Password from "../../components/ui/Password";
import Spinner from "../../components/ui/Spinner";
import { useUser } from "../../hooks/useUser";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, user, error } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.loginWithEmailAndPassword({ email, password });
  };

  return (
    <Layout>
      <Header />
      <section>
        <div className="container px-md-0 py-3 py-md-5">
          <div className="row">
            <div className="col-md-4">
              <h1
                className="display-5 pulse animated border-top border-3 border-primary pt-5"
                style="width: 100%;">
                Welcome back
              </h1>
              <h4 className="fw-normal">Login</h4>
            </div>
            <div className="col-md-7 col-lg-6 pulse animated d-flex align-items-center pt-3 pt-lg-5 px-lg-5 mx-auto">
              <form
                className="row mt-md-4 mt-lg-5 w-100"
                onSubmit={handleSubmit}>
                <div className="col-md-12 mb-3">
                  <label className="form-label" for="email">
                    Email
                  </label>
                  <Email setEmail={setEmail} />
                </div>
                <div className="col-md-12 mb-4">
                  <label className="form-label" for="email">
                    Password
                  </label>
                  <Password setPassword={setPassword} />
                </div>
                {error && <p className="text-danger my-2">{error}</p>}
                <div className="py-3 d-md-flex justify-content-md-between d-grid">
                  <p className="text-danger">There was an internal error</p>
                  <a
                    className="btn btn-outline-primary rounded-0 btn-lg px-4"
                    type="submit"
                    disabled={loading || !email || !password}>
                    {loading ? (
                      <Spinner className="ms-2" />
                    ) : (
                      <span className="d-flex justify-content-center align-items-center">
                        <span>Login</span>
                        <i className="material-icons ms-3">arrow_forward</i>
                      </span>
                    )}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
