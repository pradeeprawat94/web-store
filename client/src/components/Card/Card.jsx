import React from 'react'
import './card.scss'

const Card = ({item}) => {
  return (
    <div className='card'>
        <img src={item.img} alt="" />
        <h4>{item.title}</h4>
        <h4>{item.price} Rs</h4>
    </div>
  )
}

export default Card