import React, { useState, useEffect } from 'react'
import './products.scss'
import coverPic from '../../assests/images/products.avif'
import Card from '../../components/Card/Card'
// import { data } from '../../data'
import { Link } from 'react-router-dom'
import fetchAPI from '../../services/fetchAPI'

const Products = () => {
  const [selectedRange, setSelectedRange] = useState(10000);
  const [selectedCatogary, setSelectedCatogary] = useState(null)
  const [sortyBy, setSortby] = useState()
  const [data, setData] = useState([])

  useEffect(() => {
    const fechData = async () => {
      if(selectedCatogary===null){
        const data = await fetchAPI(`http://localhost:4001/getproducts`)
        setData(data.products)
      }
      
      else{
        const data = await fetchAPI(`http://localhost:4001/getproductsbytype?category=${selectedCatogary.toLowerCase()}`)
        setData(data.products)
      }
    }
    fechData()
 
  }, [selectedCatogary]);
  const onChangeHandler=(e)=>{
    selectedCatogary===null? setSelectedCatogary(e.target.name):setSelectedCatogary(null)
  }
  const categoryArray = data?.map((item) => item.category)


  return (
    <div className='products'>
      <div className="wrapper">
        <div className="left">
         
          <div className="filterbycategories">
            <h2>Filter by categories</h2>
            <div className='newCategory'>
              {categoryArray?.filter((item, index) => categoryArray.indexOf(item) === index).map((item) => {
                return (
                  <div className='subcategory' key={item}>
                    <input type="checkBox" id={item}  name={item} 
                     onChange={onChangeHandler} />
                    <label htmlFor='Jackets'>{item}</label>
                  </div>)
              })}
            </div>
          </div>
          <div className="filterbyprice">
            <h2>Filter by Price</h2>
            <div className="common-class">
              <span>0</span>
              <input type="range" max={10000} value={selectedRange} onChange={(e) => { setSelectedRange(e.target.value) }} />
              <span>{selectedRange}</span>
            </div>

          </div>
          <div className="filterbysort">
            <h2>Sort by</h2>
            <div className="common-class ">
              <input type="radio" id='lowest' name='sortybyprice' value='lowest' onChange={(e) => setSortby(e.target.value)} />
              <label htmlFor="sortybyprice">Lowest first</label>
            </div>
            <div className="common-class ">
              <input type="radio" id='Highest' name='sortybyprice' value='Highest' onChange={(e) => setSortby(e.target.value)} />
              <label htmlFor="sortybyprice">Highest first</label>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="top-wrapper">
              <img src={coverPic} alt="" />
            </div>
          </div>

          <div className="bottom">
            {data?.filter((product) => { return product.price <= selectedRange })
              .sort((a, b) => sortyBy === 'lowest' ? a.price - b.price : sortyBy === 'Highest' ? b.price - a.price : console.log)
              .map((item) => {
                return (
                  < React.Fragment key={item._id.toString()}>
                    <Link to={`/product/${item._id}`}><Card key={item._id} item={item} /></Link>
                  </ React.Fragment>)

              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products