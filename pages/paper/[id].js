import React from "react";
import { MdFileDownload } from "react-icons/md";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

function Paper() {
  return (
    <>
      <Layout title="Paper">
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-md-8 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div class="col-md-12 col-lg-10 col-xl-9 mx-auto">
                <p className="small">PAPER</p>
                <h1
                  class="display-5 fs-3 pulse animated mb-3"
                  data-bss-disabled-mobile="true">
                  ESG Investment and private real estate returns
                </h1>
                <h6>PUBLISHER: JASON MASON</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="container py-4 py-xl-5">
          <div class="d-flex justify-content-center">
            <div class="col-md-10">
              <div class="mb-5">
                <p class="lead fs-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque dapibus felis et libero scelerisque, sed aliquet
                  nulla tincidunt. Quisque lorem nisl, semper vitae mattis nec,
                  vestibulum nec risus. Sed ut volutpat tortor, ut sodales diam.
                  Integer at tristique turpis. Integer orci leo, fringilla ac
                  aliquet vitae, condimentum non lorem. Duis velit ex, aliquam
                  vel pellentesque et, dictum vitae mauris. Vestibulum commodo
                  luctus tortor eu ultrices. Fusce commodo enim non eros
                  consectetur maximus. Donec venenatis dolor ut vestibulum
                  fermentum. Aliquam malesuada sit amet nulla id imperdiet.
                  Suspendisse maximus purus et ligula maximus, a luctus ante
                  fringilla.
                </p>
              </div>
              <div class="my-5">
                <a
                  class="btn btn-outline-primary rounded-0 btn-lg px-4"
                  href="#"
                  type="submit">
                  <span class="d-flex justify-content-center align-items-center">
                    <span>Download</span>
                    <MdFileDownload className="ms-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid pt-4 pt-xl-5">
          <div class="card-group row">
            <div class="card col-sm-6 col-md-3 mb-0 rounded-0 py-2 py-xl-4">
              <div class="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 class="text-primary card-title pb-4">ABOUT</h6>
                <div class="d-flex justify-content-between align-items-center">
                  <h5>More about our company</h5>
                  <i class="material-icons ms-3">arrow_forward</i>
                </div>
              </div>
            </div>
            <div class="card col-sm-6 col-md-3 mb-0 rounded-0 py-2 py-xl-4">
              <div class="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 class="text-primary card-title pb-4">PAPERS</h6>
                <div class="d-flex justify-content-between align-items-center">
                  <h5>Papers we have published</h5>
                  <i class="material-icons ms-3">arrow_forward</i>
                </div>
              </div>
            </div>
            <div class="card col-sm-6 col-md-3 mb-0 rounded-0 py-2 py-xl-4">
              <div class="card-body p-md-2 p-xl-3 p-xxl-5">
                <h6 class="text-primary card-title pb-4">CONTACT</h6>
                <div class="d-flex justify-content-between align-items-center">
                  <h5>Get in touch with us</h5>
                  <i class="material-icons ms-3">arrow_forward</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Paper;
