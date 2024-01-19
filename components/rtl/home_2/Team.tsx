import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";

const Team = () => {
    return (
      <div className="section--sm section--bottom team-section-1">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8 col-xxl-7">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> لدينا عدد كبير من أعضاء فريق الخبراء </span>
              <h2 className="mt-5 mb-5 text-center"> الفريق المذهل خلف شركتنا </h2>
              <p className="text-center mx-auto t-short-para"> يسعى فريقنا لمساعدة عملائنا في الاحتفاظ أو الحصول على أفضل المناصب في فئتهم القطاعات المعنية. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="row g-4 justify-content-center">
          <div className="col-sm-6 col-lg-3">
            <div className="team-card-1 text-center">
              <div className="team-card-1__img mx-auto">
                <img src="/images/team-5.png" alt="image" className="team-card-1__img-is" /> 
              </div>
              <div className="team-card-1__body mt-10">
                <h5 className="text-center"> بيسي كوبر </h5>
                <p className="text-center mt-1 mb-4 clr-accent"> مدير تكنولوجيا المعلومات </p>
                <ul className="list list-xs list-row justify-content-center">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="team-card-1 text-center">
              <div className="team-card-1__img mx-auto">
                <img src="/images/team-6.png" alt="image" className="team-card-1__img-is" /> 
              </div>
              <div className="team-card-1__body mt-10">
                <h5 className="text-center"> جيروم بيل </h5>
                <p className="text-center mt-1 mb-4 clr-accent"> مدير الخدمة </p>
                <ul className="list list-xs list-row justify-content-center">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="team-card-1 text-center">
              <div className="team-card-1__img mx-auto">
                <img src="/images/team-7.png" alt="image" className="team-card-1__img-is" /> 
              </div>
              <div className="team-card-1__body mt-10">
                <h5 className="text-center"> إيما ستون </h5>
                <p className="text-center mt-1 mb-4 clr-accent"> المدير العام </p>
                <ul className="list list-xs list-row justify-content-center">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="team-card-1 text-center">
              <div className="team-card-1__img mx-auto">
                <img src="/images/team-8.png" alt="image" className="team-card-1__img-is" /> 
              </div>
              <div className="team-card-1__body mt-10">
                <h5 className="text-center"> فلويد مايلز </h5>
                <p className="text-center mt-1 mb-4 clr-accent"> مساعد تنفيذي </p>
                <ul className="list list-xs list-row justify-content-center">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__gap-top">
        <div className="container">
          <div className="row g-4 justify-content-center justify-content-xl-between align-items-center">
            <div className="col-sm-11 col-md-7 col-xl-6 col-xxl-5">
              <h4 className="clr-light text-center text-md-start"> احصل على استشارة لمدة 15 دقيقة عبر سكايب أو تكبير! </h4>
            </div>
            <div className="col-md-5">
              <div className="text-center text-md-end">
                <Link href="contact-us-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center gap-2 fw-md"> لنتحدث الآن <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base"> headphones </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Team;