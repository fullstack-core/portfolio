import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>thuongtruong1009</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/thuongtruong1009"><FaFacebookF /></a>
        <a href="https://tiktok.com/thuongtruong1009"><FaTiktok /></a>
        <a href="https://twitter.com/thuongtruong1009"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;thuongtruong1009. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer