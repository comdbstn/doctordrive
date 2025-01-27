import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const handleReservation = () => {
    window.open('https://forms.gle/qex4Mb8jmcRqUUFV9', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-primary/10 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-white"
            style={{ translateX: 0 }}
          >
            닥터드라이브
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-8"
            style={{ translateX: 0 }}
          >
            <a href="#service" className="text-gray-300 hover:text-primary transition-colors">서비스 소개</a>
            <a href="#benefits" className="text-gray-300 hover:text-primary transition-colors">혜택 안내</a>
            <button 
              onClick={handleReservation}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              사전예약
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 