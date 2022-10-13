import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import Myinfo from '../Components/MyInfo/Myinfo';
import { motion } from 'framer-motion';

const MyPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <Myinfo />
      <Footer />
    </motion.div>
  );
};

export default MyPage;
