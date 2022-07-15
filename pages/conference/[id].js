import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

function Conference() {
  return (
    <>
      <Layout title="Conferences">
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-md-8 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <div class="col-md-12 col-lg-10 col-xl-9 mx-auto">
                <p className="small">ARTICLE</p>
                <h1
                  class="display-5 fs-3 pulse animated my-3"
                  data-bss-disabled-mobile="true">
                  Energy efficiency and its benefits
                </h1>
                <h6>AUTHOR: JASON MASON</h6>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-center pt-5 pb-3 pb-md-5">
              <img class="img-fluid" src="/images/wind.jpg" />
            </div>
          </div>
        </div>
        <div class="container py-4 py-xl-5">
          <div class="d-flex justify-content-center">
            <div class="col-md-10">
              <p class="lead fs-5">
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
                et ligula maximus, a luctus ante fringilla.
              </p>
              <div class="my-4">
                <img src="/images/energy-effeciency.jpg" />
              </div>
              <p class="lead fs-5">
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
                et ligula maximus, a luctus ante fringilla.In vitae velit risus.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Phasellus tincidunt venenatis mi quis
                congue. Cras eu leo nisi. Ut ornare nisi eget sapien dapibus, eu
                ornare dolor egestas. Donec venenatis neque lacus, nec mollis
                odio fermentum a. Maecenas at elit sed diam elementum varius
                mollis vel arcu. Praesent ornare nisl mi, et posuere purus
                viverra sed. Sed a lacus nec lorem tincidunt condimentum. Nulla
                eu tellus pulvinar, tristique metus a, sodales nibh. Ut magna
                nisi, laoreet id lacus non, cursus bibendum tortor. Sed pretium
                elit erat. In non pretium nulla.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Conference;
