import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../config/Requests";
function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Rows + sliders */}
      <Row
        title="Programmes originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true}
      />
      <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
      <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />
    </>
  );
}

export default Home;
