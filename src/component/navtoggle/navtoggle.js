import React, { Component } from "react";
import style from "./navtoggle.module.css";

class NavToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: false,
      blog:false,
      single:false,
      shop:false,
      account:false

    };
  }
  pagesFunc() {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  blogFunc(){
      this.setState({
          blog:!this.state.blog
      })
  }
  singleFunc(){
      this.setState({
          single:!this.state.single
      })
  }
  shopFunc(){
      this.setState({
          shop:!this.state.shop
      })
  }
  accountFunc(){
      this.setState({
          account:!this.state.account
      })
  }
  pagesLi() {
    return (
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
    );
  }
  blogLi() {
    return (
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
    );
  }
  singleLi(){
      return(
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
      );
  }
  shopLi(){
      return(
<div className={style.main_page}>
                <ul className={style.pag}>
                  <li className="pt-2">
                    <a href="">Ecommerce</a>
                  </li>
                  <li>
                    <a href="">Ecommerce Single</a>
                  </li>
                  <li>
                    <a href="">Ecommerce Cart</a>
                  </li>
                </ul>
              </div>
      );
  }
  accountLi(){
      return(
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
      );
  }
  render() {
    return (
      <div>
        <div className={style.main_div}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Aout</a>
            </li>
            <li
              onClick={() => {
                this.pagesFunc();
              }}
            >
              Pages
              <i
                className="fa fa-sort-down"
                style={{
                  color: "white",
                  position: "relative",
                  // top: "-4px",
                  left: "5px",
                  fontSize: "12px"
                }}
              ></i>
              {this.state.toggle ? this.pagesLi() : null}
            </li>
            <li onClick={()=>{this.blogFunc()}}>
              Blog
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
              {(this.state.blog)?this.blogLi():null}
            </li>
            <li onClick={()=>{this.singleFunc()}}>
              Single
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
              {(this.state.single)?this.singleLi():null}
            </li>
            <li onClick={()=>{this.shopFunc()}}>
              Shop
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
              {(this.state.shop)?this.shopLi():null}
            </li>
            <li onClick={()=>{this.accountFunc()}}>
              Account
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
              {(this.state.account)?this.accountLi():null}
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default NavToggle;
