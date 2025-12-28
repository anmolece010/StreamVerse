import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Rows";
import Footer from "./Footer";
import "./HomeScreen.css";
import requests from "../fetch/request";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* Navbar Component */}
      <Navbar />
      {/* Banner Component */}
      <Banner />
      {/* Row Components */}
      <Row
        title="STREAMVERSE ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeContainer
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        // isLargeContainer
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        // isLargeContainer
      />
      <Row
        title="Commedy Movies"
        fetchUrl={requests.fetchCommedyMovies}
        // isLargeContainer
      />
      <Row
        title="Documentries"
        fetchUrl={requests.fetchDocumentries}
        isLargeContainer
      />
      <Row
        title="romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        // isLargeContainer
      />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default HomeScreen;
