import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import MapStateModalX from '../Components/Modals/Map/MapStateModalX';
import { motion } from 'framer-motion';

const MyPageMap = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <MapStateModalX />
      <Footer />
    </motion.div>
  );
};

export default MyPageMap;
