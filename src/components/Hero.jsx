import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "/src/components/Hero.css";

function Hero() {
  return (
    <div className="w-full relative" style={{ height: "75vh" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full object-cover h-full"
      >
        <source src="/uhd_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Animated Heading with Floating Effect */}
        <motion.h1
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", bounce: 0.4 }}
          whileHover={{ y: -10 }} // Floating effect on hover
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
        >
          Unleash the Power of AI: Smarter Conversations Await!!
        </motion.h1>

        {/* Subheading with Spring Bounce Animation */}
        <motion.p
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.4,
            type: "spring",
            stiffness: 80,
          }}
          whileHover={{ scale: 1.05 }} // Slight scaling on hover
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8"
        >
          AI-powered chatbot by Syntax Squad.
        </motion.p>

        {/* CTA Button with Inertia and Bounce using Link */}
        <Link to="/Syntax's bot">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: 0.2,
            }}
            whileTap={{
              scale: 0.9,
              transition: { type: "inertia", velocity: 50 },
            }}
            className="text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-transform duration-100 ease-in-out"
          >
            <div className="container">
              <div className="btn">
                <a>Get started</a>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
