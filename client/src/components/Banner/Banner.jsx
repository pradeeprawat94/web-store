import React,{useState} from 'react'
import './banner.scss'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Banner = () => {
  const [state, setState] = useState(0);
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
      const sliderFunc=(type)=>{
        console.log(state)
        if(type==='right'){
          setState((pre)=> state===2? 0: pre+1)
          console.log(state)

        }
        else{
          setState((pre)=>  state===0? 2: pre-1)
          console.log(state)

        }
      }
  return (
    <div className='banner-container'>
        <div className="banner-wrapper">
          {data.map((item)=>  
                <img src={item} alt="" className='banner-img' 
                style={{transform:`translateX(${-100 * state}vw)`,transition:'all 2s ease'}}
                key={item}/>
          )}
    
        </div>
        <div className="icons">
          <div className="icon" onClick={()=>sliderFunc("left")}><KeyboardArrowLeftIcon/></div>
          <div className="icon" onClick={()=>sliderFunc("right")}><ChevronRightIcon/></div>
        </div>
    </div>
  )
}

export default Banner