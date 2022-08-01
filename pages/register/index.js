import React, { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Email from "../../components/ui/Email";
import Text from "../../components/ui/Text";
import Spinner from "../../components/ui/Spinner";
import { useUser } from "../../hooks/useUser";
import Footer from "../../components/Footer";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

const checkPasswordLength = (password) => {
  console.log(password);
  //check lower case
  const isLowercase = password.match(/[a-z]/g);
  const isUppercase = password.match(/[A-Z]/g);
  const isNumbers = password.match(/[0-9]/g);
  const isLengthNotValid = password?.length >= 9;

  if (isLowercase) {
    console.log(true);
  }

  if (password?.length > 0)
    if (isLengthNotValid || !isLowercase || !isUppercase || !isNumbers) {
      return true;
    }
};

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [agree, setAgree] = useState("yes");
  const { user, loading, error } = useUser();

  const isPasswordValid = useMemo(
    () => checkPasswordLength(password),
    [password]
  );

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

    console.log(data)

    //go to stripe
    //await user.signUpWithCredentials(data);
  };

  return (
    <Layout>
      <Header />
      <section className="py-3">
        <div className="container px-md-0 py-3">
          <div className="row">
            <div className="col-md-4">
              <h3 className="pulse animated border-top border-3 border-primary pt-3">
                Join us
              </h3>
              <p>
                Be part of the growing community of Research Intellectuals and
                enjoy numerous advantages of an association{" "}
                <Link href="/">
                  <a className="text-decoration-none">Read more...</a>
                </Link>
              </p>
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
                  {isPasswordValid && (
                    <p className="small text-danger mt-2">
                      Password should be 8 in characters with uppercase and lowercase
                      letters and numbers
                    </p>
                  )}
                </div>
                <div className="my-4">
                  <div className="card bg-light border-0">
                    <div className="card-body">
                      <h5 className="fw-normal card-title">Payment</h5>
                      <p className="card-text">
                        You need to make payment of &#8364; 100 to become a
                        member
                      </p>
                    </div>
                  </div>
                </div>
                {error && <p className="text-danger my-2">{error}</p>}
                <div className="d-xl-flex justify-content-xl-between py-3 d-grid">
                  <div className="form-check  mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="agree"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                    />
                    <label className="form-check-label small" htmlFor="agree">
                      You agree to our terms and conditions
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-primary rounded-0"
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
