import React from 'react'
import Navebar from '../Components/Navebar'
import Books from '../Components/Books'
import Footer from '../Components/Footer'

function Book() {
  return (
    <>
   
     <div className='min-h-screen'>
     <Navebar/>
     <Books/>
     <Footer/>
    </div>
    </>
  )
}

export default Book
