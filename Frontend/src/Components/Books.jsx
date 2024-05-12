import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom'

function Books() {
  return (
    <>
      <div className='max-w-screen-2x1 containwe max-auto py-36 md:px-20 px-4s '>
          <div className=' items-center justify-center text-center '>
             <h1 className="text-2xl  md:text-4xl">We're delighted to have you{" "}<span className='text-pink-500'>Here!!!</span></h1>
             <p className='mt-5 p-20 md:p-1'>If you need a small amount of lorem ipsum, you can copy and paste into your file from this passage:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. If you need a small amount of lorem ipsum, you can copy and paste into your file from this passage:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to='/'>
            <button className='btn mt-16 bg-pink-500 text-white hover:bg-pink-700 hover:scale-105'>Back</button>
            </Link>
          </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-5'>
          {
            list.map((item)=>(
              <Card key={item.id} item={item}/>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Books
