"use client"
import React from 'react';

interface ShoppingCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ name, price, image }) => {
  return (
    <div className="w-60 h-80 bg-gradient-to-r from-pink-100 to-sky-100 p-3 flex flex-col gap-1 rounded-br-3xl">
      <div 
        className="duration-500 justify-items-center h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600 hover:contrast-100" 
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl text-black font-bold">{name}</span>
          </div>
          <span className="font-bold text-red-600">{price}</span>
        </div>
        <button className="hover:bg-sky-700 text-white-50 bg-gradient-to-br from-[#F97794] to-[#623AA2] py-2 rounded-br-xl">Add to cart</button>
      </div>
    </div>
  );
}

export default ShoppingCard;
