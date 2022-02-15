import { Component } from "react";
import stylesheet from "./menu.module.css";

class Menu extends Component {
  render() {
    return (
      <div className={stylesheet.menuDiv}>
        <h1>HighOnCoding</h1>
        <a href="/">Home</a>
        <a href="/categories">Categories</a>
      </div>
    );
  }
}

export default Menu;
