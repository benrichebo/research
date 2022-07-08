import React from "react";
import Link from "next/link";

function TertiaryHeader() {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white border-bottom">
        <div className="container">
          <a className="navbar-brand fs-5" href="#">
            Mason Research Institute
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler border-0"
            data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/conferences">
                  <a className="nav-link">Conferences</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/papers">
                  <a className="nav-link">Papers</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/articles">
                  <a className="nav-link">Articles</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link">Register as a member</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link px-3">Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TertiaryHeader;
