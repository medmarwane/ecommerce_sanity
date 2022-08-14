import React from "react"
import Link from "next/link"

import { urlFor } from "../lib/client"

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc } }) => {
  return (
    <div className="footer-banner--container">
      <div className="footer-banner">
        <div className="footer-banner--left">
          <div>
            <h3 className="footer-banner--left_small-title">{largeText1}</h3>
            <h3 className="footer-banner--left_title">{largeText2}</h3>
          </div>
          <div>
            <p className="footer-banner--left_discount">{discount}</p>
            <p className="footer-banner--left_date">{saleTime}</p>
          </div>
        </div>
        <div>
          <img src={urlFor(image)} alt="" className="footer-banner--image" />
        </div>
        <div className="footer-banner--right">
          <p className="footer-banner--right_smallText">{smallText}</p>
          <h3 className="footer-banner--right_title">{midText}</h3>
          <p className="footer-banner--right_desc">{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button" className="footer-banner--right_btn">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
