import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import TertiaryHeader from "../../components/TertiaryHeader";
import { useStorage } from "../../hooks/useStorage";
import { MdCheckCircle } from "react-icons/md";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function Register() {
  const { sessionStorage } = useStorage();
  const result = sessionStorage.getItem("payment-success");
  const { data, loading, error, message } = useCrud();

  const [navigate, setNavigate] = useState(false);

  const router = useRouter();

  const handleNavigation = async () => {
    await data.addData(result, "/api/payments/create");
  };

  useEffect(() => {
    if (result) {
      handleNavigation();
      message && router.push("/dashboard/payments");
    }
  }, [navigate]);

  return (
    <Layout>
      <TertiaryHeader />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-7 col-lg-6">
          <div className="my-3 text-center">
            <MdCheckCircle size={200} className="text-success" />
            <div className="my-5">
              <h4 className="">
                You have successfully registered and made payment
              </h4>
              <h5 className="text-muted">Write this code down</h5>
              <h5 className="text-muted">You will be redirected soon</h5>
            </div>
            {error && <p>{error}</p>}
            <div className="my-3">
              <a
                className="btn btn-primary"
                type="button"
                onClick={() => setNavigate(true)}>
                {loading ? <Spinner /> : "Go to dashboard"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
