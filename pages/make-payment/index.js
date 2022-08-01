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
                <h3 className="pulse animated border-top border-3 border-primary pt-5">
                  Make payment
                </h3>
                <h5 className="">
                  To be a member, you need to make a &#8364; 100
                </h5>
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
