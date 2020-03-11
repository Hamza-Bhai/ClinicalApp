import React from "react";
import Header1 from "../component/header_1/header1.js";
import Navbar from "../component/navbar/navbar.js";
import Slider from "../component/carousel/slider.js";
import Cardiology from "../component/Cardiology/cardiology.js";
import Choose from "../component/chooseus/choose.js";
import Departments from "../component/departments/departments.js";
import Meetup from "../component/meetup/meetup.js";
import Testimonials from "../component/testimonials/testimonials.js";
import News from "../component/news/news.js";
import Intouch from "../component/intouch/intouch.js";
import Footer from "../component/footer/footer.js";
export default function Home() {
  return (
    <div>
      <Header1 />
      <Navbar />
      <Slider />
      <Cardiology />
      <Choose />
      <Departments />
      <Meetup />
      <Testimonials />
      <News />
      <Intouch />
      <Footer />
      <br />
      <br />
      <br />
    </div>
  );
}
