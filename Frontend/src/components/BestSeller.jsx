import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className='my-16 px-4'>
      <div className='text-center text-4xl font-semibold py-8'>
        <Title text1="BEST" text2="SELLERS" />
        <p className='w-3/4 mx-auto text-sm md:text-base text-gray-600 leading-relaxed'>
          Explore our top-selling products loved by our customers.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {bestSeller.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
