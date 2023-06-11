import React from "react";
import "./Container.css";
import { Truck, Phone } from "phosphor-react";

const Container = () => {
  return (
    <div className="container">
      <div>
        <h2 className="logo">Dealerz.</h2>
      </div>
      <div className="info">
        <p className="call">
          <span>Call Center</span>
          <Phone size={24} />
        </p>
        <p className="ship">
          <span>Shipping </span>
          <Truck size={24} />
        </p>
      </div>
    </div>
  );
};

export default Container;
