import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import requests from "../config/Requests"
import axios from "axios"
import "./Banner.scss"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"

import QuickView from "./QuickView"

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string
  }

  const [movie, setMovie] = useState([])
  const [popup, setPopup] = useState(false)

  function handlePopup() {
    popup ? setPopup(false) : setPopup(true)
  }

  console.log(popup)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }

    fetchData()
  }, [])

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
  }

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.original_name}
        </h1>
        <p className="banner__description">{truncate(movie?.overview, 100)}</p>
        <div className="banner__buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner__button banner__button--play">
              <PlayArrowIcon />
              Lecture
            </button>
          </Link>
          <button className="banner__button" onClick={handlePopup}>
            <HelpOutlineIcon />
            Plus d'infos
          </button>
        </div>
      </div>

      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popupStatus={popup}
        popup={handlePopup}
      />
    </header>
  )
}

export default Banner
