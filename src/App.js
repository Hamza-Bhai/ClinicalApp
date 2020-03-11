import React, { Component } from "react";
import Home from "./pages/home.js";
import Signin from './pages/signin.js'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import Style from "./App.module.css";

// import Example from './example'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        {/* <Signin /> */}
        {/* <Example /> */}
      </div>
    );
  }
}

export default App;
