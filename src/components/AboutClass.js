import React from "react";
import ProfileComponent from "./ProfileClass";
import { Outlet } from "react-router";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  componentDidUpdate() {
    console.log("parent conmponent did update");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>This ia about class component</h1>
        <Outlet />
      </div>
    );
  }
}
export default AboutClass;
