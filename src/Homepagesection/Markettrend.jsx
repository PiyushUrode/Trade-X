import {useEffect} from 'react'
import "../Style/Markettrend.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../image/gold2.jpg"
import img2 from "../image/red1.jpg"
import img3 from "../image/red2.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation , Pagination } from 'swiper/modules';
import TradingTable from '../Component/Tradingtable';


const Markettrend = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 }); // Initialize AOS with duration of 2 seconds
      }, []);

    const tradingData1 = [
        { market: 'IBPO', lastPrice: 100, change: 200 },
        { market: 'SBI', lastPrice: 100, change: -100 },
        { market: 'NGFT', lastPrice: 250, change: 200 },
        { market: 'RTS', lastPrice: 80, change: -250 },
      ];
    
      const tradingData2 = [
        { market: 'ABC', lastPrice: 150, change: 250 },
        { market: 'DEF', lastPrice: 120, change: 220 },
      ];


  return (
<>
<div className=''>
<Swiper
    navigation={true} // Enables navigation arrows
    pagination={{
        dynamicBullets: true,
        clickable: true,
    }}
    loop={true} // Enables infinite scrolling
    slidesPerView={2} // Default to 2 slides per view on larger screens
   
    modules={[Pagination, Navigation]}
>
    <SwiperSlide>
        <div className="flex justify-center">
            <div id="card1" className="flex gap-5  my-10  justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-12 phone:mx-5 p-5 phone:flex-row-reverse">
                <div className="max-w-[60%] text-left flex flex-col justify-center phone:max-w-[100%] phone:text-center phone:items-center space-y-5">
                    <h2 className="text-3xl tablet:text-xl text-left font-bold  "> Trade Crypto with Unmatched Simplicity </h2>
                    {/* <p className="text-base text-left  pl-0 tablet:text-sm" > The Best Cryptocurrency Exchange</p> */}
                    <button className="custom-btn btn-16">Read More</button>
                </div>
                <div className="overflow-hidden rounded-3xl">
                    <img src={img2} className="h-full w-[10rem] phone:w-[5rem] object-cover" alt="re1" />
                </div>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="flex justify-center  ">
            <div id="card1" className="flex gap-5 my-10   justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-12 phone:mx-5 p-5 phone:flex-row-reverse">
                <div className="max-w-[60%] text-left flex flex-col justify-center phone:max-w-[100%] phone:text-center phone:items-center space-y-5">
                    <h2 className="text-3xl tablet:text-xl font-bold">Redefining Crypto Trading Easy & Reliable </h2>
                    {/* <p className="text-base pl-0  tablet:text-sm">The Best Cryptocurrency Exchange.</p> */}
                    <button className="custom-btn btn-16">Read More</button>
                </div>
                <div className="overflow-hidden rounded-3xl">
                    <img src={img1} className="h-full w-[10rem] phone:w-[5rem] object-cover" alt="re1" />
                </div>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="flex justify-center">
            <div id="card1" className="flex gap-5 my-10  justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-12 phone:mx-5 p-5 phone:flex-row-reverse">
                <div className="max-w-[60%] text-left flex flex-col justify-center phone:max-w-[100%] phone:text-center phone:items-center space-y-5">
                    <h2 className="text-3xl tablet:text-xl font-bold"> Cryptocurrency Trading at Your Fingertips </h2>
                    {/* <p className="text-base pl-0  tablet:text-sm">The Best Cryptocurrency Exchange.</p> */}
                    <button className="custom-btn btn-16">Read More</button>
                </div>
                <div className="overflow-hidden rounded-3xl">
                    <img src={img3} className="h-full w-[10rem] phone:w-[5rem] object-cover" alt="re1" />
                </div>
            </div>
        </div>
    </SwiperSlide>
</Swiper>

</div>

<div className='Mt'  data-aos="fade-up" >
<h1>Market <span className="text-green-800">Trends</span></h1>

    <button className="custom-btn btn-16">Read More</button>
</div>

<div className='pt-14 pb-14 markettrading'    data-aos="fade-up">
    

      <TradingTable data={tradingData1} />
      
    </div>



</>
  )
}

export default Markettrend