import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import TertiaryHeader from "../../components/TertiaryHeader";
import { useStorage } from "../../hooks/useStorage";
import { MdCheckCircle, MdCopyAll } from "react-icons/md";
import Spinner from "../../components/ui/Spinner";
import { useCrud } from "../../hooks/useCrud";

function Register() {
  const { data, loading, postError, message } = useCrud();

  const router = useRouter();

  console.log(router?.query);

  const handleNavigation = async () => {
    const result = { id: router?.query?.id };
    await data.addData(result, "/api/payments/create");
    message && router.push("/dashboard/payments");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(router?.query?.id);
    console.log(router?.query?.id);
  };

  return (
    <Layout>
      <TertiaryHeader />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="">
          <div className="my-3 text-center">
            <MdCheckCircle size={200} className="text-success" />
            <div className="my-5">
              <h4 className="">
                You have successfully registered and made payment
              </h4>
              <h5 className="text-muted my-3">Copy this code</h5>
              <pre className="d-flex justify-content-between bg-light p-3 rounded-2 h5">
                <code>{router?.query?.id}</code>
                <a type="button" className="ms-3" title="copy to clipboard" onClick={copyToClipboard}><MdCopyAll /></a>
              </pre>
            </div>
            {postError && <p>{postError}</p>}
            <div className="my-3">
              <a
                className="btn btn-primary"
                type="button"
                onClick={handleNavigation}>
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
