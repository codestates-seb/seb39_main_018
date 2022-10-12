import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import MypageBuyMain from '../Components/MyInfo/MypageBuyMain';
import { motion } from 'framer-motion';

const MyPageBuy = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <MypageBuyMain />
      <Footer />
    </motion.div>
  );
};

export default MyPageBuy;
