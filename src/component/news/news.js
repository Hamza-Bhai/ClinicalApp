import React, { Component } from "react";
import Style from "./news.module.css";
import Nimg1 from "../assets/images/news1.jpg";
import Nimg2 from "../assets/images/news2.jpg";
import Nimg3 from "../assets/images/news3.jpg";
export default class News extends Component {
  render() {
    return (
      <div id={Style.main_div} className="pt-4">
        <div
          className=" container text-center mt-5 mb-5 pt-3"
          id={Style.paracs}
        >
          <h1>Recent News</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            labore sed, veniam nisi sunt laboriosam ducimus, odio aspernatur
            fugiat minima blanditiis dignissimos.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4" id={Style.main_post}>
              <img className={Style.igcs} width="100%" src={Nimg1} />
              <div className={Style.medicalcs}>Medical</div>
              <div className={Style.datecs}>
                <i className="fa fa-calendar mr-1"></i>
                <span className="mr-4">3rd Oct 2019</span>
                <i className="fa fa-user mr-1"></i>
                <span>Admin</span>
              </div>

              <div className={Style.pdiv}>
                <h4>
                  <b>New Post Title</b>
                </h4>
                <p className="pt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                  commodi cumque nulla deleniti voluptas tempore optio quasi.
                  Exercitationem doloremque nobis, pariatur amet libero optio
                  quo...
                </p>
                <div className={Style.main_bt}>
                  <div className={Style.but_read}>Read More</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4" id={Style.main_post1}>
              <img className={Style.igcs} width="100%" src={Nimg2} />
              <div className={Style.medicalcs}>Medical</div>
              <div className={Style.datecs}>
                <i className="fa fa-calendar mr-1"></i>
                <span className="mr-4">3rd Oct 2019</span>
                <i className="fa fa-user mr-1"></i>
                <span>Admin</span>
              </div>

              <div className={Style.pdiv}>
                <h4>
                  <b>New Post Title</b>
                </h4>
                <p className="pt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                  commodi cumque nulla deleniti voluptas tempore optio quasi.
                  Exercitationem doloremque nobis, pariatur amet libero optio
                  quo...
                </p>
                <div>
                  <div className={Style.but_read}>Read More</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4" id={Style.main_post2}>
              <img className={Style.igcs} width="100%" src={Nimg3} />
              <div className={Style.medicalcs}>Medical</div>
              <div className={Style.datecs}>
                <i className="fa fa-calendar mr-1"></i>
                <span className="mr-4">3rd Oct 2019</span>
                <i className="fa fa-user mr-1"></i>
                <span>Admin</span>
              </div>

              <div className={Style.pdiv}>
                <h4>
                  <b>New Post Title</b>
                </h4>
                <p className="pt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                  commodi cumque nulla deleniti voluptas tempore optio quasi.
                  Exercitationem doloremque nobis, pariatur amet libero optio
                  quo...
                </p>
                <div>
                  <div className={Style.but_read}>Read More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
