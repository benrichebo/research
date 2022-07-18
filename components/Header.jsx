import React from "react";
import Link from "next/link";

function Header() {
  return (
    <nav className="navbar navbar-light bg-white py-3 border-bottom">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand " href="#">
            <span className="d-none d-md-block">
              Association of researches and planners
            </span>
            <span className="d-md-none">Logo</span>
          </a>
        </Link>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler border-0 p-0"
          data-bs-target="#navcol-1">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav d-flex mx-auto ms-auto list-group-horizontal-md">
            <li className="nav-item">
              <Link href="/contactus">
                <a className="nav-link p">Contact us</a>
              </Link>
            </li>
            <li className="nav-item ms-md-4">
              <Link href="/register">
                <a className="nav-link p">Register as a member</a>
              </Link>
            </li>
            <li className="nav-item ms-md-4">
              <Link href="/login">
                <a className="nav-link p">Login</a>
              </Link>
            </li>
            <li className="nav-item ms-md-4">
              <Link href="/membership">
                <a className="nav-link p">Membership</a>
              </Link>
            </li>
            <li className="nav-item ms-md-4">
              <Link href="/papers">
                <a className="nav-link p">Papers</a>
              </Link>
            </li>
            <li className="nav-item ms-md-4">
              <Link href="/conferences">
                <a className="nav-link p" href="#">
                  Conferences
                </a>
              </Link>
            </li>
            <li className="nav-item ms-md-4">
              <Link href="/articles">
                <a className="nav-link p" href="#">
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
