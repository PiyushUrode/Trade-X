import {useEffect} from 'react'
import "../Style/Securetrend.css"
import customimage1 from "../image/gold1.jpg"
import customimage2 from "../image/gold2.jpg"
import customimage3 from "../image/img2.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const SecureTrend = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 }); // Initialize AOS with duration of 2 seconds
  }, []);
  return (
    <>
      <div className='securetrend'  data-aos="fade-up" >

        <h1 className='securetrend-h1 ' >Secure <span  className="text-green-800">Trends </span> </h1>
      </div>
      <div className='Customization '  data-aos="fade-up" >
        <div className='Customization-a'  >

          <img src={customimage1} className=' ' alt="/" />
        </div>
        <div className='Customization-b'  >
          <h1>Easy Customization</h1>
          <p>Tradexpro Exchange is a complete crypto coins exchange platform developed with Laravel. It works via coin payment. There is no need for any personal node, it will connect with a coin payment merchant account. Our system is 100% secure and dynamic. It supports all crypto currency wallets including Coin Payment, Deposit, Withdrawal, Referral system, and whatever you need.</p>
          <button className="custom-btn btn-16">Read More</button>
        </div>
      </div>








      {/* customization-b */}

      <div className='Customization-2'   data-aos="fade-up">

        <div className='Customization-b'>
          <h1>Easy Customization</h1>
          <p>Tradexpro Exchange is a complete crypto coins exchange platform developed with Laravel. It works via coin payment. There is no need for any personal node, it will connect with a coin payment merchant account. Our system is 100% secure and dynamic. It supports all crypto currency wallets including Coin Payment, Deposit, Withdrawal, Referral system, and whatever you need.</p>
          <button className="custom-btn btn-16">Read More</button>
        </div>

        <div className='Customization-a'>
          <img src={customimage2} className=' ' alt="/" />
        </div>
      </div>

    </>
  )
}

export default SecureTrend