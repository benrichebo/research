import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

function Article() {
  return (
    <>
      <Layout title="Articles">
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-md-8 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div class="col-md-12 col-lg-10 col-xl-9 mx-auto">
                <h6>CONFERENCE</h6>
                <h1
                  class="display-5 pulse animated my-3"
                  data-bss-disabled-mobile="true">
                  Investment in real estate
                </h1>
                <h5>COUNTRY: JASON MASON</h5>
                <h5 class="text-muted">DATE: 20TH JULY 2022</h5>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <img
                class="img-fluid"
                src="/images/sincerely-media-dGxOgeXAXm8-unsplash.jpg"
              />
            </div>
          </div>
        </div>
        <div class="container py-4 py-xl-5">
          <div class="d-flex justify-content-center">
            <div class="col-md-10">
              <p class="lead fs-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque dapibus felis et libero scelerisque, sed aliquet
                nulla tincidunt. Quisque lorem nisl, semper vitae mattis nec,
                vestibulum nec risus. Sed ut volutpat tortor, ut sodales diam.
                Integer at tristique turpis. Integer orci leo, fringilla ac
                aliquet vitae, condimentum non lorem. Duis velit ex, aliquam vel
                pellentesque et, dictum vitae mauris. Vestibulum commodo luctus
                tortor eu ultrices. Fusce commodo enim non eros consectetur
                maximus. Donec venenatis dolor ut vestibulum fermentum. Aliquam
                malesuada sit amet nulla id imperdiet. Suspendisse maximus purus
                et ligula maximus, a luctus ante fringilla
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Article;
