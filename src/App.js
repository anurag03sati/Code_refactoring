import { useEffect } from "react";
import { useAnime } from "./context/animeContext";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AnimeDetails from "./pages/AnimeDetails";
import Navbar from "./components/Navbar/Navbar";

//pages
import Home from "./pages/Home";
import RandomAnime from "./pages/RandomAnime";
import AboutMe from "./pages/AboutMe";

export const ROUTE_PATHS ={
  RandomAnime: '/randomanime',
  About : '/aboutme',
  AnimeDetails : '/animedetails/:id'
}

export const navigateToRoute = {
  gotoAnimateDetail: (id) => `${ROUTE_PATHS.AnimeDetails}`.replace(':id',id)
}




function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= {ROUTE_PATHS.RandomAnime} element={<RandomAnime />} />
        <Route path={ROUTE_PATHS.About} element={<AboutMe />} />
        <Route path={ROUTE_PATHS.AnimeDetails} element={<AnimeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
