import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import "./Nav.scss";

function Nav() {
  const [show, handleShow] = useState(false);
  const [menuShow, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    if (menuShow) {
      setToggleMenu(false);
      handleShow(false);
    } else {
      setToggleMenu(true);
      handleShow(true);
    }
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <MenuIcon className="toggleMenu" onClick={handleToggleMenu}></MenuIcon>
      <Link to="/">
        <img src="./images/logo.png" alt="" className="nav__logo" />
      </Link>
      <div className={`nav__links ${menuShow ? "show-nav" : "hide-nav"}`}>
        <a href="/" className="nav_link">
          Accueil
        </a>
        <a href="/" className="nav_link">
          Séries
        </a>
        <a href="/" className="nav_link">
          Films
        </a>
      </div>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          DIRECT
        </a>
        <a href="/" className="nav__action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          <NotificationsIcon />
        </a>
        <img
          src="./images/avatar.jpg"
          className="nav__action nav__avatar"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
