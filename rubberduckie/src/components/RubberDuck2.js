import React from "react";
import "./RubberDuck2.scss";

const RubberDuck2 = () => {
  return (
    <div className="rubber-duckie">
      <div className="rubber-duckie__container">
        <div className="rubber-duckie__duck">
          <div className="rubber-duckie__head" />

          <div className="rubber-duckie__face">
            <div className="rubber-duckie__eyes">
              <div className="rubber-duckie__eye-container">
                <div className="rubber-duckie__eye-outter" />
                <div className="rubber-duckie__eye-pupil" />
              </div>
              <div className="rubber-duckie__eye-container">
                <div className="rubber-duckie__eye-outter" />
                <div className="rubber-duckie__eye-pupil" />
              </div>
            </div>

            <div className="rubber-duckie__mouth-container">
              <div className="rubber-duckie__mouth-upper" />
              <div className="rubber-duckie__mouth-lower" />
            </div>
          </div>

          <div className="rubber-duckie__body" />
        </div>
      </div>
    </div>
  );
};

export default RubberDuck2;
