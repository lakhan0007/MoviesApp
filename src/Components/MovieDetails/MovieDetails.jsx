import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./MovieDetails.css";
import axios from 'axios';


const MovieDetails = () => {
    const [moviesDetails , setMoviesDetails] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        ).then((res) => {
            console.log(res);
            setMoviesDetails(res?.data);
        })
    } 


    // console.log();g
    return (
      <>
        <div className="movie">
          <div className="movie__intro" style={{marginTop:'10px'}}>
            <img
              className="movie__backdrop"
              src={`https://image.tmdb.org/t/p/original${
                moviesDetails ? moviesDetails.backdrop_path : ""
              }`}
            />
          </div>
          <div className="movie__detail">
            <div className="movie__detailLeft">
              <div className="movie__posterBox">
                <img
                  className="movie__poster"
                  src={`https://image.tmdb.org/t/p/original${
                    moviesDetails ? moviesDetails.poster_path : ""
                  }`}
                />
              </div>
            </div>
            <div className="movie__detailRight">
              <div className="movie__detailRightTop">
                <div className="movie__name">
                  {moviesDetails ? moviesDetails.original_title : ""}
                </div>
                <div className="movie__tagline">
                  {moviesDetails ? moviesDetails.tagline : ""}
                </div>
                <div className="movie__rating">
                  {moviesDetails ? moviesDetails.vote_average : ""}
                  <i class="fas fa-star" />
                  <span className="movie__voteCount">
                    {moviesDetails
                      ? "(" + moviesDetails.vote_count + ") votes"
                      : ""}
                  </span>
                </div>
                <div className="movie__runtime">
                  {moviesDetails
                    ? moviesDetails.runtime + " mins"
                    : ""}
                </div>
                <div className="movie__releaseDate">
                  {moviesDetails
                    ? "Release date: " + moviesDetails.release_date
                    : ""}
                </div>
                <div className="movie__genres">
                  {moviesDetails && moviesDetails.genres
                    ? moviesDetails.genres.map((genre) => (
                        <>
                          <span className="movie__genre" id={genre.id}>
                            {genre.name}
                          </span>
                        </>
                      ))
                    : ""}
                </div>
              </div>
              <div className="movie__detailRightBottom">
                <div className="synopsisText">Synopsis</div>
                <div>
                  {moviesDetails ? moviesDetails.overview : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="movie__links">
            <div className="movie__heading">Useful Links</div>
            {moviesDetails && moviesDetails.homepage && (
              <a
                href={moviesDetails.homepage}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie__homeButton movie__Button">
                    Homepage <i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
            {moviesDetails && moviesDetails.imdb_id && (
              <a
                href={
                  "https://www.imdb.com/title/" + moviesDetails.imdb_id
                }
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie__imdbButton movie__Button">
                    IMDb<i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
          </div>
          <div className="movie__heading">Production companies</div>
          <div className="movie__production">
            {moviesDetails &&
              moviesDetails.production_companies &&
              moviesDetails.production_companies.map((company) => (
                <>
                  {company.logo_path && (
                    <span className="productionCompanyImage">
                      <img
                        className="movie__productionComapany"
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          company.logo_path
                        }
                      />
                      <span>{company.name}</span>
                    </span>
                  )}
                </>
              ))}
          </div>
        </div>
      </>
    );
}

export default MovieDetails;