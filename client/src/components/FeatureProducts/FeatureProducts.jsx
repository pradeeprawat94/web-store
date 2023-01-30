import React ,{useEffect,useState}from 'react'
import Card from '../Card/Card'
import './featureproducts.scss'
import { Link } from 'react-router-dom'
import fetchAPI from '../../services/fetchAPI'


const FeatureProducts = ({ type }) => {
    const  [data,setData] = useState([])
    useEffect(() => {
        const fechData = async()=>{
         const data = await fetchAPI(`http://localhost:4001/getproductsbytype?type=${type.toLowerCase()}`)
         setData(data.products)
        }
        fechData()
       }, [type]);
       
    return (
        <div className='featureproducts'>
            <div className="top">
                <h1>{type} Products</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisici Assumenda quibusdam iure consectetur totam perspiciatis dolorem facilis est provident eum nemo.</p>
            </div>
            <div className="bottom">
                {data?.map((item) => {
                    return < React.Fragment key={item._id.toString()}>
                        <Link to={`/product/${item._id}`}><Card item={item} key={item._id} /></Link>
                    </ React.Fragment>
                })}

            </div>
        </div>
    )
}

export default FeatureProducts