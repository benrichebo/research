import React from 'react'

function Conferences() {
  return (
    <>
      <h5>Conferences</h5>
      <div className="row my-4">
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Albania</h5>
              <h6 className="text-muted card-subtitle mb-2">24th July</h6>
              <p className="card-text">
                International conference on business management and social
                innovation
              </p>
              <a className="text-decoration-none" href="#">
                Read more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conferences