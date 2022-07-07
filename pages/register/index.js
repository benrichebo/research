import React from "react";
import Layout from "../../components/Layout";
import TertiaryHeader from "../../components/TertiaryHeader";
import Email from "../../components/ui/Email";
import Text from "../../components/ui/Text";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [agree, setAgree] = useState("");
  const { loading, message, user, error } = useUser();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.signUpWithCredentials(
      { name, email, city, password, item: { id: "", quantity: 1 } },
      "/api/account/signup"
    );
    message && router.push("/dashboard/home");
  };

  return (
    <Layout>
      <TertiaryHeader />
      <div className="container py-5 py-xl-5 my-5">
        <form className="row gy-4 gy-md-0" onSubmit={handleSubmit}>
          <div className="col-md-8 text-md-start d-sm-flex d-md-flex mx-auto">
            <div className="my-3">
              <h4 className="text-uppercase fw-bold">Register as a member</h4>
              <h5 className="fw-normal text-muted my-4">
                Our noble experts are all at one place sharing ideas together.
                Join us make a difference in the world.
              </h5>
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-12 mb-4">
                  <label className="form-label" htmlFor="name">
                    Enter your full name
                  </label>
                  <Text setText={setName} id="name" />
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <label className="form-label" htmlFor="email">
                    Enter an email address
                  </label>
                  <Email setEmail={setEmail} />
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <label className="form-label" htmlFor="city">
                    City
                  </label>
                  <Text setText={setCity} id="city" />
                </div>
                <div className="col-12 mb-4">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <Text setText={setPassword} id="password" />
                </div>
                <div>
                  <div className="form-check">
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
                </div>
                {error && <p className="text-danger my-2">{error}</p>}
                <div className="my-3 d-grid">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={
                      loading || !name || !email || !password || !city || !agree
                    }>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
