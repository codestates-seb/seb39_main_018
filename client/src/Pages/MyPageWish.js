import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import MypageWishMain from '../Components/MyInfo/MypageWishMain';
import { motion } from 'framer-motion';

const MyPageWish = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <MypageWishMain />
      <Footer />
    </motion.div>
  );
};

export default MyPageWish;
