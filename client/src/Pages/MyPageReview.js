import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import MypageReviewMain from '../Components/MyInfo/MypageReviewMain';
import { motion } from 'framer-motion';

const MyPageReview = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <MypageReviewMain />
      <Footer />
    </motion.div>
  );
};

export default MyPageReview;
