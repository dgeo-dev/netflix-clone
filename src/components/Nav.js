import React from "react"
import { useState } from "react"
import "./Nav.scss"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import NotificationsIcon from "@material-ui/icons/Notifications"

function Nav() {
  const [navBlack, setNavBlack] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
  }

  useState(() => {
    document.addEventListener("scroll", transitionNav)
  })

  const handleClick = () => {
    console.log(toggleMenu)
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
  }

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      } ${toggleMenu && "show"}`}
    >
      <button className="nav__burger" onClick={handleClick}>
        <MenuIcon />
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="Netflix" />
      <nav className="nav__links">
        <a href="/" className="nav__link">
          Accueil
        </a>
        <a href="/" className="nav__link">
          Séries
        </a>
        <a href="/" className="nav__link">
          Films
        </a>
      </nav>
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
        <a href="/" className="nav__action">
          <img src="./images/avatar.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Nav
