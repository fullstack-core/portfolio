import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linked.in/thuongtruong1009" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/thuongtruong1009" target="_blank"><FaGithub /></a>
        <a href="https://dev.to/thuongtruong1009" target="_blank"><FaDev /></a>
    </div>
  )
}

export default HeaderSocials