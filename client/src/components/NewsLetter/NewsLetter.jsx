import React from 'react'
import './newsletter.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <div className="wrapper">
                <h2>BE IN TOUCH WITH US:</h2>
                <div className="searcbar">
                    <input type="text" className='searchinput' placeholder='Enter your Email...' />
                    <button>SUBMIT</button>
                </div>
                <div className="icons">
                    <div className="icon"><InstagramIcon/></div>
                    <div className="icon"><FacebookIcon/></div>
                    <div className="icon"><TwitterIcon/></div>
                </div>

            </div>
        </div>
    )
}

export default NewsLetter