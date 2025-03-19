import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">FOREVER</h2>
            <p className="text-gray-400 text-sm">Quality Products, Exceptional Service.</p>
          </div>

          
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">Facebook</a>
            <a href="#" className="hover:text-gray-400 transition">Twitter</a>
            <a href="#" className="hover:text-gray-400 transition">Instagram</a>
          </div>
        </div>

        
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} FOREVER. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
