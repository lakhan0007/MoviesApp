import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import './Home.css'
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";

const Home = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((res) => {
        setPopularMovie(res.data.results);
      });
  }, []);
  return (
    <>
      
      <div className="poster">
              <Carousel
              showThumbs={false}
                  autoPlay={true}
                  transitionTime={3}
                  infiniteLoop={true}
                  showStatus={false}
              >
                  
                  {
                      popularMovie.map((movie) => {
                          console.log(movie);
                          return (
                            <>
                              <NavLink
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                to={`/movies${movie.id}`}
                              >
                                <div className="posterImage">
                                  <img
                                    src={`https://image.tmdb.org/t/p/original${
                                      movie && movie.backdrop_path
                                    }`}
                                    alt="kchmvchnmcfb"
                                  />
                                </div>
                                <div className="posterImage__overlay">
                                  <div className="posterImage__title">
                                    {movie?.original_title}
                                  </div>
                                  <div className="posterImage__runtime">
                                    {movie?.release_date}
                                    <span className="posterImage__rating">
                                      {movie?.vote_average}
                                      <i className="fas fa-star" />
                                    </span>
                                  </div>
                                  <div className="posterImage__description">
                                    {movie.overview}
                                  </div>
                                </div>
                              </NavLink>
                            </>
                          );
                      })
                  }
                  
        </Carousel>

        <MovieList/>
      </div>
    </>
  );
};

export default Home;
