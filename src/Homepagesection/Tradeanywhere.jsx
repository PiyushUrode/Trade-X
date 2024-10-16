import {useEffect} from 'react'
import image1 from "../image/Newfolder/1-darka.png"
import imagea from "../image/Newfolder/1b.png"
import imageb from "../image/Newfolder/41.png"
import imagec from "../image/Newfolder/asa.png"
import imaged from "../image/Newfolder/32.png"
import Faq from './Faq'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import "../Style/Trade.css"
const Tradeanywhere = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 }); // Initialize AOS with duration of 2 seconds
  }, []);
  return (
    <>
    <div className='Trade'   >
      <h1 data-aos="fade-up" >Get in touch.  <span className="text-green-800"> Stay in touch </span></h1>
      <div className='Trademain' data-aos="fade-up"   >
        <div className='Trademain-A'> 
          <img src={imagea} className='Tradeimg' alt="/" />
          <h2>Carrer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus distinctio nam labore ipsam, quasi voluptates </p>
        </div>

        <div className='Trademain-A'> 
          <img src={imageb} className='Tradeimg'   alt="/" />
          <h2>Community</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus distinctio nam labore ipsam, quasi voluptates </p>
        </div>

        <div className='Trademain-A'> 
          <img src={imagec}  className='Tradeimg'  alt="/" />
          <h2>Blog</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus distinctio nam labore ipsam, quasi voluptates </p>
        </div>


        <div className='Trademain-A'> 
          <img src={imaged}  className='Tradeimg'  alt="/" />
          <h2>Support</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus distinctio nam labore ipsam, quasi voluptates </p>
        </div>


      </div>
      
    </div>
 
 <div className='Faq-main' data-aos="fade-up"  >
  <Faq/>
 </div>
    </>
  )
}

export default Tradeanywhere