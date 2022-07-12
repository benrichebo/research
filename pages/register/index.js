import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Email from "../../components/ui/Email";
import Text from "../../components/ui/Text";
import Spinner from "../../components/ui/Spinner";
import { useUser } from "../../hooks/useUser";
import Footer from "../../components/Footer";
import { MdArrowForward } from "react-icons/md";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [agree, setAgree] = useState("");
  const { user, loading, error } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //put user data in storage
    const data = {
      name,
      email,
      city,
      password,
      agree,
    };

    //go to stripe
    await user.signUpWithCredentials(data);
  };

  return (
    <Layout>
      <Header />
      <section className="py-5">
        <div className="container px-md-0 py-5">
          <div className="row">
            <div className="col-md-4">
              <h1 className="display-5 pulse animated border-top border-3 border-primary pt-5">
                Join us
              </h1>
              <h4 className="fw-normal">
                Be a member and be part of professionals in the filled of built
                environment
              </h4>
            </div>
            <div className="col-md-8 d-flex justify-content-center align-items-center pt-3 pt-lg-5 px-lg-5">
              <form
                className="pulse animated mt-md-4 mt-lg-5 row col-md-10"
                onSubmit={handleSubmit}>
                <div className="col-lg-6 mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <Text setText={setName} id="name" />
                </div>
                <div className="col-lg-6 mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <Email setEmail={setEmail} />
                </div>
                <div className="col-xl-6 mb-3">
                  <label className="form-label" htmlFor="city">
                    City
                  </label>

                  <Text setText={setCity} id="city" />
                </div>
                <div className="col-xl-6 mb-3">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <Text setText={setPassword} />
                </div>
                <div className="my-4">
                  <div className="card bg-light border-0">
                    <div className="card-body">
                      <h4 className="fw-normal card-title">Payment</h4>
                      <p className="lead card-text">
                        You need to make payment of $150 to become a member
                      </p>
                    </div>
                  </div>
                </div>
                {error && <p className="text-danger my-2">{error}</p>}
                <div className="d-xl-flex justify-content-xl-between py-3 d-grid">
                  <div className="form-check fs-5 mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="agree"
                      value="yes"
                      onChange={(e) => setAgree(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="agree">
                      You agree to our terms and conditions
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-primary rounded-0 btn-lg"
                    type="submit"
                    disabled={
                      loading || !name || !email || !password || !city || !agree
                    }>
                    {loading ? (
                      <Spinner className="ms-2" />
                    ) : (
                      <span className="d-flex justify-content-between align-items-center h-100">
                        <span>Register</span>
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

export default Register;
