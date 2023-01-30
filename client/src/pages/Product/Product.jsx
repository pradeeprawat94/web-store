import React ,{useState,useEffect}from 'react'
import './product.scss'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/reducers';
// import {data} from '../../data'
import { useParams } from 'react-router-dom';
import fetchAPI from '../../services/fetchAPI';



const Product = () => {
  const {id} =useParams();
  const [data,setData] = useState([])
  const dispatch = useDispatch();
  // const data = data.find((e)=>{return e.id===parseInt(id)})
  const [quantity, setQuantity] = useState(1);
  // const [selectedImage, setSelectedImage] = useState(data?.img);
  


  useEffect(() => {
    const fechData = async()=>{
     const data = await fetchAPI(`http://localhost:4001/getproduct/${id}`)
     setData(data.product)
     
    }
    fechData()
   }, [id]);
   
   console.log(data)
  const handleQuantity =(type)=>{
    if(type==='less'){
      setQuantity((pre)=>quantity===1? quantity: quantity-1)
    }
    else{
      setQuantity((pre)=>quantity+1)

    }
  }
 const addToCartFunc=()=>{
  dispatch(addToCart({...data,quantity:quantity}))
 }
  return (
    <div className='product'>
      <div className="wrapper">
        <div className="left">
          <div className="first">
            <img src={data?.img} alt=""/>
          </div>
          <div className="second">
            <img src={data?.img} alt="" />
          </div>
        </div>
        <div className="right">
          <h2>{data?.title}</h2>
          <h3>{data?.price} RS</h3>
          <p>{data?.disc}</p>
          <div className="quantity">
            <button onClick={()=>{handleQuantity("less")}}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>{handleQuantity("add")}}>+</button>
          </div>
          <button className='addtocart' onClick={addToCartFunc}>
            <LocalMallIcon /> Add to Cart</button>
          <span className="addTowishList">
            <FavoriteBorderIcon />
            <p>Add To Wishlist</p>
          </span>
          <span className="addTocompare">
            <ContentPasteSearchIcon />
            <p>Add To Compare </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product