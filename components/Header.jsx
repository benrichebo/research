import React from "react";
import Link from "next/link";

function Header() {
  return (
    <nav className="navbar navbar-light bg-white py-3 border-bottom">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand fs-5" href="#">
            Mason Research Institute
          </a>
        </Link>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler border-0"
          data-bs-target="#navcol-1">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav d-flex mx-auto ms-auto list-group-horizontal">
            <li className="nav-item">
              <Link href="/register">
                <a className="nav-link fs-5">Register as a member</a>
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link href="/login">
                <a className="nav-link fs-5">Login</a>
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link href="/papers">
                <a className="nav-link fs-5">Papers</a>
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link href="/conferences">
                <a className="nav-link fs-5" href="#">
                  Conferences
                </a>
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link href="/articles">
                <a className="nav-link fs-5" href="#">
                  Articles
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
