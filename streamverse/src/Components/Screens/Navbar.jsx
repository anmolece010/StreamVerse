import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className={`Navbar ${"nav_black"}`}>
        <div>
          <img className="stream_logo" alt="Streamverse Logo" />
        </div>
        <div>
          <h3>Made by Anmol Gupta</h3>
        </div>
        <div>
          <img className="stream_avatar" alt="User Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
