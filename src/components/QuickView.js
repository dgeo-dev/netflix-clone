import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "./QuickView.scss";
function QuickView({ bannerStyle, movie, popupStatus, popup }) {
  return (
    <div className={`quickView ${popupStatus && "open"}`}>
      <div className="quickView__banner" style={bannerStyle}>
        <div className="quickView__content">
          <h2 className="quickView__title">
            {movie?.title || movie?.original_name}
          </h2>
          <p>{movie.overview}</p>
          <p>{movie.overview}</p>
          <p>{movie.overview}</p>
          <p>{movie.overview}</p>
          <p>{movie.overview}</p>
          <p>{movie.overview}</p>
        </div>
        <button className="quickView__close" onClick={popup}>
          <CancelIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default QuickView;
