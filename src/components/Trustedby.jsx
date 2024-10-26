import React from 'react';
import { motion } from 'framer-motion';

const Trustedby = () => {
 
    const brands = [
      { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
      { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
      { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
      // { name: 'youtube', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/youtube_logo.svg' },
      { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
      { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
      
    ];
    

  return (
    <div className="bg-gray-600 py-12 overflow-hidden " style={{height:"400px"}}>
      
       
          
      <h2 className="text-center text-3xl md:text-4xl font-semibold font-poppins text-gray-200 mb-10 tracking-wide shadow-sm">
  We have been <span className="text-blue-600">Trusted By</span>
</h2>

         
     

      <div className="relative flex overflow-x-hidden">
        {/* Scroll animation using Framer Motion */}
        <motion.div
          className="flex gap-8 mt-12"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'linear',
          }}
        >
          {brands.map((brand, index) => (
            <div key={index} className="p-4 " >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 w-auto   transition duration-300 ease-in-out"
              />
            </div>
          ))}
          {/* Duplicate logos for a seamless loop */}
          {brands.map((brand, index) => (
            <div key={index} className="p-4">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 w-auto   transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Trustedby;
