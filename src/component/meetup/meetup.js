import React from "react";
import Style from "./meetup.module.css";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";

const Meetup = () => {
  return (
    <div className={Style.main_div}>
      <div className="container text-center mt-5 mb-5 pt-3" id={Style.paracs}>
        <h1>Meet our team</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum labore
          sed, veniam nisi sunt laboriosam ducimus, odio aspernatur fugiat
          minima blanditiis dignissimos.
        </p>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6">
            {/* card */}
            <div className="d-flex mb-4  " id={Style.card}>
              <div className={Style.img_div}>
                <img className="img-fluid" src={team1} />
              </div>
              <div id={Style.card_sub_div} className="pl-3 pt-4 pb-4">
                <h5 id={Style.heading}>
                  <a href=""> Mark Hyman </a>
                </h5>
                <h6 id={Style.sub_heading}> Cosmetic Surgeon </h6>
                <p className={Style.para}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Facilis omnis neque magnam illum ducimus blanditiis.
                </p>
                <div className="d-flex mt-4">
                  <i className="fa fa-facebook-f mr-2" id={Style.facebook}></i>
                  <i className="fa fa-instagram mr-2" id={Style.instagram}></i>
                  <i className="fa fa-twitter mr-2" id={Style.twitter}></i>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className="col-lg-6">
            {/* card */}
            <div className="d-flex " id={Style.card}>
              <div className={Style.img_div}>
                <img className="img-fluid" src={team2} />
              </div>
              <div id={Style.card_sub_div} className="pl-3 pt-4 pb-4">
                <h5 id={Style.heading}>
                  <a href=""> Mark Hyman </a>
                </h5>
                <h6 id={Style.sub_heading}> Cosmetic Surgeon </h6>
                <p className={Style.para}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Facilis omnis neque magnam illum ducimus blanditiis.
                </p>
                <div className="d-flex mt-4">
                  <i className="fa fa-facebook-f mr-2" id={Style.facebook}></i>
                  <i className="fa fa-instagram mr-2" id={Style.instagram}></i>
                  <i className="fa fa-twitter mr-2" id={Style.twitter}></i>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
        </div>
      </div>
      {/* second-card-row */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* card */}
            <div className="d-flex mb-4" id={Style.card}>
              <div className={Style.img_div}>
                <img className="img-fluid" src={team3} />
              </div>
              <div id={Style.card_sub_div} className="pl-3 pt-4 pb-4">
                <h5 id={Style.heading}>
                  <a href=""> Mark Hyman </a>
                </h5>
                <h6 id={Style.sub_heading}> Cosmetic Surgeon </h6>
                <p className={Style.para}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Facilis omnis neque magnam illum ducimus blanditiis.
                </p>
                <div className="d-flex mt-4">
                  <i className="fa fa-facebook-f mr-2" id={Style.facebook}></i>
                  <i className="fa fa-instagram mr-2" id={Style.instagram}></i>
                  <i className="fa fa-twitter mr-2" id={Style.twitter}></i>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className="col-lg-6">
            {/* card */}
            <div className="d-flex" id={Style.card}>
              <div className={Style.img_div}>
                <img className="img-fluid" src={team4} />
              </div>
              <div id={Style.card_sub_div} className="pl-3 pt-4 pb-4">
                <h5 id={Style.heading}>
                  <a href=""> Mark Hyman </a>
                </h5>
                <h6 id={Style.sub_heading}> Cosmetic Surgeon </h6>
                <p className={Style.para}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Facilis omnis neque magnam illum ducimus blanditiis.
                </p>
                <div className="d-flex mt-4">
                  <i className="fa fa-facebook-f mr-2" id={Style.facebook}></i>
                  <i className="fa fa-instagram mr-2" id={Style.instagram}></i>
                  <i className="fa fa-twitter mr-2" id={Style.twitter}></i>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
export default Meetup;
