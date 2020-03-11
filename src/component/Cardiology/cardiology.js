import React, { Component } from "react";
import Style from "./cardiology.module.css";
import Scop from "../assets/images/scope.jpg";

const heading1 = "A cardiac surgeon opens the chest and performs heart surgery";
const para1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,assumenda. Suscipit, eveniet.";
const heading2 =
  "A doctor who specializes in neurology is called a neurologist";
const para2 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when its layout.";
const heading3 =
  "A dentist, neurology also known as a dental surgeon, is a surgeon";
const para3 =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.";

const Card = props => {
  return (
    <div>
      <div className="pl-0 mt-4">
        <h1>{props.heading}</h1>
      </div>
      <p className="mt-3">{props.para}</p>
    </div>
  );
};

class Cardiology extends Component {
  state = {
    text1: true,
    text2: false,
    text3: false,
    completed1: true,
    completed2: false,
    completed3: false
  };
  handler1 = () => {
    this.setState({
      text1: true,
      text2: false,
      text3: false,
      completed1: true,
      completed2: false,
      completed3: false
    });
  };
  handler2 = () => {
    this.setState({
      text2: true,
      text3: false,
      text1: false,
      completed2: true,
      completed1: false,
      completed3: false
    });
  };

  handler3 = () => {
    this.setState({
      text3: true,
      text2: false,
      text1: false,
      completed3: true,
      completed2: false,
      completed1: false
    });
  };
  render() {
    return (
      <div>
        <div className="container" id={Style.mainContainer}>
          <div className="row">
            <div className="col-lg-6">
              <img
                id={Style.igi}
                className="img-fluid"
                width="505px"
                height="340px"
                src={Scop}
                alt="LabImage"
              />
            </div>
            <div className="col-lg-6">
              <div className={Style.tabs}>
                <div className="row pl-3">
                  <div
                    className={
                      this.state.completed1 === true
                        ? Style.complete
                        : Style.cat
                    }
                    onClick={this.handler1}
                  >
                    Cardiology
                  </div>
                  <div
                    className={
                      this.state.completed2 === true
                        ? Style.complete
                        : Style.cat
                    }
                    onClick={this.handler2}
                  >
                    Neurology
                  </div>
                  <div
                    className={
                      this.state.completed3 === true
                        ? Style.complete
                        : Style.cat
                    }
                    onClick={this.handler3}
                  >
                    Dental care
                  </div>
                </div>
              </div>

              <div>
                {this.state.text1 ? (
                  <Card heading={heading1} para={para1} />
                ) : (
                  false
                )}
                {this.state.text2 === true ? (
                  <Card heading={heading2} para={para2} />
                ) : (
                  false
                )}
                {this.state.text3 === true ? (
                  <Card heading={heading3} para={para3} />
                ) : (
                  false
                )}
              </div>
              <div className="pt-3">
                <div className={Style.but_read}>Read More</div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default Cardiology;
