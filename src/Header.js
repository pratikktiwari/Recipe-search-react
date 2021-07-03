import React from "react";
import "./App.css";
import image1 from "./images/img-1.png";
import image2 from "./images/img-2.png";
import image3 from "./images/img-3.png";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="topHeaderNav">
        <div>
          <h1>Recipe Search</h1>
          <h3>A search engine to find recipes by their ingredients</h3>
        </div>
        <div>
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
        </div>
      </nav>
    );
  }
}
