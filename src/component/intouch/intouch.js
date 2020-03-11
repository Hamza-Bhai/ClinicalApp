import React from "react";
import Style from "./intouch.module.css";
export default function Intouch() {
  return (
    <div>
      <div className="container-flui text-center pt-4 mt-5 pb-5 mb-2">
        <div className={Style.head}>
          <h6 className="mb-4">LETS STAY IN TOUCH</h6>
          <h1 className="mb-4">
            Join us for FREE to get instant email updates!
          </h1>
          <p className="mb-4">
            Enter your email below to stay updated on our site updates and news
          </p>
        </div>
        <form>
          <div className="containe" id={Style.br}>
            <div className={Style.fom}>
              <div className="row  p-0 m-0">
                <div
                  className="col-md-5 p-0 m-0 d-flex justify-content-end"
                  id={Style.br1}
                >
                  <input type="text" placeholder="Name" />
                </div>
                <div
                  className="col-md-5 p-0 m-0 d-flex justify-content-center"
                  id={Style.br2}
                >
                  <input type="email" placeholder="Email" />
                </div>
                <div
                  className="col-md-2 p-0 m-0 d-flex justify-content-start"
                  id={Style.br3}
                >
                  <input type="submit" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-4  text-center">
              Subscribe to our free weekly newsletter for new update releases
              (no spam)
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
