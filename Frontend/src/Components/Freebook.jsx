import React from 'react'
import freebook from '../../public/images/freebook.jpg'
import list from "../../public/list.json"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';


function Freebook() {


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 


  const filterData=list.filter((data)=>data.category==="Free")
  // console.log(filterData)
  return (
    <>
    <div className='max-w-screen-2x1 containwe max-auto md:px-20 px-2'>

  
    <div className='mt-12 grid grid-cols-1 md:grid-cols-5'>
  
    {filterData.map((item)=>(
    <Card item={item} key={item.id}/>
    ))}
     
    </div>
    </div>
    </>
  );
};

export default Freebook
