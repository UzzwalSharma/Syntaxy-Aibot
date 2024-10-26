import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const videoData = [
 {
    id: 3,
    src: "https://www.youtube.com/embed/_TVnM9dmUSk",
    title: "Our Latest Additions",
  },
  
  ,{
  id: 2,
  src: "https://www.youtube.com/embed/_fuimO6ErKI",
  title: "See Our Features",
},
 {
  id: 3,
  src: "https://www.youtube.com/embed/89IY8JAozO8",
  title: "How We are better Than GPT",
}

  // Add more video objects as needed
];

const VideoItem = ({ src, title }) => {
  const controls = useAnimation();
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { duration: 1, ease: "easeOut" },
            });
          } else {
            controls.start({
              opacity: 0,
              x: -200,
              scale: 0.8,
              transition: { duration: 0.5 },
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={videoRef}
      className="relative w-full max-w-4xl mx-auto mb-8"
      initial={{ opacity: 0, x: -200, scale: 0.8 }}  // Start off-screen with smaller size
      animate={controls}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <iframe
        width="100%"
        height="400"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </motion.div>
  );
};

const Demovideo = () => {
  return (
    <div className="py-12 flex flex-col items-center">
      {videoData.map(video => (
        <VideoItem key={video.id} src={video.src} title={video.title} />
      ))}
      <h2 className="text-lg text-gray-600 mb-8">
        See how our BOT can enhance and upskill you.
      </h2>
    </div>
  );
};

export default Demovideo;
