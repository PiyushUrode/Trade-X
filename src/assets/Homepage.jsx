import React from 'react'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Header from "../Component/Header"
import Markettrend from '../Homepagesection/Markettrend'
import SecureTrend from "../Homepagesection/SecureTrend"
import Tradeanywhere from "../Homepagesection/Tradeanywhere"
// import CryptoNews from "../Homepagesection/CryptoNews"
import Footer from '../Component/Footer'
const Homepage = () => {
    // Function to scroll to the Card element
    const location1 = useLocation();
    useEffect(() => {
      const scrollToElement = () => {
        const { search } = location1;
        const params = new URLSearchParams(search);
        const scrollToId = params.get('');
  
        if (scrollToId) {
          const element = document.getElementById(scrollToId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
  
      scrollToElement();
    }, [location1]);
  
  return (
<>

<Header/>
<Markettrend/>
<SecureTrend/>
<Tradeanywhere/>
{/* <CryptoNews/> */}
<Footer/>


</>
  )
}

export default Homepage