import React from "react"
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"

import { Cart } from "./"
import { useStateContext } from "../context/StateContext"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <div className="navbar">
      <Link href="/">
        <img src="/logo.gif" alt="" className="navbar-logo" />
      </Link>
      <button type="button" className="navbar-cart" onClick={() => setShowCart(true)}>
        <AiOutlineShopping className="navbar-cart--icon" />
        <span className="navbar-cart--qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
