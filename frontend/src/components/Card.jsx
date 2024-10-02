import React from 'react';

function Card({ item }) { // Destructure the item prop here
  return (
    <>
      <div>
        <div className="card bg-base-100 w-45 h-30 bg-white shadow-xl mx-5 my-3 color hover:scale-105 duration-200 dark:text-black ">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border 2xl hover:bg-pink-500 hover:text-white duration-50">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
