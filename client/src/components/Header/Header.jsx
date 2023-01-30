import React,{useState} from 'react'
import './header.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import country from '../../assests/images/india.webp'
import Cart from '../Cart/Cart';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state)=>state.Cart.products)
  return (
    <div className='container'>
      <div className="wrapper">
        <div className="left">
          <div className="country">
            <img src={country} alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="currency">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <ul>
          <Link to={'/products/1'}><li>Men</li></Link>
          <Link to={'/products/1'}><li>Women</li></Link>
          <Link to={'/products/1'}><li>Kids</li></Link>
          </ul>
        </div>
        <div className="center">
          <h3>RAWATSTORE</h3>
        </div>
        <div className="right">
          <nav>
            <ul>
              <Link to={'/'}><li>Home</li></Link>
              <li>About</li>
              <li>Stores</li>
            </ul>
          </nav>
          <div className="icons">
            <SearchIcon />
            <span onClick={()=>{setShowCart(!showCart)}}>
              <LocalMallIcon/>
              <span>{cart.length}</span>
              {Array.l}
            </span>
          </div>
        </div>
      </div>
      {showCart?<div className="cart-wrapper" disabled={showCart}>
        <Cart/>
      </div>:''}
    </div>
  )
}

export default Header