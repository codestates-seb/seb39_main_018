import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import MypageSellMain from '../Components/MyInfo/MypageSellMain';
import { motion } from 'framer-motion';

const MyPageSell = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <MypageSellMain />
      <Footer />
    </motion.div>
  );
};

export default MyPageSell;
