import React from 'react'
import './list.scss'

const Lists = () => {
    const data = [
        'https://images.unsplash.com/photo-1674316941849-69c9f21604e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1671808535921-79668d575c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1673470195216-5efea4c45818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        'https://images.unsplash.com/photo-1671784309830-f6e076b73e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1673283630429-36d300b9683b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
    ,
    'https://images.unsplash.com/photo-1672665145444-a886dc0d7015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    ]
    return (
        <div className='list'>
            <div className="column1">
                <div className="row1">
                    <img src={data[0]} alt="" />
                    <button>SALE</button>
                </div>
                <div className="row2">
                    <img src={data[1]} alt="" />
                    <button>MEN</button>
                </div>
            </div>
            <div className="column2">
                <img src={data[2]} alt="" />
                <button>WOMEN</button>
            </div>
            <div className="column3">
                <div className="row3">
                    <div className="column">
                        <img src={data[3]} alt="" />
                        <button>KIDS</button>
                    </div>
                    <div className="column">
                        <img src={data[4]} alt="" />
                        <button>NEW SEASON</button>
                    </div>
                </div>
                <div className="row4">
                    <img src={data[5]} alt="" />
                    <button>CLEARANCE</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Lists