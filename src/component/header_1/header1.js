import React, { Component } from "react";
import style from "./header1.module.css";
import Header2 from "../header_2/header2.js";
import Menu from "../menu_1/menu.js";

class Header1 extends Component {
  state = {
    show: false
  };

  showMe() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className={style.headstick}>
        <div className="container-fluid" id={style.mndiv}>
          <div className="pt-2 row">
            <div className="col-9 col-sm-5">
              <a className={style.signin} href="">
                Sign In
              </a>
              <a className={style.signup} href="">
                Sign Up
              </a>
            </div>
            <div className="col-3 col-sm-7" style={{ textAlign: "right" }}>
              <form>
                <input
                  className={style.intp}
                  type="text"
                  placeholder="Search.."
                />
                <button type="submit" className={style.butn1}>
                  <i className="fa fa-search" id={style.icn}></i>
                </button>
                <i
                  onClick={() => {
                    this.showMe();
                  }}
                  className="fa fa-bars"
                  id={style.icn1}
                ></i>
              </form>
            </div>
          </div>
        </div>
        {this.state.show ? <Menu /> : null}
        <Header2 />
      </div>
    );
  }
}
export default Header1;
