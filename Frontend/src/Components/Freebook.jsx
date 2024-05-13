import React, { useEffect, useState } from 'react'
import freebook from '../../public/images/freebook.jpg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import axios from 'axios';


function Freebook() {
  const [Book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async ()=>{
      try {
       const res  = await axios.get("http://localhost:4007/book");
       console.log("MyData",res.data);
       setBook(res.data.filter((data)=>data.category==="Free"))


      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])
  // console.log(filterData)
  return (
    <>
    <div className='max-w-screen-2x1 containwe max-auto md:px-20 px-2'>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-5'>
  
    {Book.map((item)=>(
    <Card item={item} key={item.id}/>
    ))}
     
    </div>
    </div>
    </>
  );
};

export default Freebook
