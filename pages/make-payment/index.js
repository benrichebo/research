import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import CheckoutForm from "../../components/StripePay";

const MakePayment = () => {
  return (
    <>
      <Layout>
        <Header />
        <section className="py-5">
          <div className="container px-md-0 py-5">
            <div className="row">
              <div className="col-md-4">
                <h1 className="display-5 pulse animated border-top border-3 border-primary pt-5">
                  Make payment
                </h1>
                <h4 className="fw-normal">
                  To be a member, you need to make a USD 150
                </h4>
              </div>
              <div className="col-md-8 d-flex justify-content-center align-items-center pt-3 pt-lg-5 px-lg-5">
                <div>
                  <CheckoutForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default MakePayment;
