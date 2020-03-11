import React from "react";
import Header1 from "../component/header_1/header1.js";
import Navbar from "../component/navbar/navbar.js";
import Signinform from "../component/signinform/signinform";

export default function Signin() {
  return (
    <div>
      <Header1 />
      <Navbar />
      <Signinform />
    </div>
  );
}
