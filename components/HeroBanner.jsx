import React from "react"
import Link from "next/link"

import { urlFor } from "../lib/client"

const HeroBanner = ({ heroBanner: { image, smallText, midText, largeText1, product, buttonText, desc } }) => {
  return (
    <div className="hero-banner--container">
      <div className="hero-banner">
        <div className="hero-banner--left">
          <p className="hero-banner--left_p">{smallText}</p>
          <div>
            <h3 className="hero-banner--left_small-title">{midText}</h3>
            <h1 className="hero-banner--left_title">{largeText1}</h1>
          </div>
        </div>
        <img src={urlFor(image)} alt="light" className="hero-banner--image" />
        <div className="hero-banner--right">
          <div className="hero-banner--right_head">
            <h5 className="hero-banner--right_small-title">Description</h5>
            <p className="hero-banner--right_desc">{desc}</p>
          </div>
          <Link href={`/product/${product}`}>
            <button type="button" className="hero-banner--right_btn">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
