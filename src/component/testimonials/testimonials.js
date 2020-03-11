import React, { Component } from "react";
import Style from "./testimonials.module.css";
import im1 from "../assets/images/patient1.jpg";
import im2 from "../assets/images/patient2.jpg";
import im3 from "../assets/images/patient3.jpg";
import im4 from "../assets/images/patient4.jpg";
import im5 from "../assets/images/patient5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: false,
      touchMove: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className="container text-center mt-5 mb-5 pt-3" id={Style.paracs}>
          <h1>Testimonials</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            labore sed, veniam nisi sunt laboriosam ducimus, odio aspernatur
            fugiat minima blanditiis dignissimos.
          </p>
        </div>
        <div className="container-fluid pl-3 pr-3 pb-5">
          <div className="container text-center">
            <Slider {...settings}>
              <div className={Style.bo}>
                <img
                  className={Style.igcs}
                  src={im1}
                  alt="Doctors-Pics"
                  style={{ borderRadius: "100%", margin: "auto" }}
                />
                <div className="containe">
                  <p className={Style.par}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, eius culpa dicta asperiores odit, reiciendis
                    commodi id a hic suscipit odio voluptatem ullam? Sit ut eos
                    quae! Quidem, nisi nesciunt.
                  </p>
                </div>
                <h4 className={Style.doc_name}>Abigail</h4>
                <h6 className={Style.doc_pro}>Lead Designer</h6>
              </div>
              <div className={Style.bo}>
                <img
                  className={Style.igcs}
                  src={im2}
                  alt="Doctors-Pics"
                  style={{ borderRadius: "100%", margin: "auto" }}
                />
                <div className="containe">
                  <p className={Style.par}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, eius culpa dicta asperiores odit, reiciendis
                    commodi id a hic suscipit odio voluptatem ullam? Sit ut eos
                    quae! Quidem, nisi nesciunt.
                  </p>
                </div>
                <h4 className={Style.doc_name}>Charlotte</h4>
                <h6 className={Style.doc_pro}>Head of Support</h6>
              </div>
              <div className={Style.bo}>
                <img
                  className={Style.igcs}
                  src={im3}
                  alt="Doctors-Pics"
                  style={{ borderRadius: "100%", margin: "auto" }}
                />
                <div className="containe">
                  <p className={Style.par}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, eius culpa dicta asperiores odit, reiciendis
                    commodi id a hic suscipit odio voluptatem ullam? Sit ut eos
                    quae! Quidem, nisi nesciunt.
                  </p>
                </div>
                <h4 className={Style.doc_name}>Benjamin Jin</h4>
                <h6 className={Style.doc_pro}>Founder,CEO</h6>
              </div>
              <div className={Style.bo}>
                <img
                  className={Style.igcs}
                  src={im4}
                  alt="Doctors-Pics"
                  style={{ borderRadius: "100%", margin: "auto" }}
                />
                <div className="containe">
                  <p className={Style.par}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, eius culpa dicta asperiores odit, reiciendis
                    commodi id a hic suscipit odio voluptatem ullam? Sit ut eos
                    quae! Quidem, nisi nesciunt.
                  </p>
                </div>
                <h4 className={Style.doc_name}>Edward</h4>
                <h6 className={Style.doc_pro}>Team Leader</h6>
              </div>
              <div className={Style.bo}>
                <img
                  className={Style.igcs}
                  src={im5}
                  alt="Doctors-Pics"
                  style={{ borderRadius: "100%", margin: "auto" }}
                />
                <div className="contain">
                  <p className={Style.par}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, eius culpa dicta asperiores odit, reiciendis
                    commodi id a hic suscipit odio voluptatem ullam? Sit ut eos
                    quae! Quidem, nisi nesciunt.
                  </p>
                </div>
                <h4 className={Style.doc_name}>Christoper</h4>
                <h6 className={Style.doc_pro}>Asst. Manager</h6>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
