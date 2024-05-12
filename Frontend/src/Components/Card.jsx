import React from 'react'
import Freebook from './Freebook'


function Card({ item }) {
console.log(item);
  return (
    <div className="card-container p-2  ">
      <div className="card w-90 bg-base-100 shadow-xl hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
        <figure><img src={item.image} alt="Books" /></figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary ">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-pink-500">${item.price}</div>
            <div className="cursor-pointer hover:bg-pink-500 hover:text-white hover:p-1 badge badge-outline hover:border-black">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;