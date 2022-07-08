import React from 'react'

function PagesIntro({h1, p}) {
  return (
    <section>
      <div className="page-intro" data-bss-parallax-bg="true">
        <div class="container h-100">
          <div class="row h-100">
            <div
              class="col-md-6 text-center text-md-start text-white d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start justify-content-xl-center"
              style={{ background: "rgba(102,16,242,0.82)" }}>
              <div style={{ maxWidth: 350 }}>
                <h1 class="text-uppercase fw-bold">{h1}</h1>
                <p class="my-3">{p}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PagesIntro