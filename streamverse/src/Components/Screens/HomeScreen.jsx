import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Rows from "./Rows";
import Footer from "./Footer";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* Navbar Component */}
      <Navbar />
      {/* Banner Component */}
      <Banner />
      {/* Row Components */}
      <Rows />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default HomeScreen;
