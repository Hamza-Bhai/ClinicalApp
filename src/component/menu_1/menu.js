import React from "react";
import style from "./menu.module.css";

const Menu = () => {
  return (
    <div className={style.main_div}>
      <h5 className={style.quick_search}>QUICK SEARCH</h5>
      <form>
        <input className={style.intp} type="text" placeholder="Search.." />
        <button type="submit" className={style.butn1}>
          <i className="fa fa-search" id={style.icn}></i>
        </button>
      </form>
      <div className={style.contact}>
        <h5>QUICK CONTACT</h5>
        <div className={style.number}>
          <i className="fa fa-phone"></i>
          <a href="">03134714093</a>
        </div>
        <div className={style.email}>
          <i className="fa fa-envelope"></i>
          <a href="">info@example.com</a>
        </div>
        <div className={style.country}>
          <i className="fa fa-map-marker"></i>
          <span>Pakistan</span>
        </div>
      </div>
      <div className={style.follow}>
        <h5>FOLLOW US</h5>
        <div className={style.anch}>
          <a className={style.a1} href="">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a className={style.a2} href="">
            <i className="fa fa-twitter"></i>
          </a>
          <a className={style.a3} href="">
            <i className="fa fa-google-plus"></i>
          </a>
          <a className={style.a4} href="">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className={style.links}>
        <h5>QUICK LINKS</h5>
        <ul className={style.ulist}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Aout Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
