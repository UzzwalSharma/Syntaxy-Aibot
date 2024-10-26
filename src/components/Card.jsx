import React from 'react';
import * as motion from 'framer-motion/client';
import { useMediaQuery } from 'react-responsive';

const Card = () => {
  const cards = [
    {
      title: 'Fast Performance',
      description: 'Experience blazing fast speeds and seamless user interaction.',
      borderColor: 'border-blue-500',
      xPos: 0,
      yPos: 250,
    },
    {
      title: 'Secure Payments',
      description: 'Your payments are safe with our highly secure gateways.',
      borderColor: 'border-green-500',
      xPos: 0,
      yPos: -250,
    },
    {
      title: '24/7 Support',
      description: 'We are here to help, anytime you need.',
      borderColor: 'border-red-500',
      xPos: -250,
      yPos: 0,
    },
    {
      title: 'Customizable Design',
      description: 'Easily adjust layouts and colors to suit your needs.',
      borderColor: 'border-purple-500',
      xPos: 240,
      yPos: 0,
    },
  ];
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <div className="relative flex flex-col items-center py-12 space-y-4">
      {/* Circle for Features Title */}
      <div
  className="absolute w-44 h-44 rounded-full flex items-center justify-center text-xl font-bold text-gray-800 hover:scale-105"
  style={{
    textAlign: "center",
    marginTop: "50px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2), 0 15px 25px rgba(0, 0, 0, 0.19)",
    background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Transition for smooth effect
  }}
>
  <div className="hover:scale-105 hover:shadow-xl transition-transform duration-300">
    Key Highlights
  </div>
</div>



      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ x: 0, y: 0 }}
          whileInView={
            isSmallScreen
              ? { opacity: 1, scale: 1 } // Fade in and scale up on small screens
              : { x: card.xPos, y: card.yPos } // Custom animation on larger screens
          }
          transition={{ duration: 0.75 }}
          className={`absolute border-2 ${card.borderColor} rounded-xl p-6 flex flex-col items-center space-y-4 w-80 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
          viewport={{ once: false }}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 shadow-inner">
            <span className="text-4xl text-blue-500">⚡</span> {/* Add relevant icons if needed */}
          </div>
          <h2 className="text-center text-2xl font-semibold text-gray-800">{card.title}</h2>
          <p className="text-sm text-gray-500 text-center">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
