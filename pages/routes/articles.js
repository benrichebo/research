import React from "react";

function Articles() {
  return (
    <>
      <h5>Articles</h5>
      <div class="row my-4">
        <div class="col-sm-6 col-lg-4">
          <div class="d-flex justify-content-start">
            <div>
              <img
                class="img-fluid"
                width="250"
                height="250"
                src="assets/img/139855119_1100169067091999_8429686186357152647_n.jpg"
                alt="image"
              />
            </div>
            <div class="ms-3">
              <h6>ESG Investment and private real estate returns</h6>
              <h6 class="text-muted mb-2">Date: 24th July, 2022</h6>
              <a class="fs-6 text-decoration-none" href="#">
                Read more...
              </a>
            </div>
          </div>
        </div>
      </div>


      <div class="row mb-4">
        <div
          class="col d-flex justify-content-center align-items-center bg-light"
          style={{ height: 300 }}>
          <div class="text-center">
            <i class="material-icons fs-1 text-muted text-muted">
              picture_as_pdf
            </i>
            <p>There is no article</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
