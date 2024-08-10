import React from "react"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Tournament from "./components/pages/Tournament";
import TournamentDetails from "./components/Tournament/TouranmentDetails";


const  App = () => {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Tournaments" element={<Tournament/>} />
        <Route path="/Tournaments/:id" element={<TournamentDetails />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App
