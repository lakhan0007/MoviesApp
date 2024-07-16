import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import Header from './Components/Header/Header';
import MovieDetails from './Components/MovieDetails/MovieDetails';




function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie/:id" element={<MovieDetails/>} />
          <Route path="movies/:type" element={<MovieList/>} />
          <Route path="/*" element={<h1>error Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
