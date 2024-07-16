import React from 'react'
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            All in one Movies
            {/* <i className="fa fa-code"></i> */}
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="movies/popular"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="movies/top_rated"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/movies/upcoming"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Upcoming
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default Header