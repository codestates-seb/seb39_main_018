import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import MypageProfileMain from '../Components/MyInfo/MypageProfileMain';
import { motion } from 'framer-motion';

const MyPageProfile = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <MypageProfileMain />
      <Footer />
    </motion.div>
  );
};

export default MyPageProfile;
