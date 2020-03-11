import React from "react";
import style from "../header_2/header2.module.css";

const Header2 = props => {
  return (
    <div>
<div className="container-fluid" id={style.hide}>
      <div className="row" id={style.manin_div}>
        <div className="col-9" id={style.div1}>
          <ul style={{ marginTop: "15px" }}>
            <li className={style.list}>
              <i
                className="fa fa-phone mr-2"
                style={{ fontSize: "20px", color: "#0000B3" }}
              ></i>
              <a href="" className={style.anch}>
                03134714093
              </a>
            </li>
            <li className={style.list}>
              <i
                className="fa fa-envelope mr-2"
                style={{ fontSize: "20px", color: "#0000B3" }}
              ></i>
              <a href="" className={style.anch}>
                Hamzapervaiz276@gmail.com
              </a>
            </li>
            <li>
              <i
                className="fa fa-map-marker mr-1"
                style={{ fontSize: "20px", color: "#0000B3" }}
              ></i>
              <span className={style.anch}>Pakistan</span>
            </li>
          </ul>
        </div>
        <div className="col-3" id={style.div2}>
          <a href="" className={style.anch1}>
            Make Appointment
          </a>
        </div>
      </div>
    </div>
    
    </div>
    
  );
};
export default Header2;
