import React from 'react'
import './cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../Redux/reducers';
import { Link } from 'react-router-dom';

const Cart = () => {
    const products = useSelector((state) => state.Cart.products)
    const dispatch = useDispatch();
    const removeItemFunc = (id) => {
        console.log(id)
        dispatch(removeFromCart({ id: id }))
    }

    return (
        <div className='cart'>
            {products.length === 0 ? "Your Cart is Empty" : <>
                <div className="new-cart-wrapper">
                    {products.map((item) => {
                        return< React.Fragment key={item._id.toString()}>
                        <div className="top" key={item._id}>
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="info">
                                <h4>{item.title}</h4>
                                <p>{item.disc.substring(0,35)}</p>
                                <h5>{item.quantity} x {item.price} RS  ({item.quantity*item.price})Rs</h5>
                                <p></p>
                            </div>
                            <div className='icons' onClick={()=>removeItemFunc(item._id)}>
                                <DeleteIcon className='icon'/>
                            </div>

                        </div> </ React.Fragment>
                    })}
                    <div className="bottom">
                        <h1>Subtotal</h1>
                        <h2>{products?.map((e)=>{return e.quantity * e.price})?.reduce((sum,next)=>{return sum+next})} Rs</h2>
                    </div>
                    <div className="clear-cart" onClick={()=>{dispatch(clearCart())}}>
                        <DeleteForeverIcon />
                        <p>Clear Cart</p>
                    </div>
                    <div className="proceed-to-payment">
                        <button onClick={()=>{dispatch(clearCart())}}>
                            <Link to={'/payment'}>PROCEED TO PAYMENT</Link>  
                        </button>
                    </div>
                </div>
            </>}
        </div>

    )
}

export default Cart
