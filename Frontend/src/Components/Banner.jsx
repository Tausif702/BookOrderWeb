import React from 'react';
import banner from "../../public/images/banner.png";

function Banner() {
  return (
    <>
      <div className='max-w-screen-2x1 container max-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'> 
          <div className='space-y-12'> 
            <h1 className='text-3xl font-bold'> Hello, welcome here to learn something <span className='text-blue-500'>new every day!!!</span></h1>
            <p className='text-x1'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged
            </p>
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow " placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-primary mt-6 dark:bg-black dark:text-white dark:border-white">Subscribe</button>
        </div>

        <div className='w-full order-1 md:w-1/2 md:mt-32 '>
          <img src={banner} alt='Image' className='w-89 h-89' />
        </div>
      </div>

      <div className='max-w-screen-2x1 container max-auto md:px-20 px-4 mb-7'>
        <h1 className='font-bold text-16 text-xl pb-2'>Free Offered Books</h1>
        <p>This is my first website to make a UI for development.</p>
      </div>
    </>
  );
}

export default Banner;
