import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-1">
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-info__content">
                <div className="group group-row group-sm align-items-center">
                  <div className="icon-box icon-box--lg circle bg-secondary flex-shrink-0">
                    <img
                      src="/images/icon-15.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="group group-xxs flex-grow-1">
                    <h5>Address</h5>
                    <p>457,Gourandai Los Angeles,USA</p>
                  </div>
                </div>
                <div className="group group-row group-sm align-items-center">
                  <div className="icon-box icon-box--lg circle bg-secondary flex-shrink-0">
                    <img
                      src="/images/icon-16.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="group group-xxs flex-grow-1">
                    <h5>Call Us On</h5>
                    <p>+7 (903) 880-91-85</p>
                  </div>
                </div>
                <div className="group group-row group-sm align-items-center">
                  <div className="icon-box icon-box--lg circle bg-secondary flex-shrink-0">
                    <img
                      src="/images/icon-17.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="group group-xxs flex-grow-1">
                    <h5>Email Us</h5>
                    <p>demo@mail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-1__content">
        <div className="section">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-xl-3 order-md-1">
                <Link href="/" className="logo mb-6">
                  <img
                    src="/images/logo-color.png"
                    alt="image"
                    className="logo__img"
                  />
                </Link>
                <p className="mb-6 clr-light t-short-para">
                  {" "}
                  We Deal With Aspects Professional IT Services.We Increasing
                  Business Success With Technology.Making IT A Part Of Your
                  Business.Excellent IT Services.{" "}
                </p>
                <ul className="list list-xs list-row">
                  <li>
                    <Link
                      href="#"
                      className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-xl-2 order-md-3">
                <h5 className="clr-light mb-10"> It Services </h5>
                <ul className="list list-xsm">
                  <li>
                    <Link
                      href="about-us-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="service-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Service{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="case-study-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Case Study{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="pricing-plan-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Pricing Plan{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="choose-us-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Why Choose Us{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-xl-2 order-md-4">
                <h5 className="clr-light mb-10"> Support </h5>
                <ul className="list list-xs">
                  <li>
                    <Link
                      href="contact-us-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="leadership"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Leadership Page{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="facts-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Facts{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="faq-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      FAQ{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="help-center"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Help Center{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 col-xl-2 order-md-5">
                <h5 className="clr-light mb-10"> Quick Link </h5>
                <ul className="list list-xs">
                  <li>
                    <Link
                      href="referral"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Referral{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="coming-soon"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Coming Soon{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="terms-condition"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Terms & Condition{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog-page-1"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      Newsletter{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="error"
                      className="t-link clr-light :clr-accent">
                      {" "}
                      404{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-xl-3 order-md-2 order-xl-5">
                <h5 className="clr-light mb-10"> Newsletter </h5>
                <p className="clr-light mb-5 t-short-para">
                  {" "}
                  Need more information?Subscribe to Newsletter & Get Update and
                  News{" "}
                </p>
                <div className="newsletter-1 align-items-start">
                  <input
                    type="text"
                    className="newsletter-1__input"
                    placeholder="Enter your email address"
                  />
                  <button className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md gap-2">
                    <span className="d-inline-block"> Subscribe </span>
                    <span className="material-symbols-rounded mat-icon fw-300">
                      {" "}
                      arrow_right_alt{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-1__bottom">
                <div className="row g-4 justify-content-center align-items-center">
                  <div className="col-lg-6">
                    <p className="clr-light text-center text-lg-start">
                      {" "}
                      Copyright 2023 Itechex All Rights Reserved.{" "}
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list list-row list--divider flex-wrap justify-content-center justify-content-lg-end">
                      <li>
                        <Link
                          href="terms-condition"
                          className="t-link d-inline-block clr-light :clr-accent">
                          {" "}
                          Terms & Condition{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="faq-1"
                          className="t-link d-inline-block clr-light :clr-accent">
                          {" "}
                          FAQ{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="help-center"
                          className="t-link d-inline-block clr-light :clr-accent">
                          {" "}
                          Help Center{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
