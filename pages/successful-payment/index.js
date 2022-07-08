import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import TertiaryHeader from "../../components/TertiaryHeader";
import { useStorage } from "../../hooks/useStorage";
import { useUser } from "../../hooks/useUser";
import { MdCheckCircle } from "react-icons/md";
import Spinner from "../../components/ui/Spinner";

function Register() {
  const { sessionStorage } = useStorage("session");
  const { user, error, loading } = useUser();

  const handleSubmit = async () => {
    //put user data in storage
    const data = sessionStorage.getItem("form-data");
    user.signUpWithCredentials(data);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <Layout>
      <TertiaryHeader />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-7 col-lg-6">
          <div className="my-3 text-center">
            <MdCheckCircle size={200} className="text-success" />
            <div className="my-5">
              <h4 className="">You have successfully made payment</h4>
              <h5 className="text-muted">You will be redirected soon</h5>
            </div>
            {error && <p className="text-danger my-2">{error}</p>}
            {loading && <Spinner className="my-3" />}
            <div className="my-3">
              <button className="btn btn-primary" type="button">
                Redirect
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
