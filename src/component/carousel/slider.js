import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Image1 from "../assets/images/1.jpg";
import Image2 from "../assets/images/2.jpg";
import Image3 from "../assets/images/3.jpg";

const items = [
  {
    src: Image1,
    altText: "Slide 1",
    caption: "Slide 1",
    id: 1
  },
  {
    src: Image2,
    altText: "Slide 2",
    caption: "Slide 2",
    id: 2
  },
  {
    src: Image3,
    altText: "Slide 3",
    caption: "Slide 3",
    id: 3
  }
];

const Slider = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {/*  */}
        <div
          className="itid container-fluid"
        >
          <div className="container">
            <div className="row justify-content-between">
              <div style={{ border: "1px solid " }}>
                <span>
                  <span className="fot">0{item.id}</span>/03
                </span>
              </div>
              <div>
                <span className="clc">Clinical</span>
              </div>
            </div>
          </div>

          <div className="maincrol">
          <div className="container p-0 conmecs">
            <div className="mecs">MEDICAL</div>
          </div>
          <div className="container p-0">
            <h2 className="bettercs">
              <b>Better health care</b>
            </h2>
          </div>
          <div className="container p-0">
            <p className="txtcs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur hic odio voluptatem tenetur consequatur.
            </p>
          </div>
          <div className="container p-0" >
            <a href="#" className="ancs">
              Read More
            </a>
          </div>
          </div>
        </div>
        {/*  */}
        <img
          className="imcs"
          width="100%"
          height="550px"
          src={item.src}
          alt={item.altText}
        />
      </CarouselItem>
    );
  });
  return (
    <div>
      <style>
        {`.custom-tag {
              position : relative;
                height: 100%;
              background-color: transparent;;
            }
            @media only screen and (max-width:369px){
              .maincrol{
                margin-top: -50px;
              }
            }
            @media only screen and (max-width:266px){
              .maincrol{
                margin-top: -126px;
              }
            }
            .ancs{
              color:white;
              font-size:19px;
              font-weight:bold
          }
            .conmecs{
              margin-top:130px;
            }
            .mecs{
              background-color:rgb(255, 112, 212);
              width : 70px;
              text-align:center;
              color:white;
              font-size :12px;
              padding:9px 5px;
          }
            .itid{
              color : white;
              position : absolute;
              top :30px;
          }
            .ancs:hover{
                color:white;
            }
            .bettercs{
                color:white;
                margin-top:40px;
            }
            .txtcs{
                color:white;
                margin-top:20px;
                max-width:600px
            }
            .clcs{
                position:absolute;
                top:60px;
                right :105px;
                color:white;
                font-size:17px;
            }
            
            .fot{
                font-size : 26px
            }
            `}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
};

export default Slider;
