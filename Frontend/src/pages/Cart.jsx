import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { assets } from '../assets/frontend_assets/assets.js'; 
import CartTotal from "../components/CartTotal"; 


const Cart = () => {
  const { products, currency, cartItems, updateQuantity ,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      {/* Cart Header */}
      <div className='text-2xl mb-3'>
        <h1 className='font-bold text-3xl'>YOUR CART</h1>
      </div>

      {/* Cart Items */}
      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                {/* Product Image & Name */}
                <div className='flex items-start gap-6'>
                  {productData && productData.image ? (
                    <img className="w-16 sm:w-28" src={productData.image[0]} alt={productData.name} />
                  ) : (
                    <p className='text-red-500'>Image Not Found</p>
                  )}

                  {/* Product Details */}
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData ? productData.name : 'Product Not Found'}</p>
                    <div className='flex items-center gap-5 mt-2'> 
                      <p>{currency}{productData ? productData.price : 'N/A'}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>

                {/* Quantity Input */}
                <input
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item._id, item.size, parseInt(e.target.value))}
                />

                {/* Delete Button */}
                <img  className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="Remove Item" onClick={() => updateQuantity(item._id, item.size, 0)} />
              </div>
            );
          })
        ) : (
          <p className='text-gray-500 text-center py-6'>Your cart is empty.</p>
        )}
      </div>
    <div className='flex justify-end my-20'>
   <div className='w-full sm:w-[450px]'>
<CartTotal />
<div className='w-full text-end'>
<button onClick={() =>navigate('/place-order')}className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
</div>
   </div>
    </div>
    
    </div>
  );
};

export default Cart;
