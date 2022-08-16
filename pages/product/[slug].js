import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai"

import { client, urlFor } from "../../lib/client"
import { Product } from "../../components"
import { useStateContext } from "../../context/StateContext"

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product
  const [index, setIndex] = useState(0)
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext()

  const handleBuyNow = () => {
    onAdd(product, qty)

    setShowCart(true)
  }

  return (
    <div>
      <div className="product-detail--container">
        <div className="product-details">
          <div className="product-details--image">
            <img src={urlFor(image && image[index])} />
          </div>
          <div className="product-details--small_images">
            {image?.map((item, i) => (
              <img key={i} src={urlFor(item)} className={i === index ? "small-image selected-image" : "small-image"} onMouseEnter={() => setIndex(i)} />
            ))}
          </div>
        </div>

        <div className="desc">
          <h1 className="desc--title">{name}</h1>
          <div className="desc--reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="desc--price">${price}</p>
          <div className="desc--quantity">
            <h3>Quantity:</h3>
            <p className="desc--quantity-wrapper">
              <span className="desc--quantity-wrapper_minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="desc--quantity-wrapper_number">{qty}</span>
              <span className="desc--quantity-wrapper_plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="desc--button">
            <button type="button" className="desc--button-add" onClick={() => onAdd(product, qty)}>
              Add to Cart
            </button>
            <button type="button" className="desc--button-buy" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products">
        <h2 className="maylike-products--title">You may also like those</h2>
        <div className="maylike-products--marquee">
          <div className="maylike-products--container track">
            {products.map(item => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `

  const products = await client.fetch(query)

  const paths = products.map(product => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)

  return {
    props: { products, product }
  }
}

export default ProductDetails
