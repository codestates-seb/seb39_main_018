import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import WriteMain from '../Components/Write/WriteMain';
import { motion } from 'framer-motion';

const WritePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <WriteMain />
      <Footer />
    </motion.div>
  );
};

export default WritePage;
