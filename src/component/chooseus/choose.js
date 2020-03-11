import React, { Component } from "react";
import Style from "./choose.module.css";

class Choose extends Component {
  state = {
    popup: false
  };
  popupHandle = e => {
    e.preventDefault();
    this.setState({
      popup: !this.state.popup
    });
  };
  popup1 = () => {
    return (
      <div>
        <div className={Style.bac}></div>
        <div className={Style.popup_main_div}>
          <div className="container" id={Style.popup_second}>
            <div className={Style.close}>
              <span onClick={this.popupHandle}>X</span>
            </div>
            <iframe
              id={Style.video}
              className="img-fluid"
              src="https://www.youtube-nocookie.com/embed/B0oExGTq294"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={Style.main_div}>
        {this.state.popup == true ? this.popup1() : null}
        <div className="text-center">
          <div
            className="container text-center mt-5 mb-5 pt-3"
            id={Style.paracs}
          >
            <h1>Why Choose us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              labore sed, veniam nisi sunt laboriosam ducimus, odio aspernatur
              fugiat minima blanditiis dignissimos.
            </p>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 text-left">
                <div className="container" id={Style.health}>
                  <h1>
                    <b>Your health is our priority</b>
                  </h1>
                  <a
                    href=""
                    style={{ textDecoratio: "none" }}
                    className={Style.short}
                    onClick={this.popupHandle}
                  >
                    Short video
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <h4>
                        <a
                          href=""
                          style={{ textDecoration: "none" }}
                          className={Style.anc}
                        >
                          <b>98% Success Rate</b>
                        </a>
                      </h4>
                      <p className={Style.para}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla, culpa id. Delectus doloremque cupiditate
                        asperiores.
                      </p>
                    </div>
                    <div className="col-sm-6 text-left">
                      <h4>
                        <a
                          href=""
                          style={{ textDecoration: "none" }}
                          className={Style.anc}
                        >
                          <b>Professional Staff</b>
                        </a>
                      </h4>
                      <p className={Style.para1}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla, culpa id. Delectus doloremque cupiditate
                        asperiores.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <h4>
                        <a
                          href=""
                          style={{ textDecoration: "none" }}
                          className={Style.anc}
                        >
                          <b>Experienced Doctors</b>
                        </a>
                      </h4>
                      <p className={Style.para}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla, culpa id. Delectus doloremque cupiditate
                        asperiores.
                      </p>
                    </div>
                    <div className="col-sm-6 text-left">
                      <h4>
                        <a
                          href=""
                          style={{ textDecoration: "none" }}
                          className={Style.anc}
                        >
                          <b>24/7 Emergency Care</b>
                        </a>
                      </h4>
                      <p className={Style.para1}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla, culpa id. Delectus doloremque cupiditate
                        asperiores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Choose;
