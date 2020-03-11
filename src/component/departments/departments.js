import React, { Component } from "react";
import Style from "./departments.module.css";

export default class Departments extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="container text-center mt-5  pt-3" id={Style.paracs}>
            <h1>Our Departments</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              labore sed, veniam nisi sunt laboriosam ducimus, odio aspernatur
              fugiat minima blanditiis dignissimos.
            </p>
          </div>
          <div className="container">
            <div className="row">
              {/* first card */}
              <div className="col-11 col-sm-6 col-lg-4 text-center mt-5">
                <div className={Style.card}>
                  <div className="mb-5">
                    <span className={Style.icn}>
                      <i className="fa fa-user-md"></i>
                    </span>
                  </div>
                  <div className="mb-3">
                    <h5>
                      <b>Body Surgery</b>
                    </h5>
                  </div>
                  <div className="mb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut quidem soluta quas vel. Harum esse eligendi ducimus
                      tempora placeat consectetur ab quasi tenetur aliquam.
                      Quaerat cupiditate consectetur.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className={Style.but_read}>Read More</div>
                  </div>
                </div>
              </div>
              {/* first card end */}
              {/* second card */}
              <div className="col-11 col-sm-6 col-lg-4 text-center mt-5">
                <div className={Style.card}>
                  <div className="mb-5">
                    <span className={Style.icn}>
                      <i className="fa fa-heartbeat"></i>
                    </span>
                  </div>
                  <div className="mb-3">
                    <h5>
                      <b>Dental Care</b>
                    </h5>
                  </div>
                  <div className="mb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut quidem soluta quas vel. Harum esse eligendi ducimus
                      tempora placeat consectetur ab quasi tenetur aliquam.
                      Quaerat cupiditate consectetur.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <div className={Style.but_read}>Read More</div>
                  </div>
                </div>
              </div>
              {/* second card end */}
              {/* third card */}
              <div className="col-11 col-sm-6 col-lg-4 text-center mt-5">
                <div className={Style.card}>
                  <div className="mb-5">
                    <span className={Style.icn}>
                      <i className="fa fa-plus-square"></i>
                    </span>
                  </div>
                  <div className="mb-3">
                    <h5>
                      <b>Eye Care</b>
                    </h5>
                  </div>
                  <div className="mb-5">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut quidem soluta quas vel. Harum esse eligendi ducimus
                      tempora placeat consectetur ab quasi tenetur aliquam.
                      Quaerat cupiditate consectetur.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className={Style.but_read}>Read More</div>
                  </div>
                </div>
              </div>
              {/* third card end */}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
