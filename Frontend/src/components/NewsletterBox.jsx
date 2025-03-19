import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
<p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>      
<p className='text-gray mt-3'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nulla!
</p>

<form>
    <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
    <button type= 'submit' className='bg-black text-white text-x'>SUBSCRIBE</button>
</form>
    </div>
  )
}

export default NewsletterBox
