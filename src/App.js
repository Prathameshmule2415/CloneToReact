import React from "react";
import "./App.css";
import NavBar from "./navbar.component";
import Jumbo from "./jumbotron.component";
import Feature from "./feature.component";
import GetTouch from "./getintouch.component";
import Footer from "./footer.component";

function App() {
  return (
    <div>
      <NavBar />
      <Jumbo />
      <Feature />
      <GetTouch />
      <Footer />
    </div>
  );
}

export default App;
