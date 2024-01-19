import Link from "next/link";
import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import CoreValue from "@/components/CoreValue";
import Navbar from "@/components/Navbar";
import { useEffect } from 'react';
import Footer from "@/components/home_4/Footer";

const service_details_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/service-details-1" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Services Details - 01 </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Services{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Services Details - 01{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}
      <div className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-7 col-xl-5">
              <h2> Web Development Services </h2>
            </div>
            <span className="w-100"></span>
            <div className="col-md-6">
              <p>
                {" "}
                We are a web development company. We provide JavaScript and PHP
                Development. Let us help you build a great product by using
                frameworks like Symfony, Laravel, React, Vue.js, Node.js.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p className="mb-8">
                {" "}
                We have gathered strong experience in creating cutting-edge web
                applications. By using the best web development technologies and
                the right tools, our team can develop a product with a perfect
                market fit. Building a product is a complex process, and we will
                assist you during every step of this journey, from visualizing
                your idea to creation and app maintenance.{" "}
              </p>
              <Link
                href="contact-us-1"
                className="bttn gap-2 bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                {" "}
                Start Project{" "}
                <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                  {" "}
                  arrow_forward{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section">
        <div className="service-section__content bg-base-800">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5 z-1">
                <ul className="list list-row flex-wrap gap-6 mb-8">
                  <li className="d-flex align-items-center gap-3">
                    <img
                      src="/images/icon-73.png"
                      alt="image"
                      className="img-fluid flex-shrink-0"
                    />
                    <h6 className="clr-accent"> Here since 2010 </h6>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <img
                      src="/images/icon-74.png"
                      alt="image"
                      className="img-fluid flex-shrink-0"
                    />
                    <h6 className="clr-accent"> Verified Partner </h6>
                  </li>
                </ul>
                <p className="clr-light mb-8 xxl-text">
                  {" "}
                  Are you a startup brand, well established company, in the UK
                  or worldwide? It doesn't matter. We work with a range of
                  clients.{" "}
                </p>
                <p className="clr-light mb-5">
                  {" "}
                  We know it’s hard for brands to setup an online experience,
                  and budgets can be tight. We like to help new brands grow and
                  work in a long term relationship.{" "}
                </p>
                <p className="clr-light mb-5">
                  {" "}
                  And we also have the experience of designing, building,
                  testing and launching websites for large global organisations.
                  We can be an extension of your in-house marketing team or take
                  advantage of our expert team to be your complete digital{" "}
                </p>
                <p className="clr-light mb-12">
                  {" "}
                  And we also have the experience of designing, building,
                  testing and launching websites for large global organisations.
                  We can be an extension of your in-house marketing team or take
                  advantage of our expert team to be your complete digital{" "}
                </p>
                <Link
                  href="contact-us-1"
                  className="bttn gap-2 bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                  {" "}
                  Schedule a call{" "}
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-base-800">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-5">
                <h4 className="text-center clr-light">
                  {" "}
                  We use the latest technologies available to create timeless
                  designs.{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-1.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Android </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-2.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Codeignitor </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-3.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Flutter </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-4.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Nodejs </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-5.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Python </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-6.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> React </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-7.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Swift </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-8.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Angular </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-9.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> C Sharp </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-10.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Java </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-11.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Windows </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img
                    src="/images/brand-icon-12.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> Laravel </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <h2 className="text-center">
                  {" "}
                  We approach every project with a clear vision.{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="section__gap-bottom pb-lg-0">
                  <img
                    src="/images/service-img-9.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <h4 className="mb-5">
                  {" "}
                  We like to remove the 'waffle' and design beautiful, easy to
                  use websites that are functional.{" "}
                </h4>
                <p>
                  {" "}
                  We don't just build pretty websites. Here at MadeByShape we
                  understand all aspects of a successful site from design
                  through web development and testing, to SEO and Hosting. We
                  tailor our service to the client and the project requirement.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="section__gap-bottom pb-lg-0">
                <h4 className="mb-5">
                  {" "}
                  We handle every project in-house, we don't outsource.{" "}
                </h4>
                <p>
                  {" "}
                  We don't just build pretty websites. Here at MadeByShape we
                  understand all aspects of a successful site from design
                  through web development and testing, to SEO and Hosting. We
                  tailor our service to the client and the project requirement.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/service-img-10.png"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section pb-0 service-section-2">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-9">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Professional Web Development Services{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  A team of web design experts that can help you design and
                  build a website you’re proud of{" "}
                </h2>
                <p className="text-center mx-auto max-text-70">
                  {" "}
                  We have gathered strong experience in creating cutting-edge
                  web applications. By using the best web development
                  technologies and the right tools, our team can develop a
                  product with a perfect market fit. Building a product is a
                  complex process, and we will assist you during every step of
                  this journey, from visualizing your idea to creation and app
                  maintenance.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6">
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-78.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  B2B, B2C, Internal Platforms Development Services{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Web development services - build with us any B2B/B2C/internal
                  platform and let your business scale.{" "}
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-79.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  Backend Development - JavaScript, PHP{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Build your backend as REST API with JavaScript (Node.js,
                  Express) or PHP (Symfony, Laravel).{" "}
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="help-card help-card--hover-base text-center bg--white border-0 t-shadow">
                <img
                  src="/images/icon-80.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5">
                  {" "}
                  Frontend Development - React, Vue.js{" "}
                </h5>
                <p className="mb-8">
                  {" "}
                  Stunning user experience. Build frontend of your application
                  with trusted and loved by millions technologies - React and
                  Vue.js..{" "}
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Latest Projects --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container-md">
            <div className="row g-4 align-items-xl-end">
              <div className="col-xl-6">
                <span className="d-block h5 lh-1 fw-semibold">
                  {" "}
                  Our Latest Works For Your Business{" "}
                </span>
                <h2> Latest Case Studies </h2>
              </div>
              <div className="col-xl-6">
                <ul className="list list-row flex-wrap justify-content-xl-end list--divider list-group">
                  <li>
                    <Link
                      className="tab-button active"
                      id="list-home-list"
                      data-bs-toggle="list"
                      href="#web-design">
                      {" "}
                      Web Design{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-profile-list"
                      data-bs-toggle="list"
                      href="#technology">
                      {" "}
                      Technology{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-messages-list"
                      data-bs-toggle="list"
                      href="#cyber">
                      {" "}
                      Cyber{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-settings-list"
                      data-bs-toggle="list"
                      href="#software">
                      {" "}
                      Software{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-restricted">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="web-design">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-1.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-2.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-3.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-4.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="technology">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link href="#" className="case-studies-1__link">
                          <img
                            src="/images/case-img-4.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-3.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-2.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-1.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="cyber">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-1.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-2.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-3.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-4.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="software">
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-4.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-3.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-2.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="case-studies-1">
                        <Link
                          href="case-study-details-1"
                          className="case-studies-1__link">
                          <img
                            src="/images/case-img-1.png"
                            alt="image"
                            className="case-studies-1__img"
                          />
                        </Link>
                        <div className="case-studies-1__content">
                          <div className="group group-xxs flex-grow-1">
                            <h5>
                              <Link
                                href="case-study-details-1"
                                className="t-link clr-heading :clr-base">
                                {" "}
                                UI/UX Strategy{" "}
                              </Link>
                            </h5>
                            <span className="d-block"> IT Consulting </span>
                          </div>
                          <Link
                            href="case-study-details-1"
                            className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                            <span className="material-symbols-rounded mat-icon fw-100">
                              {" "}
                              east{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial --> */}
      <Feedback_3 />
      {/* <!-- Team Core Value --> */}
      <CoreValue />
      {/* <!-- Let's Talk --> */}
      <Letstalk />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default service_details_1;
