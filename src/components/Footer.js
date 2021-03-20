import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
      <div className="social__links">
        <a href="/" className="social__link"><FacebookIcon className="social__icon"/></a>
        <a href="/" className="social__link"><InstagramIcon className="social__icon" /></a>
        <a href="/" className="social__link"><TwitterIcon className="social__icon" /></a>
        <a href="/" className="social__link"><YouTubeIcon className="social__icon" /></a>
      </div>
      <ul className="footer__links">
        <li className="footer__link"> <a href="/">Lien</a> </li>
        <li className="footer__link"> <a href="/">Lien</a> </li>
        <li className="footer__link"> <a href="/">Lien</a> </li>
        <li className="footer__link"> <a href="/">Lien</a> </li>
        <li className="footer__link"> <a href="/">Lien</a> </li>
        <li className="footer__link"> <a href="/">Lien</a> </li>
        <li className="footer__link"> <a href="/">Lien</a> </li>
        <li className="footer__link"> <a href="/">Lien</a> </li>
        <li className="footer__link"> <a href="/">Lien</a> </li>
      </ul>
      <div className="footer__copyright">
        2021 Netflix - tous droits réservés
      </div>
      </div>
    </footer>
  )
}

export default Footer
