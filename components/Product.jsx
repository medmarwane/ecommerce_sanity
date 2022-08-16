import React from "react"
import Link from "next/link"

import { urlFor } from "../lib/client"

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <div>
            <img src={urlFor(image && image[0])} alt="product" className="product-card--image" />
          </div>
          <div className="product-card--paragraphs">
            <p className="product-card--name">{name}</p>
            <p className="product-card--price">${price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
