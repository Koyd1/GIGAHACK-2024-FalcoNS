import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      {/* Header Inner */}
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                {/* Start Logo */}
                <div className="flex justify-center">
                  <Link href="/">
                    <img src="/img/invitro.png" alt="Logo" className="mr-3.5 ml-3.5 mt-3.5 mb-3.5 w-52"/>
                  </Link>
                </div>
                {/* End Logo */}
                {/* Mobile Nav */}
                <div className="mobile-nav"></div>
                {/* End Mobile Nav */}
              </div>
              <div className="col-lg-7 col-md-9 col-12">
                {/* Main Menu */}
                <div className="main-menu ml-3.5">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active">
                        <Link href="#">
                          Home <i className="icofont-rounded-down"></i>
                        </Link>
                        <ul className="dropdown">
                          <li>
                            <Link href="/">Home Page 1</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="#">Doctors</Link>
                      </li>
                      <li>
                        <Link href="#">Investigations</Link>
                      </li>
                      <li>
                        <Link href="#">
                          Analyses <i className="icofont-rounded-down"></i>
                        </Link>
                        <ul className="dropdown">
                          <li>
                            <Link href="/404">404 Error</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="#">
                          Blogs <i className="icofont-rounded-down"></i>
                        </Link>
                        <ul className="dropdown">
                          <li>
                            <Link href="/blog-single">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/*/ End Main Menu */}
              </div>
              <div className="col-lg-2 col-12">
                <div className="get-quote">
                  {/*<Link href="/appointment" className="btn">*/}
                  {/*  Book Appointment*/}
                  {/*</Link>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Header Inner */}
    </header>
  );
};

export default Header;
