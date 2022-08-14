import React from "react"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p>devmed © 2022 All rights reserved</p>
        <p className="footer-container--icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
    </div>
  )
}

export default Footer
