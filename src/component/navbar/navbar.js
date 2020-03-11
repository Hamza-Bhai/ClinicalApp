import React, { Component } from "react";
import style from "./navbar.module.css";
import NavToggle from "../navtoggle/navtoggle.js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navToggle: false
    };
  }
  menuOpen() {
    this.setState({
      navToggle: !this.state.navToggle
    });
  }
  render() {
    return (
      <div id={style.navstic}>
        <div className="container-fluid" id={style.mandiv}>
          <div className="row" id={style.rowdiv}>
            <div className="col-5 col-md-3">
              <div className={style.logo}>
                <a href="">Clinical</a>
              </div>
            </div>
            <div className="col-7 col-md-9" id={style.ulist}>
              <div
                className={style.mnu}
                onClick={() => {
                  this.menuOpen();
                }}
              >
                <span>Menu</span>
              </div>
              <ul className={style.unlist}>
                <li>
                  <a href="">
                    <b>Home</b>
                  </a>
                </li>
                <li className={style.list}>
                  <a href="">
                    <b>About</b>
                  </a>
                </li>
                <li className={style.list}>
                  <b>Pages</b>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "white",
                      position: "relative",
                      top: "-4px",
                      left: "5px",
                      fontSize: "12px"
                    }}
                  ></i>
                  <div className={style.main_page}>
                    <ul className={style.pag}>
                      <li className="pt-2">
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">Gallery</a>
                      </li>
                      <li>
                        <a href="">Team</a>
                      </li>
                      <li>
                        <a href="">FAQ</a>
                      </li>
                      <li>
                        <a href="">Portfolio</a>
                      </li>
                      <li>
                        <a href="">Timeline</a>
                      </li>
                      <li>
                        <a href="">404</a>
                      </li>
                      <li>
                        <a href="">Comming Soon</a>
                      </li>
                      <li>
                        <a href="">Search Results</a>
                      </li>
                      <li className="">
                        <a href="">Email Template</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={style.list}>
                  <b>Blog</b>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "white",
                      position: "relative",
                      top: "-4px",
                      left: "5px",
                      fontSize: "12px"
                    }}
                  ></i>
                  <div className={style.main_page}>
                    <ul className={style.pag}>
                      <li className="pt-2">
                        <a href="">Blog</a>
                      </li>
                      <li>
                        <a href="">Blog Details</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={style.list}>
                  <b>Single</b>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "white",
                      position: "relative",
                      top: "-4px",
                      left: "5px",
                      fontSize: "12px"
                    }}
                  ></i>
                  <div className={style.main_page}>
                    <ul className={style.pag}>
                      <li className="pt-2">
                        <a href="">Portfolio Single</a>
                      </li>
                      <li>
                        <a href="">Team Single</a>
                      </li>
                      <li>
                        <a href="">Single</a>
                      </li>
                      <li>
                        <a href="">Blog Details</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={style.list}>
                  <b>Shop</b>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "white",
                      position: "relative",
                      top: "-4px",
                      left: "5px",
                      fontSize: "12px"
                    }}
                  ></i>
                  <div className={style.main_page}>
                    <ul className={style.pag}>
                      <li className="pt-2">
                        <a href="">Ecommerce</a>
                      </li>
                      <li>
                        <a href="">
                          Ecommerce
                          <br />
                          Single
                        </a>
                      </li>
                      <li>
                        <a href="">Ecommerce Cart</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={style.list}>
                  <b>Account</b>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "white",
                      position: "relative",
                      top: "-4px",
                      left: "5px",
                      fontSize: "12px"
                    }}
                  ></i>
                  <div className={style.main_page}>
                    <ul className={style.pag}>
                      <li className="pt-2">
                        <a href="">Sign In</a>
                      </li>
                      <li>
                        <a href="">Sign Up</a>
                      </li>
                      <li>
                        <a href="">Appointment</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={style.list}>
                  <a href="">
                    <b>Contact</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {this.state.navToggle ? <NavToggle /> : null}
      </div>
    );
  }
}
export default Navbar;
