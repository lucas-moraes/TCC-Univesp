/* eslint-disable react/prop-types */
import "./style.css";
import logo from "../../../../../assets/logo-200-200.png";
import {useEffect} from "react";

export const Loader = (props) => {
  function Show() {
    const content = document.getElementById("loaderContainer");
    content.style.opacity = 1;
  }

  function Hide() {
    const content = document.getElementById("loaderContainer");
    content.style.display = "none";
  }

  useEffect(() => {
    if (props.hide) {
      Hide();
    }
  }, [props.hide]);

  useEffect(() => {
    Show();
  }, []);

  return (
    <div id="loaderContainer">
      <img src={logo} alt="logo" className="logo" />
      <div className="loaderItem">
        <div className="loader"></div>
      </div>
    </div>
  );
};
