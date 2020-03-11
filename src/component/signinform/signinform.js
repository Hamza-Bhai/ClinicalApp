import React from "react";
import Style from "./signinform.module.css";
export default function Signinform() {
  return (
    <div>
      <div className={Style.maindiv}>
        <form>
          <div>
            <h4>
              <b> Log in to continue</b>
            </h4>
            <div className="d-flex">
              <div className={Style.icn1}>
                <i className="fa fa-envelope"></i>
              </div>
              <input
                type="text"
                placeholder="Username"
                className={Style.name}
              />
            </div>
            <div className="d-flex">
              <div className={Style.icn2}>
                <i class="fa fa-lock mt-1"></i>
              </div>
              <input
                type="password"
                placeholder="Password"
                className={Style.name}
              />
            </div>
          </div>
          <div className="pt-5 d-flex justify-content-between">
            <label className={Style.main}>
              <input type="checkbox" />
              Remember me
              <span className={Style.checkmark}></span>
            </label>
            <div className={Style.but_read}>Login</div>
          </div>
          <div className="mt-4 mb-4">
            <a className={Style.anc} rel="canonical" href="#">
              Forgot Password?
            </a>
          </div>
          <div className={Style.divider}>
            <span></span>
            <span>
              <b>Or</b>
            </span>
            <span></span>
          </div>
          <div className="container pb-5">
            <div className={Style.socialicn}>
              <a id={Style.icface} href="#" className={Style.icnf}>
                <i className="fa fa-facebook-f"></i>
              </a>
              <a id={Style.icgoogle} href="#" className={Style.icng}>
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
        </form>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
