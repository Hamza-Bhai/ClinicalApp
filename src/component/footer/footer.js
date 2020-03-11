import React from "react";
import Style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={Style.footercs}>
      <div className="container pt-5 ">
        <div className="row pt-3">
          <div className="col-6 col-md-3">
            <h6 className={Style.linkcs}>MENU LINKS</h6>
            <div className={Style.anccs}>
              <a href="#">About</a>
              <a href="#">Service</a>
              <a href="#">Portfolio</a>
              <a href="#">Team</a>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <h6 className={Style.linkcs}>WEBSITE LINKS</h6>
            <div className={Style.anccs}>
              <a href="#">Blog</a>
              <a href="#">Blog Detail</a>
              <a href="#">Email Template</a>
              <a href="#">Time LIne</a>
              <a href="#">404</a>
              <a href="#">Coming Soon</a>
            </div>
          </div>
          <div className="col-6 col-md-3 pt-4 pt-md-0">
            <h6 className={Style.linkcs}>SHOPPING</h6>
            <div className={Style.anccs}>
              <a href="#">Ecommerce</a>
              <a href="#">Ecommerce Singlr</a>
              <a href="#">Ecommercer Cart</a>
            </div>
          </div>
          <div className="col-6 col-md-3 pt-4 pt-md-0">
            <h6 className={Style.linkcs}>ACCOUNT</h6>
            <div className={Style.anccs}>
              <a href="#">Contact Us</a>
              <a href="#">Book Appointment</a>
              <a href="#">Login</a>
              <a href="#">Regiter</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className={Style.socialicn}>
          <a id={Style.icface} href="#" className={Style.icnf}>
            <i className="fa fa-facebook-f"></i>
          </a>
          <a id={Style.ictwit} href="#" className={Style.icn}>
            <i className="fa fa-twitter"></i>
          </a>
          <a id={Style.icinsta} href="#" className={Style.icn}>
            <i className="fa fa-instagram"></i>
          </a>
          <a id={Style.icgoogle} href="#" className={Style.icng}>
            <i className="fa fa-google-plus"></i>
          </a>
          <a id={Style.icpint} href="#" className={Style.icn}>
            <i className="fa fa-pinterest-p"></i>
          </a>
        </div>
        <p className={Style.paracs}>
          © 2019 Clinical. All rights reserved. Design by W3layouts
        </p>
      </div>
    </footer>
  );
}
