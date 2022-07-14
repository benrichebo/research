import React, { useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Email from "../../components/ui/Email";
import Password from "../../components/ui/Password";
import Spinner from "../../components/ui/Spinner";
import { useUser } from "../../hooks/useUser";
import { MdArrowForward } from "react-icons/md";
import Footer from "../../components/Footer";

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
      <section className="py-3">
        <div className="container px-md-0 py-md-3">
          <div className="row">
            <div className="col-md-4">
              <h1 className="display-6 fs-3 pulse animated border-top border-3 border-primary pt-3 heading">
                Welcome back
              </h1>
              <h5 className="fw-normal">Login</h5>
            </div>
            <div className="col-md-6 col-lg-5 pulse animated d-flex align-items-center pt-3 pt-lg-5 px-lg-5 mx-auto">
              <form
                className="row mt-md-4 mt-lg-5"
                onSubmit={handleSubmit}>
                <div className="col-md-12 mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <Email setEmail={setEmail} id="email" />
                </div>
                <div className="col-md-12 mb-4">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <Password setPassword={setPassword} />
                </div>
                {error && <p className="text-danger my-2">{error}</p>}
                <div className="py-3 d-md-flex justify-content-md-end d-grid">
                  <button
                    className="btn btn-outline-primary rounded-0 px-4"
                    type="submit"
                    disabled={loading || !email || !password}>
                    {loading ? (
                      <Spinner className="ms-2" />
                    ) : (
                      <span className="d-flex justify-content-center align-items-center">
                        <span>Login</span>
                        <MdArrowForward className="ms-3" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export default Login;
